import MicroCta from '../../../components/feature/MicroCta';

export default function PlanComparisonSection() {
  const plans = [
    {
      name: 'ライトプラン',
      price: '19,800',
      period: '3ヶ月',
      monthlyPrice: '6,600',
      description: '初めての方におすすめ',
      features: [
        { text: '専属トレーナーによる毎日サポート', included: true },
        { text: '食事指導（毎日）', included: true },
        { text: '運動指導', included: true },
        { text: 'LINEでの質問対応（24時間以内）', included: true },
        { text: '遺伝子検査キット', included: false },
        { text: 'スマートバンド', included: false },
      ],
      badge: null,
      popular: false,
      premium: false,
      link: 'https://square.link/u/jKXiWkWc',
    },
    {
      name: 'スタンダードプラン',
      price: '59,400',
      period: '3ヶ月',
      monthlyPrice: '19,800',
      description: '本気で結果を出したい方に',
      features: [
        { text: '専属トレーナーによる毎日サポート', included: true },
        { text: '食事指導（毎日）', included: true },
        { text: '運動指導', included: true },
        { text: 'LINEでの質問対応（24時間以内）', included: true },
        { text: '遺伝子検査キット', included: true },
        { text: 'スマートバンド', included: false },
      ],
      badge: '人気No.1',
      popular: true,
      premium: false,
      link: 'https://square.link/u/n3FGhUHC',
    },
    {
      name: 'プレミアムプラン',
      price: '89,400',
      period: '3ヶ月',
      monthlyPrice: '29,800',
      description: '最高のサポートで確実に成功',
      features: [
        { text: '専属トレーナーによる毎日サポート', included: true },
        { text: '食事指導（毎日）', included: true },
        { text: '運動指導', included: true },
        { text: 'LINEでの質問対応（24時間以内）', included: true },
        { text: '遺伝子検査キット', included: true },
        { text: 'スマートバンド', included: true },
      ],
      badge: null,
      popular: false,
      premium: true,
      link: 'https://square.link/u/EnMlo1wR',
    },
  ];

  const comparisonItems = [
    {
      icon: 'ri-file-list-3-line',
      feature: '食事・運動オーダーメイドプラン作成',
      light: true,
      standard: true,
      premium: true,
    },
    {
      icon: 'ri-message-3-line',
      feature: '専属トレーナーによるオンライン管理指導',
      light: true,
      standard: true,
      premium: true,
    },
    {
      icon: 'ri-feedback-line',
      feature: '実施内容に対するフィードバック',
      light: true,
      standard: true,
      premium: true,
    },
    {
      icon: null,
      feature: '遺伝子検査キット',
      light: false,
      standard: true,
      premium: true,
    },
    {
      icon: 'ri-shield-check-line',
      feature: 'リバウンド防止プログラム',
      light: false,
      standard: true,
      premium: true,
    },
    {
      icon: null,
      feature: 'Xiaomiスマートバンド',
      light: false,
      standard: false,
      premium: true,
    },
    {
      icon: 'ri-line-chart-line',
      feature: '活動量・睡眠データ活用',
      light: false,
      standard: false,
      premium: true,
    },
    {
      icon: 'ri-copper-coin-line',
      feature: '入会金・追加費用',
      light: 'なし',
      standard: 'なし',
      premium: 'なし',
    },
  ];

  const renderCell = (value: boolean | string, colType: 'light' | 'standard' | 'premium' = 'light') => {
    if (typeof value === 'string') {
      return (
        <span className="text-sm font-medium text-gray-700">{value}</span>
      );
    }
    if (value) {
      return (
        <div className="flex items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center">
            <i className="ri-check-line text-white text-base"></i>
          </div>
        </div>
      );
    }
    return (
      <div className="flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center">
          <i className="ri-close-line text-gray-300 text-base"></i>
        </div>
      </div>
    );
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="px-5">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            あなたに合った<span className="text-teal-500">プラン</span>を選ぼう
          </h2>
          <p className="text-lg text-gray-600">3つのプランから、あなたの目標に合わせてお選びいただけます</p>
        </div>

        {/* プランカード - 3枚横並び */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto items-end">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                plan.popular
                  ? 'shadow-2xl border-2 border-teal-400 scale-105 bg-white'
                  : plan.premium
                  ? 'shadow-xl border-2 border-orange-400 bg-white hover:shadow-2xl'
                  : 'shadow-lg border border-gray-100 bg-white hover:shadow-xl'
              }`}
            >
              {plan.badge && (
                <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white text-sm font-bold text-center py-2.5 tracking-wide">
                  {plan.badge}
                </div>
              )}
              {plan.premium && (
                <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white text-sm font-bold text-center py-2.5 tracking-wide">
                  プレミアム
                </div>
              )}

              <div className={`p-7 ${plan.popular || plan.premium ? 'pt-6' : 'pt-8'}`}>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{plan.name}</h3>
                <p className="text-sm text-gray-500 mb-5">{plan.description}</p>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1 mb-1">
                    <span
                      className={`text-4xl font-bold ${
                        plan.popular ? 'text-teal-600' : plan.premium ? 'text-orange-500' : 'text-gray-800'
                      }`}
                    >
                      {plan.monthlyPrice}
                    </span>
                    <span className="text-gray-600 text-sm font-medium">円</span>
                    <span className="text-xs text-gray-400 ml-0.5">/ 月</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">3ヶ月合計 {plan.price}円（税込）</p>
                </div>

                <div className="space-y-2.5 mb-7">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      {feature.included ? (
                        <i
                          className={`ri-check-line text-lg flex-shrink-0 mt-0.5 ${
                            plan.premium ? 'text-orange-500' : 'text-teal-600'
                          }`}
                        ></i>
                      ) : (
                        <i className="ri-close-line text-lg text-gray-300 flex-shrink-0 mt-0.5"></i>
                      )}
                      <span
                        className={`text-sm leading-snug ${feature.included ? 'text-gray-700' : 'text-gray-400'}`}
                      >
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href={plan.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center font-bold py-3.5 rounded-xl transition-all duration-300 whitespace-nowrap cursor-pointer text-sm ${
                    plan.popular
                      ? 'bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-lg hover:from-teal-600 hover:to-teal-700 hover:shadow-xl'
                      : plan.premium
                      ? 'bg-gradient-to-r from-orange-400 to-orange-500 text-white shadow-lg hover:from-orange-500 hover:to-orange-600 hover:shadow-xl'
                      : 'bg-gray-900 text-white hover:bg-gray-700'
                  }`}
                >
                  webで簡単決済
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* 比較表 */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-10 border border-gray-100 max-w-5xl mx-auto">
          {/* ヘッダー */}
          <div className="grid grid-cols-4 border-b border-gray-200">
            <div className="px-6 py-5 bg-white" />
            <div className="px-4 py-5 text-center border-l border-gray-200">
              <span className="text-sm font-bold text-gray-700">ライトプラン</span>
            </div>
            <div className="px-4 py-5 text-center border-l border-gray-200 bg-teal-50/60">
              <span className="text-sm font-bold text-teal-600">スタンダードプラン</span>
            </div>
            <div className="px-4 py-5 text-center border-l border-gray-200 bg-orange-50/60">
              <span className="text-sm font-bold text-orange-500">プレミアムプラン</span>
            </div>
          </div>

          {/* 行 */}
          {comparisonItems.map((item, index) => (
            <div
              key={index}
              className={`grid grid-cols-4 border-b border-gray-100 last:border-b-0 ${
                index % 2 === 0 ? 'bg-white' : 'bg-gray-50/40'
              }`}
            >
              {/* 項目名 */}
              <div className="px-6 py-6 flex items-center gap-3">
                {item.icon && (
                  <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                    <i className={`${item.icon} text-teal-500 text-base`}></i>
                  </div>
                )}
                <span className="text-sm font-medium text-gray-800">{item.feature}</span>
              </div>

              {/* ライト */}
              <div className="px-4 py-6 flex items-center justify-center border-l border-gray-100">
                {renderCell(item.light, 'light')}
              </div>

              {/* スタンダード */}
              <div className="px-4 py-6 flex items-center justify-center border-l border-gray-100 bg-teal-50/30">
                {renderCell(item.standard, 'standard')}
              </div>

              {/* プレミアム */}
              <div className="px-4 py-6 flex items-center justify-center border-l border-gray-100 bg-orange-50/20">
                {renderCell(item.premium, 'premium')}
              </div>
            </div>
          ))}
        </div>

        {/* 補足テキスト */}
        <div className="text-center">
          <p className="text-base text-gray-500">※ 価格は全て税込表示です</p>
        </div>

        <MicroCta />
      </div>
    </section>
  );
}
