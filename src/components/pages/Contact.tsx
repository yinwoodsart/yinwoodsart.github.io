import { useEffect } from "react";
import './Contact.css';
import yinwoods_head from '../assets/images/yinwoods_head.jpeg';
import { Link } from "react-router-dom";

export const Contact = () => {
    useEffect(() => {
        document.title = 'Contact - Yin Woods';
      }, []);
    return (
      <main className="contact">
        <div className="desc">
          <img alt='' src={yinwoods_head}></img>
          <Link to="/">Yin Woods</Link> is a Hong Kong-born Artist, Animator and Printmaker who produces electronic mixes, experimental animation and short films; Her work explores social systems and conflict, identities, and gender stereotypes.
          <br/>
          <br/>
          She immigrated to the US with her family in 2008. She studied at Cypress High School in California and she specialised in Illustration and Animation in college. As a Hong Kongese American, she absorbs both East and West cultures. She worked as a Web Designer in a very commercial-driven company in Hong Kong and discovered the concept of "Money makes the world go round" there. She tried to develop some sustainable and creative projects in Hong Kong in her own time, but there were only failures and disappointments; after a series of solid work and time, effort, and energy spending, she then decided to reside in East London, a place where misfits can fit in and a shelter for the artists. She is still trying to find her "style".
        </div>
        <div className="email">
        HELLO! THIS IS YIN, YOU CAN EMAIL DIRECTLY!
        <br/>
        INFO@YINWOODS.COM
        </div>
      </main>
    )
}