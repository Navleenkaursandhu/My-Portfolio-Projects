import gitImage from './assets/github.png'
export const ProjectDetails = (props) => {
  return (
    <>
      <div className='gap-2 px-8 py-8 w-1/2 border-b border-slate-400'>
        <div>
          <div className='font-bold text-xl'>{props.details.title}</div>

          <div className='flex flex-wrap gap-2'>
            {props.details.skills.map((skill, i) => {
              return <div key={i} className='border-2 bg-slate-100 border-slate-300 rounded-md px-4 my-2'>{skill}</div>
            })}
          </div>

          <div className='flex items-start gap-2'><span className="material-symbols-rounded">
            description
          </span>{props.details.description}</div>

          <div className='mt-2 flex items-center gap-2'><span className="material-symbols-rounded">
            date_range
          </span>{props.details.date}</div>

          <div className='flex gap-3 mt-4'>
            <a className='flex items-center gap-2 bg-indigo-500 shadow-[4px_4px_0px_0px_#4f46e5] font-bold rounded-md px-2 py-1 text-white hover:bg-gradient-to-r from-purple-400 to-indigo-500' href={props.details.link} target='_blank' rel="noreferrer">View<span className="text-white material-symbols-rounded">
              open_in_new
            </span></a>

            <a className='flex items-center gap-2 bg-indigo-500 shadow-[4px_4px_0px_0px_#4f46e5] font-bold rounded-md px-2 py-1 text-white hover:bg-gradient-to-r from-purple-400 to-indigo-500' href={props.details.githubLink} target='_blank' rel="noreferrer">GitHub
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
