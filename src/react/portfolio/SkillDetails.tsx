export const SkillDetails = (props) => {
  return (
    <>
      <div className="flex gap-4 items-center lg:px-11 px-4 py-2 rounded-md bg-indigo-500 text-white shadow-md">
        <img className='h-6 lg:h-9 rounded-md' src={props.skillDetails.image} />
        {props.skillDetails.skill}
      </div>
    </>
  )
}
