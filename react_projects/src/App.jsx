import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css'
import {Main} from './project_q43/main'

const Links = () => {
  return(
    <>
    <h1>React Projects</h1>
    <a href='project_q43'>Project 43: Generate count of random numbers within range</a>
    </>
  )
}

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Links />}/>
            <Route path='project_q43' element= {<Main/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  
}

export default App
