import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css'
import {MainComponent} from './project_q40/mainComponent'

const Links = () => {
  return(
    <>
    <h1>My React Projects</h1>
    <a href="./project_q40">Project: Hello "First Name"</a>
    </>
  )
}

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Links />} />
            <Route path="project_q40" element={<MainComponent/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    );
  
}

export default App
