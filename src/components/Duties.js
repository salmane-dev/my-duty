import React from 'react'
import '../styles/main.css';


function Duties() {
  return (
    <div className={ divone }>
         <div className={ duty }>
          <i className={ iconStyle }></i>
          <h2 className="transform -rotate-12 mb-2"> <b>Dinnnnber</b> </h2>
          <div className={ div_rounded }>
              <h2 className="transform ">Dinnnnber</h2>
              <hr/> 
              <h3>qwd qw</h3>
          </div>
        </div>

        <div className={ duty }>
          <i className={ iconStyle }></i>
          <h2 className="transform -rotate-12 mb-2"> <b>Dinnnnber</b> </h2>
          <div className={ div_rounded }>
              <h2 className="transform ">Dinnnnber</h2>
              <hr/> 
              <h3>qwd qw</h3>
          </div>
        </div>

        <div className={ duty }>
          <i className={ iconStyle }></i>
          <h2 className="transform -rotate-12 mb-2"> <b>Dinnnnber</b> </h2>
          <div className={ div_rounded }>
              <h2 className="transform ">Dinnnnber</h2>
              <hr/> 
              <h3>qwd qw</h3>
          </div>
        </div>
        
        <br/>

    </div>
  );
}


//tailwind css styling classes variables
const  divone = 'mt-4 mx-4 p-4 px-18 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg flex '
const duty = ' bg-grey p-3 pb-1 px-1 bg-blue-300 transform rotate-12 rounded-xl mx-auto'
const iconStyle = 'fas fa-user p-3 mb-2 text-3xl bg-teal-400 rounded-full transform -rotate-12'
 const div_rounded = 'mt-2 bg-grey p-2 py-4  rounded-full transform -rotate-12' // bg-blue-500 

export default Duties;
