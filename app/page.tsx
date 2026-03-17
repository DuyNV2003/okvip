'use client';

import Image from 'next/image';

export default function Page() {
  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-between py-6 px-4 overflow-hidden font-sans">
      {/* Background Video */}
      <div className="absolute inset-0 -z-10 overflow-hidden bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover brightness-50"
        >
          {/* Bạn hãy tải file video lên thư mục public và đổi tên thành background.mp4 */}
          <source src="/images/0317(1).mp4" type="video/mp4" />
          Trình duyệt của bạn không hỗ trợ thẻ video.
        </video>
        {/* Dark overlay for better contrast */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Top Logo Section */}
      <div className="relative z-10 mt-4 w-full max-w-3xl mx-auto">
        <div className="flex items-center justify-center bg-black/80 border-[3px] border-[#d4af37] rounded-3xl px-6 md:px-12 py-3 shadow-[0_0_30px_rgba(212,175,55,0.3)] backdrop-blur-sm">
          <div className="flex items-center justify-center gap-6 md:gap-10 w-full">
            {/* SC88 */}
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#ff6b00] flex items-center justify-center">
                <span className="text-[#ff6b00] font-bold text-xl md:text-2xl">S</span>
              </div>
              <span className="text-[#ff6b00] text-3xl md:text-5xl font-black tracking-widest">SC88</span>
            </div>
            
            {/* Divider */}
            <div className="w-[2px] h-10 md:h-14 bg-gradient-to-b from-transparent via-[#d4af37] to-transparent"></div>
            
            {/* OKVIP */}
            <div className="flex items-center gap-1 md:gap-2">
              <span className="text-[#ffb800] text-3xl md:text-5xl">✌️</span>
              <div className="text-3xl md:text-5xl font-black tracking-widest">
                <span className="text-[#ffb800]">OK</span>
                <span className="text-white">VIP</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Flags Section */}
      <div className="relative z-10 flex flex-wrap justify-center gap-6 md:gap-12 my-8 md:my-16 w-full max-w-5xl">
        <FlagItem country="VIỆT NAM" link="https://www.sc88a2.cc/home/register?id=930370357" imageSrc="/images/Vietnam.gif" />
        <FlagItem country="BRAZIL" link="https://m.sc880.vip/home/register?id=930370357" imageSrc="/images/brazil.gif" />
        <FlagItem country="THAILAND" link="https://m.sc887.vip/home/register?id=930370357" imageSrc="/images/Thailan.gif" />
        <FlagItem country="TURKEY" link="https://sc882.cc/home/register?id=930370357" imageSrc="/images/Turkiye.gif" />
        
      </div>

      {/* Bottom Banner Section */}
      <div className="relative z-10 w-full max-w-6xl mx-auto mb-6 px-2">
        {/* 
          Vui lòng tải bức ảnh bạn vừa gửi lên thư mục public/images 
          và đổi tên thành banner.png 
        */}
        <div className="relative w-full aspect-[10/2] md:aspect-[10/1.5] flex justify-center">
           <Image 
             src="/images/bannerads5.gif" 
             alt="Mega Live Banner" 
             fill 
             className="object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
             priority
           />
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 text-white text-xs md:text-sm font-semibold tracking-widest uppercase mt-auto text-center drop-shadow-md">
        Brand Ambassador Year 2026 - 2027
      </div>
    </main>
  );
}

function FlagItem({ country, link, imageSrc }: { country: string, link?: string, imageSrc: string }) {
  const handleClick = () => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <button 
      onClick={handleClick}
      className="flex flex-col items-center gap-2 md:gap-3 group cursor-pointer w-20 md:w-28 border-none bg-transparent p-0 outline-none"
    >
      <div className="w-20 h-20 md:w-28 md:h-28 rounded-full shadow-[inset_-10px_-10px_20px_rgba(0,0,0,0.6),inset_10px_10px_20px_rgba(255,255,255,0.2),0_10px_20px_rgba(0,0,0,0.5)] flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-transform duration-300">
        <div className="w-full h-full relative">
          <Image 
            src={imageSrc} 
            alt={`${country} flag`} 
            fill 
            className="object-cover"
            unoptimized // Quan trọng: Giữ cho ảnh GIF hoạt động mượt mà không bị Next.js tối ưu hóa thành ảnh tĩnh
          />
        </div>
        {/* Glossy overlay for 3D sphere effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.4)_0%,transparent_60%)] rounded-full pointer-events-none"></div>
      </div>
      <span className="text-white font-bold text-xs md:text-sm tracking-wider drop-shadow-[0_2px_2px_rgba(0,0,0,1)] uppercase text-center">{country}</span>
    </button>
  );
}
