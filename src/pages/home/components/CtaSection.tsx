
export default function CtaSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#FDF4F2] to-cyan-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* 緊急性の強調 */}
        <div className="inline-flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded-full mb-6 animate-pulse shadow-lg">
          <i className="ri-alarm-warning-line text-xl"></i>
          <span className="font-bold text-sm sm:text-base">3月31日まで！入会金33,000円が今だけ0円</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-4">
          今すぐ30秒ダイエット診断を受けよう
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 sm:mb-8 md:mb-10 px-4 leading-relaxed">
          LINEで簡単な質問に答えるだけ。あなたに最適なプランをご提案します。
        </p>

        {/* 枠数の強調 */}
        <div className="inline-flex items-center gap-3 bg-[#E8725A] text-white px-8 py-3 rounded-full mb-8 shadow-lg">
          <i className="ri-user-heart-line text-2xl"></i>
          <span className="font-bold text-base sm:text-lg">今月の受付枠：残り6名様</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8 px-4">
          <a
            href="https://lin.ee/F7dPZLD"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#E8725A] text-white font-bold px-8 sm:px-10 py-4 sm:py-5 rounded-full hover:bg-[#D4604A] transition-all duration-200 text-base sm:text-lg shadow-xl hover:shadow-2xl cursor-pointer whitespace-nowrap animate-pulse hover:animate-none transform hover:scale-105"
          >
            <i className="ri-chat-1-line text-xl sm:text-2xl"></i>
            LINEで30秒ダイエット診断
          </a>
          <a
            href="#plans"
            className="w-full sm:w-auto bg-white text-gray-800 text-sm sm:text-base md:text-lg font-bold px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg hover:bg-gray-50 transition-all duration-200 border border-gray-300 whitespace-nowrap cursor-pointer shadow-md"
          >
            料金プランを見る
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-[#F0A898] shadow-md">
            <i className="ri-gift-line text-3xl sm:text-4xl text-[#E8725A] mb-2 sm:mb-3"></i>
            <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">入会金0円</div>
            <div className="text-xs sm:text-sm text-gray-600">3月31日まで限定</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-[#F0A898] shadow-md">
            <i className="ri-calendar-check-line text-3xl sm:text-4xl text-[#E8725A] mb-2 sm:mb-3"></i>
            <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">初回相談無料</div>
            <div className="text-xs sm:text-sm text-gray-600">今月お申し込みの方限定</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-[#F0A898] shadow-md">
            <i className="ri-shield-check-line text-3xl sm:text-4xl text-[#E8725A] mb-2 sm:mb-3"></i>
            <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">月10名限定</div>
            <div className="text-xs sm:text-sm text-gray-600">質の高いサポートをお約束</div>
          </div>
        </div>

        {/* LINEの利点を追加 */}
        <div className="mt-10 bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[#F0A898] shadow-md">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">LINEで相談するメリット</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            <div className="flex items-start gap-3">
              <i className="ri-time-line text-2xl text-[#E8725A] flex-shrink-0 mt-1"></i>
              <div>
                <div className="font-bold text-gray-900 mb-1">24時間受付</div>
                <div className="text-sm text-gray-600">いつでも気軽に相談OK</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <i className="ri-question-answer-line text-2xl text-[#E8725A] flex-shrink-0 mt-1"></i>
              <div>
                <div className="font-bold text-gray-900 mb-1">すぐに返信</div>
                <div className="text-sm text-gray-600">営業時間内は迅速対応</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <i className="ri-shield-check-line text-2xl text-[#E8725A] flex-shrink-0 mt-1"></i>
              <div>
                <div className="font-bold text-gray-900 mb-1">無理な勧誘なし</div>
                <div className="text-sm text-gray-600">安心してご相談ください</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
