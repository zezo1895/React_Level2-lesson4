import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";
const Editbtn = ({user,stringid,deletee}) => {
  const { t, i18n } = useTranslation();

  if(i18n.language === "ar"){  return (
    <div>
        <div className="edit-btn flex">
              
              <button onClick={() => {
                deletee()
            
              }} className="delete">حذف المهمه</button>
              <button className='backhome'>
                <Link to={"/"}>الصفحه الرئيسيه</Link>
              </button> 
            </div>
            
    </div>
  );}
  if(i18n.language === "en"){
    return (
      <div>
          <div className="edit-btn flex">
                
                <button onClick={() => {
                  deletee()
              
                }} className="delete">Delete task</button>
                <button className='backhome'>
                <Link to={"/"}>Home page</Link>
              </button>
              </div>
              
      </div>
    );
  }

}

export default Editbtn;
