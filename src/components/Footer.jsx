import React from "react";
import logo from '../assets/logo-black.png';

function Footer() {
  return (
    <footer className="bg-white">
      <div className="px-2 md:px-4">
        <div className="footer relative pb-[24.66px] pt-[31.96px] md:pb-0">
          <img
            src={logo}
            alt="logo"
            style={{ opacity: 1 }} // Changed to object syntax
            className="transition-opacity duration-200 ease-default"
          />
        </div>
        <div className="relative mx-auto grid max-w-[1616px] grid-cols-4 gap-x-4 md:grid-cols-8 lg:mt-[-93px] lg:grid-cols-12 xl:mt-[-133px]">
          <div className="relative col-span-4 hidden border-t border-t-black/10 pt-[29px] group-[.is]/theme-dark:border-t-black/20 md:block lg:pt-[37px] xl:col-start-2 xl:pt-[41px] 2xl:pt-[35px]">
            <p className="mb-[20px] max-w-[254px] text-[20px] font-600 leading-[28px]">
              Subscribe to the 
              <br />
              Opal Newsletter
            </p>
            <p className="mb-[23px] max-w-[247px] text-[13px] leading-[24px] text-opal-grey2 2xl:text-[14px]">
              Latest news, musings, announcements and updates direct to
              your inbox.
            </p>
            <a
  href="#"
  className="footer-newsletter-link ease-ease group relative inline-flex h-10 w-[100px] items-center rounded-[20px] bg-black transition-colors duration-200 will-change-[#ffdb01] hover:bg-[#ffdb01] group-[.is]/theme-dark:hover:bg-[#ffdb01] deep:white deep:hover:black group-hover/theme-dark:deep:fill-white"
>
  <svg
    viewBox="0 0 28 20"
    className="absolute left-[calc(100%-44px)] w-[24px] transition-[left] duration-400 ease-o3 group-hover:left-[calc(50%-14px)] deep:duration-300 deep:ease-o3 fill-white hover:fill-black"  >
    <path d="M18,19c-0.256,0-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414L23.586,11H2c-0.552,0-1-0.448-1-1s0.448-1,1-1h21.586l-6.293-6.293c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0l8,8c0.097,0.096,0.169,0.208,0.218,0.326C26.973,9.735,27,9.863,27,9.997l0,0c0,0.002,0,0.004,0,0.006l0,0c0,0.134-0.027,0.262-0.075,0.378c-0.049,0.119-0.121,0.23-0.218,0.326l-8,8C18.512,18.902,18.256,19,18,19z"></path>
  </svg>
</a>
          </div>
          <div className="footer-links col-span-4 flex flex-wrap gap-x-4 border-t border-t-black/10 px-2 pb-[110px] pt-[29px] group-[.is]/theme-dark:border-t-black/20 md:col-start-5 md:px-0 md:pb-0 lg:col-span-5 lg:col-start-8 lg:pt-[37px] xl:col-span-4 xl:col-start-8 xl:pt-[41px] 2xl:pt-[35px]">
  <div className="flex-1">
    <div className="mb-[20px] text-[13px] font-400 text-black/40 2xl:text-[14px]">Products</div>
    <a href="/opal-tadpole" className="mb-[9px] block text-[13px] font-medium text-black hover:text-black/50 2xl:text-[14px]">Tadpole</a>
    <a href="#" className="mb-[9px] block text-[13px] font-medium text-black hover:text-black/50 2xl:text-[14px]">Opal C1</a>
    <a href="#" className="mb-[9px] block text-[13px] font-medium text-black hover:text-black/50 2xl:text-[14px]">Composer</a>
  </div>
  <div className="flex-1">
    <div className="mb-[20px] text-[13px] font-400 text-black/40 2xl:text-[14px]">Company</div>
    <a href="/about" className="mb-[9px] block text-[13px] font-medium text-black hover:text-black/50 2xl:text-[14px]">About</a>
    <a href="/terms" className="mb-[9px] block text-[13px] font-medium text-black hover:text-black/50 2xl:text-[14px]">Terms</a>
    <a href="/privacy" className="mb-[9px] block text-[13px] font-medium text-black hover:text-black/50 2xl:text-[14px]">Privacy</a>
  </div>
  <div className="flex-1">
    <div className="mb-[20px] text-[13px] font-400 text-black/40 2xl:text-[14px]">Resources</div>
    <a href="mailto:support@opalcamera.com" className="mb-[9px] block text-[13px] font-medium text-black hover:text-black/50 2xl:text-[14px]" target="_blank" rel="noopener noreferrer">Support</a>
    <a href="#" className="mb-[9px] block text-[13px] font-medium text-black hover:text-black/50 2xl:text-[14px]">Media Kit</a>
    <a href="/opal-composer/download" className="mb-[9px] block text-[13px] font-medium text-black hover:text-black/50 2xl:text-[14px]">Downloads</a>
    <a href="#" className="mb-[9px] block text-[13px] font-medium text-black hover:text-black/50 2xl:text-[14px]">Newsletter</a>
  </div>
  <div className="flex-1">
    <div className="mb-[20px] text-[13px] font-400 text-black/40 2xl:text-[14px]">Social</div>
    <a href="#" className="mb-[9px] block text-[13px] font-medium text-black hover:text-black/50 2xl:text-[14px]" target="_blank" rel="noopener noreferrer">Instagram</a>
    <a href="#" className="mb-[9px] block text-[13px] font-medium text-black hover:text-black/50 2xl:text-[14px]" target="_blank" rel="noopener noreferrer">Twitter</a>
  </div>
</div>
        </div>
        <div className="mx-auto grid max-w-[1616px] grid-cols-4 gap-x-4 pt-5 md:grid-cols-8 md:pt-[64px] lg:grid-cols-12">
          <div className="relative col-span-4 grid grid-cols-4 items-center gap-x-4 leading-[0] md:col-span-8 md:grid-cols-8 lg:col-span-12 xl:col-span-10 xl:col-start-2 xl:grid-cols-10">
            <div className="col-span-4 flex h-[65px] w-full items-center justify-between border-t border-t-black/10 px-2 text-[14px] font-medium leading-[1] group-[.is]/theme-dark:border-t-black/20 md:h-[50px] md:px-0 md:pt-0">
              <div>Opal Camera Inc.</div>
              <div>All rights reserved.</div>
            </div>
            <div className="hidden h-[65px] items-center justify-end leading-[0] md:col-span-4 md:flex md:h-[50px] lg:col-span-8 xl:col-span-6">
             <button className="jump ease-ease relative flex items-center justify-center h-10 w-10 cursor-pointer rounded-full bg-gray-800 bg-opacity-10 transition-colors duration-200 hover:bg-yellow-400 group-[.is]/theme-dark:hover:bg-yellow-500 child:transition-colors child:duration-200 group-[.is]/theme-dark:child:hover:fill-white">
  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
    <path d="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z"/>
  </svg>
</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;