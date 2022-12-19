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
import { parseISO } from 'date-fns'

export const title = 'WEDDING CARD APPLICATION'
export const description = <div>
  Introducing the Wedding Card App, a tool that allows you to create custom wedding invitations on-demand.
  With a variety of templates to choose from, you can easily input your family and wedding day details, as
  well as information about any pre- and post-wedding events. The app updates the template in real-time as
  you enter data, making it quick and easy to create a unique invitation. The app also stores your information
  using local storage for future use, ensuring your <span className='bg-cyan-100 px-2'>privacy</span> is respected
  and no data is sent to external servers.
</div>
export const skills = ['ReactJS', 'Vite', 'Tailwind CSS', 'Local Storage API', 'ESLint', 'Git', 'Github', 'VS Code', 'Responsive Web Design']
export const date = parseISO('2022-09')
export const link = './WeddingCard'
export const githubLink = 'https://github.com/Navleenkaursandhu/notebook/tree/main/src/react/react_project_WeddingCard'

export const Main = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(1)
  const [info, setInfo] = useState(() => {
    const saved = localStorage.getItem('weddingCardData')
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
    localStorage.setItem('weddingCardData', JSON.stringify(info))
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
