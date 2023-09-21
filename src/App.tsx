
import './App.css'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import { lazy } from 'react';
import { useWeb3 } from './hooks/useWeb3';

const ListPage = lazy(
  () => import("./pages/ListPage")
);
const DetailPage = lazy(
  () => import("./pages/DetailPage")
);


const App = () => {

  const { address } = useWeb3();
  return (
    <>
      <Routes>
        <Route element={<div>
          MetaMask address {address ? <p>{address}</p> : <p>Loading...using hardcode wallet address at this moment</p>}
          <Outlet /></div>}>
          <Route path="/" element={<ListPage />}>
          </Route>
          <Route path="/detail/:contract/:id" element={<DetailPage></DetailPage>}></Route>
          <Route index path="*" element={<Navigate to="/" />} />
        </Route>

      </Routes>
    </>
  )
}

export default App
