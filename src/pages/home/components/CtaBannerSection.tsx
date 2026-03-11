
export default function CtaBannerSection() {
  return (
    <section className="fade-in-up py-14 bg-gray-900">
      <div className="px-5 max-w-2xl mx-auto flex flex-col items-center gap-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center leading-tight">
          まずは無料で相談してみませんか？
        </h2>
        <p className="text-sm sm:text-base text-gray-300 text-center">
          LINEで簡単な質問に答えるだけ。あなたに最適なプランをご提案します。
        </p>
        <a
          href="https://lin.ee/F7dPZLD"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-4 bg-green-500 hover:bg-green-600 text-white font-bold px-10 py-6 rounded-xl transition-all duration-200 text-xl md:text-2xl shadow-xl cursor-pointer whitespace-nowrap"
        >
          <i className="ri-line-line text-2xl md:text-3xl"></i>
          LINEで30秒ダイエット診断
        </a>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="inline-flex items-center gap-3 bg-gray-800 text-gray-200 px-5 py-3 rounded-full border border-gray-700">
            <i className="ri-gift-line text-xl text-green-400"></i>
            <span className="text-base font-medium">入会金無料</span>
          </div>
          <div className="inline-flex items-center gap-3 bg-gray-800 text-gray-200 px-5 py-3 rounded-full border border-gray-700">
            <i className="ri-calendar-check-line text-xl text-green-400"></i>
            <span className="text-base font-medium">初回相談無料</span>
          </div>
        </div>
      </div>
    </section>
  );
}
