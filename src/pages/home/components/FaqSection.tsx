import { useState } from 'react';

const faqs = [
  {
    question: 'オンライン食事指導はどんな方におすすめですか?',
    answer: 'オンライン食事指導は、チャットツールを利用して、自宅にいながら専属トレーナーから毎日食事のアドバイスを受けられます。そのため、忙しくて時間がない、何を食べていいかわからない、一人では続かない、栄養の知識がない、などに当てはまる方におすすめです。ReFit Onlineでは、短期間で痩せられるだけではなく、痩せた後に体型維持できる食事習慣までサポートいたします。'
  },
  {
    question: 'ReFit Onlineに入会している人はどんな方が多いですか?',
    answer: 'ご入会者は、食事管理が苦手な方や、ダイエットが続かない方、リバウンドしてしまった方、何を食べていいかわからない方など様々な悩みを持ったお客様がご入会されています。皆様、最初はオンライン食事指導初心者で不安なお客様も多いですが、スタッフ一同お客様に寄り添ってサポートいたしますので、何かお困りのことがございましたらお気軽にお問い合わせください。'
  },
  {
    question: '栄養や食事の知識がほとんどないのですが、大丈夫でしょうか?',
    answer: 'もちろん大丈夫です!ご利用されているお客様の多くが食事管理の経験がない方や、栄養の知識がない方など、初心者の方々もたくさんいらっしゃいますので、どうぞご安心してお気軽にご利用ください。基礎から丁寧にお教えします。'
  },
  {
    question: '毎日の食事報告はどのように行うのですか?',
    answer: 'LINEやチャットアプリで、食事の写真を撮って送るだけです。トレーナーが内容を確認し、栄養バランスや改善点をアドバイスします。忙しい時は簡単なメモでも大丈夫です。'
  },
  {
    question: 'スマートフォンだけでも利用できますか?',
    answer: 'はい、スマートフォンだけで問題ございません。ご利用者の大半がスマートフォンで食事の写真を撮影し、チャットでやり取りされています。'
  },
  {
    question: 'リバウンドが怖いのですが大丈夫でしょうか?',
    answer: 'ReFit Onlineでは、科学的根拠に基づいた食事指導ですので、卒業後も一生使える知識が身につくため、ご利用期間で「太りにくい食事習慣」を実現します。また、無理のない食事コントロールや充実したアフターケアでリバウンドも怖くありません。'
  },
  {
    question: '外食が多いのですが、対応できますか?',
    answer: 'はい、対応可能です。外食やコンビニでの食事選びのコツもお教えします。会食が多い方でも、メニュー選びの工夫で無理なく続けられます。'
  },
  {
    question: '海外からのご利用は可能でしょうか?',
    answer: 'ReFit Onlineはオンライン完結の食事指導サービスのため、海外からでもご利用可能でございます。海外からご利用される際の注意点としましては、営業時間に関しまして：現在、ReFit Onlineに所属しているトレーナー全員が日本国内に在籍しているため、営業時間は日本時間7:00~22:00となっております。'
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="fade-in-up py-16 bg-white">
      <div className="px-5">
        <div className="text-center mb-10">
          <p className="text-xl text-teal-600 font-medium mb-3">FAQ</p>
          <h2 className="text-4xl font-bold text-gray-900">よくある質問</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-teal-300 transition-colors duration-200 shadow-sm">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center gap-3 text-left hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
              >
                <span className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">Q</span>
                <p className="flex-1 font-semibold text-gray-900 text-sm sm:text-base leading-relaxed">{faq.question}</p>
                <i
                  className={`ri-arrow-down-s-line text-2xl text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180 text-teal-600' : ''
                  }`}
                ></i>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-[600px]' : 'max-h-0'
                }`}
              >
                <div className="mx-5 sm:mx-6 mb-4 sm:mb-5 bg-teal-50/60 rounded-lg p-4 flex gap-3">
                  <span className="w-8 h-8 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">A</span>
                  <p className="flex-1 text-gray-700 text-sm sm:text-base leading-relaxed pt-1">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}