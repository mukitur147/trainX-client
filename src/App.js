
import { BrowserRouter ,Switch,Route} from 'react-router-dom';
import './App.css';
import AuthProvider from './Components/Contex/AuthProvider';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
import NavigationMenu from './Components/Navigation Menu/NavigationMenu';
import NotFound from './Components/NotFound/NotFound';
import AllServices from './Components/Pages/AllServices/AllServices';
import Blogs from './Components/Pages/Blogs/Blogs';
import ContactUs from './Components/Pages/ContactUs/ContactUs';
import HomePage from './Components/Pages/Homepage/HomePage';
import Trainers from './Components/Pages/Trainers/Trainers';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ServiceDetail from './Components/ServiceDetail/ServiceDetail';



function App() {
  return (
    <div className="App">
  <AuthProvider>
  <BrowserRouter>
   <NavigationMenu></NavigationMenu>
   <Switch>
     <Route exact path="/">
       <HomePage></HomePage>
     </Route>
     <Route path="/home">
       <HomePage></HomePage>
     </Route>
     <Route path="/services">
       <AllServices></AllServices>
     </Route>
     <Route path="/trainers">
       <Trainers></Trainers>
     </Route>
     <Route path="/blogs">
       <Blogs></Blogs>
     </Route>
     <Route path ="/contact">
       <ContactUs></ContactUs>
     </Route>
    
     <Route path="/register">
       <Register></Register>
     </Route>
     <Route path ="/login">
       <Login></Login>
     </Route>
     <PrivateRoute path="/service/:serviceId">
       <ServiceDetail></ServiceDetail>
     </PrivateRoute>
     <Route path="*">
       <NotFound></NotFound>
     </Route>
   </Switch>
<Footer></Footer>
   </BrowserRouter>
  </AuthProvider>
    </div>
  );
}

export default App;
