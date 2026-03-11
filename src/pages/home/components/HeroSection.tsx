export default function HeroSection() {
  return (
    <section className="relative min-h-screen md:min-h-screen flex items-end justify-start overflow-hidden" style={{minHeight: 'min(100svh, 700px)', paddingTop: '60px'}}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0" style={{top: '60px'}}>
        <img
          src="https://static.readdy.ai/image/35ed947d703ab27b65e8910bc3f502d9/879ec1b6092900de3c1bb7d7bb550244.jpeg"
          alt="ReFit Online Background"
          className="w-full h-full object-cover"
          style={{objectPosition: 'center top'}}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/15 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 pb-20 pt-6">
        <div className="max-w-lg">
          {/* メインキャッチコピー */}
          <h1 className="text-white mb-6 leading-tight drop-shadow-lg tracking-tight">
            <span className="block text-3xl md:text-4xl font-bold mb-2 whitespace-nowrap">‟続かなかった"を卒業</span>
            <span className="block text-2xl md:text-3xl font-bold">オンライン食事指導で<br />自分史上最高の身体へ</span>
          </h1>

          {/* サブコピー */}
          <p className="text-xl md:text-2xl text-white/90 mb-4 leading-relaxed drop-shadow-md">
            <span className="font-medium">遺伝子検査</span>
            <span className="mx-3 text-white/60">×</span>
            <span className="font-medium">専属トレーナー</span>
            <span className="mx-3 text-white/60">×</span>
            <span className="font-medium">食事/運動管理</span>
          </p>

          <p className="text-base md:text-xl text-white/80 mb-8 leading-relaxed drop-shadow-md">
            あなた専属のダイエットコンシェルジュが、<br />
            一生モノの身体づくりをサポートします。
          </p>

          {/* 実績バッジ */}
          <div className="flex flex-wrap gap-3 md:gap-4">
            {/* 累計サポート人数 */}
            <div className="bg-white/95 backdrop-blur-sm rounded-lg px-4 py-3 shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 flex items-center justify-center">
                  <i className="ri-group-line text-xl text-emerald-600"></i>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 leading-none">1500+</div>
                  <div className="text-xs text-gray-600 mt-0.5 whitespace-nowrap">累計サポート</div>
                </div>
              </div>
            </div>

            {/* 平均減量 */}
            <div className="bg-white/95 backdrop-blur-sm rounded-lg px-4 py-3 shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 flex items-center justify-center">
                  <i className="ri-arrow-down-line text-xl text-rose-600"></i>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 leading-none">-7kg</div>
                  <div className="text-xs text-gray-600 mt-0.5 whitespace-nowrap">平均達成</div>
                </div>
              </div>
            </div>

            {/* 継続率 */}
            <div className="bg-white/95 backdrop-blur-sm rounded-lg px-4 py-3 shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 flex items-center justify-center">
                  <i className="ri-trophy-line text-xl text-blue-600"></i>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 leading-none">92%</div>
                  <div className="text-xs text-gray-600 mt-0.5 whitespace-nowrap">継続率</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTAボタン */}
          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <a
              href="https://lin.ee/F7dPZLD"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-teal-600 text-white font-bold px-8 py-4 rounded-full hover:bg-teal-700 transition-all duration-200 text-base shadow-xl hover:shadow-2xl whitespace-nowrap"
            >
              <i className="ri-chat-1-line text-xl"></i>
              LINEで30秒ダイエット診断
            </a>
            <a
              href="#plans"
              className="inline-flex items-center justify-center bg-white/95 text-gray-800 font-bold px-8 py-4 rounded-full hover:bg-white transition-all duration-200 text-base shadow-lg border border-gray-200 whitespace-nowrap"
            >
              料金プランを見る
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}