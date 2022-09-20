import { Information } from './Information'
import { Card } from './card1/Card'
import { useState } from 'react'
import { EventCard } from './card1/EventCard'
export const Main = () => {
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
    <div className="flex h-[48.8rem] mt-2 gap-4">
      <Information value={info} onChange={newInfo => setInfo(newInfo)} />
      <div className='flex items-center flex-col flex-1 overflow-auto'>
        <Card information={info} />
        <EventCard information={info}/>
      </div>
    </div>
  )
}
