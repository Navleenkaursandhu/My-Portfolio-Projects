import portfolioImage from './assets/portfolio-image.png'
import githubImage from './assets/mygithub.png'
import { buttonShadowEffect } from '../common/tailwind_constants'
export const Intro = () => {
  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row">
        <div className='w-full lg:w-1/2 flex flex-col'>
          <div className='lg:p-8 md:p-8 p-2 flex-1 flex items-center'>
            <div>
              <div className='font-extrabold lg:text-6xl md:text-5xl text-4xl text-[#371064]'>Navleen Kaur Brar</div>
              <div className='lg:text-2xl md:text-xl text-lg mt-4 text-gray-400 font-bold'>EDUCATOR</div>
              <div className='lg:text-2xl md:text-xl text-lg mt-8 text-[#371064]'>
                An aspiring middle years and high school teacher passionate about
                educating our next generation of leaders and innovators.
              </div>
              <div className='md:text-xl text-lg mt-8 text-[#371064] italic'>
                This website was created by me from scratch showcasing my digital art skills and web development projects.
              </div>
            </div>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 text-[#371064] lg:p-8 md:p-8 p-2 lg:text-xl md:text-lg text-md'>
            <div className='flex items-center gap-4'><span className="lg:text-4xl md:text-4xl text-3xl material-symbols-rounded">mail</span>
              navleenbrar0211@gmail.com
            </div>

            <div className='lg:mb-0 mb-2.5'>
              <a className='flex items-center gap-4' href='https://github.com/brar-navleen' target='_blank' rel="noreferrer">
                <button><img className={`lg:w-9 md:w-9 w-7 rounded-sm ${buttonShadowEffect} shadow-[#00000094] hover:shadow-[#00000094]`} src={githubImage} /></button>
                My software development projects on GitHub
              </a>
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
