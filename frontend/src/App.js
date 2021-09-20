import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Topbar from "./components/topbar/Topbar";
import'./app.css'

import ItAdminSidebar from "./components/itAdminSidebar/Sidebar";
import ItAdminHome from "./pages/itAdmin/Home/itAdminHome";
import Management from './pages/itAdmin/management/management';
import AddManager from './pages/itAdmin/addManager/addManager';

import ManagementSidebar from "./components/managementSidebar/Sidebar";
import ManagementHome from "./pages/management/Home/managementHome";


import SalesPerson from"./pages/management/SalesPerson/salesPerson";
import NewSalesPerson from"./pages/management/SalesPerson/newSalesPerson";
import ViewSalesPerson from './pages/management/SalesPerson/viewSalesPerson';

import Products from "./pages/management/Products/products";
import AddProducts from "./pages/management/Products/addProduct";
import ViewProducts from './pages/management/Products/viewProducts';

import Orders from "./pages/management/Orders/orders";
import AddOrders from "./pages/management/Orders/addOrder";
import ViewOrders from './pages/management/Orders/viewOrder';

import Routes from "./pages/management/Routes/routes";
import AddRoute from "./pages/management/Route/addRoute";
import ViewRoute from "./pages/management/Route/viewRoute";

import Shops from"./pages/management/Shops/shops";
import AddShop from "./pages/management/Shops/addShop";
import ViewShop from "./pages/management/Shops/viewShop";

import Analytics from "./pages/management/Analytics/analytics";
import Reports from "./pages/management/Reports/reports";




function App() {
//const logged = true;
  return (
    <Router>
    <div className="App">

    <Topbar/>
        <div className='contain'>
    
        <Switch>
        
          <Route exact path="/">
           <h1>login page</h1>         
          </Route>
      
          <Route exact path="/itAdmin">
            <ItAdminSidebar/>  
            <ItAdminHome />  
          </Route>
          <Route path="/itAdmin/reports">
            <ItAdminSidebar/>  
            <h1>reports page</h1> 
          </Route>
          <Route path="/itAdmin/management">
          <ItAdminSidebar/> 
          <Management/> 
          </Route>
          <Route path="/itAdmin/addManager">
          <ItAdminSidebar/> 
            <AddManager />  
          </Route>
          <Route path="/itAdmin/editManager">
          <ItAdminSidebar/> 
            <h1>edit user page</h1>
          </Route> 



          <Route exact path="/management">
          <ManagementSidebar/>
            <ManagementHome/>
          </Route>  
          
          <Route path="/management/analytics">
          <ManagementSidebar/>
          <Analytics/>
          </Route>  
          
          <Route path="/management/orders">
          <ManagementSidebar/>
          <Orders/>
          </Route>  
          
          
          <Route exact path="/management/products">
          <ManagementSidebar/>
          <Products/>
          </Route>  
          <Route path="/management/products/:productName">
          <ManagementSidebar/>
              <ViewProducts/>
            </Route>  

          <Route path="/management/addProduct">
          <ManagementSidebar/>
          <AddProducts/>
          </Route>  
          
          <Route path="/management/reports">
          <ManagementSidebar/>
          <Reports/>
          </Route>  
          
          <Route exact path="/management/routes">
          <ManagementSidebar/>
          <Routes/>
          </Route>  

          <Route path="/management/routes/addRoute">
              <AddRoute/>
            </Route> 

            <Route path="/management/routes/:id">
              <ViewRoute/>
            </Route>  
          
          <Route exact path="/management/salesperson">
          <ManagementSidebar/>
          <SalesPerson/>
          </Route> 

          <Route path="/management/addSalesperson">
          <ManagementSidebar/>
          <NewSalesPerson/>
          </Route>  
          
          <Route exact path="/management/salesPerson/:id">
            <ManagementSidebar/>
              <ViewSalesPerson/>
          </Route>

          <Route path="/management/addOrders">
          <ManagementSidebar/>

              <AddOrders/>
            </Route>  

            <Route path="/management/Order/:id">
            <ManagementSidebar/>

              <ViewOrders/>
            </Route>  


          <Route path="/management/shops">
          <ManagementSidebar/>
          <Shops/>
          </Route> 

          <Route path="/management/shops/addShop">
              <AddShop/>
            </Route> 

            <Route path="/management/shops/:shopName">
              <ViewShop/>
            </Route> 

        </Switch>  
        </div>
      
    </div>
    </Router>
  );
}

export default App;
