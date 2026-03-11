import React from 'react';

export default function FlowSection() {
  const steps = [
    {
      number: '01',
      title: 'LINEで無料相談',
      description: 'まずはLINEで気軽にご相談。あなたの目標や悩みをお聞きします。',
      icon: 'ri-chat-1-line',
      color: 'from-[#E8725A] to-[#D4604A]',
    },
    {
      number: '02',
      title: 'プラン選択・お申し込み',
      description: '最適なプランをご提案。納得いただけたらお申し込みへ。',
      icon: 'ri-file-list-3-line',
      color: 'from-[#E8725A] to-[#D4604A]',
    },
    {
      number: '03',
      title: '遺伝子検査キット送付',
      description: 'スタンダード/プレミアムプランの方には検査キットをお届け。',
      icon: 'ri-test-tube-line',
      color: 'from-[#E8725A] to-[#D4604A]',
    },
    {
      number: '04',
      title: 'オーダーメイドプラン作成',
      description: '検査結果と目標に基づき、あなた専用プランを作成。',
      icon: 'ri-draft-line',
      color: 'from-[#E8725A] to-[#D4604A]',
    },
    {
      number: '05',
      title: 'サポート開始',
      description: '専属トレーナーによる毎日のサポートがスタート！',
      icon: 'ri-user-heart-line',
      color: 'from-[#E8725A] to-[#D4604A]',
    },
  ];

  return (
    <section id="flow" className="fade-in-up py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="px-5">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-[#FAEAE6] text-[#D4604A] text-base font-medium rounded-full mb-4">
            Flow
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            ご利用の流れ
          </h2>
          <p className="text-lg text-gray-600">
            お申し込みからサポート開始まで、簡単5ステップ
          </p>
        </div>

        {/* タイムライン形式 */}
        <div className="relative">
          {/* 中央の縦線 */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#F0A898] via-[#F0A898] to-[#F0A898]"></div>

          <div className="space-y-0">
            {steps.map((step, index) => (
              <div key={index} className="relative pl-20 pb-8 last:pb-0">
                {/* ステップ番号（丸） */}
                <div
                  className="absolute left-0 w-16 h-16 bg-[#FAEAE6] rounded-full flex items-center justify-center shadow-lg z-10"
                >
                  <span className="text-[#E8725A] font-bold text-2xl">{index + 1}</span>
                </div>

                {/* カード */}
                <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center gap-4 mb-3">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center shadow-sm`}
                    >
                      <i className={`${step.icon} text-2xl text-white`}></i>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                        Step {step.number}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                  </div>
                  <p className="text-base text-gray-600 leading-relaxed pl-16">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 補足メッセージ */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FDF4F2] to-[#FAEAE6] px-8 py-5 rounded-2xl border border-[#F0A898] shadow-sm">
            <div className="w-12 h-12 bg-[#E8725A] rounded-full flex items-center justify-center">
              <i className="ri-time-line text-2xl text-white"></i>
            </div>
            <p className="text-xl text-gray-700">
              <span className="font-bold text-[#E8725A]">最短翌日</span>からサポート開始可能！
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
