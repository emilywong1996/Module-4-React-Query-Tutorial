// Note: DO NOT CLONE THE PACKAGE FROM REACT QUERY TUTORIAL https://www.youtube.com/watch?v=Nm0inP3B_zs&list=PLC3y8-rFHvwjTELCrPrcZlo6blLBUspd2&index=2
// 1. USE npx create-react-app react-query-demo TO MAKE YOUR FILES WITH YOUR CURRENT NODE.JS
// 2. OOOOOOOOOOONLY COPY AND PASTE WITH WHAT YOU NEED FROM THE REPO AFTER YOU CREATE YOUR FILE WITH npx create-react-app react-query-demo, DO NOT CLONE CLONE CLONE
// 3. COPY AND PASTE CODE FROM https://github.com/gopinav/React-Query-Tutorials/blob/master/react-query-starter/src/App.js
// 4. ALWAYS MAKE A NEW TERMINAL AFTER yarn serve-json, DO NOT TERMINATE THE serve-json. AFTER MAKING NEW TERMINAL DO yarn start
// 5. ALWAYS HAVE THE db.json RUNNING ON LOCAL HOST BEFORE YOU RUN PROJECT LOCAL HOST

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import './App.css'
import { HomePage } from './components/Home.page'
import { RQSuperHeroesPage } from './components/RQSuperHeroes.page'
import { SuperHeroesPage } from './components/SuperHeroes.page'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/super-heroes'>Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path='/super-heroes' element={<SuperHeroesPage/>}/>
            <Route path='/rq-super-heroes' element={<RQSuperHeroesPage/>}/>
            <Route path='/' element={<HomePage/>}/>
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
    </QueryClientProvider>
  )
}

export default App