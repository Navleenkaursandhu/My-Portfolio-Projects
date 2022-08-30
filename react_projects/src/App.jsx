import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {Main} from './reactProject_Hangman/main'

const Links = () => {
  return(
    <>
    <h1>My React Projects</h1>
    <a href="HangmanGame">React Project: Hangman Game</a>
    </>
  )
}

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Links />} />
            <Route path='HangmanGame' element={<Main/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    );
  
}

export default App
