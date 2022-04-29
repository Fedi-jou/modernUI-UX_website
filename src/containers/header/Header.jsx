import React , {useRef ,useEffect} from 'react'
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import "./header.css"
import { TimelineLite, Power2 } from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";

const Header = () => {
  let container = useRef(null);
  let image = useRef(null);
  let imageReveal = CSSRulePlugin.getRule(".gpt3__header-image:after");

    let tl = new TimelineLite();

  useEffect(() => {
    tl.to(container, 0, { css: { visibility: "visible" } });
    tl.to(imageReveal, 2.5, { width: "0%", ease: Power2.easeInOut });
    tl.from(image, 1.4, {
      scale: 1,
      ease: Power2.easeInOut,
      delay: -1.4
    }  
    );
    // eslint-disable-next-line
  } , []);  
 
  return (
    <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Let's Build Something amazing with GPT-3 OpenAI</h1>
      <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>

      <div className="gpt3__header-content__input" >
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} alt="people" />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div> 
    <div className="gpt3__header-image" ref = {ell => container = ell }>
      <img src={ai} alt="header" ref = {el => image = el }  /> 
    </div>
  </div>
  )
}

export default Header