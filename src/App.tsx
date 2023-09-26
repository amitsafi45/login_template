import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { LoginPage } from './pages/login.page'

function App() {

  return (
    <>
   <BrowserRouter>
     <Routes>
      <Route index  element={<LoginPage/>}/>
     </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
