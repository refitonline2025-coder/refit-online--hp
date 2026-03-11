
export default function ConcernsSection() {
  const concerns = [
    {
      icon: 'ri-scales-3-line',
      title: '何度もダイエットに失敗している',
      desc: '頑張っても結果が出ず、自信をなくしてしまっている',
    },
    {
      icon: 'ri-loop-left-line',
      title: 'リバウンドを繰り返してしまう',
      desc: '一時的に痩せても、すぐに元の体重に戻ってしまう',
    },
    {
      icon: 'ri-question-line',
      title: '自分に合った食事法がわからない',
      desc: '情報が多すぎて、何が正しいのか判断できない',
    },
    {
      icon: 'ri-time-line',
      title: '忙しくてジムに通う時間がない',
      desc: '仕事や家事で、まとまった時間を確保できない',
    },
    {
      icon: 'ri-user-unfollow-line',
      title: '一人だと続かない',
      desc: 'モチベーションが続かず、途中で諦めてしまう',
    },
    {
      icon: 'ri-emotion-sad-line',
      title: '食事制限がつらくて挫折してしまう',
      desc: '我慢ばかりのダイエットでストレスが溜まってしまう',
    },
  ];

  return (
    <section className="fade-in-up py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* ヘッダー */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-[#E8725A] tracking-widest uppercase mb-3">Concerns</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            こんな<span className="text-[#E8725A]">お悩み</span>ありませんか？
          </h2>
          <p className="text-sm sm:text-base text-gray-500">一つでも当てはまるなら、ReFit Onlineがお力になれます</p>
        </div>

        {/* お悩みグリッド */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {concerns.map((concern, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-white rounded-xl border border-[#FAE8E4] shadow-sm p-5 hover:border-[#F0A898] hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[#FDF4F2] rounded-full flex items-center justify-center flex-shrink-0">
                <i className={`${concern.icon} text-xl text-[#E8725A]`}></i>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm">{concern.title}</h3>
                <p className="text-xs text-gray-500 mt-1">{concern.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA矢印 */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-full shadow-md">
            <i className="ri-arrow-down-line text-xl animate-bounce"></i>
            <span className="font-bold text-base whitespace-nowrap">ReFit Onlineがすべて解決します</span>
            <i className="ri-arrow-down-line text-xl animate-bounce"></i>
          </div>
        </div>
      </div>
    </section>
  );
}
