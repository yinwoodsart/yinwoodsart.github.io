import { useEffect } from "react";
import './Contact.css';
import yinwoods_head from '../assets/images/yinwoods_head.jpeg';
import { Link } from "react-router-dom";

export const Contact = () => {
    useEffect(() => {
        document.title = 'Contact - Yin';
      }, []);
    return (
      <main className="contact">
        <div className="desc">
          <img alt='' src={yinwoods_head}></img>
          <Link to="/">Yin</Link> is a Hong Kong-born Artist, Animator and Printmaker who produces electronic mixes, experimental animation and short films; Her work explores social systems and conflict, identities, and gender stereotypes.

          <div >
            <br/>
            <br/>
            <br/>
            HELLO! THIS IS YIN, YOU CAN EMAIL DIRECTLY!
            <br/>
            contact@yinwrong.com
          </div>
        </div>
        
      </main>
    )
}