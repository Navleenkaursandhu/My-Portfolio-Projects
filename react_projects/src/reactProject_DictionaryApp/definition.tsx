export const Definition = (props) => {
  return (
    <>
      <div className="flex flex-col gap-[10px]">
        {(props.define || []).map((object, i) => {
          return <div key={i}>
            <li className="text-[20px]">{object.definition}</li>
            {object.example && <div className="text-[18px] pt-[8px] pr-[0px] pb-[0px] pl-[24px]">{`Example: ${object.example as string}`}</div>}
          </div>
        })}
      </div>
    </>
  )
}
