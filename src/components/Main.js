import { useState } from 'react'
import MainDescriptions from './MainDescriptions'

const Main = () => {

  const [showButton, setToggleButton] = useState({
      description: "empty",
      
      leftActive: false,
      centerLeftActive: false,
      centerRightActive: false,
      rightActive: false,

      btn_LeftActive: false,
      btn_CenterLeftActive: false,
      btn_CenterRightActive: false,
      btn_RightActive: false,
    })

  const handleMouseEnter = (e) => {
    // e.target.lastChild.className = "btn"

    console.log(e.target.id)

    if(e.target.id === "leftMain") {
      

      setToggleButton({
        description: `${e.target.id}`,
        leftActive: true,
       
      })
    }
    else if(e.target.id === "centerLeftMain"){

      setToggleButton({
        description: `${e.target.id}`,
        centerLeftActive: true,
        
      })
    }
    else if(e.target.id === "centerRightMain"){

      setToggleButton({
        description: `${e.target.id}`,
        centerRightActive: true,
       
      })
    }
    else if(e.target.id === "rightMain"){

      setToggleButton({
        description: `${e.target.id}`,
        rightActive: true,
        
      })
    }
    // else if(showButton.description === "empty"){
    //   console.log("naturi")
    // }
   
  }

  const handleMouseLeave = (e) => {
    setToggleButton({
      description: `${e.target.id}`,
      leftActive: false,
      centerLeftActive: false,
      centerRightActive: false,
      rightActive: false,
    })
    // console.log("liiasa")
  }

  const onClick = (e) => {

    setToggleButton({
      description: `${e.target.id}`, 
      leftActive: true,
    })

    // console.log(showButton.description)
  }


  console.log(showButton.description)
  return (
    <div className="main">
      <div className="topMain">
        <div id="leftMain" className = "sections" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
          <h3>Who Are We?</h3>
          <button  className={`${showButton.leftActive ? "btn" : "hidden"}`} id="leftMainBtn" onClick = {onClick}>More Information</button>
        </div>
        <div id="centerLeftMain"  className = "sections" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
          <h3>Increase Your Auditory</h3>
          <button className={`${showButton.centerLeftActive ? "btn" : "hidden"}`} id="centerLeftMainBtn" onClick = {onClick}>More Information</button>
        </div>
        <div id="centerRightMain"  className = "sections" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
          <h3>Promote Your Business</h3>
          <button className={`${showButton.centerRightActive ? "btn" : "hidden"}`} id="centerRightMainBtn" onClick = {onClick}>More Information</button>
        </div>
        <div id="rightMain"  className = "sections" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h3>Brand Marketing</h3>
          <button className={`${showButton.rightActive ? "btn" : "hidden"}`} id="rightMainBtn" onClick = {onClick}>More Information</button>
        </div>
      </div>
      <div className="bottomMain">
        <MainDescriptions  textDescription = {showButton.description}/>
      </div>
    </div>
  )
}

export default Main 