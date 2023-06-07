import { useState } from "react";
import AllRestaurants from "./components/restaurantsList";
import {Button} from "@mui/material"
import axios from "axios";
function App() {
  var [flagShowRestaurantsList,setFlagShowRestaurantsList]=useState(false)
  var [restaurantsList,setRestaurantsList]=useState([])

  
  function getAllRestaurantsList(){
    // const  tempResList= axios.get("")
    setFlagShowRestaurantsList(true)
  }
  return (
    <div className="App">
     <div className="navbar" style={{display:"flex",flexDirection:"row"}}>

     </div>
     
     <div className="AllRestaurantsContainer" style={{padding:"10px",textAlign:"center"}}>
      {
        flagShowRestaurantsList===false 
        && 
        <>
        <Button variant="outlined" onClick={()=>{getAllRestaurantsList()}}> Get All Restaurants List</Button>
        </>

      }
      {
        flagShowRestaurantsList===true 
        &&
        <>
        <div className="restaurantListContainer" style={{padding:"10px"}}> 
        <AllRestaurants></AllRestaurants>

        </div>
        </>
      }
  
     </div>
    </div>
  );
}

export default App;
