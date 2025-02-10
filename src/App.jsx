import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserLayout from './component/Layout/UserLayout';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserLayout />}>{ /*User Layout */}</Route>
        <Route>{ }</Route>
        <Route>{ }</Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App