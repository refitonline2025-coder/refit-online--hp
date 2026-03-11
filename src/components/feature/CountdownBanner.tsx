
import { useState, useEffect } from 'react';

export default function CountdownBanner() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const getEndOfMonth = () => {
      const now = new Date();
      return new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59, 999);
    };

    const calculateTimeLeft = () => {
      const now = new Date();
      const end = getEndOfMonth();
      const difference = end.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white border-b border-gray-200 py-3 px-5 shadow-sm">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">

          {/* 残枠表示 */}
          <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-lg px-5 py-2.5">
            <div className="w-8 h-8 flex items-center justify-center">
              <i className="ri-user-add-line text-xl text-teal-600"></i>
            </div>
            <div>
              <div className="text-xs text-gray-500 leading-none mb-1 whitespace-nowrap">今月の受付</div>
              <div className="text-xl font-bold text-gray-900 leading-none whitespace-nowrap">
                残り<span className="text-teal-600 mx-1">6名</span>様
              </div>
            </div>
          </div>

          {/* 区切り */}
          <div className="hidden md:block w-px h-10 bg-gray-200"></div>

          {/* カウントダウンタイマー */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-gray-600">
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-time-line text-base text-teal-600"></i>
              </div>
              <span className="font-medium text-sm whitespace-nowrap text-gray-700">キャンペーン終了まで</span>
            </div>
            <div className="flex items-center gap-1.5">
              {/* 日 */}
              <div className="bg-gray-900 rounded-md px-2.5 py-1.5 min-w-[52px] text-center">
                <div className="text-xl font-bold text-white leading-none">{String(timeLeft.days).padStart(2, '0')}</div>
                <div className="text-xs text-gray-400 mt-0.5 whitespace-nowrap">日</div>
              </div>
              <span className="text-gray-400 text-lg font-bold">:</span>
              {/* 時 */}
              <div className="bg-gray-900 rounded-md px-2.5 py-1.5 min-w-[52px] text-center">
                <div className="text-xl font-bold text-white leading-none">{String(timeLeft.hours).padStart(2, '0')}</div>
                <div className="text-xs text-gray-400 mt-0.5 whitespace-nowrap">時</div>
              </div>
              <span className="text-gray-400 text-lg font-bold">:</span>
              {/* 分 */}
              <div className="bg-gray-900 rounded-md px-2.5 py-1.5 min-w-[52px] text-center">
                <div className="text-xl font-bold text-white leading-none">{String(timeLeft.minutes).padStart(2, '0')}</div>
                <div className="text-xs text-gray-400 mt-0.5 whitespace-nowrap">分</div>
              </div>
              <span className="text-gray-400 text-lg font-bold">:</span>
              {/* 秒 */}
              <div className="bg-gray-900 rounded-md px-2.5 py-1.5 min-w-[52px] text-center">
                <div className="text-xl font-bold text-white leading-none">{String(timeLeft.seconds).padStart(2, '0')}</div>
                <div className="text-xs text-gray-400 mt-0.5 whitespace-nowrap">秒</div>
              </div>
            </div>
          </div>
        </div>

        {/* モバイル用テキスト */}
        <div className="md:hidden text-center mt-2">
          <p className="text-gray-500 text-xs whitespace-nowrap">
            <i className="ri-time-line mr-1 text-teal-600"></i>
            キャンペーン終了まで
          </p>
        </div>
      </div>
    </div>
  );
}
