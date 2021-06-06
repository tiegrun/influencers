import { useState } from 'react'
import MainDescriptions from './MainDescriptions'

const Main = () => {

  const [showButton, setToggleButton] = useState({
      description: "empty"
    })

  const handleMouseEnter = (e) => {
    e.target.lastChild.className = "btn"

    setToggleButton({
      description: `${e.target.id}`
    })

  }

  const handleMouseLeave = (e) => {
    e.target.lastChild.className = "hidden"
  }

  const onClick = (e) => {


    setToggleButton({
      description: `${e.target.id}`
    })

    // console.log(showButton.description)
  }

  console.log(showButton.description)

  return (
    <div className="main">
      <div className="topMain">
        <div id="leftMain" className = "sections" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
          <h3>Who Are We?</h3>
          <button  className='hidden' id="leftMainBtn" onClick = {onClick}>More Information</button>
        </div>
        <div id="centerLeftMain"  className = "sections" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
          <h3>Increase Your Auditory</h3>
          <button className='hidden' id="centerLeftMainBtn" onClick = {onClick}>More Information</button>
        </div>
        <div id="centerRightMain"  className = "sections" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
          <h3>Promote Your Business</h3>
          <button className='hidden' id="centerRightMainBtn" onClick = {onClick}>More Information</button>
        </div>
        <div id="rightMain"  className = "sections" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h3>Brand Marketing</h3>
          <button className='hidden' id="rightMainBtn" onClick = {onClick}>More Information</button>
        </div>
      </div>
      <div className="bottomMain">
        <MainDescriptions  textDescription = {showButton.description}/>
      </div>
    </div>
  )
}

export default Main 