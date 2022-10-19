import { Word } from './word'
import { Description } from './description'
import { useEffect, useState } from 'react'

export const title = 'DICTIONARY'
export const description = <div>
  Why waste your time trying to locate a word and its meaning when its just a search away in this digital dictionary?
  Checkout this App, which provides information about pronounciation along with meanings, synonyms and antonyms of
  the searched word via external <span className='bg-purple-100 px-2'>API</span> in a matter of seconds.
</div>
export const skills = ['React', 'Vite', 'JavaScript', 'Tailwind CSS', 'HTML', 'REST API', 'ESLint', 'Git', 'Github', 'VS Code']
export const date = 'September 2022'
export const link = './Dictionary'
export const githubLink = 'https://github.com/Navleenkaursandhu/notebook/tree/main/src/react/reactProject_DictionaryApp'

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
      <div className='flex lg:flex-row flex-col md:p-3 h-screen lg:overflow-hidden overflow-auto'>
        <Word onChange={dataFunction} />
        <Description wordData={wordObject} error={apiError} />
      </div>
    </div>
  )
}
