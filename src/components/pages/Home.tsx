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
                <a href="https://www.youtube.com/@yintooooyang">Youtube</a>
                <a href="https://giphy.com/yintooooyang">GIPHY</a>
                <a href="https://yintooooyang.bandcamp.com">Bandcamp</a>
                <a href="https://soundcloud.com/yintooooyang">Soundcloud</a>
                <a href="https://www.behance.net/yintooooyang">Behance</a>
                <a href="https://open.spotify.com/artist/5Q7D4aJOOSP3GXq1amVBkn?si=Kv1FIWYfRXC91E90mhGnFw">Spotify </a>
                <br />
                <a href="https://www.goodreads.com/yinwrong">Goodreads</a>
                <a href="https://letterboxd.com/yinwrong/">Letterboxd</a>
                <a href="https://www.pinterest.com/yinwrong/">Pinterest</a>
                <a href="https://twitter.com/yintooooyang/">Twitter</a>
                <br />
                <a href="https://venmo.com/yinwrong">Venmo</a>
            </h3>
        </main>)
}