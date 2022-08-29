import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {Main} from './reactProject_AnalogSVGClock/main'

const Links = () => {
  return(
    <>
    <h1>My React Projects</h1>
    <a href="AnalogSVGClock">React Project: Analog SVG Clock</a>
    </>
  )
}

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Links />} />
            <Route path="AnalogSVGClock" element={<Main/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    );
  
}

export default App
