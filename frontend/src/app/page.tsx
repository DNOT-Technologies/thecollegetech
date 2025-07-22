import Image from "next/image";

export default function Home() {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-gray-50 group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#eaedf1] px-10 py-3">
          <div className="flex items-center gap-4 text-[#101518]">  
            <h2 className="text-[#101518] text-lg font-bold leading-tight tracking-[-0.015em]">TheCollegeTech</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <a className="text-[#101518] text-sm font-medium leading-normal" href="#">Home</a>
              <a className="text-[#101518] text-sm font-medium leading-normal" href="#">Services</a>
              <a className="text-[#101518] text-sm font-medium leading-normal" href="#">Products</a>
              <a className="text-[#101518] text-sm font-medium leading-normal" href="#">Contact</a>
            </div>
            <button
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#dce8f3] text-[#101518] text-sm font-bold leading-normal tracking-[0.015em]"
            >
              <span className="truncate">Get Started</span>
            </button>
          </div>
        </header>
        <div className="flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1 mx-auto">
            <div className="@container">
              <div className="@[480px]:p-4">
                <div
                  className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
                  style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuBYXNuwLSzLENP7NTMpYu1Fg0heGXR23AD-sLcVwcKPDfWzIZA6ibCxVwloZw5TqkIiAQO8Q0kyVPNI90pB2mce_5YPhkZp0jMDSO9ISRBvM4gDvngSNvwpmj5BZDsTzUSe8WQtuHdupeob-JF7BsNExEoSEHTsGGZwWW2vyp6j38xmFk0n820hCEzEGn0E3BK1BL-KB7aTJshWvgFxd9yh6fAMqJur3_JuzSlcZOP6MaUYZ7OzNF0tWLai13GiJ500QD1gd5r4aVa7')` }}
                >
                  <div className="flex flex-col gap-2 text-center">
                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                      Empowering Colleges with Innovative Tech Solutions
                    </h1>
                    <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                      TheCollegeTech provides cutting-edge technology solutions, including Placeeasy for placements, Vidya LMS for learning management, and comprehensive IT services.
                    </h2>
                  </div>
                  <button
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#dce8f3] text-[#101518] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
                  >
                    <span className="truncate">Explore Our Solutions</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10 px-4 py-10 @container">
              <div className="flex flex-col gap-4">
                <h1 className="text-[#101518] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                  Why Choose TheCollegeTech?
                </h1>
                <p className="text-[#101518] text-base font-normal leading-normal max-w-[720px]">
                  We offer a comprehensive suite of technology solutions designed to enhance the college experience for students, faculty, and administrators.
                </p>
              </div>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-0">
                {/* Card 1 */}
                <div className="flex flex-1 gap-3 rounded-lg border border-[#d4dce2] bg-gray-50 p-4 flex-col">
                  <div className="text-[#101518]" data-icon="MagnifyingGlass" data-size="24px" data-weight="regular">
                    {/* Magnifying Glass SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#101518] text-base font-bold leading-tight">Integrated Solutions</h2>
                    <p className="text-[#5c748a] text-sm font-normal leading-normal">
                      Our integrated platform seamlessly connects students with placement opportunities while providing a robust learning management system.
                    </p>
                  </div>
                </div>
                {/* Card 2 */}
                <div className="flex flex-1 gap-3 rounded-lg border border-[#d4dce2] bg-gray-50 p-4 flex-col">
                  <div className="text-[#101518]" data-icon="Briefcase" data-size="24px" data-weight="regular">
                    {/* Briefcase SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#101518] text-base font-bold leading-tight">Customizable Services</h2>
                    <p className="text-[#5c748a] text-sm font-normal leading-normal">
                      We tailor our services to meet the unique needs of each institution, ensuring optimal performance and user satisfaction.
                    </p>
                  </div>
                </div>
                {/* Card 3 */}
                <div className="flex flex-1 gap-3 rounded-lg border border-[#d4dce2] bg-gray-50 p-4 flex-col">
                  <div className="text-[#101518]" data-icon="Users" data-size="24px" data-weight="regular">
                    {/* Users SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#101518] text-base font-bold leading-tight">Dedicated Support</h2>
                    <p className="text-[#5c748a] text-sm font-normal leading-normal">
                      Our dedicated support team is available to assist with implementation, training, and ongoing maintenance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10 px-4 py-10 @container">
              <div className="flex flex-col gap-4">
                <h1 className="text-[#101518] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                  Our Clients
                </h1>
                <p className="text-[#101518] text-base font-normal leading-normal max-w-[720px]">
                  We are proud to serve a diverse range of educational institutions, from small colleges to large universities.
                </p>
              </div>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3">
                {/* Product 1 */}
                <div className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={{ backgroundImage: `url('nitw.png')` }}
                  ></div>
                  <div>
                    <p className="text-[#101518] text-base font-medium leading-normal">NIT Warangal</p>
                    <p className="text-[#5c748a] text-sm font-normal leading-normal">NIT Warangal is a premier institution in India, known for its cutting-edge research and innovative teaching methods.</p>
                  </div>
                </div>
                {/* Product 2 */}
                <div className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBMeaxNcWO766h-HYrSKsq2WTKKLNC1kh-rqBW03EOb7o-VS6nLV6iNdwqUWw9lv_zLnWvRhQgwLYHadrSPxCIv6SPHNCtiCGXA6WyqeY_H8UeRbr9ru86xsNERY53noBSCn5iIOt-DopS9Ko6_GVJ-yzkpZiZ_lEZHfFmyTYy9l0PCAaet-hz8U5R4YB_HRMmUUMZfDd-FnCGjoJ-QMFpcf9COea7_bEf_WG9ss06RzsLkGAzDOEVI62AsI554c46BXAjgcm5nIi8d')` }}
                  ></div>
                  <div>
                    <p className="text-[#101518] text-base font-medium leading-normal">Vidya LMS</p>
                    <p className="text-[#5c748a] text-sm font-normal leading-normal">Enhance learning with Vidya LMS, our comprehensive learning management system.</p>
                  </div>
                </div>
                {/* Product 3 */}
                <div className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDZYkGTzwMejnXKfmpamJytFQK2oXwIYLYm_TsIX_b1tL3e9jE7u3kGiunOzWjmjnDWzDwYUoagcbRtVfOr4AMIv33WWqBaAhhGv2Jviu0kM5vYG-Mp4mHDw_TzXXvdzXbZTmqva6UDQE7fDWd2ck-Rm5wHYKB6D3gvXu7HQh1yggw0xmqU4DE7RruZtm3TsUq2XKxzZrGdS3ctx-y54CszX-qjEg0dx6GuHEiN7jWYGTqizAAbFC4CQwZyLXUkbMdx_q3sMeZQbNZJ')` }}
                  ></div>
                  <div>
                    <p className="text-[#101518] text-base font-medium leading-normal">IT Services</p>
                    <p className="text-[#5c748a] text-sm font-normal leading-normal">
                      We provide a range of IT services, including infrastructure management, cybersecurity, and technical support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10 px-4 py-10 @container">
              <div className="flex flex-col gap-4">
                <h1 className="text-[#101518] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                  Our Products and Services
                </h1>
                <p className="text-[#101518] text-base font-normal leading-normal max-w-[720px]">
                  Explore our flagship products and services designed to transform the educational landscape.
                </p>
              </div>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3">
                {/* Product 1 */}
                <div className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDBLIjPNHNzslWJS_qBJX82ZnrL7yyKIyxAMQnirtgkNtQMbdMfTVVaHzlIBRUrsTifbkom9n4itTllHmjC44vNcOS3oG2oJvTN5lXLuHLffu1f2wWfLQJZIKT5s4Kgk806iALYP5yZwqVM-MmKZr_4WEeBCeAUZJAgd9XTTMkMiQWBrP4cBiDndzK-_SX5en5Yw9KTH8s6NOLD8u6YjjrXZqd6ooBgRtSnJsZklgpSS0Lblp0k0ZVHz7cZvNKjKBWRJph23b1Uo0id')` }}
                  ></div>
                  <div>
                    <p className="text-[#101518] text-base font-medium leading-normal">Placeeasy</p>
                    <p className="text-[#5c748a] text-sm font-normal leading-normal">Connect students with top companies and internships through our placement app, Placeeasy.</p>
                  </div>
                </div>
                {/* Product 2 */}
                <div className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBMeaxNcWO766h-HYrSKsq2WTKKLNC1kh-rqBW03EOb7o-VS6nLV6iNdwqUWw9lv_zLnWvRhQgwLYHadrSPxCIv6SPHNCtiCGXA6WyqeY_H8UeRbr9ru86xsNERY53noBSCn5iIOt-DopS9Ko6_GVJ-yzkpZiZ_lEZHfFmyTYy9l0PCAaet-hz8U5R4YB_HRMmUUMZfDd-FnCGjoJ-QMFpcf9COea7_bEf_WG9ss06RzsLkGAzDOEVI62AsI554c46BXAjgcm5nIi8d')` }}
                  ></div>
                  <div>
                    <p className="text-[#101518] text-base font-medium leading-normal">Vidya LMS</p>
                    <p className="text-[#5c748a] text-sm font-normal leading-normal">Enhance learning with Vidya LMS, our comprehensive learning management system.</p>
                  </div>
                </div>
                {/* Product 3 */}
                <div className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDZYkGTzwMejnXKfmpamJytFQK2oXwIYLYm_TsIX_b1tL3e9jE7u3kGiunOzWjmjnDWzDwYUoagcbRtVfOr4AMIv33WWqBaAhhGv2Jviu0kM5vYG-Mp4mHDw_TzXXvdzXbZTmqva6UDQE7fDWd2ck-Rm5wHYKB6D3gvXu7HQh1yggw0xmqU4DE7RruZtm3TsUq2XKxzZrGdS3ctx-y54CszX-qjEg0dx6GuHEiN7jWYGTqizAAbFC4CQwZyLXUkbMdx_q3sMeZQbNZJ')` }}
                  ></div>
                  <div>
                    <p className="text-[#101518] text-base font-medium leading-normal">IT Services</p>
                    <p className="text-[#5c748a] text-sm font-normal leading-normal">
                      We provide a range of IT services, including infrastructure management, cybersecurity, and technical support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="@container">
              <div className="flex flex-col justify-around items-center gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20">
                <div className="flex flex-col gap-2 text-center">
                  <h1 className="text-[#101518] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                    Transform Your College Experience with TheCollegeTech
                  </h1>
                  <p className="text-[#101518] text-base font-normal leading-normal max-w-[720px]">
                    Contact us today to learn how our solutions can benefit your institution.
                  </p>
                </div>
                <div className="flex flex-1 justify-center">
                  <div className="flex justify-center">
                    <button
                      className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#dce8f3] text-[#101518] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] grow"
                    >
                      <span className="truncate">Get Started</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="flex justify-center">
          <div className="flex max-w-[960px] flex-1 flex-col">
            <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
              <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
                <a className="text-[#5c748a] text-base font-normal leading-normal min-w-40" href="#">About Us</a>
                <a className="text-[#5c748a] text-base font-normal leading-normal min-w-40" href="#">Contact</a>
                <a className="text-[#5c748a] text-base font-normal leading-normal min-w-40" href="#">Privacy Policy</a>
                <a className="text-[#5c748a] text-base font-normal leading-normal min-w-40" href="#">Terms of Service</a>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#">
                  <div className="text-[#5c748a]" data-icon="TwitterLogo" data-size="24px" data-weight="regular">
                    {/* Twitter SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z"></path>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div className="text-[#5c748a]" data-icon="FacebookLogo" data-size="24px" data-weight="regular">
                    {/* Facebook SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"></path>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div className="text-[#5c748a]" data-icon="InstagramLogo" data-size="24px" data-weight="regular">
                    {/* Instagram SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
                    </svg>
                  </div>
                </a>
              </div>
              <p className="text-[#5c748a] text-base font-normal leading-normal">© 2023 TheCollegeTech. All rights reserved.</p>
            </footer>
          </div>
        </footer>
      </div>
    </div>
  );
}


