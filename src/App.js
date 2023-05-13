import "./App.css";
import Header from "./Header/Header";
import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from "./Redux/Reducers/store";
import { Provider } from 'react-redux';

import Homepage from "./Home/Homepage";
import Footer from "./footer/Footer";
import About from "./AboutUs/About";
import Customer from "./Customer/Customer";
import Suppliers from "./Supplier/Suppliers";
import Careers from "./Careers/Careers";
import Services from "./Services/Services";
import Location from "./AboutUs/dropmenu/Location";
import Leadership from "./AboutUs/dropmenu/Leadership";
import History from "./AboutUs/dropmenu/History";
import Product from "./AboutUs/dropmenu/Product";
import Cart from "./cart/Cart";

import ProductDetails from "./AboutUs/dropmenu/ProductDetails";
// import Navbar from "./Header/Navbar";

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Header/>

    {/* <Navbar/> */}
      <Fragment>

        <Routes>
         <Route exact path="/"><Route exact path="/" element={<Homepage/>}/>
          </Route>
          <Route exact path="/aboutus"><Route exact path="/aboutus" element={<About/>}/>
          </Route>
          <Route exact path="/customer"><Route exact path="/customer" element={<Customer/>}/>
          </Route>
          <Route exact path="/suppliers"><Route exact path="/suppliers" element={<Suppliers/>}/>
          </Route>
          <Route exact path="/careers"><Route exact path="/careers" element={<Careers/>}/>
          </Route>
          <Route exact path="/services"><Route exact path="/services" element={<Services/>}/>
          </Route>
          <Route exact path="/locations"><Route exact path="/locations" element={<Location/>}/>
          </Route>
          <Route exact path="/leadership"><Route exact path="/leadership" element={<Leadership/>}/>
          </Route>
          <Route exact path="/history"><Route exact path="/history" element={<History/>}/>
          </Route>
          {/* <Route exact path="/products"><Route exact path="/products" element={<Product/>}/>
          </Route>
          <Route exact path="/cart"><Route exact path="/cart" element={<Cart/>}/>
          </Route>
          <Route exact path="/products/:productid"><Route exact path="/products/:productid" element={<ProductDetails/>}/>
          </Route> */}
          <Route  exact path="/products" element={<Product/>}>
          </Route>
          <Route  exact path="/cart" element={<Cart/>}>
          </Route>
          <Route  exact path="/products/:productid" element={<ProductDetails/>}>
          </Route>

        </Routes>

      </Fragment>
      <Footer/>

     </Router>
     </Provider>
  );
}

export default App;
