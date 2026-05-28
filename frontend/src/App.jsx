import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import { createRoutesFromElements, Route, createBrowserRouter } from 'react-router-dom'
const App = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path = '' element = {<Login/>}/>
      <Route path = '/dashboard' element = {<Dashboard/>}/>
    </>
  )
)
export default App;