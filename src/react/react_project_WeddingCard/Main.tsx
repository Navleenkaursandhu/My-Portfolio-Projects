import { useEffect, useState } from 'react'
import { Information } from './Information'
import { MainCard as MainCard1 } from './card1/MainCard'
import { PreWeddingEventCard as PreWeddingEventCard1 } from './card1/PreWeddingEventCard'
import { PostWeddingEventCard as PostWeddingEventCard1 } from './card1/PostWeddingEventCard'
import { MainCard as MainCard2 } from './card2/MainCard'
import { PreWeddingEventCard as PreWeddingEventCard2 } from './card2/PreWeddingEventCard'
import { PostWeddingEventCard as PostWeddingEventCard2 } from './card2/PostWeddingEventCard'
import { MainCard as MainCard3 } from './card3/MainCard'
import { PreWeddingEventCard as PreWeddingEventCard3 } from './card3/PreWeddingEventCard'
import { PostWeddingEventCard as PostWeddingEventCard3 } from './card3/PostWeddingEventCard'
import { MainCard as MainCard4 } from './card4/MainCard'
import { PreWeddingEventCard as PreWeddingEventCard4 } from './card4/PreWeddingEventCard'
import { PostWeddingEventCard as PostWeddingEventCard4 } from './card4/PostWeddingEventCard'

export const title = 'WEDDING CARD APPLICATION'
export const description = <div>
  Whats better than choosing your own wedding card template
  whenever and wherever you want! So, with the same thought I came up with this Wedding Card App,
  where all you need to do is select template of your choice, enter family details, wedding day details,
  pre-wedding event details followed by post-wedding event details and finally without much hassel you
  have created your own wedding card in no time. The platform uses <span className='bg-indigo-100 px-2'>Local Storage</span> where
  the information does not get sent to any server thus, offering <span className='bg-cyan-100 px-2'>privacy</span> to the
  end users and the data will not be deleted when the browser is closed, and will be available the next day, week, or year.</div>
export const skills = ['React', 'Vite', 'JavaScript', 'Tailwind CSS', 'HTML', 'Local Storage API', 'ESLint', 'Git', 'Github', 'VS Code']
export const date = 'September 2022'
export const link = './WeddingCard'
export const githubLink = 'https://github.com/Navleenkaursandhu/notebook/tree/main/src/react/react_project_WeddingCard'

export const Main = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(1)
  const [info, setInfo] = useState(() => {
    const saved = localStorage.getItem('data')
    const rawInfo = JSON.parse(saved) || {
      brideName: '',
      brideFatherName: '',
      brideMotherName: '',
      brideRSVP: '',
      groomName: '',
      groomFatherName: '',
      groomMotherName: '',
      groomRSVP: '',
      weddingDate: '',
      weddingVenue: '',
      preweddingEventType: '',
      preweddingEventDate: '',
      preweddingEventVenue: '',
      postweddingEventType: '',
      postweddingEventDate: '',
      postweddingEventVenue: ''
    }

    rawInfo.weddingDate = rawInfo.weddingDate && new Date(rawInfo.weddingDate)
    rawInfo.preweddingEventDate = rawInfo.preweddingEventDate && new Date(rawInfo.preweddingEventDate)
    rawInfo.postweddingEventDate = rawInfo.postweddingEventDate && new Date(rawInfo.postweddingEventDate)

    return rawInfo
  })

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(info))
  }, [info])

  return (
    <div className="flex h-screen">
      <Information
        value={info}
        onChange={newInfo => setInfo(newInfo)}
        onTemplateChange={(templateNum) => setSelectedTemplate(templateNum)}
        template={selectedTemplate} />
      <div className='flex items-center flex-col flex-1 overflow-auto bg-slate-100'>
        {selectedTemplate === 1 && <>
          <MainCard1 information={info} />
          <PreWeddingEventCard1 information={info} />
          <PostWeddingEventCard1 information={info} />
        </>}

        {selectedTemplate === 2 && <>
          <MainCard2 information={info} />
          <PreWeddingEventCard2 information={info} />
          <PostWeddingEventCard2 information={info} />
        </>}

        {selectedTemplate === 3 && <>
          <MainCard3 information={info} />
          <PreWeddingEventCard3 information={info} />
          <PostWeddingEventCard3 information={info} />
        </>}

        {selectedTemplate === 4 && <>
          <MainCard4 information={info} />
          <PreWeddingEventCard4 information={info} />
          <PostWeddingEventCard4 information={info} />
        </>}
      </div>
    </div>
  )
}
