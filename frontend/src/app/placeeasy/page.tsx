"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Placeeasy() {
  const [isDarkBackground, setIsDarkBackground] = useState(false);
  const hasScrolledRef = useRef(false);

  useEffect(() => {
    // Sections with dark backgrounds (SVG/gradient backgrounds)
    const darkSections = ['placeeasy-hero', 'features-section'];
    
    // Initial check - determine which section is at the navbar position
    const checkInitialSection = () => {
      // Navbar is fixed at top: 16px, so check what's behind the navbar center (around 45px from top)
      const navbarCenterY = 45;
      const sections = document.querySelectorAll('#placeeasy-hero, #overview, #features-section, #contact-section');
      let closestSectionId: string | null = null;
      let maxCoverage = 0;
      
      sections.forEach((section) => {
        const htmlSection = section as HTMLElement;
        const rect = htmlSection.getBoundingClientRect();
        if (rect.top <= navbarCenterY && rect.bottom >= navbarCenterY) {
          const sectionTop = Math.max(rect.top, navbarCenterY - 30);
          const sectionBottom = Math.min(rect.bottom, navbarCenterY + 30);
          const coverage = sectionBottom - sectionTop;
          
          if (coverage > maxCoverage && htmlSection.id) {
            maxCoverage = coverage;
            closestSectionId = htmlSection.id;
          }
        }
      });
      
      if (closestSectionId) {
        setIsDarkBackground(darkSections.includes(closestSectionId));
      } else {
        setIsDarkBackground(false);
      }
    };

    checkInitialSection();
    const timeoutId = setTimeout(() => {
      checkInitialSection();
    }, 100);
    
    const observerOptions = {
      root: null,
      rootMargin: '-60px 0px 0px 0px',
      threshold: [0, 0.1, 0.5, 1]
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      if (!hasScrolledRef.current && window.scrollY < 50) {
        return;
      }
      
      let maxIntersection = 0;
      let mostVisibleSectionId: string | null = null;
      
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio > maxIntersection) {
          const target = entry.target as HTMLElement;
          if (target && target.id) {
            maxIntersection = entry.intersectionRatio;
            mostVisibleSectionId = target.id;
          }
        }
      });
      
      if (mostVisibleSectionId && maxIntersection > 0.1) {
        setIsDarkBackground(darkSections.includes(mostVisibleSectionId));
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    const observerTimeoutId = setTimeout(() => {
      const sections = document.querySelectorAll('#placeeasy-hero, #overview, #features-section, #contact-section');
      sections.forEach(section => observer.observe(section));
    }, 150);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(observerTimeoutId);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Navbar isDarkBackground={isDarkBackground} variant="island" currentPath="/placeeasy" />
        
        {/* Main content with layout container */}
        <div
          className="relative flex size-full min-h-screen flex-col group/design-root overflow-x-hidden"
          style={{ fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif' }}
        >
        <div className="layout-container flex h-full grow flex-col">
          <div className="flex flex-1 justify-center py-5 pt-16 sm:pt-18">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1 mx-auto">
            <div className="@container">
              <div className="@[480px]:p-4">
                <div id="placeeasy-hero" className="mathco-hero-bg flex min-h-[60vh] sm:min-h-[70vh] flex-col gap-6 sm:gap-8 items-start justify-center p-4 sm:p-8 lg:p-16 @[480px]:gap-12 @[480px]:rounded-xl relative overflow-hidden">
                  
                  <div className="flex flex-col gap-4 sm:gap-6 relative z-10 max-w-2xl">
                    <h1 className="text-[var(--color-primary-white)] text-3xl sm:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight">
                      Placeeasy: Your Gateway to Career Success
                    </h1>
                    <p className="text-[var(--color-primary-white)]/80 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-xl">
                      Streamline your placement process with our comprehensive platform that connects students with top companies and opportunities. Simplify recruitment, manage applications, and accelerate career growth.
                    </p>
                    <a href="#features-section" className="flex items-center gap-2 text-[var(--color-primary-white)] cursor-pointer hover:gap-3 transition-all duration-300 mb-6 sm:mb-8 group">
                      <span className="text-sm sm:text-base font-medium">Explore Features</span>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="group-hover:translate-x-1 transition-transform duration-300">
                        <path d="M3.33333 8H12.6667M12.6667 8L8 3.33334M12.6667 8L8 12.6667"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Overview Section */}
            <div id="overview" className="flex flex-col gap-8 sm:gap-10 px-4 py-12 sm:py-16 @container">
              <div className="flex flex-col gap-4 sm:gap-6 text-center max-w-4xl mx-auto">
                <h1 className="text-[var(--color-primary-violet)] mathco-h2 text-2xl sm:text-3xl lg:text-4xl">
                  Seamless Placement Management
                </h1>
                <p className="text-[var(--color-neutral-dark)] mathco-body max-w-3xl mx-auto text-sm sm:text-base">
                  Placeeasy revolutionizes the campus placement process by providing a unified platform for students, placement officers, and recruiters. Manage everything from job postings to interview scheduling with ease.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
                {/* Feature 1 */}
                <div className="glass-card rounded-2xl flex flex-col gap-4 p-4 sm:p-6 group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-primary flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256" className="sm:w-6 sm:h-6">
                      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm12-88a12,12,0,1,1-12-12A12,12,0,0,1,140,128Z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-[var(--color-primary-violet)] mathco-h3 text-base sm:text-lg">Job Portal</h3>
                    <p className="text-[var(--color-primary-violet)]/80 mathco-body-sm text-sm">
                      Browse and apply to hundreds of job opportunities from top companies. Filter by role, location, salary, and more to find your perfect match.
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
                
                {/* Feature 2 */}
                <div className="glass-card rounded-2xl flex flex-col gap-4 p-4 sm:p-6 group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-primary flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256" className="sm:w-6 sm:h-6">
                      <path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-[var(--color-primary-violet)] mathco-h3 text-base sm:text-lg">Application Tracking</h3>
                    <p className="text-[var(--color-primary-violet)]/80 mathco-body-sm text-sm">
                      Track all your job applications in one place. Monitor status updates, interview schedules, and receive notifications for new opportunities.
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
                
                {/* Feature 3 */}
                <div className="glass-card rounded-2xl flex flex-col gap-4 p-4 sm:p-6 group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-primary flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256" className="sm:w-6 sm:h-6">
                      <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-[var(--color-primary-violet)] mathco-h3 text-base sm:text-lg">Company Dashboard</h3>
                    <p className="text-[var(--color-primary-violet)]/80 mathco-body-sm text-sm">
                      Recruiters can post jobs, manage applications, schedule interviews, and collaborate with placement officers all from one intuitive dashboard.
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

            {/* Features Section with Dark Background */}
            <div id="features-section" className="flex flex-col gap-8 sm:gap-10 px-4 py-12 sm:py-16 @container" style={{ backgroundImage: 'url(/bg-svg-1.svg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', width: '100vw', marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)' }}>
              <div className="flex flex-col gap-4 sm:gap-6 text-center max-w-4xl mx-auto">
                <h1 className="text-white mathco-h2 text-2xl sm:text-3xl lg:text-4xl">
                  Powerful Features
                </h1>
                <p className="text-white/80 mathco-body max-w-3xl mx-auto text-sm sm:text-base">
                  Discover what makes Placeeasy the preferred placement platform for colleges and companies across India.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
                {/* Feature Card 1 */}
                <div className="p-6 sm:p-8 group hover:scale-105 transition-transform duration-300 relative" style={{ backgroundColor: 'transparent', borderLeft: '0.5px solid rgba(255, 255, 255, 1)', borderRight: '0.5px solid rgba(255, 255, 255, 1)', color: 'rgba(247, 247, 250, 1)' }}>
                  <div style={{ position: 'absolute', top: '0', left: '0', width: '6px', height: '6px', backgroundColor: 'rgba(255, 255, 255, 1)', transform: 'translate(-50%, -50%)' }}></div>
                  <div style={{ position: 'absolute', bottom: '0', left: '0', width: '6px', height: '6px', backgroundColor: 'rgba(255, 255, 255, 1)', transform: 'translate(-50%, 50%)' }}></div>
                  <div style={{ position: 'absolute', top: '0', right: '0', width: '6px', height: '6px', backgroundColor: 'rgba(255, 255, 255, 1)', transform: 'translate(50%, -50%)' }}></div>
                  <div style={{ position: 'absolute', bottom: '0', right: '0', width: '6px', height: '6px', backgroundColor: 'rgba(255, 255, 255, 1)', transform: 'translate(50%, 50%)' }}></div>
                  <div className="flex flex-col h-full">
                    <h3 className="mathco-h3 text-lg sm:text-xl mb-4" style={{ color: 'var(--color-neutral-light)' }}>Resume Builder</h3>
                    <p className="mathco-body-sm text-sm" style={{ color: 'var(--color-white)' }}>
                      Create professional resumes with our built-in resume builder. Choose from templates, customize sections, and export in multiple formats.
                    </p>
                  </div>
                </div>

                {/* Feature Card 2 */}
                <div className="p-6 sm:p-8 group hover:scale-105 transition-transform duration-300 relative" style={{ backgroundColor: 'transparent', borderLeft: '0.5px solid rgba(255, 255, 255, 1)', borderRight: '0.5px solid rgba(255, 255, 255, 1)', color: 'rgba(247, 247, 250, 1)' }}>
                  <div style={{ position: 'absolute', top: '0', left: '0', width: '6px', height: '6px', backgroundColor: 'rgba(255, 255, 255, 1)', transform: 'translate(-50%, -50%)' }}></div>
                  <div style={{ position: 'absolute', bottom: '0', left: '0', width: '6px', height: '6px', backgroundColor: 'rgba(255, 255, 255, 1)', transform: 'translate(-50%, 50%)' }}></div>
                  <div style={{ position: 'absolute', top: '0', right: '0', width: '6px', height: '6px', backgroundColor: 'rgba(255, 255, 255, 1)', transform: 'translate(50%, -50%)' }}></div>
                  <div style={{ position: 'absolute', bottom: '0', right: '0', width: '6px', height: '6px', backgroundColor: 'rgba(255, 255, 255, 1)', transform: 'translate(50%, 50%)' }}></div>
                  <div className="flex flex-col h-full">
                    <h3 className="mathco-h3 text-lg sm:text-xl mb-4" style={{ color: 'var(--color-neutral-light)' }}>Interview Scheduling</h3>
                    <p className="mathco-body-sm text-sm" style={{ color: 'var(--color-white)' }}>
                      Automated interview scheduling system that syncs calendars, sends reminders, and manages multiple rounds seamlessly.
                    </p>
                  </div>
                </div>

                {/* Feature Card 3 */}
                <div className="p-6 sm:p-8 group hover:scale-105 transition-transform duration-300 relative" style={{ backgroundColor: 'transparent', borderLeft: '0.5px solid rgba(255, 255, 255, 1)', borderRight: '0.5px solid rgba(255, 255, 255, 1)', color: 'rgba(247, 247, 250, 1)' }}>
                  <div style={{ position: 'absolute', top: '0', left: '0', width: '6px', height: '6px', backgroundColor: 'rgba(255, 255, 255, 1)', transform: 'translate(-50%, -50%)' }}></div>
                  <div style={{ position: 'absolute', bottom: '0', left: '0', width: '6px', height: '6px', backgroundColor: 'rgba(255, 255, 255, 1)', transform: 'translate(-50%, 50%)' }}></div>
                  <div style={{ position: 'absolute', top: '0', right: '0', width: '6px', height: '6px', backgroundColor: 'rgba(255, 255, 255, 1)', transform: 'translate(50%, -50%)' }}></div>
                  <div style={{ position: 'absolute', bottom: '0', right: '0', width: '6px', height: '6px', backgroundColor: 'rgba(255, 255, 255, 1)', transform: 'translate(50%, 50%)' }}></div>
                  <div className="flex flex-col h-full">
                    <h3 className="mathco-h3 text-lg sm:text-xl mb-4" style={{ color: 'var(--color-neutral-light)' }}>Placement Analytics</h3>
                    <p className="mathco-body-sm text-sm" style={{ color: 'var(--color-white)' }}>
                      Comprehensive analytics dashboard for placement officers to track placement statistics, student progress, and company engagement metrics.
                    </p>
                  </div>
                </div>

                {/* Feature Card 4 */}
                <div className="p-6 sm:p-8 group hover:scale-105 transition-transform duration-300 relative" style={{ backgroundColor: 'transparent', borderLeft: '0.5px solid rgba(255, 255, 255, 1)', borderRight: '0.5px solid rgba(255, 255, 255, 1)', color: 'rgba(247, 247, 250, 1)' }}>
                  <div style={{ position: 'absolute', top: '0', left: '0', width: '6px', height: '6px', backgroundColor: 'rgba(255, 255, 255, 1)', transform: 'translate(-50%, -50%)' }}></div>
                  <div style={{ position: 'absolute', bottom: '0', left: '0', width: '6px', height: '6px', backgroundColor: 'rgba(255, 255, 255, 1)', transform: 'translate(-50%, 50%)' }}></div>
                  <div style={{ position: 'absolute', top: '0', right: '0', width: '6px', height: '6px', backgroundColor: 'rgba(255, 255, 255, 1)', transform: 'translate(50%, -50%)' }}></div>
                  <div style={{ position: 'absolute', bottom: '0', right: '0', width: '6px', height: '6px', backgroundColor: 'rgba(255, 255, 255, 1)', transform: 'translate(50%, 50%)' }}></div>
                  <div className="flex flex-col h-full">
                    <h3 className="mathco-h3 text-lg sm:text-xl mb-4" style={{ color: 'var(--color-neutral-light)' }}>Internship Opportunities</h3>
                    <p className="mathco-body-sm text-sm" style={{ color: 'var(--color-white)' }}>
                      Access exclusive internship opportunities alongside full-time positions. Build experience while still in college.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div id="contact-section" className="flex flex-col gap-8 sm:gap-10 px-4 py-12 sm:py-16 @container">
              <div className="glass-card rounded-2xl p-8 sm:p-12 max-w-4xl mx-auto text-center">
                <div className="flex flex-col gap-4 sm:gap-6">
                  <h1 className="text-[var(--color-primary-violet)] mathco-h2 text-2xl sm:text-3xl lg:text-4xl">
                    Ready to Streamline Your Placements?
                  </h1>
                  <p className="text-[var(--color-neutral-dark)] mathco-body max-w-3xl mx-auto text-sm sm:text-base">
                    Experience the power of Placeeasy and see how it can transform your campus placement process. Get in touch to schedule a demo or learn more about our features.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 justify-center items-center">
                  <a href="mailto:contact@thecollegetech.com?subject=Inquiry%20about%20Placeeasy&body=Hi,%0A%0AI%20would%20like%20to%20learn%20more%20about%20Placeeasy%20and%20how%20it%20can%20help%20our%20institution." className="mathco-button-primary flex min-w-[140px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-11 sm:h-12 px-4 sm:px-6 text-sm sm:text-base font-bold leading-normal tracking-[0.015em]">
                    <span className="truncate">Get Started</span>
                  </a>
                  <a href="https://calendly.com/nikhiltirunagiri/30min" target="_blank" rel="noopener noreferrer" className="bg-transparent border-2 border-[var(--color-primary-violet)] text-[var(--color-primary-violet)] hover:bg-[var(--color-primary-violet)] hover:text-white transition-all duration-300 flex min-w-[140px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-11 sm:h-12 px-4 sm:px-6 text-sm sm:text-base font-bold leading-normal tracking-[0.015em]">
                    <span className="truncate">Schedule Demo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
        </div>
        <Footer />
    </>
  );
}

