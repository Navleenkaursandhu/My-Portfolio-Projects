import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {Main} from './reactProject_LCDClock/main'


const Links = () => {
  return(
    <>
    <h1>My React Projects</h1>
    <a href="LCDClock">React Project: LCD Clock</a>
    </>
  )
}

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Links />} />
            <Route path="LCDClock" element={<Main/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    );
  
}

export default App
