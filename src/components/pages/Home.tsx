import { useEffect } from "react";
import './Home.css';

export const Home = () => {
    useEffect(() => {
        document.title = 'Home - Yin';
      }, []);
    return (
        <main className="home">
            <h3>
                <a href="https://vimeo.com/yinwrong">Vimeo </a>
                <a href="https://www.instagram.com/yinwrong/">Instagram</a>
                <a href="https://www.youtube.com/@chambers-echo">Youtube</a>
                <a href="https://giphy.com/yintooooyang">GIPHY</a>
                {/* <a href="https://yintooooyang.bandcamp.com">Bandcamp</a> */}
                <a href="https://soundcloud.com/chambersecho">Soundcloud</a>
                <a href="https://www.behance.net/yintooooyang">Behance</a>
                <a href="https://open.spotify.com/artist/4mY6HetUs2JLAJHUDPldCX?si=F4tjyfTaSXG6dRXHycRF7A">Spotify</a>
                {/* <br />
                <a href="https://www.goodreads.com/yinwrong">Goodreads</a>
                <a href="https://letterboxd.com/yinwrong/">Letterboxd</a>
                <a href="https://www.pinterest.com/yinwrong/">Pinterest</a>
                <a href="https://twitter.com/yintooooyang/">Twitter</a> */}
                {/* <br />
                <a href="https://venmo.com/yinwrong">Venmo</a> */}
            </h3>
        </main>)
}