export const Phonetics = (props) => {
  const arrayWithPhoneticText = (props.list || []).filter((object) => object.text && object.audio)

  const runAudio = (audio) => {
    const playAudio = new Audio(audio)
    void playAudio.play()
  }

  return (
    <>
      <div className="w-[50%] my-0 mx-auto flex flex-col gap-[10px] mb-[24px]">
        {arrayWithPhoneticText.map((object, i) => {
          return <div className="flex gap-[20px] p-[10px] items-center bg-[#f7e6c2] rounded-[10px] border-3 border-[#f9dfb2] shadow-[3px_3px_2px_2px_#f6d6a0]" key={i}>
            <div onClick={() => runAudio(object.audio)} className="audio">
              <span className=" h-[50px] w-[50px] rounded-[50px] bg-[#fabaa4] flex justify-center items-center material-symbols-rounded text-[50px] text-[#4a4773] hover:cursor-pointer hover:text-[64px]">volume_down_alt</span>
            </div>
            <div className="text-[28px] text-[#3e3b68]"> {object.text}</div>
          </div>
        })}
      </div>
    </>
  )
}
