import portfolioImage from './assets/portfolio-image.png'
export const Intro = () => {
  return (
    <>
      <div className="flex">
        <div className='w-[50%] flex flex-col justify-center items-center'>
          <div className='mx-[50px] flex flex-col gap-[20px] mt-[50px]'>
            <div>
              <div className='font-bold font-applyLibre text-[50px] text-[#371064]'>Navleen Brar</div>
              <div className='text-[30px] text-[#afaba8]'>FRONT-END WEB DEVELOPER + DESIGNER</div>
            </div>
            <div className='text-[26px] text-[#371064]'>An aspiring Front-End Web Developer and Designer passionate about designing interactive web applications
            </div>
          </div>

        </div>
        <div className='flex-1'>
          <img src={portfolioImage} />
        </div>
      </div>
    </>
  )
}
