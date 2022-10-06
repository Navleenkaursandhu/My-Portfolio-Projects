export const Education = () => {
  return (
    <div className="flex flex-col text-[#371064] items-center mt-16 bg-indigo-100 pt-8 pb-10 lg:mx-8 md:mx-8 mx-2 rounded-2xl border border-violet-200">
      <div className="font-bold lg:text-3xl md:text-2xl text-xl">
        QUALIFICATION
      </div>

      <div className="mt-8 lg:mx-0 md:mx-0 mx-6 lg:text-xl md:text-lg text-md grid lg:grid-cols-[auto_minmax(0,1fr)] grid-rows-[auto_minmax(0,1fr)]">
        <div className="flex lg:border-r lg:border-b-0 border-black lg:pr-6 lg:mr-6 border-b">2018 - 2020</div>
        <div>
          <div className="font-bold">Masters of Engineering in Electrical and Computers</div>
          <div>Carleton University</div>
          <div>Ottawa, Canada</div>
        </div>

        <div className="flex lg:border-r lg:border-b-0 border-black lg:mr-6 lg:mt-0 mt-6 border-b">2013 - 2017</div>
        <div>
          <div className="font-bold">Bachelors of Technology in Electronics and Communication</div>
          <div>Giani Zail Singh College Campus of Engineering and Technology</div>
          <div>Bathinda, India</div>
        </div>
      </div>
    </div>
  )
}
