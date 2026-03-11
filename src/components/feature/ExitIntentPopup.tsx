
import { useState, useEffect } from 'react';

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const shown = sessionStorage.getItem('exitIntentShown');
    if (shown) {
      setHasShown(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 10 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem('exitIntentShown', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown]);

  const handleClose = () => setIsVisible(false);

  const handleLineClick = () => {
    window.open('https://lin.ee/F7dPZLD', '_blank');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* オーバーレイ */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      ></div>

      {/* ポップアップ */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden animate-[scale-in_0.3s_ease-out]">
        {/* 閉じるボタン */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors z-10 cursor-pointer"
          aria-label="閉じる"
        >
          <i className="ri-close-line text-2xl"></i>
        </button>

        {/* ヘッダー */}
        <div className="bg-gray-50 border-b border-gray-100 px-8 pt-8 pb-6 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-[#FDF4F2] rounded-full mb-4">
            <i className="ri-gift-2-line text-3xl text-[#E8725A]"></i>
          </div>
          <p className="text-xs font-semibold tracking-widest text-[#E8725A] uppercase mb-2">Special Offer</p>
          <h3 className="text-xl font-bold text-gray-900 mb-1">
            ちょっと待ってください！
          </h3>
          <p className="text-sm text-gray-500">
            今だけの特別キャンペーン実施中
          </p>
        </div>

        {/* コンテンツ */}
        <div className="px-8 py-6">
          {/* 特典ハイライト */}
          <div className="bg-[#FDF4F2] border border-[#F0A898] rounded-xl px-6 py-4 mb-5 text-center">
            <p className="text-xs text-[#E8725A] font-semibold mb-1 tracking-wide">今なら</p>
            <p className="text-gray-900 font-bold text-lg leading-snug">
              入会金 <span className="line-through text-gray-400 font-normal text-base">¥33,000</span>
              <span className="text-[#E8725A] text-3xl font-extrabold ml-2">¥0</span>
            </p>
          </div>

          {/* チェックリスト */}
          <ul className="space-y-2 mb-6">
            {[
              '専属トレーナーがマンツーマンサポート',
              '遺伝子検査で科学的アプローチ',
              '月額¥6,600〜始められる',
            ].map((text) => (
              <li key={text} className="flex items-center gap-2 text-sm text-gray-700">
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-checkbox-circle-fill text-[#E8725A] text-base"></i>
                </div>
                <span>{text}</span>
              </li>
            ))}
          </ul>

          {/* CTAボタン */}
          <button
            onClick={handleLineClick}
            className="w-full bg-[#E8725A] hover:bg-[#D4604A] text-white font-bold py-3.5 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 mb-3 whitespace-nowrap cursor-pointer"
          >
            <i className="ri-line-fill text-xl"></i>
            <span>LINEで無料相談する</span>
          </button>

          <p className="text-center text-xs text-gray-400">
            ※キャンペーンは予告なく終了する場合があります
          </p>
        </div>
      </div>

      <style>{`
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.92); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
