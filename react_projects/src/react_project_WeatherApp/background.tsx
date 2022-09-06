import { DisplayWeather } from "./displayWeather"
export const Background = (props) => {
 
  return(
    <div className="background-container">
      <DisplayWeather data={props.data}/>
    </div>
  )
}