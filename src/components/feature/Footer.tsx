
export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-10">
      <div className="px-4">
        {/* リンク */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <a href="/" className="text-sm text-gray-600 hover:text-rose-600 transition-colors duration-200 whitespace-nowrap cursor-pointer">
            ホーム
          </a>
          <a href="/#trainers" className="text-sm text-gray-600 hover:text-rose-600 transition-colors duration-200 whitespace-nowrap cursor-pointer">
            トレーナー紹介
          </a>
          <a href="/#reviews" className="text-sm text-gray-600 hover:text-rose-600 transition-colors duration-200 whitespace-nowrap cursor-pointer">
            ご利用者の声
          </a>
          <a href="/#pricing" className="text-sm text-gray-600 hover:text-rose-600 transition-colors duration-200 whitespace-nowrap cursor-pointer">
            コースと料金
          </a>
        </div>

        {/* SNSリンク */}
        <div className="flex justify-center gap-4 mb-6">
          <a
            href="https://www.instagram.com/taishi_refit_online?igsh=bHlkaGI5eDQ1ODFz&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-rose-500 hover:bg-rose-600 rounded-full flex items-center justify-center transition-colors duration-200 cursor-pointer"
          >
            <i className="ri-instagram-line text-xl text-white"></i>
          </a>
          <a
            href="https://lin.ee/F7dPZLD"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-rose-500 hover:bg-rose-600 rounded-full flex items-center justify-center transition-colors duration-200 cursor-pointer"
          >
            <i className="ri-line-line text-xl text-white"></i>
          </a>
        </div>

        {/* 下部リンク */}
        <div className="border-t border-gray-200 pt-5">
          <div className="flex flex-wrap justify-center gap-4 mb-3">
            <a href="/terms" className="text-xs text-gray-500 hover:text-rose-600 transition-colors duration-200 whitespace-nowrap cursor-pointer">
              注意事項・契約条件等
            </a>
            <a href="/#faq" className="text-xs text-gray-500 hover:text-rose-600 transition-colors duration-200 whitespace-nowrap cursor-pointer">
              よくある質問
            </a>
          </div>
          <div className="text-center text-xs text-gray-500 mb-2">
            <p className="font-medium">株式会社ReFit</p>
            <p>所在地：大阪府大阪市北区</p>
          </div>
          <p className="text-center text-xs text-gray-500">
            Copyright &copy; ReFit Online All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}