
interface MicroCtaProps {
  text?: string;
}

export default function MicroCta({ text = 'LINEで30秒ダイエット診断' }: MicroCtaProps) {
  return (
    <div className="flex justify-center mt-8 sm:mt-10">
      <a
        href="https://lin.ee/F7dPZLD"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-white border-2 border-[#F0A898] text-[#E8725A] font-bold px-6 py-3 rounded-full hover:bg-[#FDF4F2] transition-all duration-200 text-sm sm:text-base shadow-md hover:shadow-lg cursor-pointer whitespace-nowrap"
      >
        <i className="ri-line-line text-xl"></i>
        {text}
        <i className="ri-arrow-right-line"></i>
      </a>
    </div>
  );
}
