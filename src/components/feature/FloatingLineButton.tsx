import { useState, useEffect } from 'react';

export default function FloatingLineButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY >= 200);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <a
        href="https://lin.ee/F7dPZLD"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 bg-green-500 text-white font-bold py-4 w-full text-base hover:bg-green-600 transition-colors duration-200"
      >
        <i className="ri-line-line text-2xl"></i>
        LINEで無料相談・ダイエット診断
      </a>
    </div>
  );
}
