import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css'
import {Main} from './project_q42/main'

const Links = () => {
  return(
    <>
    <h1>My React Projects</h1>
    <a href="project_q42">Project 42: Generate random number between range</a>
    </>
  )
}

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Links />} />
            <Route path="project_q42" element={<Main/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    );
  
}

export default App
