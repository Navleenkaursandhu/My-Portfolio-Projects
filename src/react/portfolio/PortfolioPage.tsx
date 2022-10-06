import { Education } from './Education'
import { Intro } from './Intro'
import { ReactProjects } from './ReactProjects'
import { Skillset } from './Skillset'
import { VanillaJSProjects } from './VanillaJSProjects'
import footerImage from './assets/footer.png'

export const PortfolioPage = () => {
  return (
    <div className='m-5 shadow-[0px_0px_0px_10px_#6d28d9]'>
      <Intro />
      <Skillset />
      <Education />
      <ReactProjects />
      <VanillaJSProjects />
      <div className='w-full lg:mt-10 md:mt-6 -mt-24 h-60 bg-contain bg-repeat-x bg-bottom' style={{ backgroundImage: `url('${footerImage}')` }}/>
    </div>
  )
}
