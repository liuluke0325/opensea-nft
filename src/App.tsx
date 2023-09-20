
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import { lazy } from 'react';

const ListPage = lazy(
  () => import("./pages/ListPage")
);
const DetailPage = lazy(
  () => import("./pages/DetailPage")
);

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ListPage />}>
        </Route>
        <Route path="/detail/:contract/:id" element={<DetailPage></DetailPage>}></Route>
        <Route index path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  )
}

export default App
