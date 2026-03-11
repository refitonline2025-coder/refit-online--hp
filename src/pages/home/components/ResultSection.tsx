export default function ResultSection() {
  const results = [
    {
      name: '佐藤 美咲様',
      age: '20代/女性',
      image: 'https://static.readdy.ai/image/35ed947d703ab27b65e8910bc3f502d9/f642f2ad2eb76691ee2c2eb5d5971b08.jpeg',
      weight: '-6kg',
      before: '食事制限だけのダイエットで停滞期に悩んでいました',
      after: '専属トレーナーの食事指導で健康的に-6kg達成！',
      comment: 'オンラインでも対面と変わらないサポートで安心でした',
    },
    {
      name: '田中 麻衣様',
      age: '30代/女性',
      image: 'https://static.readdy.ai/image/35ed947d703ab27b65e8910bc3f502d9/50ccc1474508a3632e28c96ff150802e.jpeg',
      weight: '-8kg',
      before: '産後太りで自信を失っていました',
      after: '毎日の食事サポートで無理なく-8kg達成！',
      comment: '子育て中でもオンラインなので続けられました',
    },
    {
      name: '鈴木 彩花様',
      age: '30代/女性',
      image: 'https://static.readdy.ai/image/35ed947d703ab27b65e8910bc3f502d9/582763a5dcc503173fdbdd3126313b22.jpeg',
      weight: '-10kg',
      before: '仕事が忙しく運動する時間がなかった',
      after: 'オンライン指導で-10kg達成！',
      comment: '忙しい私でも続けられるプログラムでした',
    },
    {
      name: '松本 理香様',
      age: '20代/女性',
      image: 'https://static.readdy.ai/image/35ed947d703ab27b65e8910bc3f502d9/d9129a3693080f4b8e4491e5252f3bda.jpeg',
      weight: '-7kg',
      before: '代謝が落ち、何をしても痩せなかった',
      after: '専門指導で-7kg達成！体力も回復',
      comment: '正しい方法で変われました',
    },
    {
      name: '山田 健太様',
      age: '30代/男性',
      image: 'https://static.readdy.ai/image/35ed947d703ab27b65e8910bc3f502d9/660b9648c806e466ce75cdc69a36927a.jpeg',
      weight: '-12kg',
      before: '会食が多く生活習慣病リスクが上昇',
      after: '仕事しながら-12kg達成！健康診断も改善',
      comment: '忙しい男性でも無理なく続けられました',
    },
    {
      name: '中村 愛美様',
      age: '20代/女性',
      image: 'https://static.readdy.ai/image/35ed947d703ab27b65e8910bc3f502d9/d7411d6bc12f490cbef347486b913a8a.jpeg',
      weight: '-5kg',
      before: '不規則な食生活で体調不良だった',
      after: '食習慣改善で-5kg達成！肌荒れも改善',
      comment: '食事の大切さを改めて実感できました',
    },
  ];

  return (
    <section className="fade-in-up py-16 bg-gradient-to-b from-white to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            ReFit Onlineを使った<span className="text-[#E8725A]">お客様の変化</span>
          </h2>
          <p className="text-base text-gray-600">
            科学的根拠に基づいた食事指導で、確実な結果を実現
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((result, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="p-5">
                {/* SNS風プロフィールヘッダー */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#F0A898]">
                    <img src={result.image} alt={result.name} className="w-full h-full object-cover object-top" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{result.name}</p>
                    <p className="text-xs text-gray-500">{result.age}</p>
                  </div>
                </div>

                {/* 達成kg数 */}
                <div className="text-center mb-4">
                  <span className="text-3xl font-bold text-[#E8725A]">{result.weight}</span>
                  <span className="text-sm font-bold text-[#E8725A] ml-1">達成！</span>
                </div>

                {/* 星評価 */}
                <div className="flex items-center justify-center gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <i key={i} className="ri-star-fill text-lg text-yellow-400"></i>
                  ))}
                </div>

                {/* コメント吹き出し */}
                <div className="relative bg-[#FDF4F2] rounded-2xl p-4 mb-4">
                  <div className="absolute -top-2 left-6 w-4 h-4 bg-[#FDF4F2] rotate-45"></div>
                  <p className="text-sm text-gray-700 leading-relaxed relative z-10">{result.comment}</p>
                </div>

                {/* Before → After タグ */}
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 bg-red-50 text-red-600 text-xs font-medium px-2.5 py-1 rounded-full border border-red-200">
                    <i className="ri-close-circle-line text-sm"></i>
                    {result.before}
                  </span>
                  <span className="inline-flex items-center gap-1 bg-green-50 text-green-600 text-xs font-medium px-2.5 py-1 rounded-full border border-green-200">
                    <i className="ri-checkbox-circle-line text-sm"></i>
                    {result.after}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-600">
            ※ 個人の結果には個人差があります
          </p>
        </div>
      </div>
    </section>
  );
}
