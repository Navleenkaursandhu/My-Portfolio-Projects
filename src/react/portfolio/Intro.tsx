import portfolioImage from './assets/portfolio-image.png'
import githubImage from './assets/mygithub.png'
import linkedInImage from './assets/linkedin.png'
import resumeImage from './assets/resume.png'
import myResume from './assets/resume.pdf'
import { buttonShadowEffect } from '../common/tailwind_constants'
export const Intro = () => {
  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row">
        <div className='w-full lg:w-1/2 flex flex-col'>
          <div className='lg:p-8 md:p-8 p-2 flex-1 flex items-center'>
            <div>
              <div className='font-extrabold lg:text-6xl md:text-5xl text-4xl text-[#371064]'>Navleen Kaur Brar</div>
              <div className='lg:text-2xl md:text-xl text-lg mt-4 text-gray-400 font-bold'>FRONT-END WEB DEVELOPER + DESIGNER</div>
              <div className='lg:text-2xl md:text-xl text-lg mt-8 text-[#371064]'>An aspiring Front-End Web Developer and Designer passionate about designing interactive web applications
                with strong organizational and problem solving skills.</div>
            </div>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 text-[#371064] lg:p-8 md:p-8 p-2 lg:text-xl md:text-lg text-md'>
            <div className='flex items-center gap-4'><span className="lg:text-4xl md:text-4xl text-3xl material-symbols-rounded">remember_me</span>
              236-632-8100
            </div>
            <div className='flex items-center gap-4'><span className="lg:text-4xl md:text-4xl text-3xl material-symbols-rounded">mail</span>
              navleenbrar0211@gmail.com
            </div>

            <div className='lg:mb-0 mb-2.5'>
              <a className='flex items-center gap-4' href='https://github.com/brar-navleen' target='_blank' rel="noreferrer">
                <button><img className={`lg:w-9 md:w-9 w-7 rounded-sm ${buttonShadowEffect} shadow-[#00000094] hover:shadow-[#00000094]`} src={githubImage} /></button>
                Github
              </a>
            </div>

            <a className='flex items-center gap-4' href='https://www.linkedin.com/in/navleen-brar-5153b725b/' target='_blank' rel="noreferrer">
              <button><img className={`lg:w-9 md:w-9 w-7 rounded-sm ${buttonShadowEffect} shadow-[#5d92b9] hover:shadow-[#5d92b9]`} src={linkedInImage} /></button>
              LinkedIn
            </a>

            <a className='flex items-center gap-4 mt-2.5' href={myResume} target='_blank' rel="noreferrer">
              <button><img className={`lg:w-9 md:w-9 w-7 rounded-sm ${buttonShadowEffect} shadow-[#5d92b9] hover:shadow-[#5d92b9]`} src={resumeImage} /></button>
              Resume
            </a>

          </div>
        </div>
        <div className='flex-1'>
          <img src={portfolioImage} />
        </div>
      </div>
    </>
  )
}
