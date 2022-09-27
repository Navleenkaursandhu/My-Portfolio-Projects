export const Synonyms = (props) => {
  return (
    <>
      {props.similar.length !== 0 && <div className="text-[24px] pt-[20px] px-[0px] pb-[4px]">Synonyms:</div>}
      <div className="flex gap-[10px] flex-wrap text-[18px] text-[#3e3b68]">
        {(props.similar || []).map((string, i) => <div key={i}><div className=" bg-[#edd7d0] rounded-[10px] py-[8px] px-[10px]">{string}</div></div>)}
      </div>
    </>
  )
}
