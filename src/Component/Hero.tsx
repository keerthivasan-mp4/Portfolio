export default function Hero() {
  return (
    <header id="about" className="relative w-full min-h-[90vh] flex flex-col justify-end px-6 md:px-12 pb-12 mt-2 overflow-hidden">
      
      {/* Main Container */}
      <div className="grid grid-cols-1 md:grid-cols-12 items-end w-full gap-6 lg:gap-0 ">

        {/* Massive Title with fixed display blocks to prevent text reflow jumping */}
        <div id="Main-title" className="md:col-span-12 lg:col-span-8 flex flex-col justify-end">
          <h1 className="flex flex-col select-none">
            {/* Using a stable sizing approach with responsive scaling */}
            <span className="text-6xl sm:text-8xl md:text-[10rem] lg:text-[14rem] font-medium tracking-tight leading-[.8] block">
              Web
            </span>
            <span className="text-6xl sm:text-8xl md:text-[10rem] lg:text-[14rem] font-medium tracking-tight leading-none block mt-1 lg:mr-4">
              Developer
            </span>
          </h1>
        </div>

        {/* Tagline */}
        <div id="tagline" className="md:col-span-12 lg:col-span-4 max-w-md lg:mb-4">
          <p className="text-lg md:text-xl text-black-400 font-light leading-relaxed md:leading-[1] ml-0 md:ml-16 mt-4 lg:mt-0">
            I create responsive, user-centric web interfaces powered by clean, scalable code.
          </p>
        </div>

      </div>

    </header>
  );
}