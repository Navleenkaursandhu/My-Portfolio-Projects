import reactImage from './assets/react.png'
import jsImage from './assets/js.png'
import teacherImage from './assets/teacher.png'
import mathsImage from './assets/mathematics.png'
import calculusImage from './assets/calculus.png'
import electricalImage from './assets/lightning-bolt-.png'
import stemImage from './assets/stem.png'
import selImage from './assets/sel.png'
import { SkillDetails } from './SkillDetails'

const skillSetArray = [
  {
    skill: 'K-12 Teacher Certification (Ongoing)',
    image: teacherImage
  },
  {
    skill: 'IS Subject Restricted Certificate - STEM',
    image: teacherImage
  },
  {
    skill: 'Advanced Mathematics',
    image: mathsImage
  },
  {
    skill: 'Calculus',
    image: calculusImage
  },
  {
    skill: 'Science',
    image: reactImage
  },
  {
    skill: 'Web/Software Development',
    image: jsImage
  },
  {
    skill: 'Engineering',
    image: electricalImage
  },
  {
    skill: 'ADST',
    image: stemImage
  },
  {
    skill: 'SEL',
    image: selImage
  }
]
export const Skillset = () => {
  return (
    <>
      <div className="flex flex-col px-4 text-[#371064] items-center mt-16 bg-indigo-100 pt-8 pb-10 lg:mx-8 md:mx-8 mx-2 rounded-2xl border border-violet-200">
        <div className="font-bold lg:text-3xl md:text-2xl text-xl">
          SKILLS & CERTIFICATIONS
        </div>

        <div className="flex flex-wrap gap-4 mt-8 w-full justify-center font-bold lg:text-xl md:text-lg text-md">
          {skillSetArray.map((skillObj, i) => {
            return <SkillDetails key={i} skillDetails={skillObj} />
          })}
        </div>
      </div>
    </>
  )
}
