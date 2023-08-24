import { useEffect } from "react";
import './Pride.css';
import second from '../assets/images/02.jpg';
import third from '../assets/images/03.jpg';
import eigth from '../assets/images/08.jpg';
import hk_pride_couples from '../assets/images/hk_pride_couples.jpg';
import pride_hk_02 from '../assets/images/pride_hk_02.jpg';
import pride_hk_03 from '../assets/images/pride_hk_03.jpg';
import pride_hk_06 from '../assets/images/pride_hk_06.jpg';
import pride_hk_10 from '../assets/images/pride_hk_10.jpg';

export const Pride = () => {
    useEffect(() => {
        document.title = 'Pride - Yin Woods';
      }, []);
    return (
    <main className="pride">
      <div className='title'>The Hong Kong Pride Parade</div>
      
      <div className='desc'>( as a volunteer photographer )</div>
      
      <div className="image-content">
        <img alt='' src={hk_pride_couples}></img>
      </div>

      <div className="image-content">
        <img alt='' src={pride_hk_10}></img>
      </div>

      <div className="image-content">
        <img alt='' src={pride_hk_03}></img>
      </div>

      <div className="image-content">
        <img alt='' src={pride_hk_02}></img>
      </div>

      <div className="image-content">
        <img alt='' src={pride_hk_06}></img>
      </div>

      <div className="image-content">
        <img alt='' src={third}></img>
      </div>

      <div className="image-content">
        <img alt='' src={second}></img>
      </div>

      <div className="image-content">
        <img alt='' src={eigth}></img>
      </div>
      
    </main>)
}