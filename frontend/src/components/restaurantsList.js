import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios"
import ResThumbnail from "./restaurantThumbnail";
// import Modal from "react-bootstrap"
import Modal from "react-bootstrap/Modal"
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from "@mui/material";
function AllRestaurants(props){
    var [listRestaurants,setListRestaurants]=useState([])
    var [showModal,setShowModal]=useState(false)
    var [i1,setI1]=useState(false)
    var [reviewFlag,setReviewFlag]=useState(false)
    var [listReviews,setListReviews]=useState(["sdfasdfasdaf","dsfasdfasd"])
    var [textArea,setTextArea]=useState([])
    useEffect(() => {
        async function fetchUsers() {

          const response = await axios.get(`http://localhost:5000/getAll`);
          console.log(response)
          setListRestaurants(response.data)
          if (response.status === 200) {
    

          }

        }  
        fetchUsers();
      }, []);
    function onClickShowModal(index){
      setShowModal(true)
      setI1(index)

      async function getReviews(){
        const response = await axios.post("http://localhost:5000/getReviews",{id:index+1})
        setListReviews(response.data[0].review.split(","))
      }
      getReviews()
    }
    function onClickSendReview(){
      async function postReview(){
      const  response =await axios.post("http://localhost:5000/postReview",{review:textArea,id:i1+1})
      console.log(response)
      setListReviews(response.data[0].review.split(","))
    }
  postReview()}
    return(
      <div className="listContainer" style={{display:"flex",flexDirection:"row",flexWrap:"wrap"}}>
        {
          listRestaurants.map((value,index)=>{
            return(
              <div onClick={()=>{onClickShowModal(index)}} onMouseEnter={(e)=>{e.target.style.cursor="pointer"}}> 
              <ResThumbnail name={value.name} rating={value.rating} image={value.imageURL}></ResThumbnail>
              </div>
            )
          })
        }
        <Modal show={showModal} onHide={()=>{setShowModal(false)}}>
          <Modal.Header>
            <h4>
            Restaurant Details
            </h4>
          </Modal.Header>
          <Modal.Body>
            <div className="ModalBodyThumbnailContainer" style={{textAlign:"center",marginBottom:"50px"}}>
               { showModal===true && <ResThumbnail name={listRestaurants[i1].name} rating={listRestaurants[i1].rating} image={listRestaurants[i1].imageURL}></ResThumbnail> }
            </div>
            <div className="ModalBodyReviewsContainer" style={{textAlign:"left",marginTop:"10px"}}>
              <div style={{textAlign:"center"}}>
              <Button variant="contained" color="info" onClick={()=>{setReviewFlag(true)}} style={{marginLeft:"auto"}}>Add Review</Button></div>
              {
                reviewFlag===true 
                &&
                <div className="addReviewContainer" style={{width:"100%", border:"1px solid black",borderRadius:"5px",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}> 
                  <div className="textAreaContainer" style={{padding:"5px"}}>
                    <textarea onChange={(e)=>{setTextArea(e.target.value)}} style={{width:"100%"}}></textarea> 
                    </div>
                  <div className="buttonContainer" style={{textAlign:"right"}}> 
                    <Button variant="contained" onClick={()=>{setReviewFlag(false)}} color="error" style={{marginRight:"10px"}}>Cancel</Button>
                    <Button variant="contained" color="success" onClick={()=>{setReviewFlag(false);onClickSendReview()}}>Post review</Button>
                    </div>
                </div>
              }
              <div style={{display:"flex",flexDirection:"column",marginTop:"20px"}}>
                <h4 style={{textAlign:"center"}}>REVIEWS</h4>
                {
                  listReviews.map((value,index)=>{
                    return(
                      <div className="reviewcontainer" style={{margin:"10px",border:"1px solid black",borderRadius:"5px",boxShadow:"0px 0px 5px 5px rgb(0,0,0,.1)"}}>
                        <i> {value}</i>
                        </div>
                    )
                  })
                }
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="contained" color="error" onClick={()=>{setShowModal(false)}} >
              Close
            </Button>
            
          </Modal.Footer>
      </Modal>
      </div>
    )
}




export default AllRestaurants