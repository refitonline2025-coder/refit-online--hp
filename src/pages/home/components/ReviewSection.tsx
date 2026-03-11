export default function ReviewSection() {
  const reviews = [
    {
      name: '小林 真由美 様',
      age: '20代/女性',
      rating: 5,
      date: '2025年1月',
      comment: '3ヶ月で-8kg達成！専属トレーナーの毎日の食事指導が本当に心強かったです。リバウンドもなく、健康的に痩せることができました。オンラインなので通う手間もなく、忙しい私にぴったりでした。',
      image: 'https://static.readdy.ai/image/35ed947d703ab27b65e8910bc3f502d9/d0731fca0c46de14b99e04b875bce71d.jpeg',
      gender: 'female'
    },
    {
      name: '伊藤 由香 様',
      age: '30代/女性',
      rating: 4,
      date: '2025年2月',
      comment: '年齢のせいか何をやっても痩せなかったのに、プロに食事を見てもらったら3ヶ月でウエスト-8cm。『私、今まで栄養不足で太ってたんですね』という言葉に目から鱗でした。人生最後のダイエットになりそうです。',
      image: 'https://static.readdy.ai/image/35ed947d703ab27b65e8910bc3f502d9/e6915e9df50e04d81f3ae85e684383fc.jpeg',
      gender: 'female'
    },
    {
      name: '渡辺 奈々 様',
      age: '30代/女性',
      rating: 5,
      date: '2025年3月',
      comment: 'Meta認証されているので安心して始められました。24時間チャットサポートがあるので、疑問をすぐに解決できるのが良いです。運動が苦手な私でも、自分のペースで続けられています。見た目が明らかに変わりました！',
      image: 'https://static.readdy.ai/image/35ed947d703ab27b65e8910bc3f502d9/d9ea33cb0587357e0f5f109ed61602c7.jpeg',
      gender: 'female'
    },
    {
      name: '佐々木 大輔 様',
      age: '30代/男性',
      rating: 5,
      date: '2025年2月',
      comment: '独学でダイエットしていた時は全然続かなかったのですが、専属トレーナーのサポートで12ヶ月継続できています。食生活が変わって体の調子も良くなりました。一生モノの食事習慣が身につきました！',
      image: 'https://static.readdy.ai/image/35ed947d703ab27b65e8910bc3f502d9/75a7e69aae291e8868e5315cf561f74e.jpeg',
      gender: 'male'
    },
  ];

  return (
    <section id="reviews" className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="px-5">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            お客様からの口コミ
          </h2>
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <i key={star} className="ri-star-fill text-yellow-400 text-xl"></i>
              ))}
            </div>
            <span className="text-xl font-bold text-gray-900">4.8</span>
            <span className="text-sm text-gray-600">(128件のレビュー)</span>
          </div>
          <p className="text-sm text-gray-600">
            実際にご利用いただいたお客様からの声をご紹介します
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 hover:border-teal-300 transition-all duration-300 p-5"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-gray-100">
                  <img 
                    src={review.image} 
                    alt={review.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-gray-900">{review.name}</h3>
                  <p className="text-sm text-gray-600">{review.age}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <i 
                      key={star} 
                      className={`${star <= review.rating ? 'ri-star-fill text-yellow-400' : 'ri-star-line text-gray-300'} text-base`}
                    ></i>
                  ))}
                </div>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>

              <p className="text-sm text-gray-700 leading-relaxed">
                {review.comment}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}