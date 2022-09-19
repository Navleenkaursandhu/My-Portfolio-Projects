import { Information } from './Information'
import { Card } from './card1/Card'
import { useState } from 'react'
export const Main = () => {
  const [info, setInfo] = useState({
    brideName: "",
    brideFatherName: "",
    brideMotherName: "",
    brideGrandFatherName: "",
    brideGrandMotherName: "",
    brideAddress: "",
    brideRSVP: "",
    groomName: "",
    groomFatherName: "",
    groomMotherName: "",
    groomGrandFatherName: "",
    groomGrandMotherName: "",
    groomAddress: "",
    groomRSVP: "",
    weddingDate: "",
    weddingMonth:"",
    weddingYear: "",
    weddingWeekDay:"",
    weddingTime: "",
    weddingVenue: "",
    preweddingEventType: "",
    preweddingEventDate: "",
    preweddingEventMonth:"",
    preweddingEventYear:"",
    preweddingEventWeekDay:"",
    preweddingTime: "",
    preweddingEventVenue: "",
    postweddingEventType: "",
    postweddingEventDate: "",
    postweddingEventMonth:"",
    postweddingEventYear:"",
    postweddingEventWeekDay:"",
    postweddingTime: "",
    postweddingEventVenue: "",
  })
  console.log(info)

  return (
    <div className="flex h-[48.8rem] mt-2 gap-4">
      <Information value={info} onChange={newInfo => setInfo(newInfo)} />
      <div className='flex items-center flex-col flex-1 overflow-auto'>
        <Card information={info} />
      </div>
    </div>
  )
}
