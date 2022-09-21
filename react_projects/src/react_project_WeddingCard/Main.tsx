import { Information } from './Information'
import { MainCard } from './card1/MainCard'
import { useState } from 'react'
import { PreWeddingEventCard } from './card1/PreWeddingEventCard'
import { PostWeddingEventCard } from './card1/PostWeddingEventCard'
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
    <div className="flex h-screen gap-4">
      <Information value={info} onChange={newInfo => setInfo(newInfo)} onTemplateChange={(templateNum) => setSelectedTemplate(templateNum)} />
      <div className='flex items-center flex-col flex-1 overflow-auto'>
        <MainCard information={info} />
        <PreWeddingEventCard information={info}/>
        <PostWeddingEventCard information={info}/>
      </div>
    </div>
  )
}
