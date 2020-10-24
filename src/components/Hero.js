import React from 'react'
import '../styles/main.css';


function Hero() {
  return (
    <div>
        <div className={firstdivStyle}>
          <h2 className=" text-xl font-bold">this is america jaa jaa</h2> 
          <h2 className=" text-base ">this is america jaa jaa</h2> 
        </div>

          <div className={quoatStyle} style={{marginTop:'-60px'}}>
            <q> Lorem ipsum dolor sit amet consectetur adipisicing elit. Id iusto accusamus fuga.</q><br/>
            <small className="float-right">Almotanabi </small>
          </div>
    </div>
  );
}

//tailwind css styling classes variables
const firstdivStyle= ' h-40 pt-4 bg-gradient-to-r from-teal-400 to-blue-500'
const quoatStyle= ' m-6 h-auto p-8 bg-blue-200 w-2/3 mx-auto rounded-lg '


export default Hero;
