import { DisplayWeather } from './displayWeather'
import { codes } from './weathercodes'

export const Background = (props) => {
  const style = {
    backgroundImage: props.data.currentWeather
      ? `url("${codes[props.data.currentWeather.weathercode.value].image}")`
      : undefined
  }
  return (
    <div className="background-container" style={style}>
      <DisplayWeather data={props.data} />
    </div>
  )
}
