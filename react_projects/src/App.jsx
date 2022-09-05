import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Main } from './reactProject_DictionaryApp/main'

const Links = () => {
  return (
    <>
      <h1>My React Projects</h1>
      <a href="Dictionary">React Project: Dictionary</a>
    </>
  )
}

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Links />} />
          <Route path="Dictionary" element={<Main />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );

}

export default App
