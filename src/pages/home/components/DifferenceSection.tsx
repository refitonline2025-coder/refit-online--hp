import MicroCta from '../../../components/feature/MicroCta';

export default function DifferenceSection() {
  const reasons = [
    {
      number: '01',
      icon: 'ri-user-heart-line',
      title: '専属コンシェルジュが毎日サポート',
      description: '専属トレーナーが毎日LINEでマンツーマン指導。食事写真を送るだけでアドバイスが届き、24時間いつでも質問OK。一人で悩まず、プロと一緒に目標達成を目指せます。',
      highlights: [
        { icon: 'ri-message-3-line', text: '毎日LINEでサポート' },
        { icon: 'ri-24-hours-line', text: '24時間質問OK' },
        { icon: 'ri-camera-line', text: '食事写真でアドバイス' },
      ],
    },
    {
      number: '02',
      icon: 'ri-dna-line',
      title: '遺伝子検査×オーダーメイド設計',
      description: '遺伝子検査と行動データを活用し、あなた専用のプログラムを設計。体質・生活習慣に合わせた食事・運動プランで、無理なく続けられます。',
      highlights: [
        { icon: 'ri-test-tube-line', text: '遺伝子検査で体質把握' },
        { icon: 'ri-pulse-line', text: '行動データ活用' },
        { icon: 'ri-file-user-line', text: '完全オリジナルプラン' },
      ],
    },
    {
      number: '03',
      icon: 'ri-money-yen-circle-line',
      title: '圧倒的なコストパフォーマンス',
      description: 'パーソナルジムの1/3以下の料金で、同等以上のサポートを実現。入会金も今なら0円。オンライン完結だから、ジムに通う時間も交通費も不要です。',
      highlights: [
        { icon: 'ri-percent-line', text: '他社の1/3以下の料金' },
        { icon: 'ri-gift-line', text: '入会金0円' },
        { icon: 'ri-home-line', text: '通う時間・交通費不要' },
      ],
    },
  ];

  return (
    <section className="fade-in-up py-16 bg-gradient-to-b from-rose-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            ReFitが選ばれる<span className="text-rose-500">3つの理由</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-rose-100 overflow-hidden hover:-translate-y-2 transition-all duration-300"
            >
              {/* グラデーションバナー */}
              <div className="bg-gradient-to-r from-rose-400 to-pink-400 px-6 py-6 text-center">
                <span className="text-white/60 text-4xl font-black">{reason.number}</span>
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mt-2">
                  <i className={`${reason.icon} text-3xl text-white`}></i>
                </div>
              </div>

              {/* カード本体 */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {reason.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  {reason.description}
                </p>

                {/* ハイライトポイント */}
                <div className="space-y-2.5">
                  {reason.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2.5">
                      <div className="w-8 h-8 bg-rose-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className={`${highlight.icon} text-rose-500 text-base`}></i>
                      </div>
                      <span className="text-sm font-medium text-gray-700">{highlight.text}</span>
                    </div>
                  ))}
                </div>

                {/* 下部ボーダーライン */}
                <div className="mt-5 pt-0 border-t-2 border-rose-100"></div>
              </div>
            </div>
          ))}
        </div>

        <MicroCta />
      </div>
    </section>
  );
}
