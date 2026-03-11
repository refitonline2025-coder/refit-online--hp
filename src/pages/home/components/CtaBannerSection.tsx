
export default function CtaBannerSection() {
  return (
    <section className="py-14 bg-white border-b border-gray-100">
      <div className="px-5 max-w-2xl mx-auto flex flex-col items-center gap-6">
        <a
          href="https://lin.ee/F7dPZLD"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-4 text-white font-bold px-10 py-5 rounded-xl transition-all duration-200 text-xl md:text-2xl shadow-xl cursor-pointer whitespace-nowrap"
          style={{ backgroundColor: '#06C755' }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#05b34c')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#06C755')}
        >
          <i className="ri-chat-1-line text-2xl md:text-3xl"></i>
          LINEで30秒ダイエット診断
        </a>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="inline-flex items-center gap-3 bg-teal-50 text-teal-700 px-5 py-3 rounded-full border border-teal-300">
            <i className="ri-gift-line text-xl text-teal-600"></i>
            <span className="text-base font-medium">入会金無料</span>
          </div>
          <div className="inline-flex items-center gap-3 bg-teal-50 text-teal-700 px-5 py-3 rounded-full border border-teal-300">
            <i className="ri-calendar-check-line text-xl text-teal-600"></i>
            <span className="text-base font-medium">初回相談無料</span>
          </div>
        </div>
      </div>
    </section>
  );
}
