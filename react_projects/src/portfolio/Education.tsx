export const Education = () => {
  return (
    <div className="flex flex-col text-[#371064] items-center mt-16 bg-violet-100 pt-8 pb-10 mx-8 rounded-2xl border border-violet-200">
      <div className="font-bold text-3xl font-applyBarlow">
        QUALIFICATION
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
