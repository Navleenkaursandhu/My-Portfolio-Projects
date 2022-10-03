import { Education } from './Education'
import { Intro } from './Intro'
import { ReactProjects } from './ReactProjects'
import { Skillset } from './Skillset'
import { VanillaJSProjects } from './VanillaJSProjects'

export const PortfolioPage = () => {
  return (
    <div className='m-5 shadow-[0px_0px_0px_10px_#6d28d9]'>
      <Intro />
      <Skillset />
      <Education />
      <ReactProjects />
      <VanillaJSProjects />
    </div>
  )
}
