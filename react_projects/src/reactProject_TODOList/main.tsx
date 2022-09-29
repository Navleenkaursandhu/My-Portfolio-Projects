import { Input } from './input'

export const title = 'TODO List'
export const description = 'A dynamic TODO list to help the user keep track of their daily tasks'
export const skills = ['React', 'CSS', 'Tailwind', 'HTML']

export const Main = () => {
  return (
    <div className='flex justify-center'>
      <div className='my-[50px] flex-col w-[50%] h-100vh font-applyLibre'>
        <Input />
      </div>
    </div>
  )
}
