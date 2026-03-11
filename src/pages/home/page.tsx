import { useSEO } from '../../utils/seo';
import HeroSection from './components/HeroSection';
import CountdownBanner from '../../components/feature/CountdownBanner';
import ConcernsSection from './components/ConcernsSection';
import ResultSection from './components/ResultSection';
import DifferenceSection from './components/DifferenceSection';
import VoiceSection from './components/VoiceSection';
import TrainerSection from './components/TrainerSection';
import SpecialOfferSection from './components/SpecialOfferSection';
import PlanComparisonSection from './components/PlanComparisonSection';
import FlowSection from './components/FlowSection';
import FaqSection from './components/FaqSection';
import CtaBannerSection from './components/CtaBannerSection';

export default function Home() {
  useSEO({
    title: '【公式】ReFit Online - オンライン食事指導 ¥6600/月～専属のトレーナーがサポート',
    description: 'ReFit オンライン食事管理サービスでは、月額6600円～あなた専属のダイエットコンシェルジュが毎日サポートします。最新の遺伝子検査やスマートバンドを使った科学的アプローチで、あなたの目標達成に導きます。入会金0円キャンペーン実施中。リバウンドしない一生モノの身体づくりを始めましょう。',
    keywords: 'ReFit Online, オンライン食事指導, 遺伝検査, ダイエット, オンラインパーソナル, パーソナルジム, 食事指導',
    canonical: '/',
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          '@id': 'VITE_SITE_URL/#website',
          name: 'ReFit Online',
          url: 'VITE_SITE_URL/',
          description: 'オンライン食事指導 ¥6600/月～専属のトレーナーがサポート',
          inLanguage: 'ja',
          publisher: {
            '@id': 'VITE_SITE_URL/#organization'
          }
        },
        {
          '@type': 'Organization',
          '@id': 'VITE_SITE_URL/#organization',
          name: 'ReFit Online',
          url: 'VITE_SITE_URL/',
          logo: {
            '@type': 'ImageObject',
            url: 'VITE_SITE_URL/vite.svg'
          },
          sameAs: []
        },
        {
          '@type': 'WebPage',
          '@id': 'VITE_SITE_URL/#webpage',
          url: 'VITE_SITE_URL/',
          name: '【公式】ReFit Online - オンライン食事指導 ¥6600/月～専属のトレーナーがサポート',
          description: 'ReFit オンライン食事管理サービスでは、月額6600円～あなた専属のダイエットコンシェルジュが毎日サポートします。',
          inLanguage: 'ja',
          isPartOf: { '@id': 'VITE_SITE_URL/#website' },
          about: { '@id': 'VITE_SITE_URL/#organization' }
        },
        {
          '@type': 'Service',
          '@id': 'VITE_SITE_URL/#service',
          name: 'ReFit Online オンライン食事指導',
          serviceType: 'オンラインパーソナルトレーニング・食事指導',
          provider: { '@id': 'VITE_SITE_URL/#organization' },
          description: 'DNA検査・遺伝子検査に基づく科学的アプローチで、専属トレーナーがマンツーマンでオンライン食事指導を提供します。',
          offers: [
            {
              '@type': 'Offer',
              name: 'ライトプラン',
              price: '6600',
              priceCurrency: 'JPY',
              priceSpecification: {
                '@type': 'UnitPriceSpecification',
                price: '6600',
                priceCurrency: 'JPY',
                unitText: '月'
              }
            },
            {
              '@type': 'Offer',
              name: 'スタンダードプラン',
              priceCurrency: 'JPY'
            },
            {
              '@type': 'Offer',
              name: 'プレミアムプラン',
              priceCurrency: 'JPY'
            }
          ],
          areaServed: {
            '@type': 'Country',
            name: '日本'
          },
          availableChannel: {
            '@type': 'ServiceChannel',
            serviceUrl: 'VITE_SITE_URL/',
            serviceType: 'オンライン'
          }
        }
      ]
    }
  });

  return (
    <div className="w-full bg-white">
      <HeroSection />
      <CountdownBanner />
      <ConcernsSection />
      <ResultSection />
      <DifferenceSection />
      <VoiceSection />
      <TrainerSection />
      <SpecialOfferSection />
      <PlanComparisonSection />
      <FlowSection />
      <FaqSection />
      <CtaBannerSection />
    </div>
  );
}
