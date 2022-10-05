export const Education = () => {
  return (
    <div className="flex flex-col text-[#371064] items-center mt-16 bg-indigo-100 pt-8 pb-10 mx-8 rounded-2xl border border-violet-200">
      <div className="font-bold text-3xl">
        QUALIFICATION
      </div>

      <div className="mt-8 text-xl grid grid-flow-column auto-columns-[minmax(0,_2fr)] gap-2">
        <div className="flex border-b border-black">2018 - 2020</div>
        <div>
          <div className="font-bold">Masters of Engineering in Electrical and Computers</div>
          <div>Carleton University</div>
          <div>Ottawa, Canada</div>
        </div>

        <div className="flex border-b border-black mt-6">2013 - 2017</div>
        <div>
          <div className="font-bold">Bachelors of Technology in Electronics and Communication</div>
          <div>Giani Zail Singh College Campus of Engineering and Technology</div>
          <div>Bathinda, India</div>
        </div>
      </div>

      <div>
        <table className="text-xl mt-8">
          <tbody>
            <tr>
              <td className="align-text-top border-r border-r-gray-600 pr-8">2018 - 2020</td>
              <td className="pl-8 pb-8">
                <div className="font-bold">Masters of Engineering in Electrical and Computers</div>
                <div>Carleton University</div>
                <div>Ottawa, Canada</div>
              </td>
            </tr>

            <tr>
              <td className="align-text-top border-r border-r-gray-600 pr-8">2013 - 2017</td>
              <td className="pl-8">
                <div className="font-bold">Bachelors of Technology in Electronics and Communication</div>
                <div>Giani Zail Singh College Campus of Engineering and Technology</div>
                <div>Bathinda, India</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
