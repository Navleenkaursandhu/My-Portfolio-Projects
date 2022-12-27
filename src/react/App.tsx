import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import './App.css'
import { FightingGame } from './react_fighting_game/FightingGame'
import { CardMatchGame } from './react_project_CardMatchGame/CardMatchGame
import { Main as ProjectWeddingCard } from './react_project_WeddingCard/Main'
import { Main as ProjectTimesheet } from './react_project_Timesheet/Main'
import { Main as ProjectDailyDiary } from './react_project_DailyDiary/Main'
import { Main as ProjectCurrencyConvertor } from './react_project_currencyConvertor/main'
import { Main as ProjectWeatherApp } from './react_project_WeatherApp/main'
import { Main as ProjectDictionaryApp } from './reactProject_DictionaryApp/main'
import { Main as ProjectSimonSays } from './reactProject_SimonSays/main'
import { Main as ProjectHangman } from './reactProject_Hangman/main'
import { Main as ProjectAnalogSVGClock } from './reactProject_AnalogSVGClock/main'
import { Main as ProjectLCD } from './reactProject_LCDClock/main'
import { Main as ProjectTicTacToe } from './reactProject_TicTacToe/main'
import { Main as ProjectTipCalculator } from './reactProject_TipCalculator/main'
import { Main as ProjectRPS } from './reactProject_RPS/main'
import { Main as ProjectTodoList } from './reactProject_TODOList/main'
import { Main as Project47 } from './project_q47/main'
import { Main as Project46 } from './project_q46/main'
import { Main as Project44 } from './project_q44/main'
import { Main as Project43 } from './project_q43/main'
import { Main as Project42 } from './project_q42/main'
import { Random as Project41 } from './project_q41/random'
import { MainComponent as Project40 } from './project_q40/mainComponent'
import { PortfolioPage } from './portfolio/PortfolioPage'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<PortfolioPage />} />
          <Route path="project_q40" element={<Project40 />} />
          <Route path='project_q41' element={<Project41 />} />
          <Route path="project_q42" element={<Project42 />} />
          <Route path='project_q43' element={<Project43 />} />
          <Route path='project_q44' element={<Project44 />} />
          <Route path='project_q46' element={<Project46 />} />
          <Route path='project_q47' element={<Project47 />} />
          <Route path='reactProject_TODOList' element={<ProjectTodoList />} />
          <Route path="RockPaperScissors" element={<ProjectRPS />} />
          <Route path='TipCalculator' element={<ProjectTipCalculator />} />
          <Route path='TicTacToe' element={<ProjectTicTacToe />} />
          <Route path="LCDClock" element={<ProjectLCD />} />
          <Route path="AnalogSVGClock" element={<ProjectAnalogSVGClock />} />
          <Route path='HangmanGame' element={<ProjectHangman />} />
          <Route path="SimonSaysGame" element={<ProjectSimonSays />} />
          <Route path="Dictionary" element={<ProjectDictionaryApp />} />
          <Route path="WeatherApp" element={<ProjectWeatherApp />} />
          <Route path="CurrencyConvertor" element={<ProjectCurrencyConvertor />} />
          <Route path="Timesheet" element={<ProjectTimesheet />} />
          <Route path="DailyDiary" element={<ProjectDailyDiary />} />
          <Route path="WeddingCard" element={<ProjectWeddingCard />} />
          <Route path="FightingGame" element={<FightingGame/>}/>
          <Route path="CardMatchGame" element={<CardMatchGame/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
