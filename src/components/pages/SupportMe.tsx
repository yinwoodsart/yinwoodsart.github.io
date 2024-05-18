import { useEffect } from "react";
import yinwoods_colors from '../assets/images/yinwoods_colors.jpg';
import './SupportMe.css';

export const SupportMe = () => {
    useEffect(() => {
        document.title = 'Support Me - Yin';
      }, []);
    return (
        <main className="support-me">
            <div>Support My Work</div>
            <div className="banner">
                <img alt='' src={yinwoods_colors}></img>
            </div>

            <div>
                <div className="region">International</div>
                <p>
                    <a href="https://www.buymeacoffee.com/yintooooyang">Buy Me A Coffee </a>
                    <br />
                    <a href="https://buy.stripe.com/8wM5kMckM90RgcobIL">Stripe</a>
                </p>
                <div className="region">United States</div>
                <p>
                    <a href="https://venmo.com/yinwrong">Venmo</a>
                    
                </p>
                <p className="thank-you">Thank you for your support!<br />It helps me to survive in patriarchy as a female artist.</p>
            </div>
        </main>
    )
}