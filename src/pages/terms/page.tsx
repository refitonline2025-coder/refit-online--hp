import { useSEO } from '../../utils/seo';

export default function TermsPage() {
  useSEO({
    title: '利用規約 - ReFit Online',
    description: 'ReFit Onlineの利用規約ページです。サービスをご利用いただく前に必ずお読みください。',
    keywords: 'ReFit Online, 利用規約, 規約',
    canonical: '/terms',
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: '利用規約 - ReFit Online',
      url: 'VITE_SITE_URL/terms',
      description: 'ReFit Onlineの利用規約ページです。'
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            注意事項・契約条件等
          </h1>
          <p className="text-base sm:text-lg text-gray-600">
            ご契約前に必ずご確認ください
          </p>
        </div>

        <div className="space-y-8 sm:space-y-10">
          {/* 重要な前提事項 */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <i className="ri-alert-line text-2xl text-red-600"></i>
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  サービスの性質について
                </h2>
              </div>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <div className="bg-red-50 border-l-4 border-red-500 p-4 sm:p-5 rounded">
                <p className="font-bold text-red-900 mb-2 text-base sm:text-lg">【重要】</p>
                <p className="text-sm sm:text-base mb-3">
                  本サービスは、個人の努力と実践が前提となるものであり、短期間での成果を保証するものではありません。
                </p>
                <p className="text-sm sm:text-base">
                  提供するサポート内容（食事アドバイス・トレーニングプランの提案など）は、クライアントご自身の実践に基づきます。
                </p>
              </div>
              <div className="pl-4 border-l-2 border-gray-300">
                <p className="text-sm sm:text-base">
                  サポート期間内のアドバイス・プラン提供は行いますが、成果が出なかった場合の返金対応は一切いたしかねます。
                </p>
              </div>
              <div className="pl-4 border-l-2 border-gray-300">
                <p className="text-sm sm:text-base">
                  クライアントの進捗状況や実践状況に応じて、サポートの調整は可能ですが、指示を守らなかったことによる結果については責任を負いません。
                </p>
              </div>
            </div>
          </section>

          {/* 自動更新および決済に関する重要事項 */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <i className="ri-refresh-line text-2xl text-orange-600"></i>
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  自動更新および決済に関する重要事項
                </h2>
              </div>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <div className="bg-orange-50 border-l-4 border-orange-500 p-4 sm:p-5 rounded">
                <p className="font-bold text-orange-900 mb-2 text-base sm:text-lg">【自動更新制度について】</p>
                <p className="text-sm sm:text-base mb-3">
                  本サービスは「3ヶ月（90日）ごとの自動更新プラン」となります。初回決済日を起算日とし、3ヶ月後に同額が自動的にクレジットカードより引き落とされます。
                </p>
                <p className="text-xs sm:text-sm text-orange-800">
                  ※2026年2月21日以降にお申し込みのお客様が対象となります。2026年2月20日以前にご契約いただいたお客様は、ご契約時の条件が適用され、自動更新は行われません。
                </p>
              </div>
              <div className="pl-4 border-l-2 border-gray-300">
                <p className="font-bold text-gray-900 mb-2 text-base sm:text-lg">解約について：</p>
                <p className="text-sm sm:text-base mb-2">
                  解約をご希望の場合は、必ず【次回決済予定日の10日前まで】に、公式LINE宛にテキストメッセージにてお申し出ください。
                </p>
                <p className="text-sm sm:text-base">
                  期日を過ぎた場合は次期分の決済が自動実行され、その次の3ヶ月期間終了時での解約扱いとなります。
                </p>
              </div>
              <div className="pl-4 border-l-2 border-gray-300">
                <p className="font-bold text-gray-900 mb-2 text-base sm:text-lg">更新通知について：</p>
                <p className="text-sm sm:text-base">
                  当方から次回更新に関する事前のご案内（リマインド通知）は行っておりません。お客様ご自身での次回決済日のスケジュール管理をお願いいたします。
                </p>
              </div>
            </div>
          </section>

          {/* 返金・キャンセルについて */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <i className="ri-close-circle-line text-2xl text-red-600"></i>
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  返金・キャンセルについて
                </h2>
              </div>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <div className="bg-red-50 border-l-4 border-red-500 p-4 sm:p-5 rounded">
                <p className="font-bold text-red-900 mb-2 text-base sm:text-lg">【返金不可】</p>
                <p className="text-sm sm:text-base mb-3">
                  本サービスは、個人の努力と継続的な実践を前提としたサポート型プログラムです。
                </p>
                <p className="text-sm sm:text-base">
                  初回決済時、および自動更新時を問わず、ご入金（決済完了）後の返金対応はいかなる理由であっても一切行っておりません。
                </p>
              </div>
              <div className="pl-4 border-l-2 border-gray-300">
                <p className="text-sm sm:text-base">
                  ご契約の際は、この点をご理解・ご同意いただいたものとし、後日の返金請求には応じかねますので、予めご了承ください。
                </p>
              </div>
            </div>
          </section>

          {/* 健康・安全に関する注意事項 */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                <i className="ri-heart-pulse-line text-2xl text-teal-600"></i>
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  健康・安全に関する注意事項
                </h2>
              </div>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <div className="pl-4 border-l-2 border-gray-300">
                <p className="font-bold text-gray-900 mb-2 text-base sm:text-lg">医療行為ではありません：</p>
                <p className="text-sm sm:text-base">
                  本サービスは医療行為・治療・診断を目的としたものではなく、医師・管理栄養士等の専門資格に基づく医療的判断は行いません。持病、服薬中、妊娠中、または医師から運動・食事制限を指示されている場合は、必ず事前に申告し、医師の判断を優先してください。
                </p>
              </div>
              <div className="pl-4 border-l-2 border-gray-300">
                <p className="font-bold text-gray-900 mb-2 text-base sm:text-lg">自己責任での実践：</p>
                <p className="text-sm sm:text-base">
                  トレーニングや食事管理の実践は自己責任のもと行い、万が一体調不良や怪我が発生した場合も、当方は責任を負いかねます。
                </p>
              </div>
              <div className="pl-4 border-l-2 border-gray-300">
                <p className="font-bold text-gray-900 mb-2 text-base sm:text-lg">異常時の対応：</p>
                <p className="text-sm sm:text-base">
                  トレーニング実施中に痛み・違和感・体調不良が生じた場合は、直ちに実施を中止し、当方へ報告するものとします。無理な継続や自己判断による実施に起因する不具合については、当方は責任を負いかねます。
                </p>
              </div>
            </div>
          </section>

          {/* サポート内容について */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <i className="ri-customer-service-2-line text-2xl text-blue-600"></i>
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  サポート内容について
                </h2>
              </div>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <div className="pl-4 border-l-2 border-gray-300">
                <p className="font-bold text-gray-900 mb-2 text-base sm:text-lg">サポート時間：</p>
                <p className="text-sm sm:text-base">
                  サポートは、事前に定めた連絡手段（LINE等）および対応時間内に行います。即時対応・24時間対応・緊急対応は行っておりません。返信は原則として24時間以内に行います。
                </p>
              </div>
              <div className="pl-4 border-l-2 border-gray-300">
                <p className="font-bold text-gray-900 mb-2 text-base sm:text-lg">報告の重要性：</p>
                <p className="text-sm sm:text-base">
                  サポート期間中におけるアドバイス内容は、クライアントの報告内容・実践状況に基づいて行われます。報告が不十分、または長期間行われない場合、適切なサポートが提供できない可能性があることをご了承ください。
                </p>
              </div>
            </div>
          </section>

          {/* 個人情報の取り扱い */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <i className="ri-shield-user-line text-2xl text-purple-600"></i>
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  個人情報の取り扱い
                </h2>
              </div>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <div className="pl-4 border-l-2 border-gray-300">
                <p className="text-sm sm:text-base">
                  お預かりした個人情報や写真は、サポート目的以外には使用せず、外部に公開することはありません。
                </p>
              </div>
              <div className="pl-4 border-l-2 border-gray-300">
                <p className="text-sm sm:text-base">
                  モニター条件などもございません。ご自身の同意なく、写真や体験談を使用することはありません。
                </p>
              </div>
              <div className="pl-4 border-l-2 border-gray-300">
                <p className="text-sm sm:text-base">
                  サービス終了後、ご希望があればお預かりしたデータはすべて削除いたします。
                </p>
              </div>
            </div>
          </section>

          {/* 禁止事項 */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                <i className="ri-forbid-line text-2xl text-gray-600"></i>
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  禁止事項
                </h2>
              </div>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <div className="pl-4 border-l-2 border-gray-300">
                <p className="font-bold text-gray-900 mb-2 text-base sm:text-lg">コンテンツの無断利用：</p>
                <p className="text-sm sm:text-base">
                  本サービス内で提供する資料・メニュー・アドバイス内容の無断転載、第三者への共有、転売、二次利用は禁止します。
                </p>
              </div>
              <div className="pl-4 border-l-2 border-gray-300">
                <p className="font-bold text-gray-900 mb-2 text-base sm:text-lg">サービス提供の中止：</p>
                <p className="text-sm sm:text-base">
                  クライアントによる虚偽の申告、事前説明と異なる健康状態、または当方が不適切と判断する行為があった場合、サービス提供を中止することがあります。その場合においても返金対応は行いません。
                </p>
              </div>
            </div>
          </section>

          {/* お支払い */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <i className="ri-bank-card-line text-2xl text-green-600"></i>
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  お支払い
                </h2>
              </div>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <div className="pl-4 border-l-2 border-gray-300">
                <p className="font-bold text-gray-900 mb-2 text-base sm:text-lg">お支払い方法：</p>
                <p className="text-sm sm:text-base">
                  クレジットカード決済、銀行振込、分割払い（手数料別途）に対応しています。
                </p>
              </div>
              <div className="pl-4 border-l-2 border-gray-300">
                <p className="font-bold text-gray-900 mb-2 text-base sm:text-lg">分割支払いについて：</p>
                <p className="text-sm sm:text-base">
                  ライトプランは3分割まで、スタンダードプランは2分割まで可能です。プレミアムプランは一括払いのみとなります。分割手数料が別途発生する場合がございます。
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium text-base sm:text-lg transition-colors duration-200 cursor-pointer"
          >
            <i className="ri-arrow-left-line text-xl"></i>
            トップページに戻る
          </a>
        </div>
      </div>
    </div>
  );
}