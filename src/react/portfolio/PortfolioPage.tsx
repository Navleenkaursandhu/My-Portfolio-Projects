import { Education } from './Education'
import { Intro } from './Intro'
import { ReactProjects } from './ReactProjects'
import { Skillset } from './Skillset'
import { VanillaJSProjects } from './VanillaJSProjects'
import footerImage from './assets/footer.png'

export const title = 'MY PORTFOLIO'
export const description = <div>
  This portfolio showcases my potential as a Front-End Web Developer.
  The website provides an easy access to my projects along
  with link to source code. The entire UI is self coded and the images were
  self sketched using Krita application. Through my personal projects I was
  able to learn best coding practices when it comes to web designing and development.
</div>
export const skills = ['React', 'Vite', 'JavaScript', 'Tailwind CSS', 'CSS', 'HTML', 'ESLint', 'Git', 'Github', 'VS Code', 'Responsive Web Design', 'Vercel']
export const date = 'September 2022 - October 2022'
export const link = 'https://notebook-henna.vercel.app/'
export const githubLink = 'https://github.com/Navleenkaursandhu/notebook/tree/main/src/react/portfolio'

export const PortfolioPage = () => {
  return (
    <div className='m-2 border-[12px] border-[#6d28d9] rounded-3xl overflow-hidden'>
      <Intro />
      <Skillset />
      <Education />
      <ReactProjects />
      <VanillaJSProjects />
      <div className='w-full lg:mt-10 mt-6 h-60 lg:bg-contain bg-cover bg-repeat-x lg:bg-bottom bg-left-top' style={{ backgroundImage: `url('${footerImage}')` }} />
    </div>
  )
}
