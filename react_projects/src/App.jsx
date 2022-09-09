import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {Main} from './react_project_currencyConvertor/main'

const Links = () => {
  return(
    <>
    <h1>React Project</h1>
    <a href="CurrencyConvertor">React Project: Currency Convertor</a>
    </>
  )
}

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Links />} />
            <Route path="CurrencyConvertor" element={<Main/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    );
  
}

export default App
