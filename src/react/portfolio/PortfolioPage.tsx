import { Education } from './Education'
import { Intro } from './Intro'
import { ReactProjects } from './ReactProjects'
import { Skillset } from './Skillset'
import { VanillaJSProjects } from './VanillaJSProjects'
import footerImage from './assets/footer.png'

export const title = 'MY PORTFOLIO'
export const description = <div>
  This portfolio is a showcase of my project and my journey as a Front-End Web Developer.
  This website provides easy access to my projects along
  with a link to the source code for each project. The entire UI was designed and coded by myself and the images were
  all created using an open source digital art application named Krita. Through my personal projects I was
  able to gradually learn the best coding practices and gain invaluable experience in web development and creating delightful UI/UX desgins.
</div>
export const skills = ['ReactJS', 'Vite', 'Tailwind CSS', 'ESLint', 'Git', 'Github', 'VS Code', 'Responsive Web Design', 'Vercel']
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
