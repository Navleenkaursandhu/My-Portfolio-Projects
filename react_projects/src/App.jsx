import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {Main} from './reactProject_SimonSays/main'

const Links = () => {
  return(
    <>
    <h1>My React Projects</h1>
    <a href="SimonSaysGame">React Project: Simon Says </a>
    </>
  )
}

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Links />} />
            <Route path="SimonSaysGame" element={<Main/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    );
  
}

export default App
