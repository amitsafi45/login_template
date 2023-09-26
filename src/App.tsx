import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { LoginPage } from './pages/login.page'
import { RegisterPage } from './pages/register.page'

function App() {

  return (
    <>
   <BrowserRouter>
     <Routes>
      <Route index  element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
     </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
