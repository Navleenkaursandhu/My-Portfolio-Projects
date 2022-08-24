import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css'
import {Main} from './project_q47/main'

const Links = () => {
  return(
    <>
    <h1>React Project</h1>
    <a href='project_q47'>Project 47: Counter</a>
    </>
  )
}

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Links />} />
            <Route path='project_q47' element={<Main/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    );
  
}

export default App
