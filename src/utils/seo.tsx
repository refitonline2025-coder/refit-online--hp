import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogType?: string;
  schema?: object;
}

export function useSEO({
  title,
  description,
  keywords,
  canonical,
  ogType = 'website',
  schema,
}: SEOProps) {
  useEffect(() => {
    const siteUrl = import.meta.env.VITE_SITE_URL || 'https://example.com';
    
    // Update title
    if (title) {
      document.title = title;
    }

    // Update meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    if (description) {
      updateMetaTag('description', description);
      updateMetaTag('og:description', description, true);
      updateMetaTag('twitter:description', description);
    }

    if (keywords) {
      updateMetaTag('keywords', keywords);
    }

    if (title) {
      updateMetaTag('og:title', title, true);
      updateMetaTag('twitter:title', title);
    }

    if (ogType) {
      updateMetaTag('og:type', ogType, true);
    }

    // Update canonical
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', `${siteUrl}${canonical}`);
      updateMetaTag('og:url', `${siteUrl}${canonical}`, true);
    }

    // Update last-modified
    const today = new Date().toISOString().split('T')[0];
    updateMetaTag('last-modified', today);

    // Add Schema.org JSON-LD
    if (schema) {
      let script = document.querySelector('script[type="application/ld+json"]');
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      
      const schemaWithUrl = JSON.parse(JSON.stringify(schema));
      const replaceUrl = (obj: any): any => {
        if (typeof obj === 'string' && obj.includes('VITE_SITE_URL')) {
          return obj.replace('VITE_SITE_URL', siteUrl);
        }
        if (typeof obj === 'object' && obj !== null) {
          for (const key in obj) {
            obj[key] = replaceUrl(obj[key]);
          }
        }
        return obj;
      };
      
      script.textContent = JSON.stringify(replaceUrl(schemaWithUrl));
    }

    return () => {
      // Cleanup schema on unmount
      if (schema) {
        const script = document.querySelector('script[type="application/ld+json"]');
        if (script) {
          script.remove();
        }
      }
    };
  }, [title, description, keywords, canonical, ogType, schema]);
}
