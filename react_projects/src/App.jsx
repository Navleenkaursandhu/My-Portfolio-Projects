import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css'
import {Main} from './project_q44/main'

const Links = () => {
  return(
    <>
    <h1>React Projects</h1>
    <a href="project_q44">Project 44: Generate many strings with random characters</a>
    </>
  )
}

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Links />} />
            <Route path='project_q44' element={<Main/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    );
  
}

export default App
