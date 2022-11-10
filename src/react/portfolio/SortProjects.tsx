export const SortProjects = (props) => {
  const handleChange = (e) => {
    props.onChange(e.target.value)
  }

  return (
    <div className='flex sm:gap-4 gap-1 mt-7 mb-2 items-center font-bold text-lg'>
      <div>Sort</div>
      <select className="bg-[#4f46e5] text-white px-4 py-1.5 rounded-md" value={props.value} onChange={(e) => handleChange(e)}>
        <option value='precedence'>by precedence</option>
        <option value='month'>by month</option>
      </select>

      <span onClick={props.onAscendingChange} title={`${props.ascending ? 'click to sort in descending order' : 'click to sort in ascending order'}`} className={`${props.ascending ? '-scale-y-100' : ''} material-symbols-rounded hover: cursor-pointer font-bold hover:shadow-lg`}>
        sort
      </span>
    </div>)
}
