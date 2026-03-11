export default function MediaSection() {
  const mediaLogos = [
    { name: 'Yahoo! JAPAN', icon: 'ri-global-line' },
    { name: 'LINE NEWS', icon: 'ri-line-line' },
    { name: 'SmartNews', icon: 'ri-newspaper-line' },
    { name: 'Gunosy', icon: 'ri-article-line' },
    { name: 'NewsPicks', icon: 'ri-file-text-line' },
    { name: 'Antenna', icon: 'ri-signal-tower-line' },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-sm text-gray-600 mb-4">多数のメディアで紹介されています</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
          {mediaLogos.map((media, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 flex flex-col items-center justify-center hover:shadow-lg transition-shadow duration-200"
            >
              <i className={`${media.icon} text-3xl text-gray-400 mb-2`}></i>
              <span className="text-xs text-gray-600 text-center">{media.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
