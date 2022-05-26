import './App.css';
import Navbar from './Components/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Blog from './Components/Blog/Blog';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login';
import Error404 from './Components/Error404';
import Footer from './Components/Shared/Footer';
import Register from './Components/Login/Register';
import Portfolio from './Components/Portfolio/Portfolio';
import Purchase from './Components/Purchase';
import AllProducts from './Components/AllProducts';
import RequireAuth from './Components/RequireAuth';
import { ToastContainer } from 'react-toastify';
import MyOrder from './Components/Dashboard/MyOrder';
import AddAReview from './Components/AddAReview';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/allproducts' element={<AllProducts></AllProducts>}></Route>
        <Route path='/purchase/:id' element={
          <RequireAuth>
            <Purchase></Purchase>  
          </RequireAuth>
        }></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path='review' element={<AddAReview></AddAReview>}></Route>
        </Route>
        <Route path='/dashboard/myorder' element={<MyOrder></MyOrder>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/*' element={<Error404></Error404>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
