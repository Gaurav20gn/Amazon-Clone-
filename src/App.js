import React,{ useEffect } from 'react';
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

import './App.css';
import Header from "./Header";
import Home from "./Home"
import Checkout from "./Checkout"
import CheckoutProduct from "./CheckoutProduct"
import Login from "./Login"
import { useStateValue} from "./StateProvider";
import { auth } from './firebase';



function App() {

  const[{basket},dispatch]=useStateValue();
  useEffect(()=>{
    const unsubscribe =auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch({
          type:"SET_USER",
          user: authUser
        });

      } else{
        dispatch({
          type:"SET_USER",
          user:null
        });

      }
    });
    return ()=>{
      unsubscribe();
    }

  },[]);
  return (
    <Router>
    <div className="app">
      <Switch>
         <Route path="/checkout">
           <Header/>
           <Checkout/>

         </Route>
         <Route path="/login">
           <Login/>

         </Route>
         <Route path="/">
           <Header/>
           <Home/>
           
         </Route>

      </Switch>
   
    </div>
    </Router>
  );
}
 {/* we need react router*/}


    {/* localhost.com/ */}
    {/* localhost.com/checkout */}
    {/* localhost.com/login */}
      
export default App;
