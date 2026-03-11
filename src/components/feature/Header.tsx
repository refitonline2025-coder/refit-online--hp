import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="w-full px-5 py-3 flex items-center gap-3">
        {/* 一番左：ハンバーガーボタン */}
        <div className="relative">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-all duration-200"
          >
            <i className={`${isMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl text-gray-800`}></i>
          </button>

          {/* モバイルメニュー */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-lg py-4 px-6 z-50 min-w-[240px] w-max">
              <nav className="flex flex-col gap-4">
                <a href="/#trainers" onClick={closeMenu} className="text-gray-700 hover:text-teal-600 transition-colors duration-200 cursor-pointer whitespace-nowrap">
                  トレーナー紹介
                </a>
                <a href="/#reviews" onClick={closeMenu} className="text-gray-700 hover:text-teal-600 transition-colors duration-200 cursor-pointer whitespace-nowrap">
                  ご利用者の声
                </a>
                <a href="/#pricing" onClick={closeMenu} className="text-gray-700 hover:text-teal-600 transition-colors duration-200 cursor-pointer whitespace-nowrap">
                  料金プラン
                </a>
                <a href="/#faq" onClick={closeMenu} className="text-gray-700 hover:text-teal-600 transition-colors duration-200 cursor-pointer whitespace-nowrap">
                  よくある質問
                </a>
                <a href="/terms" onClick={closeMenu} className="text-gray-700 hover:text-teal-600 transition-colors duration-200 cursor-pointer whitespace-nowrap">
                  注意事項・契約条件等
                </a>
              </nav>
            </div>
          )}
        </div>

        {/* ハンバーガーの右：ブランド名 */}
        <span className="text-black font-bold text-2xl tracking-tight whitespace-nowrap">ReFit Online</span>
      </div>
    </header>
  );
}
