import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {Main} from './reactProject_TipCalculator/main'

const Links = () => {
  return(
    <>
    <h1>My React Projects</h1>
    <a href="TipCalculator">React Project: Tip Calculator</a>
    </>
  )
}

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Links />} />
            <Route path='TipCalculator' element={<Main/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    );
  
}

export default App
