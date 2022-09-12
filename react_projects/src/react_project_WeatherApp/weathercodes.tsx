import sunnyImg from './assets/sunny.jpg'
import snowyImg from './assets/snowy.jpg'
import partlycloudyImg from './assets/partlycloudy.jpg'
import cloudyImg from './assets/cloudy.jpg'
import clearskyImg from './assets/clearsky.jpg'
import foggyImg from './assets/foggy.jpg'
import rainydrizzlingImg from './assets/rainydrizzling.jpg'
import thunderstormImg from './assets/thunderstorm.jpg'

export const codes = {
  0: {
    value: 'Clear Sky',
    icon: 'clear_day',
    nightIcon: 'clear_night',
    image: sunnyImg
  },
  1: {
    value: 'Clear Sky',
    icon: 'clear_day',
    nightIcon: 'clear_night',
    image: clearskyImg
  },
  2: {
    value: 'Partly Cloudy',
    icon: 'partly_cloudy_day',
    nightIcon: 'partly_cloudy_night',
    image: partlycloudyImg
  },
  3: {
    value: 'Cloudy',
    icon: 'cloudy',
    image: cloudyImg
  },
  45: {
    value: 'Foggy',
    icon: 'foggy',
    image: foggyImg
  },
  48: {
    value: 'Depositing Rime Fog',
    icon: 'foggy',
    image: foggyImg
  },
  51: {
    value: 'Light Drizzle ',
    icon: 'snowing',
    image: rainydrizzlingImg
  },
  53: {
    value: 'Moderate Drizzle',
    icon: 'snowing',
    image: rainydrizzlingImg
  },
  55: {
    value: 'Heavy Drizzle',
    icon: 'snowing',
    image: rainydrizzlingImg
  },
  56: {
    value: 'Light Freezing Drizzle',
    icon: 'snowing',
    image: rainydrizzlingImg
  },
  57: {
    value: 'Heavy Freezing Drizzle',
    icon: 'snowing',
    image: rainydrizzlingImg
  },
  61: {
    value: 'Slight Rain',
    icon: 'rainy',
    image: rainydrizzlingImg
  },
  63: {
    value: 'Moderate Rain',
    icon: 'rainy',
    image: rainydrizzlingImg
  },
  65: {
    value: 'Heavy Rain',
    icon: 'rainy',
    image: rainydrizzlingImg
  },
  66: {
    value: 'Light Freezing Rain',
    icon: 'rainy',
    image: rainydrizzlingImg
  },
  67: {
    value: 'Heavy Freezing Rain',
    icon: 'rainy',
    image: rainydrizzlingImg
  },
  71: {
    value: 'Slight Snow Fall',
    icon: 'weather_snowy',
    image: snowyImg
  },
  73: {
    value: 'Moderate Snow Fall',
    icon: 'weather_snowy',
    image: snowyImg
  },
  75: {
    value: 'Heavy Snow Fall',
    icon: 'weather_snowy',
    image: snowyImg
  },
  77: {
    value: 'Snow Grains',
    icon: 'grain',
    image: snowyImg
  },
  80: {
    value: 'Slight Rain Showers',
    icon: 'rainy',
    image: rainydrizzlingImg
  },
  81: {
    value: 'Moderate Rain Showers',
    icon: 'rainy',
    image: rainydrizzlingImg
  },
  82: {
    value: 'Heavy Rain Showers',
    icon: 'rainy',
    image: rainydrizzlingImg
  },
  85: {
    value: 'Slight Snow Showers',
    icon: 'weather_snowy',
    image: snowyImg
  },
  86: {
    value: 'Heavy Snow Showers',
    icon: 'weather_snowy',
    image: snowyImg
  },
  95: {
    value: 'Moderate Thunderstorm',
    icon: 'thunderstorm',
    image: thunderstormImg
  },
  96: {
    value: 'Thunderstorm with slight hail',
    icon: 'thunderstorm',
    image: thunderstormImg
  },
  99: {
    value: 'Thunderstorm with heavy hail',
    icon: 'thunderstorm',
    image: thunderstormImg
  }
}
