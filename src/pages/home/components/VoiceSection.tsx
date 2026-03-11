
import { useState } from 'react';

export default function VoiceSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      name: '中島 恵子様',
      age: '40代女性',
      gender: 'female',
      rating: 5,
      comment: '40代になってから代謝が落ち、何をしても体重が減らなくなっていました。ReFit Onlineの専属トレーナーに食事を見直してもらい、3ヶ月で-7kg達成。体が軽くなり、毎日が楽しくなりました！',
      plan: 'プレミアムプラン 3ヶ月'
    },
    {
      name: '藤田 裕子様',
      age: '30代女性',
      gender: 'female',
      rating: 5,
      comment: '産後から体型が戻らず悩んでいましたが、子育て中でもオンラインなので隙間時間に相談できました。食事の改善だけで-8kg達成！体調も肌の調子も格段に良くなりました。',
      plan: 'プレミアムプラン 3ヶ月'
    },
    {
      name: '岡本 真由美様',
      age: '40代女性',
      gender: 'female',
      rating: 5,
      comment: '更年期で体重が増え続けていたのが悩みでした。無理な食事制限なしで-9kg達成できたのは本当に驚きです。トレーナーさんが毎日励ましてくれるので続けられました。',
      plan: 'プレミアムプラン 6ヶ月'
    },
    {
      name: '石川 大輔様',
      age: '40代男性',
      gender: 'male',
      rating: 5,
      comment: '健康診断で引っかかり、本気で体を変えようと決意しました。仕事が忙しくてもオンラインで続けられ、6ヶ月で-14kg達成。血液検査の数値も改善し、医師にも驚かれました。',
      plan: 'プレミアムプラン 6ヶ月'
    },
    {
      name: '村上 さおり様',
      age: '30代女性',
      gender: 'female',
      rating: 5,
      comment: '30代に入ってから食べる量は変わらないのに太りやすくなり困っていました。食事の質を変えるだけでこんなに変わるとは思いませんでした。-6kg達成で自信が戻りました！',
      plan: 'プレミアムプラン 3ヶ月'
    },
    {
      name: '小林 浩二様',
      age: '30代男性',
      gender: 'male',
      rating: 5,
      comment: '外食が多い仕事柄、食事管理が難しいと思っていましたが、外食でも実践できる方法を教えてもらえました。3ヶ月で-10kg達成し、体が軽くなって仕事のパフォーマンスも上がりました。',
      plan: 'プレミアムプラン 3ヶ月'
    },
  ];

  const itemsPerPage = 3;
  const maxIndex = Math.ceil(reviews.length / itemsPerPage) - 1;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section className="py-8 sm:py-10 bg-gradient-to-b from-teal-50 to-white">
      <div className="px-4">
        <div className="text-center mb-6">
          <p className="text-sm text-teal-600 font-medium mb-2">Voice</p>
          <h2 className="text-4xl font-bold text-gray-900">
            お客様の<span className="text-teal-600">声</span>
          </h2>
        </div>

        {/* Google口コミ - 中央配置 */}
        <div className="flex justify-center mb-10">
          <img
            src="https://cloud-gym.com/wp-content/themes/cloudGYM-themes-2025/assets/img/voice/google_review_head_img.webp"
            alt="Google口コミ平均4.8"
            className="max-w-full px-4"
          />
        </div>

        {/* 口コミカードスライダー */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* カードコンテナ */}
            <div className="overflow-hidden mb-6">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {Array.from({ length: Math.ceil(reviews.length / itemsPerPage) }).map((_, pageIndex) => (
                  <div key={pageIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-2">
                      {reviews.slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage).map((review, index) => (
                        <div
                          key={index}
                          className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-5 border border-gray-100"
                        >
                          {/* 星評価 */}
                          <div className="flex items-center gap-1 mb-3">
                            {Array.from({ length: 5 }).map((_, starIndex) => (
                              <i
                                key={starIndex}
                                className={`ri-star-fill text-lg ${
                                  starIndex < review.rating ? 'text-yellow-400' : 'text-gray-300'
                                }`}
                              ></i>
                            ))}
                          </div>

                          {/* コメント */}
                          <p className="text-sm text-gray-700 leading-relaxed mb-4 min-h-[120px]">
                            {review.comment}
                          </p>

                          {/* ユーザー情報 */}
                          <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${review.gender === 'male' ? 'bg-blue-100' : 'bg-pink-100'}`}>
                              <i className={`ri-user-line text-lg ${review.gender === 'male' ? 'text-blue-500' : 'text-pink-500'}`}></i>
                            </div>
                            <div>
                              <p className="text-sm font-bold text-gray-900">{review.name}</p>
                              <p className="text-xs text-gray-600">{review.age}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ナビゲーションボタンとインジケーター */}
            <div className="flex items-center justify-center gap-6">
              <button
                onClick={handlePrev}
                className="w-12 h-12 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center cursor-pointer group"
                aria-label="前へ"
              >
                <i className="ri-arrow-left-s-line text-2xl text-gray-600 group-hover:text-teal-600"></i>
              </button>

              <div className="flex justify-center gap-1.5">
                {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      currentIndex === index ? 'bg-teal-600 w-6' : 'bg-gray-300'
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
        </div>

        {/* 注釈 */}
        <div className="text-center mt-6">
          <p className="text-xs text-gray-500">※2025年9月時点当社調べ</p>
        </div>
      </div>
    </section>
  );
}
