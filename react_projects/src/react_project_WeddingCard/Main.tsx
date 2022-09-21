import { useState } from 'react'
import { Information } from './Information'
import { MainCard as MainCard1 } from './card1/MainCard'
import { PreWeddingEventCard as PreWeddingEventCard1 } from './card1/PreWeddingEventCard'
import { PostWeddingEventCard as PostWeddingEventCard1 } from './card1/PostWeddingEventCard'
import { MainCard as MainCard2 } from './card2/MainCard'
import { PreWeddingEventCard as PreWeddingEventCard2 } from './card2/PreWeddingEventCard'
import { PostWeddingEventCard as PostWeddingEventCard2 } from './card2/PostWeddingEventCard'
export const Main = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(1)
  const [info, setInfo] = useState({
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
  })
  console.log(info)

  return (
    <div className="flex h-screen">
      <Information value={info} onChange={newInfo => setInfo(newInfo)} onTemplateChange={(templateNum) => setSelectedTemplate(templateNum)} />
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
      </div>
    </div>
  )
}
