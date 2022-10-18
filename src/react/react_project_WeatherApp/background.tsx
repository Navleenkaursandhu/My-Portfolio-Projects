import { DisplayWeather } from './displayWeather'
import { codes } from './weathercodes'

export const Background = (props) => {
  const style = {
    backgroundImage: props.data.currentWeather
      ? `url("${String(codes[props.data.currentWeather.weathercode.value].image)}")`
      : undefined
  }
  return (
    <div className="h-screen flex bg-no-repeat bg-center bg-cover justify-end" style={style}>
      <DisplayWeather data={props.data} />
    </div>
  )
}
