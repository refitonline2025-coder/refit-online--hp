export default function FloatingLineButton() {
  const handleAgentClick = () => {
    const widgetButton = document.querySelector('#vapi-widget-floating-button') as HTMLElement;
    if (widgetButton) {
      widgetButton.click();
    }
  };

  return (
    <div className="fixed bottom-24 left-6 z-50 flex items-center gap-3">
      <a
        href="https://lin.ee/F7dPZLD"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 bg-[#06C755] text-white font-bold px-10 py-6 rounded-full hover:bg-[#05b34c] transition-all duration-200 text-2xl shadow-2xl cursor-pointer whitespace-nowrap animate-pulse hover:animate-none"
      >
        <i className="ri-line-line text-3xl"></i>
        LINEで30秒ダイエット診断
      </a>
      <button
        onClick={handleAgentClick}
        className="inline-flex items-center gap-3 bg-teal-500 text-white font-bold px-10 py-6 rounded-full hover:bg-teal-600 transition-all duration-200 text-2xl shadow-2xl cursor-pointer whitespace-nowrap"
        aria-label="AIでチャット相談"
      >
        <i className="ri-customer-service-2-line text-3xl"></i>
        AIチャットで相談
      </button>
    </div>
  );
}