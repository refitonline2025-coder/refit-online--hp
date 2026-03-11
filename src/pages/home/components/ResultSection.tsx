import { useState } from 'react';

export default function ResultSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const results = [
    {
      name: '佐藤 美咲様',
      age: '20代/女性',
      plan: 'プレミアムプラン 3ヶ月',
      image: 'https://static.readdy.ai/image/35ed947d703ab27b65e8910bc3f502d9/f642f2ad2eb76691ee2c2eb5d5971b08.jpeg',
      weight: '-6kg',
      beforeAfter: {
        before: '食事制限だけのダイエットで停滞期に悩んでいました',
        after: '専属トレーナーの食事指導で健康的に-6kg達成！'
      },
      comment: 'オンラインでも対面と変わらないサポートで安心でした'
    },
    {
      name: '田中 麻衣様',
      age: '30代/女性',
      plan: 'プレミアムプラン 3ヶ月',
      image: 'https://static.readdy.ai/image/35ed947d703ab27b65e8910bc3f502d9/50ccc1474508a3632e28c96ff150802e.jpeg',
      weight: '-8kg',
      beforeAfter: {
        before: '産後太りで自信を失っていました',
        after: '毎日の食事サポートで無理なく-8kg達成！体調も良くなりました'
      },
      comment: '子育て中でもオンラインなので続けられました'
    },
    {
      name: '鈴木 彩花様',
      age: '30代/女性',
      plan: 'プレミアムプラン 3ヶ月',
      image: 'https://static.readdy.ai/image/35ed947d703ab27b65e8910bc3f502d9/582763a5dcc503173fdbdd3126313b22.jpeg',
      weight: '-10kg',
      beforeAfter: {
        before: '仕事が忙しく運動する時間がなく、体重が増加していました',
        after: 'オンライン指導で-10kg達成！会食も楽しめています'
      },
      comment: '忙しい私でも続けられるプログラムでした'
    },
    {
      name: '松本 理香様',
      age: '20代/女性',
      plan: 'プレミアムプラン 3ヶ月',
      image: 'https://static.readdy.ai/image/35ed947d703ab27b65e8910bc3f502d9/d9129a3693080f4b8e4491e5252f3bda.jpeg',
      weight: '-7kg',
      beforeAfter: {
        before: '代謝が落ち、何をしても痩せませんでした',
        after: '専門指導で-7kg達成！体力も回復しました'
      },
      comment: '正しい方法で変われました'
    },
    {
      name: '山田 健太様',
      age: '30代/男性',
      plan: 'プレミアムプラン 6ヶ月',
      image: 'https://static.readdy.ai/image/35ed947d703ab27b65e8910bc3f502d9/660b9648c806e466ce75cdc69a36927a.jpeg',
      weight: '-12kg',
      beforeAfter: {
        before: '会食が多く、生活習慣病のリスクが高まっていました',
        after: '仕事をしながら-12kg達成！健康診断も改善しました'
      },
      comment: '忙しい男性でも無理なく続けられるプログラムでした'
    },
    {
      name: '中村 愛美様',
      age: '20代/女性',
      plan: 'プレミアムプラン 3ヶ月',
      image: 'https://static.readdy.ai/image/35ed947d703ab27b65e8910bc3f502d9/d7411d6bc12f490cbef347486b913a8a.jpeg',
      weight: '-5kg',
      beforeAfter: {
        before: '学生時代から続く不規則な食生活で体調不良でした',
        after: '食習慣改善で-5kg達成！肌荒れも改善しました'
      },
      comment: '食事の大切さを改めて実感できました'
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? results.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === results.length - 1 ? 0 : prev + 1));
  };

  const currentResult = results[currentIndex];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            ReFit Onlineを使った<span className="text-teal-500">お客様の変化</span>
          </h2>
          <p className="text-base text-gray-600">
            科学的根拠に基づいた食事指導で、確実な結果を実現
          </p>
        </div>

        {/* シングルカードスライダー */}
        <div className="relative">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="flex flex-col md:grid md:grid-cols-2 gap-0">
              {/* 上側（スマホ）／左側（PC）：画像 */}
              <div className="relative w-full">
                {currentResult.image ? (
                  <div className="w-full h-64 sm:h-80 md:h-full md:min-h-[420px] overflow-hidden">
                    <img
                      src={currentResult.image}
                      alt={currentResult.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                ) : (
                  <div className="w-full h-64 sm:h-80 md:h-full md:min-h-[420px] bg-gray-100 flex items-center justify-center">
                    <div className="text-center">
                      <i className="ri-user-line text-6xl text-gray-400 mb-2"></i>
                      <p className="text-sm text-gray-500">お客様の写真</p>
                    </div>
                  </div>
                )}

                {/* 達成kg数バッジ */}
                <div className="absolute top-4 right-4 bg-teal-500 text-white rounded-full px-5 py-2.5 shadow-lg">
                  <div className="text-2xl font-bold leading-none">{currentResult.weight}</div>
                  <div className="text-xs mt-0.5 opacity-90">達成</div>
                </div>
              </div>

              {/* 下側（スマホ）／右側（PC）：コンテンツ */}
              <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                <div className="mb-5">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">{currentResult.name}</h3>
                  <p className="text-sm text-gray-600 mb-1">{currentResult.age}</p>
                  <p className="text-sm text-teal-600 font-medium">{currentResult.plan}</p>
                </div>

                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-5 leading-relaxed">
                  {currentResult.comment}
                </h4>

                <div className="space-y-3">
                  <div className="bg-red-50 rounded-xl p-4 border-l-4 border-red-400">
                    <p className="text-xs font-bold text-red-600 mb-1.5 flex items-center gap-2">
                      <i className="ri-close-circle-line text-base"></i>
                      Before
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed">{currentResult.beforeAfter.before}</p>
                  </div>
                  <div className="bg-teal-50 rounded-xl p-4 border-l-4 border-teal-400">
                    <p className="text-xs font-bold text-teal-600 mb-1.5 flex items-center gap-2">
                      <i className="ri-checkbox-circle-line text-base"></i>
                      After
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed">{currentResult.beforeAfter.after}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* インジケーター＋ナビゲーションボタン（カード下に配置） */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={handlePrev}
              className="w-12 h-12 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center cursor-pointer group"
              aria-label="前へ"
            >
              <i className="ri-arrow-left-s-line text-2xl text-gray-600 group-hover:text-teal-600"></i>
            </button>

            <div className="flex gap-2">
              {results.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === index ? 'bg-teal-600 w-8' : 'bg-gray-300 w-2'
                  }`}
                  aria-label={`スライド${index + 1}へ`}
                ></button>
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-12 h-12 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center cursor-pointer group"
              aria-label="次へ"
            >
              <i className="ri-arrow-right-s-line text-2xl text-gray-600 group-hover:text-teal-600"></i>
            </button>
          </div>
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