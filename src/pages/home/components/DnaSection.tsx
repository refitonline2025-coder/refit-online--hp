
export default function FeatureSection() {
  const features = [
    {
      icon: 'ri-restaurant-line',
      title: '毎日の食事指導',
      description: 'チャットで毎日の食事を報告。プロのトレーナーがリアルタイムでアドバイスし、最適な食事習慣を身につけます。',
    },
    {
      icon: 'ri-verified-badge-fill',
      title: 'Meta認証の信頼性',
      description: 'Meta（Facebook/Instagram）から公式に認証された、透明性の高い信頼できる組織です。',
    },
    {
      icon: 'ri-user-star-line',
      title: '専属トレーナーのサポート',
      description: 'あなた専属のプロトレーナーが、目標達成まで徹底的にサポート。一人じゃないから続けられます。',
    },
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-50 px-4 py-2 rounded-full mb-4">
            <i className="ri-star-line text-teal-600 text-xl"></i>
            <span className="text-sm font-medium text-teal-600">ReFit Onlineの特徴</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            プロによる毎日の食事指導
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            あなたのライフスタイルと目標に合わせた、完全オーダーメイドの食事プラン。
            <br />
            専属トレーナーが毎日サポートするから、リバウンドゼロの結果を実現します。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://static.readdy.ai/image/35ed947d703ab27b65e8910bc3f502d9/1d48c2b18d5077ad22e231ba07661852.png"
              alt="遺伝子検査キット"
              className="w-full rounded-xl shadow-2xl"
            />
          </div>

          <div className="space-y-6">
            <p className="text-base md:text-lg leading-relaxed">
              ReFit Onlineは、あなたの食事を毎日チャットでサポート。何を食べればいいか、どう調理すればいいか、外食ではどう選べばいいか。
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              プロのトレーナーがリアルタイムでアドバイスするから、迷わず続けられます。無理な食事制限ではなく、科学的根拠に基づいた最適な食事習慣を身につけます。
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              プレミアムプランでは、専属トレーナーがあなたの進捗を毎日モニタリング。リバウンドしない、一生モノの食事習慣を手に入れましょう。
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-6">
                <i className={`${feature.icon} text-3xl text-white`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-base text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
