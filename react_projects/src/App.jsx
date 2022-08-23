import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css'

const Links = () => {
  return(
    <>
    <h1>My React Projects</h1>
    </>
  )
}

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Links />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  
}

export default App
