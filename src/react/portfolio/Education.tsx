export const Education = () => {
  return (
    <div className="flex flex-col text-[#371064] items-center mt-16 bg-indigo-100 pt-8 pb-10 mx-8 rounded-2xl border border-violet-200">
      <div className="font-bold text-3xl">
        QUALIFICATION
      </div>

      <div className="mt-8 text-xl grid grid-cols-[auto_minmax(0,1fr)]">
        <div className="flex border-r border-black pr-6 mr-6">2018 - 2020</div>
        <div>
          <div className="font-bold">Masters of Engineering in Electrical and Computers</div>
          <div>Carleton University</div>
          <div>Ottawa, Canada</div>
        </div>

        <div className="flex border-r border-black mr-6">2013 - 2017</div>
        <div>
          <div className="font-bold">Bachelors of Technology in Electronics and Communication</div>
          <div>Giani Zail Singh College Campus of Engineering and Technology</div>
          <div>Bathinda, India</div>
        </div>
      </div>
    </div>
  )
}
