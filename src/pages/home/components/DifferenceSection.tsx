import { useState } from 'react';
import MicroCta from '../../../components/feature/MicroCta';

export default function DifferenceSection() {
  const [expandedDetail, setExpandedDetail] = useState<number | null>(null);
  const [expandedComparison, setExpandedComparison] = useState<number | null>(null);

  const reasons = [
    {
      number: '01',
      title: '専属ダイエットコンシェルジュによる毎日サポート',
      description: '専属トレーナーが毎日LINEでマンツーマン指導。食事写真を送るだけでアドバイスが届き、24時間いつでも質問OK。一人で悩まず、プロと一緒に目標達成を目指せます。',
      icon: 'ri-user-heart-line',
      color: 'from-teal-300 to-teal-400',
      bgColor: 'bg-gradient-to-br from-teal-50/50 to-white',
      image: 'https://static.readdy.ai/image/35ed947d703ab27b65e8910bc3f502d9/3433a5a6d3e74b2ccb719d364db3cfdf.jpeg',
      highlights: [
        { icon: 'ri-message-3-line', text: '毎日LINEでサポート' },
        { icon: 'ri-24-hours-line', text: '24時間質問OK' },
        { icon: 'ri-camera-line', text: '食事写真でアドバイス' },
      ]
    },
    {
      number: '02',
      title: '一人ひとりに合ったオーダーメイド設計',
      description: '遺伝子検査と行動データを活用し、あなた専用のプログラムを設計。体質・生活習慣に合わせた食事・運動プランで、無理なく続けられます。',
      icon: 'ri-dna-line',
      color: 'from-teal-400 to-teal-500',
      bgColor: 'bg-gradient-to-br from-teal-50/50 to-white',
      image: 'https://readdy.ai/api/search-image?query=DNA%20genetic%20testing%20kit%20and%20analysis%20report%20on%20modern%20white%20desk%2C%20scientific%20laboratory%20equipment%2C%20test%20tubes%20with%20colorful%20samples%2C%20professional%20medical%20setting%2C%20clean%20minimalist%20composition%2C%20natural%20lighting%2C%20high%20tech%20healthcare%20concept&width=600&height=400&seq=refit-reason-dna-001&orientation=landscape',
      hasDetail: true,
      showIconInBadge: true,
      highlights: [
        { icon: 'ri-test-tube-line', text: '遺伝子検査で体質把握' },
        { icon: 'ri-pulse-line', text: '行動データ活用' },
        { icon: 'ri-file-user-line', text: '完全オリジナルプラン' },
      ]
    },
    {
      number: '03',
      title: '圧倒的なコストパフォーマンス',
      description: 'パーソナルジムの1/3以下の料金で、同等以上のサポートを実現。入会金も今なら0円。オンライン完結だから、ジムに通う時間も交通費も不要です。',
      icon: 'ri-money-yen-circle-line',
      color: 'from-teal-300 to-teal-400',
      bgColor: 'bg-gradient-to-br from-green-50 to-white',
      image: 'https://readdy.ai/api/search-image?query=Smartphone%20displaying%20savings%20chart%20and%20discount%20percentage%20on%20screen%2C%20piggy%20bank%20and%20golden%20coins%20scattered%20on%20clean%20white%20marble%20table%2C%20cost%20savings%20and%20budget%20concept%2C%20bright%20cheerful%20atmosphere%2C%20warm%20natural%20lighting%2C%20minimalist%20flat%20lay%20composition%2C%20no%20people%20no%20face&width=800&height=450&seq=refit-cost-performance-noface-007&orientation=landscape',
      hasComparison: true,
      showIconInBadge: true,
      highlights: [
        { icon: 'ri-percent-line', text: '他社の1/3以下の料金' },
        { icon: 'ri-gift-line', text: '入会金0円' },
        { icon: 'ri-home-line', text: '通う時間・交通費不要' },
      ]
    },
  ];

  const toggleDetail = (index: number) => {
    setExpandedDetail(expandedDetail === index ? null : index);
  };

  const toggleComparison = (index: number) => {
    setExpandedComparison(expandedComparison === index ? null : index);
  };

  return (
    <section className="fade-in-up py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="px-5">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            ReFitが選ばれる<span className="text-teal-500">3つの理由</span>
          </h2>
        </div>

        <div className="space-y-10">
          {reasons.map((reason, index) => (
            <div key={index} className={`${reason.bgColor} rounded-2xl shadow-lg overflow-hidden border border-gray-100`}>
              {/* 縦構成カード：上に画像、下にコンテンツ */}
              <div className="flex flex-col">
                {/* 画像部分 */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img 
                    src={reason.image} 
                    alt={reason.title}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                
                {/* テキスト部分 */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-5 leading-tight">
                    {reason.title}
                  </h3>
                  
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    {reason.description}
                  </p>

                  {/* ハイライトポイント */}
                  <div className="space-y-4">
                    {reason.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-4 bg-white/80 backdrop-blur rounded-lg px-5 py-4 shadow-sm border border-gray-100">
                        <div className={`w-12 h-12 bg-gradient-to-br ${reason.color} rounded-md flex items-center justify-center flex-shrink-0`}>
                          <i className={`${highlight.icon} text-white text-xl`}></i>
                        </div>
                        <span className="text-lg font-medium text-gray-800">{highlight.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* 詳しく見るボタン（オーダーメイド設計のみ） */}
                  {reason.hasDetail && (
                    <div className="mt-6">
                      <button
                        onClick={() => toggleDetail(index)}
                        className="w-full flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer whitespace-nowrap"
                      >
                        <span>{expandedDetail === index ? '詳細を閉じる' : '遺伝子検査・スマートバンドの詳細を見る'}</span>
                        <i className={`ri-arrow-down-s-line text-xl transition-transform duration-200 ${expandedDetail === index ? 'rotate-180' : ''}`}></i>
                      </button>
                    </div>
                  )}

                  {/* 詳しく見るボタン（コストパフォーマンスのみ） */}
                  {reason.hasComparison && (
                    <div className="mt-6">
                      <button
                        onClick={() => toggleComparison(index)}
                        className="w-full flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer whitespace-nowrap"
                      >
                        <span>{expandedComparison === index ? '比較表を閉じる' : '他社との比較表を見る'}</span>
                        <i className={`ri-arrow-down-s-line text-xl transition-transform duration-200 ${expandedComparison === index ? 'rotate-180' : ''}`}></i>
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* オーダーメイド設計の詳細（理由②のみ） - 折りたたみ */}
              {reason.hasDetail && (
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    expandedDetail === index ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="border-t border-gray-100">
                    {/* 遺伝子検査キット */}
                    <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 p-8 relative overflow-hidden border-b border-gray-200">
                      {/* 背景装飾 */}
                      <div className="absolute top-0 right-0 w-64 h-64 bg-teal-100/30 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                      <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-100/20 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                      
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="bg-teal-500 text-white text-sm font-bold px-4 py-1.5 rounded-full">
                            スタンダード以上
                          </span>
                        </div>
                        
                        <h4 className="text-3xl font-bold text-gray-900 mb-2">
                          遺伝子検査キット
                        </h4>
                        <p className="text-gray-600 text-lg mb-6">
                          あなたの体質を科学的に分析
                        </p>

                        <div className="flex flex-col md:flex-row gap-8 items-center">
                          {/* 商品画像 */}
                          <div className="flex-shrink-0">
                            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                              <img 
                                src="https://static.readdy.ai/image/35ed947d703ab27b65e8910bc3f502d9/1d48c2b18d5077ad22e231ba07661852.png"
                                alt="遺伝子検査キット"
                                className="w-48 h-auto object-contain"
                              />
                            </div>
                          </div>

                          {/* 特徴リスト */}
                          <div className="flex-1 space-y-4">
                            <div>
                              <p className="text-xl font-bold text-gray-900 mb-4">遺伝子から分かること</p>
                              <div className="grid grid-cols-2 gap-3">
                                <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-3 shadow-sm">
                                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                                    <i className="ri-scales-3-line text-xl text-teal-600"></i>
                                  </div>
                                  <span className="font-medium text-gray-800">太りやすさ</span>
                                </div>
                                <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-3 shadow-sm">
                                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                                    <i className="ri-apple-line text-xl text-teal-600"></i>
                                  </div>
                                  <span className="font-medium text-gray-800">栄養素への反応</span>
                                </div>
                                <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-3 shadow-sm">
                                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                                    <i className="ri-heart-pulse-line text-xl text-teal-600"></i>
                                  </div>
                                  <span className="font-medium text-gray-800">筋肉のつきやすさ</span>
                                </div>
                                <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-3 shadow-sm">
                                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                                    <i className="ri-refresh-line text-xl text-teal-600"></i>
                                  </div>
                                  <span className="font-medium text-gray-800">リバウンド傾向</span>
                                </div>
                              </div>
                            </div>
                            
                            <div className="bg-teal-50 rounded-xl p-4 border border-teal-200">
                              <p className="text-teal-700 text-base">
                                <i className="ri-lightbulb-line mr-2 text-teal-500"></i>
                                痩せない理由は遺伝子にあった！自己流ダイエットを卒業し、あなたに合った方法で効率的に結果を出しましょう。
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* スマートバンド */}
                    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 p-8 relative overflow-hidden">
                      {/* 背景装飾 */}
                      <div className="absolute top-0 left-1/2 w-96 h-96 bg-teal-100/20 rounded-full -translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
                      
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="bg-teal-600 text-white text-sm font-bold px-4 py-1.5 rounded-full">
                            プレミアム限定
                          </span>
                        </div>
                        
                        <h4 className="text-3xl font-bold text-gray-900 mb-2">
                          スマートバンド
                        </h4>
                        <p className="text-gray-600 text-lg mb-6">
                          24時間あなたの健康をモニタリング
                        </p>

                        <div className="flex flex-col md:flex-row gap-8 items-center">
                          {/* 商品画像 */}
                          <div className="flex-shrink-0">
                            <div className="relative">
                              <div className="absolute inset-0 bg-gradient-to-br from-teal-200/30 to-emerald-200/30 rounded-full blur-2xl"></div>
                              <img 
                                src="https://static.readdy.ai/image/35ed947d703ab27b65e8910bc3f502d9/630cacd1fda2739df7db99db030ca7ff.png"
                                alt="Xiaomi Smart Band 9"
                                className="relative w-56 h-auto object-contain"
                              />
                            </div>
                          </div>

                          {/* 特徴リスト */}
                          <div className="flex-1 space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div className="bg-white border border-gray-200 rounded-2xl p-5 text-center shadow-sm">
                                <div className="w-14 h-14 bg-gradient-to-br from-teal-400 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                                  <i className="ri-walk-line text-2xl text-white"></i>
                                </div>
                                <p className="text-gray-900 font-bold text-lg">活動量</p>
                                <p className="text-gray-500 text-sm mt-1">歩数・距離を記録</p>
                              </div>
                              <div className="bg-white border border-gray-200 rounded-2xl p-5 text-center shadow-sm">
                                <div className="w-14 h-14 bg-gradient-to-br from-rose-400 to-rose-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                                  <i className="ri-fire-line text-2xl text-white"></i>
                                </div>
                                <p className="text-gray-900 font-bold text-lg">消費カロリー</p>
                                <p className="text-gray-500 text-sm mt-1">リアルタイム計測</p>
                              </div>
                              <div className="bg-white border border-gray-200 rounded-2xl p-5 text-center shadow-sm">
                                <div className="w-14 h-14 bg-gradient-to-br from-teal-400 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                                  <i className="ri-moon-line text-2xl text-white"></i>
                                </div>
                                <p className="text-gray-900 font-bold text-lg">睡眠の質</p>
                                <p className="text-gray-500 text-sm mt-1">深い眠りを分析</p>
                              </div>
                              <div className="bg-white border border-gray-200 rounded-2xl p-5 text-center shadow-sm">
                                <div className="w-14 h-14 bg-gradient-to-br from-pink-400 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                                  <i className="ri-heart-line text-2xl text-white"></i>
                                </div>
                                <p className="text-gray-900 font-bold text-lg">心拍数</p>
                                <p className="text-gray-500 text-sm mt-1">常時モニタリング</p>
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-4 bg-teal-50 rounded-xl p-4 border border-teal-200">
                              <i className="ri-battery-2-charge-line text-3xl text-teal-500"></i>
                              <div>
                                <p className="text-gray-900 font-bold">最大18日間のバッテリー</p>
                                <p className="text-gray-500 text-sm">充電の手間を最小限に</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 期間限定特典 */}
                    <div className="bg-gradient-to-r from-teal-50 to-emerald-50 p-6 border-t border-teal-200">
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-3 mb-4">
                          <i className="ri-gift-line text-2xl text-teal-500"></i>
                          <span className="text-xl font-bold text-gray-900">期間限定特典</span>
                        </div>
                        <div className="flex flex-wrap justify-center gap-4">
                          <span className="text-base text-gray-700">
                            <i className="ri-check-line mr-1 text-teal-500"></i>遺伝子検査キット提供
                          </span>
                          <span className="text-base text-gray-700">
                            <i className="ri-check-line mr-1 text-teal-500"></i>スマートバンド提供
                          </span>
                          <span className="text-base text-gray-700">
                            <i className="ri-check-line mr-1 text-teal-500"></i>入会金0円
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 他社比較（理由③のみ） - 折りたたみ */}
              {reason.hasComparison && (
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    expandedComparison === index ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="border-t border-gray-100">
                    <div className="p-8 bg-gradient-to-br from-gray-50 to-white">
                      <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-600 px-4 py-2 rounded-full text-sm font-bold mb-4">
                          <i className="ri-bar-chart-grouped-line"></i>
                          徹底比較
                        </div>
                        <h4 className="text-2xl font-bold text-gray-900 mb-3">
                          他のサービスとの比較
                        </h4>
                        <p className="text-base text-gray-600">パーソナルジムとの料金・サービス比較</p>
                      </div>

                      {/* 比較表 */}
                      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mb-6">
                        {/* ヘッダー */}
                        <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-200">
                          <div className="p-4 text-center">
                            <span className="text-gray-500 font-medium text-sm">比較項目</span>
                          </div>
                          <div className="p-4 text-center bg-gradient-to-b from-teal-50 to-teal-100 border-x border-teal-200">
                            <span className="text-teal-600 font-bold">ReFit</span>
                          </div>
                          <div className="p-4 text-center">
                            <span className="text-gray-600 font-medium">大手パーソナルジム</span>
                          </div>
                        </div>

                        {/* 料金比較（ハイライト） */}
                        <div className="grid grid-cols-3 border-b border-gray-100">
                          <div className="p-5 flex items-center justify-center bg-gray-50">
                            <span className="font-bold text-gray-700">3ヶ月の料金</span>
                          </div>
                          <div className="p-5 text-center bg-gradient-to-b from-teal-50 to-white border-x border-teal-100">
                            <p className="text-3xl font-bold text-teal-600">19,800<span className="text-base">円〜</span></p>
                            <p className="text-xs text-teal-500 mt-1">月額6,600円〜</p>
                          </div>
                          <div className="p-5 text-center bg-gray-50/50">
                            <p className="text-2xl font-bold text-gray-400 line-through">300,000<span className="text-sm">円〜</span></p>
                          </div>
                        </div>

                        {/* 入会金 */}
                        <div className="grid grid-cols-3 border-b border-gray-100">
                          <div className="p-4 flex items-center justify-center bg-gray-50">
                            <span className="font-medium text-gray-700">入会金</span>
                          </div>
                          <div className="p-4 text-center bg-teal-50/50 border-x border-teal-100">
                            <span className="text-xl font-bold text-teal-600">0円</span>
                          </div>
                          <div className="p-4 text-center">
                            <span className="text-gray-500">30,000〜50,000円</span>
                          </div>
                        </div>

                        {/* その他の比較項目 */}
                        {[
                          { label: '専属トレーナー', refit: true, others: true },
                          { label: '食事指導', refit: '毎日', others: '週1〜2回' },
                          { label: '遺伝子検査', refit: true, others: false },
                          { label: '場所・時間の制約', refit: 'なし', others: 'あり' },
                        ].map((item, idx) => (
                          <div key={idx} className={`grid grid-cols-3 ${idx < 3 ? 'border-b border-gray-100' : ''}`}>
                            <div className="p-4 flex items-center justify-center bg-gray-50">
                              <span className="font-medium text-gray-700 text-sm">{item.label}</span>
                            </div>
                            <div className="p-4 text-center bg-teal-50/30 border-x border-teal-100">
                              {typeof item.refit === 'boolean' ? (
                                item.refit ? (
                                  <i className="ri-check-line text-2xl text-teal-500"></i>
                                ) : (
                                  <i className="ri-close-line text-2xl text-gray-300"></i>
                                )
                              ) : (
                                <span className="font-bold text-teal-600">{item.refit}</span>
                              )}
                            </div>
                            <div className="p-4 text-center">
                              {typeof item.others === 'boolean' ? (
                                item.others ? (
                                  <i className="ri-check-line text-2xl text-gray-400"></i>
                                ) : (
                                  <i className="ri-close-line text-2xl text-gray-300"></i>
                                )
                              ) : (
                                <span className="text-gray-500">{item.others}</span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* 補足メッセージ */}
                      <div className="text-center">
                        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-teal-50 to-emerald-50 border border-teal-200 rounded-full px-6 py-3">
                          <i className="ri-shield-check-fill text-teal-500 text-xl"></i>
                          <span className="text-teal-700 font-bold">同等以上のサポートを1/3以下の料金で</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}