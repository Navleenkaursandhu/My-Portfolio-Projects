import { Education } from './Education'
import { Intro } from './Intro'
import { ReactProjects } from './ReactProjects'
import { Skillset } from './Skillset'
import { VanillaJSProjects } from './VanillaJSProjects'
import footerImage from './assets/footer.png'
import { parseISO } from 'date-fns'

export const title = 'MY PORTFOLIO'
export const description = <div>
  <p>Welcome to my portfolio, a showcase of my journey as a Front-End Web Developer. This website serves as a platform for
    displaying my various projects, all of which have been designed and coded by myself. In addition, this portfolio provides
    easy access to the source code for each project.</p>
  <p className='mt-2'>In the creation of this website, I utilized Krita, an open source digital art application, to create all of the images.
    As I worked on my personal projects, I was able to develop a strong foundation in best coding practices and gain valuable experience
    in web development and UI/UX design. I am continuously seeking new opportunities to grow and expand my skill-set as a Front-End Web Developer</p>
</div>
export const skills = ['ReactJS', 'Vite', 'Tailwind CSS', 'ESLint', 'Git', 'Github', 'VS Code', 'Responsive Web Design', 'Vercel']
export const date = parseISO('2022-10')
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
