
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import ListPage from './pages/ListPage'
import DetailPage from './pages/DetailPage'



const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ListPage></ListPage>}>
        </Route>
        <Route path="/detail/:contract/:id" element={<DetailPage></DetailPage>}></Route>
        <Route index path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  )
}

export default App
