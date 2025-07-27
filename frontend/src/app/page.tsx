"use client";

import Image from "next/image";
import { useState, useEffect } from "react";


export default function Home() {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show nav when at top of page
      if (currentScrollY === 0) {
        setIsNavVisible(true);
      }
      // Hide nav when scrolling down, show when scrolling up
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsNavVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsNavVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);




  return (
    <>
      {/* Fixed Navigation - Island style */}
      <div 
        className="glass-nav rounded-2xl transition-transform duration-300 ease-in-out"
        style={{ 
          position: 'fixed', 
          top: '16px', 
          left: '16px', 
          right: '16px', 
          zIndex: 10000,
          padding: '10px 20px',
          transform: isNavVisible ? 'translateY(0)' : 'translateY(-120%)'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="flex items-center gap-2">  
            <h2 className="text-[var(--color-primary-violet)] text-base sm:text-lg font-bold leading-tight tracking-[-0.015em] mathco-h3">TheCollegeTech</h2>
          </div>
            <div className="flex flex-1 justify-end gap-3 sm:gap-6">
              <div className="hidden md:flex items-center gap-9">
                <a className="text-[var(--color-primary-violet)]/80 text-sm font-medium leading-normal relative group transition-colors duration-300 hover:text-[var(--color-primary-violet)]" href="#home">
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a className="text-[var(--color-primary-violet)]/80 text-sm font-medium leading-normal relative group transition-colors duration-300 hover:text-[var(--color-primary-violet)]" href="#services">
                  Services
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a className="text-[var(--color-primary-violet)]/80 text-sm font-medium leading-normal relative group transition-colors duration-300 hover:text-[var(--color-primary-violet)]" href="#products">
                  Products
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a className="text-[var(--color-primary-violet)]/80 text-sm font-medium leading-normal relative group transition-colors duration-300 hover:text-[var(--color-primary-violet)]" href="/careers">
                  Careers
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a className="text-[var(--color-primary-violet)]/80 text-sm font-medium leading-normal relative group transition-colors duration-300 hover:text-[var(--color-primary-violet)]" href="mailto:contact@thecollegetech.com?subject=Inquiry%20from%20TheCollegeTech%20Website">
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </div>
              <a href="mailto:contact@thecollegetech.com?subject=Get%20Started%20-%20TheCollegeTech%20Services" className="mathco-button-primary flex min-w-[60px] sm:min-w-[70px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-7 sm:h-9 px-2 sm:px-3 text-xs sm:text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">Get Started</span>
              </a>
              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative z-50"
                aria-label="Toggle mobile menu"
              >
                <span className={`w-6 h-0.5 bg-[var(--color-primary-violet)] transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-[var(--color-primary-violet)] transition-all duration-300 mt-1 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-[var(--color-primary-violet)] transition-all duration-300 mt-1 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu Overlay */}
        <div className={`md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <div className={`absolute top-0 right-0 w-64 h-full bg-white/40 backdrop-blur-md shadow-2xl transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex flex-col p-6 pt-20">
              <a 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[var(--color-primary-violet)] text-lg font-medium py-3 border-b border-[var(--color-primary-violet)]/20 relative group transition-colors duration-300 hover:text-[var(--color-primary-violet)]" 
                href="#home"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[var(--color-primary-violet)] text-lg font-medium py-3 border-b border-[var(--color-primary-violet)]/20 relative group transition-colors duration-300 hover:text-[var(--color-primary-violet)]" 
                href="#services"
              >
                Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[var(--color-primary-violet)] text-lg font-medium py-3 border-b border-[var(--color-primary-violet)]/20 relative group transition-colors duration-300 hover:text-[var(--color-primary-violet)]" 
                href="#products"
              >
                Products
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[var(--color-primary-violet)] text-lg font-medium py-3 border-b border-[var(--color-primary-violet)]/20 relative group transition-colors duration-300 hover:text-[var(--color-primary-violet)]" 
                href="/careers"
              >
                Careers
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[var(--color-primary-violet)] text-lg font-medium py-3 border-b border-[var(--color-primary-violet)]/20 relative group transition-colors duration-300 hover:text-[var(--color-primary-violet)]" 
                href="mailto:contact@thecollegetech.com?subject=Inquiry%20from%20TheCollegeTech%20Website"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a 
                onClick={() => setIsMobileMenuOpen(false)}
                className="mathco-button-primary mt-6 text-center py-3 rounded-lg text-base font-medium" 
                href="mailto:contact@thecollegetech.com?subject=Get%20Started%20-%20TheCollegeTech%20Services"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
        
        {/* Main content with layout container */}
        <div
          className="relative flex size-full min-h-screen flex-col group/design-root overflow-x-hidden"
          style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
        >
        <div className="layout-container flex h-full grow flex-col">
          <div className="flex flex-1 justify-center py-5 pt-16 sm:pt-18">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1 mx-auto">
            <div className="@container">
              <div className="@[480px]:p-4">
                <div id="home" className="mathco-hero-bg flex min-h-[80vh] sm:min-h-[90vh] flex-col gap-6 sm:gap-8 items-start justify-center p-4 sm:p-8 lg:p-16 @[480px]:gap-12 @[480px]:rounded-xl relative overflow-hidden">
                  
                  <div className="flex flex-col gap-4 sm:gap-6 relative z-10 max-w-2xl">
                    <h1 className="text-[var(--color-primary-violet)] text-3xl sm:text-5xl lg:text-7xl font-medium leading-[1.1] tracking-tight">
                      Power your institution with seamless Management Systems, AI, and more.
                    </h1>
                    <p className="text-[var(--color-primary-violet)]/80 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-xl">
                    At TheCollegeTech (TCT), we develop crucial, education‑centric technologies bridging gaps in India&apos;s education system, delivering
                    intuitive, scalable solutions for institutions, educators, and employers.
                    </p>
                    <a href="#services" className="flex items-center gap-2 text-[var(--color-primary-violet)] cursor-pointer hover:gap-3 transition-all duration-300 mb-6 sm:mb-8">
                      <span className="text-sm sm:text-base font-medium">Learn more</span>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M3.33333 8H12.6667M12.6667 8L8 3.33334M12.6667 8L8 12.6667"/>
                      </svg>
                    </a>
                  </div>
                  
                  {/* Latest Updates Card - Commented Out */}
                  {/* 
                  <div className="hidden lg:block absolute bottom-8 right-8 glass-card rounded-2xl p-6 max-w-xs z-10">
                    <div className="text-[var(--color-primary-violet)] text-xs font-semibold uppercase tracking-wider mb-2">
                      LATEST UPDATES
                    </div>
                    <div className="text-[var(--color-primary-violet)] text-base font-medium">
                      Top 50 Educational Technology Innovations
                    </div>
                    <div className="w-12 h-px bg-[var(--color-primary-violet)]/30 mt-4"></div>
                  </div>
                  */}
                </div>
              </div>
            </div>
            <div id="services" className="flex flex-col gap-8 sm:gap-10 px-4 py-12 sm:py-16 @container">
              <div className="flex flex-col gap-4 sm:gap-6 text-center max-w-4xl mx-auto">
                <h1 className="text-[var(--color-primary-violet)] mathco-h2 text-2xl sm:text-3xl lg:text-4xl">
                  Why Choose TheCollegeTech?
                </h1>
                <p className="text-[var(--color-neutral-dark)] mathco-body max-w-3xl mx-auto text-sm sm:text-base">
                  We offer a comprehensive suite of technology solutions designed to enhance the college experience for students, faculty, and administrators with cutting-edge innovation.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
                {/* Card 1 */}
                <div className="glass-card rounded-2xl flex flex-col gap-4 p-4 sm:p-6 group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-primary flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256" className="sm:w-6 sm:h-6">
                      <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-[var(--color-primary-violet)] mathco-h3 text-base sm:text-lg">Integrated Solutions</h3>
                    <p className="text-[var(--color-primary-violet)]/80 mathco-body-sm text-sm">
                      Our integrated platform seamlessly connects students with placement opportunities while providing a robust learning management system.
                    </p>
                  </div>
                  <div className="mt-auto">
                    <div className="w-6 h-6 text-[var(--color-teal)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Card 2 */}
                <div className="glass-card rounded-2xl flex flex-col gap-4 p-4 sm:p-6 group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-primary flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256" className="sm:w-6 sm:h-6">
                      <path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-[var(--color-primary-violet)] mathco-h3 text-base sm:text-lg">Customizable Services</h3>
                    <p className="text-[var(--color-primary-violet)]/80 mathco-body-sm text-sm">
                      We tailor our services to meet the unique needs of each institution, ensuring optimal performance and user satisfaction.
                    </p>
                  </div>
                  <div className="mt-auto">
                    <div className="w-6 h-6 text-[var(--color-teal)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Card 3 */}
                <div className="glass-card rounded-2xl flex flex-col gap-4 p-4 sm:p-6 group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-primary flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256" className="sm:w-6 sm:h-6">
                      <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-[var(--color-primary-violet)] mathco-h3 text-base sm:text-lg">Dedicated Support</h3>
                    <p className="text-[var(--color-primary-violet)]/80 mathco-body-sm text-sm">
                      Our dedicated support team is available to assist with implementation, training, and ongoing maintenance.
                    </p>
                  </div>
                  <div className="mt-auto">
                    <div className="w-6 h-6 text-[var(--color-teal)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Trusted by Leading Institutions Section - Commented Out */}
            
            {/* Testimonials Section */}
            <div className="flex flex-col gap-8 sm:gap-10 px-4 py-12 sm:py-16 @container">
              <div className="flex flex-col gap-4 sm:gap-6 text-center max-w-4xl mx-auto">
                <h1 className="text-[var(--color-primary-violet)] mathco-h2 text-2xl sm:text-3xl lg:text-4xl">
                  We are redefining EdTech.
                </h1>
                <p className="text-[var(--color-neutral-dark)] mathco-body max-w-3xl mx-auto text-sm sm:text-base">
                  Hear from trusted people about their experience using Placeeasy and Viyda (Our best placement and learning management system).
                </p>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="glass-card rounded-2xl p-6 sm:p-8 relative">
                  <div className="text-4xl sm:text-6xl text-[var(--color-primary-violet)]/20 absolute top-2 sm:top-4 left-4 sm:left-6">&quot;</div>
                  <div className="pt-6 sm:pt-8">
                    <p className="text-[var(--color-primary-violet)] mathco-body text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                      TheCollegeTech has the potential to revolutionize the on campus placement process and how students interact with their coursework. Their platforms are seamless and very user friendly.
                    </p>
                    <div className="flex items-center justify-center gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">
                        DR
                      </div>
                      <div className="text-left">
                        <div className="font-semibold text-[var(--color-primary-violet)] mathco-h3 text-sm sm:text-base">Dr. Sita Devi Bharatula</div>
                        <div className="text-[var(--color-neutral-dark)] mathco-body-sm text-xs sm:text-sm">Amrita Vishwa Vidyapeetham, Chennai</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center gap-2 mt-6 sm:mt-8">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[var(--color-primary-violet)]"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[var(--color-primary-violet)]/30"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[var(--color-primary-violet)]/30"></div>
                </div>
              </div>
            </div>
            
            <div id="products" className="flex flex-col gap-8 sm:gap-12 px-4 py-12 sm:py-16 @container">
              <div className="flex flex-col gap-4 sm:gap-6 text-center max-w-4xl mx-auto">
                <h1 className="text-[var(--color-primary-violet)] mathco-h2 text-2xl sm:text-3xl lg:text-4xl">
                  Our Products and Services
                </h1>
                <p className="text-[var(--color-neutral-dark)] mathco-body max-w-3xl mx-auto text-sm sm:text-base">
                  Explore our flagship products and services designed to transform the educational landscape with cutting-edge technology and innovative solutions.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
                {/* Product 1 - Placeeasy */}
                <div className="glass-card rounded-2xl overflow-hidden group">
                  <div className="relative">
                    <div
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover"
                      style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDBLIjPNHNzslWJS_qBJX82ZnrL7yyKIyxAMQnirtgkNtQMbdMfTVVaHzlIBRUrsTifbkom9n4itTllHmjC44vNcOS3oG2oJvTN5lXLuHLffu1f2wWfLQJZIKT5s4Kgk806iALYP5yZwqVM-MmKZr_4WEeBCeAUZJAgd9XTTMkMiQWBrP4cBiDndzK-_SX5en5Yw9KTH8s6NOLD8u6YjjrXZqd6ooBgRtSnJsZklgpSS0Lblp0k0ZVHz7cZvNKjKBWRJph23b1Uo0id')` }}
                    ></div>
                    <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-gradient-primary text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                      Placement Platform
                    </div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-[var(--color-primary-violet)] mathco-h3 text-lg sm:text-xl mb-3">Placeeasy</h3>
                    <p className="text-[var(--color-primary-violet)]/80 mathco-body-sm mb-4 text-sm">
                      Connect students with companies and internships through our placement platform with ease.
                    </p>
                    <a href="mailto:contact@thecollegetech.com?subject=Inquiry%20about%20Placeeasy&body=Hi,%0A%0AI%20would%20like%20to%20learn%20more%20about%20Placeeasy%20and%20how%20it%20can%20help%20our%20institution." className="flex items-center justify-between group-hover:text-[var(--color-primary-violet)] transition-colors duration-300">
                      <span className="text-[var(--color-teal)] text-xs sm:text-sm font-medium">Learn More</span>
                      <div className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--color-teal)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z"/>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
                
                {/* Product 2 - Vidya LMS */}
                <div className="glass-card rounded-2xl overflow-hidden group">
                  <div className="relative">
                    <div
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover"
                      style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBMeaxNcWO766h-HYrSKsq2WTKKLNC1kh-rqBW03EOb7o-VS6nLV6iNdwqUWw9lv_zLnWvRhQgwLYHadrSPxCIv6SPHNCtiCGXA6WyqeY_H8UeRbr9ru86xsNERY53noBSCn5iIOt-DopS9Ko6_GVJ-yzkpZiZ_lEZHfFmyTYy9l0PCAaet-hz8U5R4YB_HRMmUUMZfDd-FnCGjoJ-QMFpcf9COea7_bEf_WG9ss06RzsLkGAzDOEVI62AsI554c46BXAjgcm5nIi8d')` }}
                    ></div>
                    <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-gradient-primary text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                       Learning Management System
                    </div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-[var(--color-primary-violet)] mathco-h3 text-lg sm:text-xl mb-3">Vidya LMS</h3>
                    <p className="text-[var(--color-primary-violet)]/80 mathco-body-sm mb-4 text-sm">
                      Enhance learning experiences with our comprehensive learning management system featuring interactive content and analytics.
                    </p>
                    <a href="mailto:contact@thecollegetech.com?subject=Inquiry%20about%20Vidya%20LMS&body=Hi,%0A%0AI%20would%20like%20to%20learn%20more%20about%20Vidya%20LMS%20and%20how%20it%20can%20enhance%20our%20learning%20management." className="flex items-center justify-between group-hover:text-[var(--color-primary-violet)] transition-colors duration-300">
                      <span className="text-[var(--color-teal)] text-xs sm:text-sm font-medium">Learn More</span>
                      <div className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--color-teal)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z"/>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
                
                {/* Product 3 - IT Services */}
                <div className="glass-card rounded-2xl overflow-hidden group">
                  <div className="relative">
                    <div
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover"
                      style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDZYkGTzwMejnXKfmpamJytFQK2oXwIYLYm_TsIX_b1tL3e9jE7u3kGiunOzWjmjnDWzDwYUoagcbRtVfOr4AMIv33WWqBaAhhGv2Jviu0kM5vYG-Mp4mHDw_TzXXvdzXbZTmqva6UDQE7fDWd2ck-Rm5wHYKB6D3gvXu7HQh1yggw0xmqU4DE7RruZtm3TsUq2XKxzZrGdS3ctx-y54CszX-qjEg0dx6GuHEiN7jWYGTqizAAbFC4CQwZyLXUkbMdx_q3sMeZQbNZJ')` }}
                    ></div>
                    <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-gradient-primary text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                      IT Solutions
                    </div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-[var(--color-primary-violet)] mathco-h3 text-lg sm:text-xl mb-3">IT Services</h3>
                    <p className="text-[var(--color-primary-violet)]/80 mathco-body-sm mb-4 text-sm">
                      Comprehensive IT services including infrastructure management, cybersecurity, and 24/7 technical support for educational institutions.
                    </p>
                    <a href="mailto:contact@thecollegetech.com?subject=Inquiry%20about%20IT%20Services&body=Hi,%0A%0AI%20would%20like%20to%20learn%20more%20about%20your%20IT%20Services%20and%20how%20they%20can%20support%20our%20institution." className="flex items-center justify-between group-hover:text-[var(--color-primary-violet)] transition-colors duration-300">
                      <span className="text-[var(--color-teal)] text-xs sm:text-sm font-medium">Learn More</span>
                      <div className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--color-teal)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z"/>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8 sm:gap-10 px-4 py-12 sm:py-16 @container">
              <div className="glass-card rounded-2xl p-8 sm:p-12 max-w-4xl mx-auto text-center">
                <div className="flex flex-col gap-4 sm:gap-6">
                  <h1 className="text-[var(--color-primary-violet)] mathco-h2 text-2xl sm:text-3xl lg:text-4xl">
                    Transform Your Institution with TheCollegeTech
                  </h1>
                  <p className="text-[var(--color-neutral-dark)] mathco-body max-w-3xl mx-auto text-sm sm:text-base">
                    Ready to revolutionize your educational technology? Contact us today to learn how our innovative solutions can benefit your institution and enhance student success.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
                  <a href="mailto:contact@thecollegetech.com?subject=Ready%20to%20Transform%20Our%20Institution%20-%20TheCollegeTech" className="mathco-button-primary flex min-w-[140px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-11 sm:h-12 px-4 sm:px-6 text-sm sm:text-base font-bold leading-normal tracking-[0.015em]">
                    <span className="truncate">Get Started Today</span>
                  </a>
                  <a href="https://calendly.com/nikhiltirunagiri/30min" target="_blank" rel="noopener noreferrer" className="bg-transparent border-2 border-[var(--color-primary-violet)] text-[var(--color-primary-violet)] hover:bg-[var(--color-primary-violet)] hover:text-white transition-all duration-300 flex min-w-[140px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-11 sm:h-12 px-4 sm:px-6 text-sm sm:text-base font-bold leading-normal tracking-[0.015em]">
                    <span className="truncate">Schedule Demo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="bg-gradient-to-br from-[var(--color-primary-violet)] via-[var(--color-indigo-start)] to-[var(--color-indigo-end)] text-white">
          <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
              <div className="lg:col-span-2">
                <h3 className="text-[var(--color-accent-mint)] mathco-h3 mb-4 text-lg sm:text-xl">TheCollegeTech</h3>
                <p className="text-white/80 mathco-body max-w-md mb-4 sm:mb-6 text-sm sm:text-base">
                  Empowering educational institutions with innovative technology solutions for placements, learning management, and comprehensive IT services.
                </p>
                <div className="flex gap-3 sm:gap-4">
                  <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[var(--color-accent-mint)] hover:text-[var(--color-primary-violet)] transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="currentColor" viewBox="0 0 256 256" className="sm:w-5 sm:h-5">
                      <path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z"></path>
                    </svg>
                  </a>
                  <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[var(--color-accent-mint)] hover:text-[var(--color-primary-violet)] transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="currentColor" viewBox="0 0 256 256" className="sm:w-5 sm:h-5">
                      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0-16h24v63.63a88,88,0,1,1,16,0Z"></path>
                    </svg>
                  </a>
                  <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[var(--color-accent-mint)] hover:text-[var(--color-primary-violet)] transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="currentColor" viewBox="0 0 256 256" className="sm:w-5 sm:h-5">
                      <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
                    </svg>
                  </a>
                </div>
              </div>
              
              <div>
                <h4 className="text-[var(--color-accent-mint)] mathco-h3 mb-3 sm:mb-4 text-base sm:text-lg">Solutions</h4>
                <ul className="space-y-2 sm:space-y-3">
                  <li><a href="#" className="text-white/80 mathco-body-sm hover:text-[var(--color-accent-mint)] transition-colors duration-300 text-sm">Placeeasy</a></li>
                  <li><a href="#" className="text-white/80 mathco-body-sm hover:text-[var(--color-accent-mint)] transition-colors duration-300 text-sm">Vidya LMS</a></li>
                  <li><a href="#" className="text-white/80 mathco-body-sm hover:text-[var(--color-accent-mint)] transition-colors duration-300 text-sm">IT Services</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-[var(--color-accent-mint)] mathco-h3 mb-3 sm:mb-4 text-base sm:text-lg">Company</h4>
                <ul className="space-y-2 sm:space-y-3">
                  <li><a href="#" className="text-white/80 mathco-body-sm hover:text-[var(--color-accent-mint)] transition-colors duration-300 text-sm">About Us</a></li>
                  <li><a href="#" className="text-white/80 mathco-body-sm hover:text-[var(--color-accent-mint)] transition-colors duration-300 text-sm">Contact</a></li>
                  <li><a href="#" className="text-white/80 mathco-body-sm hover:text-[var(--color-accent-mint)] transition-colors duration-300 text-sm">Privacy Policy</a></li>
                  <li><a href="#" className="text-white/80 mathco-body-sm hover:text-[var(--color-accent-mint)] transition-colors duration-300 text-sm">Terms of Service</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-white/20 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
              <p className="text-white/60 mathco-body-sm text-xs sm:text-sm text-center md:text-left">&copy; 2025 TheCollegeTech. All rights reserved.</p>
              <div>
                <p className="text-[var(--color-accent-mint)] mathco-body-sm font-medium text-xs sm:text-sm text-center md:text-right">It&apos;s time for a change and we can make it happen.</p>
              </div>
            </div>
          </div>
        </footer>
        </div>
        </div>
    </>
  );
}


