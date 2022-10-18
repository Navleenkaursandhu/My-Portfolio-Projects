import { Education } from './Education'
import { Intro } from './Intro'
import { ReactProjects } from './ReactProjects'
import { Skillset } from './Skillset'
import { VanillaJSProjects } from './VanillaJSProjects'
import footerImage from './assets/footer.png'

export const PortfolioPage = () => {
  return (
    <div className='m-2 border-[12px] border-[#6d28d9] rounded-3xl overflow-hidden'>
      <Intro />
      <Skillset />
      <Education />
      <ReactProjects />
      <VanillaJSProjects />
      <div className='w-full lg:mt-10 mt-6 h-60 lg:bg-contain bg-cover bg-repeat-x lg:bg-bottom bg-left-top' style={{ backgroundImage: `url('${footerImage}')` }}/>
    </div>
  )
}
