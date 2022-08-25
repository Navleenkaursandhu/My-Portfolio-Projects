import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css'
import {Main} from './reactProject_TODOList/main'

const Links = () => {
  return(
    <>
    <h1>React Project</h1>
    <a href="reactProject_TODOList">Project: TODO List</a>
    </>
  )
}

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Links />} />
            <Route path='reactProject_TODOList' element={<Main/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    );
  
}

export default App
