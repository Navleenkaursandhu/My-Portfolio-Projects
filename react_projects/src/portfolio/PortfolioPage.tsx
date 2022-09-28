import { Education } from './Education'
import { Intro } from './Intro'
import { ReactProjects } from './ReactProjects'

export const PortfolioPage = () => {
  return (
    <div className='font-applyPTSans m-[20px] shadow-[0px_0px_0px_10px_#7003c4]'>
      <Intro />
      <Education/>
      <ReactProjects />
    </div>
  )
}
