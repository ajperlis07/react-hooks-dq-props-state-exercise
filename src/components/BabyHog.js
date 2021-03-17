import React, {useState} from "react";
import normalBaby from "../assets/unadulterated-hoglette.png";
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";

// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

let imageHeight= '200px'

function BabyHog(props) {
  // let imageHeight= '200px'
  function handleChangeWeight(e) {
      if(e.target.name === "+"){
        setWeight(weight + 1)
        imageHeight= String(parseInt(imageHeight) + 10) +'px'
        console.log(imageHeight)
      }
      else{
        setWeight(weight - 1)
        imageHeight= String(parseInt(imageHeight) - 10) +'px'
      }
  }
  const setPig= () => {
    if(props.color === "sun"){
        return SunBaby
    } else if (props.color === "blue"){
        return BlueBaby
    } else if (props.color === "glowing"){
        return GlowingBaby
    } else {return normalBaby}
  }


  const [weight, setWeight]= useState(25)

  return (
    <li className="hogbabies">
      <h1>Name {props.name}</h1>
      <h3>Weight: {weight}</h3>
      <h3>Hobby: {props.hobby}</h3>
      <h4>Eye Color: {props.color}</h4>

      <button name="+" onClick={handleChangeWeight}>Increase Weight</button>
      <button name="-" onClick={handleChangeWeight}>Decrease Weight</button>

      <div className="hb-wrap">
        <img
          src={setPig()}
          style={{ height: imageHeight }}
          alt="MasterBlasterJrJr"
        />
      </div>
    </li>
  );
}

export default BabyHog;
