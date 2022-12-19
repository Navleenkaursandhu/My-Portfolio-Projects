import { Word } from './word'
import { Description } from './description'
import { useEffect, useState } from 'react'
import { parseISO } from 'date-fns'

export const title = 'DICTIONARY'
export const description = <div>
  <p>Are you looking for a quick and easy way to access the definition of a word? This digital dictionary app
    provides fast and accurate information about the pronunciation, meaning, synonyms, and antonyms of any word you search for.</p>

  <p className='mt-2'>With this app, you&apos;ll no longer have to waste time trying to locate the definition of a word. Simply enter the word you&apos;re looking
    for and, within seconds, you&apos;ll have access to all of the information you need through an external <span className='bg-purple-100 px-2'>API</span></p>
</div>
export const skills = ['ReactJS', 'Vite', 'Tailwind CSS', 'REST API', 'ESLint', 'Git', 'Github', 'VS Code', 'Responsive Web Design']
export const date = parseISO('2022-09')
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
