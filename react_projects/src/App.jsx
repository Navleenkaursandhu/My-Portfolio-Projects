import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css'
import {Main as Project42} from './project_q42/main'
import {Random as Project41} from './project_q41/random'
import {MainComponent as Project40} from './project_q40/mainComponent'

const Links = () => {
  return(
    <div className="link-container">
    <h1>My React Projects</h1>
    <a href="./project_q40">Project: Hello "First Name"</a>
    <a href='./project_q41'>Project 41: Generate Random Numbers</a>
    <a href="./project_q42">Project 42: Generate random number between range</a>
    </div>
  )
}

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Links />} />
            <Route path="project_q40" element={<Project40/>}/>
            <Route path='project_q41' element={<Project41/>} />
            <Route path="project_q42" element={<Project42/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    );
  
}

export default App
