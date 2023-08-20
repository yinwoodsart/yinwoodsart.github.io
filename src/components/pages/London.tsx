import { useEffect } from "react";
import london_1 from '../assets/images/london_1.jpeg';
import london_2 from '../assets/images/london_2.jpeg';
import './London.css';


export const London = () => {
  useEffect(() => {
    document.title = 'London - Yin Woods';
  }, []);
  return (
    <main className="london">
      <div>Daily London</div>
      <div className="photo"><img src={london_1} alt=''></img></div>
      <div className="photo"><img src={london_2} alt=''></img></div>

    </main>
  )
}