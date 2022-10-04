export const SkillDetails = (props) => {
  return (
    <>
      <div className="flex gap-4 items-center px-11 py-2 rounded-md bg-indigo-500 text-white shadow-md">
        <img className='h-9 rounded-md' src={props.skillDetails.image} />
        {props.skillDetails.skill}
      </div>
    </>
  )
}
