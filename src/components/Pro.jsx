import React from 'react'
import cam1 from '../assets/cam1.png'
import cam2 from '../assets/cam2.png'
import cam3 from '../assets/cam3.png'

function Pro() {
  return (
    <div>
      <div className='flex-wrap justify-center border-b-black/10 bg-[#fafafa] md:flex md:border-b'>
        <a className='mx-auto block border-b border-black/10 pt-[46px] text-center md:w-full md:border-b md:pt-[51px] lg:border-r-0 lg:pt-[56px] xl:w-1/3 xl:border-b-0 xl:border-r' href='#'>
          <h3 className='text-[32px] font-600 leading-[40px] lg:pb-0 lg:leading-[50px]'>
            Tadpole
          </h3>
          <p class="pb-[18px] text-[14px] font-500 leading-[24px] text-opal-grey1 md:pb-[18px] lg:pb-[18px] lg:text-[16px]">The tiny webcam with a clip</p>
          <div className='mb-7 inline-flex h-[32px] items-center justify-center rounded-full bg-[#ffdb01] px-5 text-[14px] md:mb-8 lg:mb-[46px] lg:h-[40px] lg:text-[16px]'>
            Now $
            129


          </div>
          <img src={cam1} alt="opal c1 in white" class="mx-auto w-[139px] lg:w-[237px] xl:w-[189px]"></img>
        </a>


        <a class="mx-auto block min-h-[416px] border-b border-black/10 pt-[46px] text-center md:min-h-[376px]  md:w-1/2 md:border-b-0 md:border-r md:pt-[51px] lg:min-h-[552px] lg:pt-[56px] xl:w-1/3" href="#">
          <h3 class="text-[32px] font-600 leading-[40px] lg:pb-0 lg:leading-[50px]">Opal C1</h3>
          <p class="pb-[18px] text-[14px] font-500 leading-[24px] text-opal-grey1 md:pb-[18px] lg:pb-[18px] lg:text-[16px]">
            The first professional webcam
          </p>
          <div class="mb-7 inline-flex h-[32px] items-center justify-center rounded-full bg-[#ffdb01] px-5 text-[14px] md:mb-8 lg:mb-[46px] lg:h-[40px] lg:text-[16px]">
            $299
          </div>

          <img src={cam2} alt="opal c1 in white" class="mx-auto w-[183px] lg:w-[274px]"></img>
        </a>

        <a class="mx-auto block min-h-[416px] pt-[46px] text-center md:min-h-[376px] md:w-1/2 md:pt-[51px] lg:min-h-[552px] lg:pt-[56px] xl:w-1/3" href="#">
          <h3 class="pb-1.5 text-[32px] font-600 leading-[40px] lg:pb-0 lg:leading-[50px]">Composer</h3>
          <p class="pb-[50px] text-[14px] font-500 leading-[24px] text-opal-grey1 md:pb-[33px] lg:pb-[73px] lg:text-[16px]">
            The magic behind the camera
          </p>
          <img src={cam3} alt="app icon" class="mx-auto w-[170px] lg:w-[206px]" /></a>
      </div>

    </div>
  )
}

export default Pro