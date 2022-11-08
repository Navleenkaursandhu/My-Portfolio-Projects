import { useEffect, useState } from 'react'
export const SortProjects = (props) => {
  
  // const [selectedElement, setSelectedElement] = useState('')

  const handleChange = (e) => {
    props.onChange(e.target.value)
    
  }
  
  // useEffect(() => props.onChange(selectedElement),[selectedElement])

  return (
    <div className='flex sm:gap-4 gap-1 mt-6 items-center'>
      <div>Sort</div>
      <select value={props.value} onChange={(e) => handleChange(e)}>
        <option value='select'>Select</option>
        <option value='precedence'>by precedence</option>
        <option value='month'>by month</option>
      </select>
      <span className="material-symbols-rounded">
        sort
      </span>
    </div>)
}
