import { useMemo } from 'react';
import MicroCta from '../../../components/feature/MicroCta';

export default function SpecialOfferSection() {
  const deadlineLabel = useMemo(() => {
    const now = new Date();
    const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    return `${lastDay.getMonth() + 1}月${lastDay.getDate()}日`;
  }, []);

  return (
    <section className="fade-in-up py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* セクション見出し */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            1人ひとりに合わせた<span className="text-[#E8725A]">オーダーメイド設計</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            一人ひとりの体質・生活習慣は異なります。<br />
            ReFit Onlineでは、遺伝子検査と行動データを活用し、<br className="hidden sm:inline" />
            あなた専用のプログラムを設計します。
          </p>
        </div>

        {/* 遺伝子検査キット訴求ブロック */}
        <div className="bg-gradient-to-br from-[#FDF4F2] to-[#FAEAE6]/50 rounded-2xl p-6 sm:p-8 md:p-10 mb-8 border border-[#F0A898]">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#E8725A] rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-test-tube-line text-xl sm:text-2xl text-white"></i>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    遺伝子検査で体質を把握
                  </h3>
                  <div className="inline-block bg-[#E8725A] text-white text-xs font-bold px-3 py-1 rounded-full">
                    スタンダードプラン / プレミアムプラン限定
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-gray-700 mb-6 leading-relaxed">
                遺伝子検査により、以下の体質傾向を把握します。
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6">
                <div className="flex items-center gap-3 bg-white rounded-lg p-3 sm:p-4">
                  <i className="ri-scales-3-line text-xl sm:text-2xl text-[#E8725A]"></i>
                  <span className="text-sm sm:text-base text-gray-800 font-medium">太りやすさの傾向</span>
                </div>
                <div className="flex items-center gap-3 bg-white rounded-lg p-3 sm:p-4">
                  <i className="ri-apple-line text-xl sm:text-2xl text-[#E8725A]"></i>
                  <span className="text-sm sm:text-base text-gray-800 font-medium">栄養素への反応傾向</span>
                </div>
                <div className="flex items-center gap-3 bg-white rounded-lg p-3 sm:p-4">
                  <i className="ri-heart-pulse-line text-xl sm:text-2xl text-[#E8725A]"></i>
                  <span className="text-sm sm:text-base text-gray-800 font-medium">筋肉のつきやすさ</span>
                </div>
                <div className="flex items-center gap-3 bg-white rounded-lg p-3 sm:p-4">
                  <i className="ri-refresh-line text-xl sm:text-2xl text-[#E8725A]"></i>
                  <span className="text-sm sm:text-base text-gray-800 font-medium">リバウンドしやすさの傾向</span>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 sm:p-6 border-l-4 border-[#E8725A]">
                <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                  検査結果をもとに、遺伝子タイプに基づいた完全オリジナルの食事・運動プログラムを作成します。
                </p>
              </div>
            </div>

            {/* 遺伝子検査キット画像 */}
            <div className="flex justify-center">
              <div className="relative">
                <img 
                  src="https://static.readdy.ai/image/35ed947d703ab27b65e8910bc3f502d9/1d48c2b18d5077ad22e231ba07661852.png"
                  alt="遺伝子検査キット"
                  className="w-full max-w-[300px] h-auto object-contain rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* スマートバンド訴求ブロック（強調） */}
        <div className="bg-gradient-to-br from-gray-50 to-stone-100 rounded-2xl p-6 sm:p-8 md:p-10 mb-8 border border-stone-200 shadow-lg">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            {/* スマートバンド画像 */}
            <div className="flex justify-center order-2 md:order-1">
              <div className="relative">
                <img 
                  src="https://static.readdy.ai/image/35ed947d703ab27b65e8910bc3f502d9/2f28bfb056fee8b9c30d7d7b4c35d852.png"
                  alt="Xiaomi Smart Band 9"
                  className="w-full max-w-[400px] h-auto object-contain"
                />
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-pulse-line text-xl sm:text-2xl text-white"></i>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    行動を「感覚」で終わらせない
                  </h3>
                  <div className="inline-block bg-gray-800 text-white text-xs font-bold px-3 py-1 rounded-full">
                    プレミアムプラン限定
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-gray-700 mb-6 leading-relaxed">
                Xiaomi Smart Band 9 を提供し、日常の行動データを自動で取得します。
              </p>

              <div className="bg-white rounded-xl p-4 sm:p-6 mb-6">
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-4">取得する主なデータ：</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <i className="ri-check-line text-[#E8725A] text-lg flex-shrink-0 mt-0.5"></i>
                    <span className="text-sm sm:text-base text-gray-700">日常の活動量（歩数・運動量）</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <i className="ri-check-line text-[#E8725A] text-lg flex-shrink-0 mt-0.5"></i>
                    <span className="text-sm sm:text-base text-gray-700">消費カロリー</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <i className="ri-check-line text-[#E8725A] text-lg flex-shrink-0 mt-0.5"></i>
                    <span className="text-sm sm:text-base text-gray-700">睡眠時間・睡眠の質</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <i className="ri-check-line text-[#E8725A] text-lg flex-shrink-0 mt-0.5"></i>
                    <span className="text-sm sm:text-base text-gray-700">心拍数</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <i className="ri-check-line text-[#E8725A] text-lg flex-shrink-0 mt-0.5"></i>
                    <span className="text-sm sm:text-base text-gray-700">ストレスレベル</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <i className="ri-check-line text-[#E8725A] text-lg flex-shrink-0 mt-0.5"></i>
                    <span className="text-sm sm:text-base text-gray-700">女性の健康管理データ</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 sm:p-6 border-l-4 border-gray-800 mb-4">
                <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                  実際の行動データをもとに、設計したプログラムが合っているかを確認し、フィードバックとして内容を調整します。
                </p>
              </div>

              <div className="text-xs sm:text-sm text-gray-600 space-y-1">
                <p>※ Xiaomi Smart Band 9 を使用します</p>
                <p>※ 医療行為・診断を行うものではありません</p>
              </div>
            </div>
          </div>
        </div>

        {/* なぜ今だけなのか - 色味を最適化 */}
        <div className="bg-gradient-to-br from-[#FDF4F2]0 to-[#D4604A] rounded-2xl p-6 sm:p-8 md:p-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6">
            <i className="ri-gift-line text-white text-lg"></i>
            <span className="text-sm font-bold text-white">特別提供</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
            期間限定で以下の特典付きでご提供
          </h3>
          <p className="text-lg sm:text-xl font-bold text-amber-200 mb-6">
            <i className="ri-calendar-event-line mr-1"></i>{deadlineLabel}まで
          </p>

          <div className="max-w-2xl mx-auto space-y-3 mb-6">
            <div className="flex items-center gap-3 bg-white/15 rounded-lg p-3 sm:p-4">
              <i className="ri-check-line text-[#F0A898] text-xl flex-shrink-0"></i>
              <span className="text-sm sm:text-base text-white text-left">遺伝子検査キットの提供（スタンダード/プレミアムプラン）</span>
            </div>
            <div className="flex items-center gap-3 bg-white/15 rounded-lg p-3 sm:p-4">
              <i className="ri-check-line text-amber-200 text-xl flex-shrink-0"></i>
              <span className="text-sm sm:text-base text-white text-left">Xiaomi Smart Band 9 の提供（プレミアムプラン）</span>
            </div>
            <div className="flex items-center gap-3 bg-white/15 rounded-lg p-3 sm:p-4">
              <i className="ri-check-line text-[#F0A898] text-xl flex-shrink-0"></i>
              <span className="text-sm sm:text-base text-white text-left">データを反映した専用設計プログラム</span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#FAEAE6]">
            ※ プラン内容・料金自体は変わりません
          </p>
        </div>

        <MicroCta text="特典付きで始める" />
      </div>
    </section>
  );
}
