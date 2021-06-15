import { useState } from 'react'

const MainDescriptions = ({textDescription}) => {

  const [showDesc, setToggleDesc] = useState({
    descProps: 'empty',
    descHead: 'Our Topics',
    descText: ' ',
    descTextClassName: 'hidden'
  })

  const descProp = ([...Object.entries({textDescription})[0]])[1]

  // setToggleDesc({
  //   description: "garun"
  // })

 if(showDesc.descProps !== descProp) {

  let descHead_toggle ;
  let descText_toggle;
  let descTextClassName_toggle;

  if(descProp === 'leftMain') {

    descHead_toggle = "We Are !!!" ;

  }
  else if (descProp === 'centerLeftMain') {

    descHead_toggle = "Increase Your Auditory";

  } 
  else if (descProp === 'centerRightMain') {
    
    descHead_toggle = "Promote Your Business";

  } 
  else if (descProp === 'rightMain') {

    descHead_toggle = "Brand Marketing";
    
  }
  else if (descProp === 'leftMainBtn') {

    descHead_toggle = "We Are !!!" ;
    descText_toggle = "We Are !!! - Lorem ipsum text";
    descTextClassName_toggle = "moreInfoDesc";

  }
  else if (descProp === 'centerLeftMainBtn') {

    descHead_toggle = "Increase Your Auditory";
    descText_toggle = "Increase Your Auditory - Lorem ipsum text";
    descTextClassName_toggle = "moreInfoDesc";

  }
  else if (descProp === 'centerRightMainBtn') {

    descHead_toggle = "Promote Your Business";
    descText_toggle = "Promote Your Business - Lorem ipsum text";
    descTextClassName_toggle = "moreInfoDesc";
    
  }
  else if (descProp === 'rightMainBtn') {

    descHead_toggle = "Brand Marketing";
    descText_toggle = "Brand Marketing - Lorem ipsum text";
    descTextClassName_toggle = "moreInfoDesc";
    
  } 
  else {
    descHead_toggle = 'Our Topics';
  }

  setToggleDesc({
    descProps: descProp,
    descHead: descHead_toggle,
    descText: descText_toggle,
    descTextClassName: descTextClassName_toggle
  })
 }

  // console.log(showDesc);
  // console.log(showDesc);

  return (
    <div className="mainDescriptions">
      {/* <p>{textDescription}</p> */}

      <div className="left_mainDescriptions">
        <div className="welcomePlace">
          <h3 id="ourTopics">{showDesc.descHead}</h3>
        </div>
        <div className="getStarted">
          <button className="btn_getStarted">Get Started</button>
        </div>
      </div>
      <div className="right_mainDescriptions">
        <img src="https://source.unsplash.com/random/760x480" alt="random" />
        <div className={showDesc.descTextClassName}>
          <h4>{showDesc.descText}</h4>
        </div>
      </div>
    </div>
  )
}

export default MainDescriptions 