import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {Main} from './reactProject _TicTacToe/main'

const Links = () => {
  return(
    <>
    <h1>My React Projects</h1>
    <a href='TicTacToe'>React Project: Tic Tac Toe</a>
    </>
  )
}

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Links />} />
            <Route path='TicTacToe' element={<Main/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    );
  
}

export default App
