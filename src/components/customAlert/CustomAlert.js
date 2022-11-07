//import React from 'react'
//import "customAlert.css"
//import { useState } from "react";
//import css from "classnames";
//import style from "./style.module.css";
//
//
//function CustomAlert({ children, type, message }) {
//
//    const [isShow, setIsShow] = useState(true);
//  
//    const renderElAlert = function () {
//        return React.cloneElement(children);
//      };
//    
//      const handleClose = (e) => {
//        e.preventDefault();
//        setIsShow(false);
//      };
//  
//    return (
//    <div>CustomAlert
//
//        <div className={css(style.alert, style[type], !isShow && style.hide)}>
//      <span className={style.closebtn} onClick={handleClose}>
//        &times;
//      </span>
//      {children ? renderElAlert() : message}
//    </div>
//
//    </div>
//  )
//}
//
//export default CustomAlert
//


// import css from "classnames";


// import style from "./style.module.css";
// import React from "react";

// export default function Alert({ children, type, message }) {
//   const [isShow, setIsShow] = useState(true);

//   const renderElAlert = function () {
    // return React.cloneElement(children);
//   };

//   const handleClose = (e) => {
//    e.preventDefault();
//    setIsShow(false);
//};
//
//return (
//    <div className={css(style.alert, style[type], !isShow && style.hide)}>
//      <span className={style.closebtn} onClick={handleClose}>
//        &times;
//      </span>
//      {children ? renderElAlert() : message}
//    </div>
//  );
//}