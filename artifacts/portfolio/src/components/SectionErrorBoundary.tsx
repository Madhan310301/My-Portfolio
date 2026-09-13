import React, { Component, ErrorInfo, ReactNode } from 'react';
import { RefreshCw, AlertTriangle } from 'lucide-react';

interface Props {
  children: ReactNode;
  sectionName?: string;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class SectionErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    if (process.env.NODE_ENV !== 'production') {
      console.error(`SectionErrorBoundary [${this.props.sectionName || 'Unnamed'}]:`, error, errorInfo);
    }
  }

  private handleRetry = () => {
    this.setState({ hasError: false, error: null });
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="py-16 px-6 container mx-auto">
          <div className="max-w-xl mx-auto hud-bracket bg-[#FFFDF8] border border-[#C9972E]/40 rounded-xl p-8 shadow-[0_8px_32px_rgba(120,90,40,0.08)] text-center">
            <div className="w-12 h-12 rounded-full bg-[#C9972E]/10 border border-[#C9972E]/30 flex items-center justify-center mx-auto mb-4 text-[#C9972E]">
              <AlertTriangle size={24} />
            </div>

            <div className="font-mono text-xs text-[#C9972E] tracking-widest uppercase font-semibold mb-2">
              // TELEMETRY_DISRUPTION // {this.props.sectionName ? this.props.sectionName.toUpperCase() : 'SUBSYSTEM'}
            </div>

            <h3 className="font-display font-bold text-2xl text-[#241B10] mb-3">
              Section Temporarily Offline
            </h3>

            <p className="text-sm text-[#7A6B55] leading-relaxed mb-6 font-sans">
              This module encountered an unexpected telemetry fault. All other mission control systems remain fully operational.
            </p>

            <button
              onClick={this.handleRetry}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#D9A94A] to-[#B9821F] text-white text-xs font-bold font-mono rounded-full hover:brightness-105 transition-all shadow-md cursor-pointer"
            >
              <RefreshCw size={14} />
              <span>REINITIALIZE MODULE</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default SectionErrorBoundary;
