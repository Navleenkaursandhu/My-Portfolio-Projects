import portfolioImage from './assets/portfolio-image.png'
export const Intro = () => {
  return (
    <>
      <div className="flex">
        <div className='w-1/2 flex flex-col justify-center items-center'>
          <div className='p-8'>
            <div className='font-extrabold font-applyBarlow text-6xl text-[#371064]'>Navleen Kaur Brar</div>
            <div className='text-2xl mt-4 text-gray-400'>FRONT-END WEB DEVELOPER + DESIGNER</div>
            <div className='text-2xl mt-8 text-[#371064]'>An aspiring Front-End Web Developer and Designer passionate about designing interactive web applications</div>
          </div>

        </div>
        <div className='flex-1'>
          <img src={portfolioImage} />
        </div>
      </div>
    </>
  )
}
