import { useEffect } from 'react';

interface PageSEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogImage?: string;
  type?: 'website' | 'article';
}

const DEFAULT_TITLE = 'Madhan Kumar T | Full-Stack Developer & AI Systems Engineer';
const DEFAULT_DESC = 'Portfolio of Madhan Kumar T — Full-Stack Developer, AI Systems Engineer & IoT Builder (BIHER Chennai, 9.5 CGPA). Discover 28+ production projects, healthcare AI diagnostics (MediHelpAI), RAG pipelines, and award-winning hackathon prototypes.';
const SITE_URL = 'https://www.madhankumart.in';

export const usePageSEO = ({
  title,
  description,
  canonicalPath = '',
  ogImage = `${SITE_URL}/logo.png`,
  type = 'website'
}: PageSEOProps) => {
  useEffect(() => {
    document.title = title;

    const setMeta = (nameAttr: 'name' | 'property', key: string, content: string) => {
      let el = document.querySelector(`meta[${nameAttr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(nameAttr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('name', 'description', description);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:type', type);
    setMeta('property', 'og:image', ogImage);
    setMeta('property', 'og:url', `${SITE_URL}${canonicalPath}`);
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', ogImage);

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', `${SITE_URL}${canonicalPath}`);

    return () => {
      document.title = DEFAULT_TITLE;
      setMeta('name', 'description', DEFAULT_DESC);
      setMeta('property', 'og:title', DEFAULT_TITLE);
      setMeta('property', 'og:description', DEFAULT_DESC);
      setMeta('property', 'og:type', 'website');
      setMeta('property', 'og:image', `${SITE_URL}/logo.png`);
      setMeta('property', 'og:url', `${SITE_URL}/`);
      setMeta('name', 'twitter:title', DEFAULT_TITLE);
      setMeta('name', 'twitter:description', DEFAULT_DESC);
      setMeta('name', 'twitter:image', `${SITE_URL}/logo.png`);
      if (canonicalLink) {
        canonicalLink.setAttribute('href', `${SITE_URL}/`);
      }
    };
  }, [title, description, canonicalPath, ogImage, type]);
};
