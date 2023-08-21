import { useEffect, useState } from "react";
import './Routine.css';
import routine_poster_Eng from '../assets/images/routine_poster_Eng.jpg';
import routine_still_square from '../assets/images/routine_still_square.jpg';
import routine_still from '../assets/images/routine_still.jpg';

export const Routine = () => {
    const [left, setLeft] = useState(0);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        document.title = 'Routine - Yin Woods';
        
        const lefTimeout = setTimeout(() => {
          const eles = document.getElementsByClassName('image');
          const imageWidths: number[] = [0];
          for(let i = 0; i< eles.length -1; i++){
            imageWidths.push(eles.item(i)!.clientWidth);
          }
          const widthSum = imageWidths.reduce((a, b) => a + b, 0)
          const newLeft = Math.abs(left) < widthSum? left - imageWidths[index]: 0;
          setIndex( i => (i + 1) % imageWidths.length);
          setLeft(newLeft)
        }, 2000)

        return () => clearTimeout(lefTimeout);

      }, [left, index]);
    return (
      <main className="routine">
        <h2 className="title">《 ROUTINE 》</h2>
        <div className="carousel">
          <div className="image-group"  style={{left: left + window.innerWidth / 10}}>
            <div className="image-row">
              <div className="image">
                  <img alt='' src={routine_poster_Eng} />
              </div>
              <div className="image">
                  <img alt='' src={routine_still_square} />
              </div>
              <div className="image">
                  <img alt='' src={routine_still} />
              </div>
            </div>
          </div>
        </div>
        <div >
          <div className="content-block">
          <h3 className="synopsis">synopsis</h3>
          <p  className="synopsis-desc">
            ROUTINE is an experimental animated short with monologues of individuals who feel oppressed by the system, yearn for change and the freedom for questioning.  
          </p>
          <h3 >Festival </h3>
          <p>
            <a href="http://www.newfilmmakers.com/tuesday-february-7th-20th-online/">NewFilmmakers - New York</a>
          </p>
          </div>
          
        </div>
      </main>
    )
}