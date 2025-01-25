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
          <Link to="/">Yin</Link> is a Hong Kong-born, North West England based Artist, Animator and Printmaker who produces electronic mixes, experimental animation and short films.

          <div >
            <br/>
            <br/>
            <br/>
            HELLO! THIS IS YIN, YOU CAN EMAIL ME DIRECTLY!
            <br/>
            contact@yinwrong.com
          </div>
        </div>
        
      </main>
    )
}