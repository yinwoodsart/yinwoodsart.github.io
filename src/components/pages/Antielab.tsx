import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Antielab.css';
import chickendrumstick02 from '../assets/images/chickendrumstick02.jpg';
import chickenDrumsticks01 from '../assets/images/chickenDrumsticks01.jpg';
import FirstAiders from '../assets/images/FirstAiders.jpg';
import flag01 from '../assets/images/flag01.jpg';
import Jan_3_2020_02 from '../assets/images/Jan_3_2020_02.jpg';
import Nov_30_2019_01 from '../assets/images/Nov_30_2019_01.jpg';
import police01 from '../assets/images/police01.jpg';
import PoliceCamera from '../assets/images/PoliceCamera.jpg';
import umbrella01 from '../assets/images/umbrella01.jpg';
import VforV_01 from '../assets/images/VforV_01.jpg';

export const Antielab = () => {
    useEffect(() => {
        document.title = 'Antielab - Yin';
      }, []);
    return (
      <main className="antielab">
        <div className='title'>Anti-ELAB Movement</div>
        <div className='link'>( <a  href='https://en.wikipedia.org/wiki/2019%E2%80%932020_Hong_Kong_protests'>THE ANTI-EXTRADITION LAW AMENDMENT BILL MOVEMENT / THE 2019 HONG KONG PROTESTS</a> )</div>
        <Carousel swipeable={false} animationHandler={"fade"} thumbWidth={120} showIndicators={false}>
            <div>
            <img alt='' src={flag01}></img>

            </div>
            <div>
            <img alt='' src={police01}></img>

            </div>
            <div>
            <img alt='' src={FirstAiders}></img>

            </div>
            <div>
            <img alt='' src={Jan_3_2020_02}></img>

            </div>
            <div>
            <img alt='' src={umbrella01}></img>

            </div>
            <div>
            <img alt='' src={Nov_30_2019_01}></img>

            </div>
            <div>
            <img alt='' src={VforV_01}></img>

            </div>

            <div>
            <img alt='' src={chickenDrumsticks01}></img>

            </div>

            <div>
            <img alt='' src={chickendrumstick02}></img>

            </div>
            <div>
            <img alt='' src={PoliceCamera}></img>

            </div>
        </Carousel>
        
        {/* <button onClick={() => {setActiveIndex(2)}}>Click</button> */}
      </main>
    )
}