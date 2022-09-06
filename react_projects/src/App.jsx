import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {Main} from './react_project_WeatherApp/main'

const Links = () => {
  return(
    <>
    <h1>My React Project</h1>
    <a href="WeatherApp">React Project: Weather Forecast Application</a>
    </>
  )
}

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Links />} />
            <Route path="WeatherApp" element={<Main/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    );
  
}

export default App
