import portfolioImage from './assets/portfolio-image.png'
import githubImage from './assets/mygithub.png'
import linkedInImage from './assets/linkedin.png'
import { buttonShadowEffect } from './tailwind_constants'
export const Intro = () => {
  return (
    <>
      <div className="flex">
        <div className='w-1/2 flex flex-col'>
          <div className='p-8 flex-1 flex items-center'>
            <div>
              <div className='font-extrabold text-6xl text-[#371064]'>Navleen Kaur Brar</div>
              <div className='text-2xl mt-4 text-gray-400 font-bold'>FRONT-END WEB DEVELOPER + DESIGNER</div>
              <div className='text-2xl mt-8 text-[#371064]'>An aspiring Front-End Web Developer and Designer passionate about designing interactive web applications
                with strong organizational and problem solving skills</div>
            </div>
          </div>

          <div className='py-6 flex text-[#371064] justify-between w-full p-8 text-xl'>
            <table className='border-separate border-spacing-y-2'>
              <tbody>
                <tr>
                  <td>
                    <div className='flex items-center gap-4'><span className="text-4xl material-symbols-rounded">remember_me</span>
                      604-418-3860
                    </div>
                  </td>

                  <td>
                    <div className='flex items-center gap-4 ml-8'><span className="text-4xl material-symbols-rounded">mail</span>
                      navleensandhu0211@gmail.com
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div className='flex items-center gap-4 '>
                      <a href='https://github.com/Navleenkaursandhu' target='_blank' rel="noreferrer">
                        <button><img className={`w-9 rounded-sm ${buttonShadowEffect} shadow-[#00000094] hover:shadow-[#00000094]`} src={githubImage} /></button>
                      </a>
                      Github
                    </div>
                  </td>

                  <td>
                    <div className='flex items-center gap-4 ml-8'>
                      <a href='https://www.linkedin.com/in/n-s-813167222/' target='_blank' rel="noreferrer">
                        <button><img className={`w-9 rounded-sm ${buttonShadowEffect} shadow-[#5d92b9] hover:shadow-[#5d92b9]`} src={linkedInImage} /></button>
                      </a>
                      LinkedIn
                    </div>
                  </td>

                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className='flex-1'>
          <img src={portfolioImage} />
        </div>
      </div>
    </>
  )
}
