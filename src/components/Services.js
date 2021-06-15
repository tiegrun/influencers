const Services = () => {
  return (
    <div className="main">
      <div className="topMain">
        <div id="leftServices" className = "sections">
          <h3>Service 1</h3>
          <button  className='hidden' id="leftServicesBtn">More Information</button>
        </div>
        <div id="centerLeftServices"  className = "sections">
          <h3>Service 2</h3>
          <button className='hidden' id="centerLeftServicesBtn">More Information</button>
        </div>
        <div id="centerRightServices"  className = "sections">
          <h3>Service 3</h3>
          <button className='hidden' id="centerRightServicesBtn">More Information</button>
        </div>
        <div id="rightServices"  className = "sections">
            <h3>Service 4</h3>
            <button className='hidden' id="rightServicesBtn" >More Information</button>
        </div>
      </div>
    </div>
    
  )
}

export default Services 



























