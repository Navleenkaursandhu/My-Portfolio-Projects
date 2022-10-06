import { Word } from './word'
import { Description } from './description'
import { useEffect, useState } from 'react'

export const title = 'DICTIONARY'
export const description = 'Wasting your time trying to locate a word when its just a search away in this digital dictionary!' + ' ' +
  'Checkout this App, which provides information about pronounciation along with meanings, synonyms and antonyms of the searched word.'
export const skills = ['React', 'Vite', 'JavaScript', 'Tailwind CSS', 'HTML', 'REST API', 'ESLint', 'Git', 'Github', 'VS Code']
export const date = 'September 2022'
export const link = './Dictionary'
export const githubLink = 'https://github.com/Navleenkaursandhu/notebook/tree/main/react_projects/src/reactProject_DictionaryApp'

export const Main = () => {
  const [wordEntered, setWordEntered] = useState('')
  const [wordObject, setWordObject] = useState({})
  const [apiError, setApiError] = useState('')

  const fetchData = async () => {
    setWordObject({})
    setApiError('')

    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordEntered}`)
    if (response.ok) {
      const data = await response.json()
      console.log(response, data)
      setWordObject(data[0] || {})
    } else {
      setApiError(`Oops! Could not find "${wordEntered}"`)
    }
  }

  useEffect(() => {
    if (wordEntered !== '') {
      void fetchData()
    }
  }, [wordEntered])

  const dataFunction = (word) => {
    setWordEntered(word)
  }

  return (
    <div className='dictionary font-applyCormorant font-bold'>
      <div className='flex m-[-8px] p-[16px] h-screen'>
        <Word onChange={dataFunction} />
        <Description wordData={wordObject} error={apiError} />
      </div>
    </div>
  )
}
