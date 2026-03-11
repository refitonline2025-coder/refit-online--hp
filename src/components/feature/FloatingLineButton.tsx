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
    <div className="fixed bottom-6 right-4 flex flex-col gap-3 z-50">
      <a
        href="https://refit-online.onrender.com"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full shadow-lg flex items-center justify-center bg-white border-2 border-[#F0A898] text-[#E8725A] hover:shadow-xl transition-all duration-200"
      >
        <i className="ri-robot-line text-2xl"></i>
      </a>
      <a
        href="https://lin.ee/F7dPZLD"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full shadow-lg flex items-center justify-center bg-[#06C755] text-white hover:bg-[#05b04c] transition-all duration-200"
      >
        <i className="ri-line-line text-2xl"></i>
      </a>
    </div>
  );
}
