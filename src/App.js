import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import Footer from './Pages/Shared/Footer';
import Blogs from './Pages/Blogs';
import MyPortfolio from './Pages/MyPortfolio';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import PurchaseParts from './Pages/PurchaseParts/PurchaseParts';
import RequireAuth from './Pages/Login/RequireAuth';
import ServicePartsDetails from './Pages/Home/ServicePartsDetails';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import DashboardReview from './Pages/Dashboard/DashboardReview';
import DashBoardProfile from './Pages/Dashboard/DashBoardProfile';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='service' element={<ServicePartsDetails></ServicePartsDetails>}></Route>
        <Route path='/purchase/:purchaseId' element={<RequireAuth><PurchaseParts></PurchaseParts></RequireAuth>}></Route>
        <Route path='/portfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='/blog' element={<Blogs></Blogs>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='dasreview' element={<DashboardReview></DashboardReview>}></Route>
          <Route path='dasprofile' element={<DashBoardProfile></DashBoardProfile>}></Route>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
