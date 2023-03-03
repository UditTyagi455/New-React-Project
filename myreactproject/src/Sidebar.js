import React from 'react';
import "./Sidebar.css"
import {AiOutlineArrowRight} from "react-icons/ai"

const Sidebar = () => {
  return (
    <div className='fullSidebar'>
        <div style={{display: "flex",flexDirection: "column",justifyItems: 'center',paddingBottom: "2rem",height: "50%"}}>
           <h3 style={{padding: "15px 8px",alignItems: "center",cursor: "pointer"}}> <AiOutlineArrowRight style={{fontSize: "12px"}}/> Home</h3>
           <h3 style={{padding: "15px 8px",alignItems: "center",cursor: "pointer"}}> <AiOutlineArrowRight style={{fontSize: "12px"}}/> Services</h3>
           <h3 style={{padding: "15px 8px",alignItems: "center",cursor: "pointer"}}> <AiOutlineArrowRight style={{fontSize: "12px"}}/> About </h3>
           <h3 style={{padding: "15px 8px",alignItems: "center",cursor: "pointer"}}> <AiOutlineArrowRight style={{fontSize: "12px"}}/> Contact Us</h3>
           <h3 style={{padding: "15px 8px",alignItems: "center",cursor: "pointer"}}> <AiOutlineArrowRight style={{fontSize: "12px"}}/> Logout</h3>
        </div>
    </div>
  )
}

export default Sidebar