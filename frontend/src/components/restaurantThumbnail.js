import React from "react";
import { Rating } from "@mui/material";




export default function ResThumbnail(props){

    return(
        <>
        <div className="thumbNailContainer" style={{display:"flex",flexDirection:"column",height:"100px",width:"150px",margin:"30px",boxShadow:"0px 0px 0px rgb(0,0,0,.1)",borderRadius:"5px",border:"1px solid black"}}>
            <div className="resImageContainer" style={{height:"100%",width:"100%"}}>
                <img src={props.image} height="100%" width={"100%"}>
                </img>

            </div>
            <div className="resNameContainer">
                <p>{props.name} </p>
            </div>
            <div className="ratingContainer">
            <Rating name="read-only" value={props.rating} readOnly />
            </div>
            <div className="ratingContainer">
                
            </div>

        </div>
        </>
    )

}