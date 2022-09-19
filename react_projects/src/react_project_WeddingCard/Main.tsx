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
    weddingDay: "",
    weddingTime: "",
    weddingVenue: "",
    preWeddingEventType: "",
    preweddingEventDate: "",
    preweddingEventDay: "",
    preWeddingTime: "",
    preweddingEventVenue: "",
    postWeddingEventType: "",
    postweddingEventDate: "",
    postweddingEventDay: "",
    postWeddingTime: "",
    postweddingEventVenue: "",
  })
  console.log(info)

  return (
    <div className="border-black border flex h-[48rem] mt-3 gap-4 p-4">
      <Information value={info} onChange={newInfo => setInfo(newInfo)} />
      <Card information={info} />
    </div>
  )
}
