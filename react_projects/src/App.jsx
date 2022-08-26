import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import {Main} from './reactProject_RPS/main'

const Links = () => {
  return(
    <>
    <h1>React Project</h1>
    <a href="RockPaperScissors" >React Project: Rock Paper Scissors</a>
    </>
  )
}

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Links />} />
            <Route path="RockPaperScissors" element={<Main/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    );
  
}

export default App
