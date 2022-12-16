export const SortProjects = (props) => {
  const handleChange = (e) => {
    props.onChange(e.target.value)
  }

  return (
    <div className='flex sm:gap-4 gap-1 mt-7 mb-2 items-center font-bold text-lg'>
      <div>Sort By:</div>
      <select className="bg-[#6d28d9] text-white px-6 py-1.5 rounded-md" value={props.value} onChange={(e) => handleChange(e)}>
        <option value='precedence'>Precedence</option>
        <option value='month'>Month</option>
      </select>

      <span onClick={props.onAscendingChange} title={`${props.ascending ? 'click to sort in descending order' : 'click to sort in ascending order'}`} className={`${props.ascending ? '-scale-y-100' : ''} material-symbols-rounded hover: cursor-pointer font-bold hover:shadow-lg`}>
        sort
      </span>
    </div>)
}
