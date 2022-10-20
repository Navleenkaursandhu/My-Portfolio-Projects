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
  Wouldn&apos;t it be great if we could create our own wedding cards
  whenever and wherever you want? So, with the same thought I came up with this Wedding Card App,
  where all you need to do is select one of the many available templates, enter family details, wedding day details,
  pre-wedding event details, and post-wedding event details. The data in the template updates live as you enter the data allowing you to create your own wedding card in no time.
  The app stores the information you entered locally so that you do not have to enter it again when you come back to this web page.
  This app respects the user&apos;s <span className='bg-cyan-100 px-2'>privacy</span> and no information is sent to or stored on an external server
</div>
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
    <div className="xl:flex h-screen">
      <Information
        value={info}
        onChange={newInfo => setInfo(newInfo)}
        onTemplateChange={(templateNum) => setSelectedTemplate(templateNum)}
        template={selectedTemplate} />
      <div className='flex sm:justify-center justify-start flex-1 overflow-auto bg-slate-100'>
        <div className='flex flex-col gap-4 w-[632px] min-w-[632px] p-4'>
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
    </div>
  )
}
