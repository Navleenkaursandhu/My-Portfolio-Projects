export const Education = () => {
  return (
    <div className="flex flex-col text-[#371064] px-4 items-center mt-16 bg-indigo-100 pt-8 pb-10 lg:mx-8 md:mx-8 mx-2 rounded-2xl border border-violet-200">
      <div className="font-bold lg:text-3xl md:text-2xl text-xl">
        EDUCATION
      </div>

      <div className="mt-8 lg:text-xl md:text-lg text-md grid lg:grid-cols-[auto_minmax(0,1fr)] grid-rows-[auto_minmax(0,1fr)]">
        <div className="flex lg:border-r lg:border-b-0 border-black lg:pr-6 lg:mr-6 justify-end border-b">Sep 2024 - Jul 2025</div>
        <div className="mb-4">
          <div className="font-bold">Bachelors of Education</div>
          <div>University of British Columbia</div>
          <div>Vancouver, BC, Canada</div>
        </div>

        <div className="flex lg:border-r lg:border-b-0 border-black lg:pr-6 lg:mr-6 justify-end border-b">Mar 2023 - Dec 2023</div>
        <div className="mb-4">
          <div className="font-bold">Education Assistant Diploma</div>
          <div>Coastal College of BC</div>
          <div>Surrey, BC, Canada</div>
        </div>

        <div className="flex lg:border-r lg:border-b-0 border-black lg:pr-6 lg:mr-6 justify-end border-b">2018 - 2020</div>
        <div className="mb-4">
          <div className="font-bold">Masters of Engineering in Electrical and Computers</div>
          <div>Carleton University</div>
          <div>Ottawa, Ontario, Canada</div>
        </div>

        <div className="flex lg:border-r lg:border-b-0 border-black lg:pr-6 lg:mr-6 justify-end border-b">2013 - 2017</div>
        <div>
          <div className="font-bold">Bachelors of Technology in Electronics and Communication</div>
          <div>Giani Zail Singh College Campus of Engineering and Technology</div>
          <div>Bathinda, Punjab, India</div>
        </div>
      </div>
    </div>
  )
}
