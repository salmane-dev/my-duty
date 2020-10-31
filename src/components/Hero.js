import React from "react"
import '../styles/main.css';
 


function Hero(props) {
  
 
  return (
    <div>
        <div className={firstdivStyle}>
          <h2 className=" text-xl font-bold">{ props.date_Gregorian }</h2> 
          <h2 className=" text-base ">{ props.date_hijri }</h2> 
        </div>

          <div className={quoatStyle} style={{marginTop:'-60px'}}>
            <q> {props.quote} </q><br/>
            <small className="float-right">{ props.author }</small>
          </div>
    </div>
  );
}


//tailwind css styling classes variables
const firstdivStyle= ' h-40 pt-4 bg-gradient-to-r from-teal-400 to-blue-500'
const quoatStyle= ' m-6 h-auto p-8 bg-blue-200 w-2/3 mx-auto rounded-lg '


export default Hero;
