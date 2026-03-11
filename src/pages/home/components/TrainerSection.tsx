import { useState } from 'react';

export default function TrainerSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const concierges = [
    {
      name: "山本 彩香",
      nameRomaji: "Ayaka Yamamoto",
      image: "https://static.readdy.ai/image/35ed947d703ab27b65e8910bc3f502d9/97d3cf18ae80b8b0592b020b801e3729.jpeg",
      comment: "食べることが大好きな方でも大丈夫。我慢しないダイエットを一緒に見つけましょう!毎日の小さな変化を楽しみながら、理想の自分に近づいていきましょう。",
      certifications: ["管理栄養士", "公認スポーツ栄養士"],
      experience: "指導実績300名以上",
      specialties: [
        { icon: "ri-restaurant-line", text: "外食が多い方向け" },
        { icon: "ri-heart-line", text: "リバウンド防止" },
        { icon: "ri-cake-line", text: "甘いもの好き対応" }
      ]
    },
    {
      name: "中村 美優",
      nameRomaji: "Miyu Nakamura",
      image: "https://static.readdy.ai/image/35ed947d703ab27b65e8910bc3f502d9/b0097bc02ff6a069ebec941e3a690a57.jpeg",
      comment: "忙しい毎日でも続けられる食事法をご提案します。あなたのペースで進めていきましょう!時短レシピや外食時のコツもお伝えしますね。",
      certifications: ["管理栄養士", "健康運動指導士"],
      experience: "指導実績250名以上",
      specialties: [
        { icon: "ri-time-line", text: "忙しい方向け" },
        { icon: "ri-briefcase-line", text: "働く女性サポート" },
        { icon: "ri-shopping-bag-line", text: "コンビニ活用術" }
      ]
    },
    {
      name: "小林 真央",
      nameRomaji: "Mao Kobayashi",
      image: "https://static.readdy.ai/image/35ed947d703ab27b65e8910bc3f502d9/7c817a13077c107da66e5c207e2eea5d.jpeg",
      comment: "リバウンドを繰り返してきた方も安心してください。根本から体質を変えていきます!科学的なアプローチで、もう失敗しない身体づくりをサポートします。",
      certifications: ["管理栄養士", "ダイエット検定1級"],
      experience: "指導実績400名以上",
      specialties: [
        { icon: "ri-refresh-line", text: "リバウンド経験者" },
        { icon: "ri-flask-line", text: "科学的アプローチ" },
        { icon: "ri-line-chart-line", text: "長期サポート" }
      ]
    },
    {
      name: "渡辺 結衣",
      nameRomaji: "Yui Watanabe",
      image: "https://static.readdy.ai/image/35ed947d703ab27b65e8910bc3f502d9/90c372888837b1ec0ac9bff5acf4948d.jpeg",
      comment: "料理が苦手でも問題ありません。簡単で美味しいレシピで楽しくダイエットしましょう!コンビニ食の選び方もバッチリお教えします。",
      certifications: ["管理栄養士", "食生活アドバイザー"],
      experience: "指導実績200名以上",
      specialties: [
        { icon: "ri-knife-line", text: "料理初心者向け" },
        { icon: "ri-book-open-line", text: "簡単レシピ提案" },
        { icon: "ri-store-line", text: "コンビニ活用" }
      ]
    }
  ];

  // 3つずつ表示するため、最大インデックスを調整
  const maxIndex = concierges.length - 3;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section id="trainers" className="py-16 bg-gradient-to-b from-white via-teal-50/30 to-white overflow-hidden">
      <div className="px-5">
        {/* ダイエットコンシェルジュ紹介 */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-3">
              ReFitダイエットコンシェルジュ紹介
            </h3>
            <p className="text-sm text-teal-600 font-medium mb-1">
              弊社規定の栄養資格取得済み
            </p>
            <p className="text-base text-gray-600">
              あなたの食生活を優しくサポートする専属コンシェルジュ
            </p>
            <p className="text-xs text-gray-400 mt-2">
              ※ コンシェルジュはプログラム監修を行っており、日々のサポートは専属トレーナーが対応します（写真はイメージ）
            </p>
            <p className="text-xs text-gray-400 mt-1">
              ※ 担当コンシェルジュの指名はお受けしておりません
            </p>
          </div>

          {/* スライダーコンテナ */}
          <div className="relative">
            {/* カードコンテナ - 3つずつ表示 */}
            <div className="overflow-hidden mb-6">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
              >
                {concierges.map((concierge, index) => (
                  <div
                    key={index}
                    className="w-1/3 flex-shrink-0 px-2"
                  >
                    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 h-full">
                      <div className="aspect-[3/4] overflow-hidden">
                        <img 
                          src={concierge.image} 
                          alt={concierge.name}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div className="p-5">
                        {/* 名前 */}
                        <div className="text-center mb-3">
                          <h4 className="text-xl font-bold text-gray-900 mb-1">{concierge.name}</h4>
                          <p className="text-sm text-gray-500">{concierge.nameRomaji}</p>
                        </div>

                        {/* 指導実績 */}
                        <div className="mb-3 text-center">
                          <span className="inline-flex items-center gap-1.5 text-sm text-gray-600 bg-gray-50 px-3 py-1.5 rounded-lg">
                            <i className="ri-trophy-line text-amber-500"></i>
                            <span className="font-medium">{concierge.experience}</span>
                          </span>
                        </div>

                        {/* 得意分野 */}
                        <div className="mb-3">
                          <h5 className="text-xs font-semibold text-gray-700 mb-2 text-center">得意分野</h5>
                          <div className="space-y-1.5">
                            {concierge.specialties.map((specialty, idx) => (
                              <div 
                                key={idx}
                                className="flex items-center gap-2 text-sm text-gray-600"
                              >
                                <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                                  <i className={`${specialty.icon} text-teal-600`}></i>
                                </div>
                                <span className="text-xs">{specialty.text}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* コメント */}
                        <div className="pt-3 border-t border-gray-100">
                          <p className="text-sm text-gray-600 leading-relaxed">{concierge.comment}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ナビゲーションボタンとインジケーター */}
            <div className="flex items-center justify-center gap-6">
              {/* 前へボタン */}
              <button
                onClick={handlePrev}
                className="w-12 h-12 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center cursor-pointer group"
                aria-label="前へ"
              >
                <i className="ri-arrow-left-s-line text-2xl text-gray-600 group-hover:text-teal-600"></i>
              </button>

              {/* インジケーター */}
              <div className="flex justify-center gap-2">
                {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      currentIndex === index ? 'bg-teal-600 w-6' : 'bg-gray-300'
                    }`}
                    aria-label={`スライド${index + 1}へ`}
                  ></button>
                ))}
              </div>

              {/* 次へボタン */}
              <button
                onClick={handleNext}
                className="w-12 h-12 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center cursor-pointer group"
                aria-label="次へ"
              >
                <i className="ri-arrow-right-s-line text-2xl text-gray-600 group-hover:text-teal-600"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}