import gitImage from './assets/github.png'
import { buttonShadowEffect } from './tailwind_constants'

const buttonStyle = `flex items-center gap-2 bg-indigo-500 font-bold rounded-md px-2 py-1 text-white hover:bg-gradient-to-r from-purple-400 to-indigo-500 ${buttonShadowEffect}`
export const ProjectDetails = (props) => {
  return (
    <>
      <div id={props.details.id} className='gap-2 py-8 lg:w-2/3 md:w-11/12 w-full border-b border-slate-400 lg:text-xl md:text-lg text-md'>
        <div>
          <div className='font-bold mb-2'>{props.details.title}</div>

          <div className='flex flex-wrap gap-2 '>
            {props.details.skills.map((skill, i) => {
              return <div key={i} className='border-2 bg-slate-100 border-slate-300 rounded-md px-4'>{skill}</div>
            })}
          </div>

          <div className='flex items-start gap-2 mt-2'><span className="material-symbols-rounded">
            description
          </span>{props.details.description}</div>

          <div className='mt-2 flex items-center gap-2'><span className="material-symbols-rounded">
            calendar_month
          </span>{props.details.date}</div>

          <div className='flex gap-3 mt-4'>
            <a className={buttonStyle} href={props.details.link} target='_blank' rel="noreferrer">View<span className="text-white material-symbols-rounded">
              open_in_new
            </span></a>

            <a className={buttonStyle} href={props.details.githubLink} target='_blank' rel="noreferrer">GitHub
              <span>
                <img className='w-6 brightness-0 invert' src={gitImage} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
