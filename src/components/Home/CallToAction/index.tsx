export default function CallToAction() {
  return (
    <section id="cta" className="pt-14 sm:pt-20 lg:pt-[130px]">
      <div className="px-4 xl:container">
        <div className="drop-shadow-light relative overflow-hidden bg-cover bg-center px-10 py-[60px] sm:px-[70px] dark:drop-shadow-none">
          <div className="bg-noise-pattern absolute left-0 top-0 -z-10 h-full w-full bg-cover bg-center opacity-10 dark:opacity-40"></div>
          <div className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2">
            <svg
              width="1215"
              height="259"
              viewBox="0 0 1215 259"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.6" filter="url(#filter0_f_63_363)">
                <rect
                  x="450"
                  y="189"
                  width="315"
                  height="378"
                  fill="url(#paint0_linear_63_363)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_63_363"
                  x="0"
                  y="-261"
                  width="1215"
                  height="1278"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="225"
                    result="effect1_foregroundBlur_63_363"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_63_363"
                  x1="420.718"
                  y1="263.543"
                  x2="585.338"
                  y2="628.947"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#ABBCFF" />
                  <stop offset="0.859375" stopColor="#4A6CF7" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-2/3">
              <div className="mx-auto mb-10 max-w-[550px] text-center lg:mb-0 lg:ml-0 lg:text-left">
                <h2 className="font-heading text-dark mb-4 text-xl font-semibold leading-tight sm:text-[38px] dark:text-white">
                  Looking for a collaboration? Get Started Today!
                </h2>
                <p className="text-dark-text text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/3">
              <div className="text-center lg:text-right">
                <a
                  href="#"
                  className="bg-primary font-heading hover:bg-primary/90 inline-flex items-center rounded-sm px-8 py-[14px] text-base text-white"
                >
                  {" "}
                  Get Started Now{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
