
export default function ConcernsSection() {
  const concerns = [
    {
      icon: 'ri-scales-3-line',
      number: '01',
      title: '何度もダイエットに\n失敗している',
      desc: '頑張っても結果が出ず、自信をなくしてしまっている',
      color: 'from-rose-50 to-red-50',
      iconBg: 'bg-rose-100',
      iconColor: 'text-rose-500',
      numColor: 'text-rose-300',
    },
    {
      icon: 'ri-loop-left-line',
      number: '02',
      title: 'リバウンドを\n繰り返してしまう',
      desc: '一時的に痩せても、すぐに元の体重に戻ってしまう',
      color: 'from-orange-50 to-amber-50',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-500',
      numColor: 'text-orange-300',
    },
    {
      icon: 'ri-question-line',
      number: '03',
      title: '自分に合った食事法が\nわからない',
      desc: '情報が多すぎて、何が正しいのか判断できない',
      color: 'from-yellow-50 to-lime-50',
      iconBg: 'bg-yellow-100',
      iconColor: 'text-yellow-600',
      numColor: 'text-yellow-300',
    },
    {
      icon: 'ri-time-line',
      number: '04',
      title: '忙しくてジムに\n通う時間がない',
      desc: '仕事や家事で、まとまった時間を確保できない',
      color: 'from-teal-50 to-cyan-50',
      iconBg: 'bg-teal-100',
      iconColor: 'text-teal-600',
      numColor: 'text-teal-300',
    },
    {
      icon: 'ri-user-unfollow-line',
      number: '05',
      title: '一人だと\n続かない',
      desc: 'モチベーションが続かず、途中で諦めてしまう',
      color: 'from-sky-50 to-indigo-50',
      iconBg: 'bg-sky-100',
      iconColor: 'text-sky-500',
      numColor: 'text-sky-300',
    },
    {
      icon: 'ri-emotion-sad-line',
      number: '06',
      title: '食事制限がつらくて\n挫折してしまう',
      desc: '我慢ばかりのダイエットでストレスが溜まってしまう',
      color: 'from-violet-50 to-purple-50',
      iconBg: 'bg-violet-100',
      iconColor: 'text-violet-500',
      numColor: 'text-violet-300',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* ヘッダー */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-teal-600 tracking-widest uppercase mb-3">Concerns</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            こんな<span className="text-teal-600">お悩み</span>ありませんか？
          </h2>
          <p className="text-sm sm:text-base text-gray-500">一つでも当てはまるなら、ReFit Onlineがお力になれます</p>
        </div>

        {/* お悩みグリッド */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
          {concerns.map((concern, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br ${concern.color} rounded-2xl p-5 sm:p-6 border border-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden`}
            >
              {/* 背景番号（装飾） */}
              <span className={`absolute top-2 right-3 text-5xl font-black ${concern.numColor} opacity-40 leading-none select-none`}>
                {concern.number}
              </span>

              {/* アイコン */}
              <div className={`w-12 h-12 ${concern.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                <i className={`${concern.icon} text-2xl ${concern.iconColor}`}></i>
              </div>

              {/* タイトル */}
              <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-2 leading-snug whitespace-pre-line">
                {concern.title}
              </h3>

              {/* 説明 */}
              <p className="text-xs text-gray-500 leading-relaxed">
                {concern.desc}
              </p>

              {/* チェックアイコン */}
              <div className="mt-3 flex items-center gap-1">
                <i className="ri-checkbox-circle-fill text-base text-rose-400"></i>
                <span className="text-xs text-rose-400 font-medium">当てはまる</span>
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
