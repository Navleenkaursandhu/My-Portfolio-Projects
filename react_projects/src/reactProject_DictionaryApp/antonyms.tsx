export const Antonyms = (props) => {
  return (
    <>
      {props.opposite.length !== 0 && <div className="opposite-font">Antonyms:</div>}
      <div className="opposite">
        {(props.opposite || []).map((string, i) => <div key={i}><div className="string-color">{string}</div></div>)}
      </div>
    </>
  )
}
