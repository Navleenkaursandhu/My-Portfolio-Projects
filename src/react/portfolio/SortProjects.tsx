export const SortProjects = (props) => {
  const handleChange = (e) => {
    props.onChange(e.target.value)
  }

  return (
    <div className='flex sm:gap-4 gap-1 mt-6 items-center'>
      <div>Sort</div>
      <select value={props.value} onChange={(e) => handleChange(e)}>
        <option value='precedence'>by precedence</option>
        <option value='month'>by month</option>
      </select>
      <span className="material-symbols-rounded">
        sort
      </span>
    </div>)
}
