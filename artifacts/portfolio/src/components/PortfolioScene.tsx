import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Lightformer } from '@react-three/drei';
import { type MotionValue } from 'framer-motion';
import { Group, MathUtils } from 'three';

interface SceneProps {
  progress: MotionValue<number>;
  active: boolean;
}

function Sculpture({ progress }: Pick<SceneProps, 'progress'>) {
  const sculpture = useRef<Group>(null);
  const pointer = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)');
    const move = (event: PointerEvent) => {
      if (!finePointer.matches) return;
      pointer.current = { x: event.clientX / window.innerWidth - 0.5, y: event.clientY / window.innerHeight - 0.5 };
    };
    window.addEventListener('pointermove', move, { passive: true });
    return () => window.removeEventListener('pointermove', move);
  }, []);

  useFrame(({ clock }, delta) => {
    if (!sculpture.current) return;
    const scroll = progress.get();
    const time = clock.getElapsedTime();
    sculpture.current.rotation.x = MathUtils.damp(sculpture.current.rotation.x, 0.25 + scroll * 1.4 + pointer.current.y * 0.22, 3, delta);
    sculpture.current.rotation.y = MathUtils.damp(sculpture.current.rotation.y, time * 0.075 + scroll * 2.1 + pointer.current.x * 0.4, 3, delta);
    sculpture.current.rotation.z = -0.3 + Math.sin(time * 0.22) * 0.08;
    sculpture.current.position.y = Math.sin(time * 0.55) * 0.07 - scroll * 0.2;
  });

  return (
    <group ref={sculpture} rotation={[0.25, 0.1, -0.3]}>
      <mesh>
        <torusKnotGeometry args={[1.18, 0.35, 160, 24, 2, 3]} />
        <meshStandardMaterial color="#d2ab60" metalness={1} roughness={0.23} envMapIntensity={1.4} />
      </mesh>
      <mesh rotation={[0.65, -0.2, 0]}>
        <torusGeometry args={[2.05, 0.012, 8, 100]} />
        <meshStandardMaterial color="#ac8547" metalness={0.8} roughness={0.4} />
      </mesh>
      <mesh position={[1.95, -0.55, 0.3]}>
        <sphereGeometry args={[0.11, 20, 20]} />
        <meshStandardMaterial color="#b38d48" metalness={1} roughness={0.2} />
      </mesh>
    </group>
  );
}

export default function PortfolioScene({ progress, active }: SceneProps) {
  const [visible, setVisible] = useState(!document.hidden);
  const [lost, setLost] = useState(false);
  useEffect(() => {
    const update = () => setVisible(!document.hidden);
    document.addEventListener('visibilitychange', update);
    return () => document.removeEventListener('visibilitychange', update);
  }, []);
  if (lost) throw new Error('3D graphics unavailable');

  return (
    <Canvas
      camera={{ position: [0, 0, 6.8], fov: 43 }}
      dpr={[1, 1.5]}
      frameloop={active && visible ? 'always' : 'never'}
      gl={{ alpha: true, antialias: true, powerPreference: 'low-power' }}
      onCreated={({ gl }) => {
        gl.setClearColor('#f7f3eb', 0);
        gl.domElement.addEventListener('webglcontextlost', () => setLost(true), { once: true });
      }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[4, 6, 5]} intensity={3} color="#fff6dd" />
      <Sculpture progress={progress} />
      <Environment resolution={128}>
        <Lightformer intensity={3} position={[0, 5, -3]} scale={[10, 5, 1]} rotation={[Math.PI / 2, 0, 0]} />
        <Lightformer intensity={5} position={[-5, 1, 3]} scale={[3, 8, 1]} rotation={[0, Math.PI / 3, 0]} />
        <Lightformer intensity={3} position={[5, 1, 2]} scale={[2, 8, 1]} rotation={[0, -Math.PI / 3, 0]} />
        <Lightformer intensity={1} position={[0, -4, 3]} scale={[8, 2, 1]} color="#d8b16a" />
      </Environment>
    </Canvas>
  );
}
