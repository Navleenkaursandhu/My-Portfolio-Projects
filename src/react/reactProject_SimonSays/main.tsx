import { Input } from './input'

export const id = 'react-simonsaysgame'
export const title = 'SIMON SAYS GAME'
export const description = <div>
  Want to test your memory? -try out this famous memory game by repeating the same pattern played by Simon.
  This famous memory game App is the online version of the Simon electronic game with its 5 illuminated square buttons.
  The object of the game is to mimic Simon&apos;s moves. To start the game hit play button, this will let Simon have
  his turn (try remembering the order with blue flashes). When Simon is done, a text will display telling you
  it&apos;s your turn (if you copy Simon&apos;s moves while it is not your turn, those clicks won&apos;t count).
  On your turn just repeat simon&apos;s moves in the exact order. The game will keep track of button presses. Each time
  you correctly match the pattern (indicated by green color), you win the round. If you click out of order (indicated by red), you loose.
</div>
export const skills = ['React', 'Vite', 'JavaScript', 'Tailwind CSS', 'HTML', 'ESLint', 'Git', 'Github', 'VS Code']
export const date = 'August 2022'
export const link = './SimonSaysGame'
export const githubLink = 'https://github.com/Navleenkaursandhu/notebook/tree/main/react_projects/src/reactProject_SimonSays'

export const Main = () => {
  return (
    <div className='font-applyBubblegum'>
      <Input />
    </div>
  )
}
