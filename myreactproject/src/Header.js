import React,{useState} from 'react';
import {AiOutlineBars} from "react-icons/ai";
import "./Header.css"
import Sidebar from './Sidebar';

const Header = () => {
    const [show,setShow] = useState(false)
    const handleClick = () => {
      setShow(!show);
    }
  return (
    <>
    <div className='Headerclass'>
        <div>
          <div className='sidebar'>
           <span className="listicon" onClick={handleClick}>
           <AiOutlineBars/>
           </span>
           <p className="welcomeText">Welcome To React World</p>
         </div>
      </div>
      <div>
         <input placeholder="&#x1F50E; Search..." style={{padding: "10px 12px",outline: "none",borderRadius: "8px",fontSize: "16px"}} />
      </div>

    </div>
    {show &&
    <Sidebar/>}
    </>
  )
}

export default Header