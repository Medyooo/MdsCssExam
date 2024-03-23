import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import IndexPage from './pages/IndexPage'
import ShopPage from './pages/ShopPage'

function App() {
  
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<IndexPage/>}/>
      <Route path='/shop' element={<ShopPage/>}/>
     </Routes>
    </BrowserRouter>
    
    
  )
}

export default App
