import portfolioImage from './assets/portfolio-image.png'
import githubImage from './assets/github.png'
import linkedInImage from './assets/linkedin.png'
export const Intro = () => {
  return (
    <>
      <div className="flex">
        <div className='w-1/2 flex flex-col'>
          <div className='p-8 flex-1 flex items-center'>
            <div>
              <div className='font-extrabold text-6xl text-[#371064]'>Navleen Kaur Brar</div>
              <div className='text-2xl mt-4 text-gray-400'>FRONT-END WEB DEVELOPER + DESIGNER</div>
              <div className='text-2xl mt-8 text-[#371064]'>An aspiring Front-End Web Developer and Designer passionate about designing interactive web applications</div>
            </div>
          </div>

          <div className='py-6 flex flex-col justify-end  w-full p-8 text-xl'>
            <div className='flex items-center gap-4'><span className="text-4xl material-symbols-rounded">remember_me</span>
              604-418-3860
            </div>
            <div className='flex items-center gap-4'><span className="text-4xl material-symbols-rounded">mail</span>
              navleensandhu0211@gmail.com
            </div>

            <button className='flex items-center gap-4 '>
              <img className='w-8' src={githubImage}/>
              Github
            </button>

            <button className='flex items-center gap-4 mt-1'>
              <img className='w-8' src={linkedInImage}/>
              LinkedIn
            </button>
          </div>
        </div>
        <div className='flex-1'>
          <img src={portfolioImage} />
        </div>
      </div>
    </>
  )
}
