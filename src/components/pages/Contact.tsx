import { useEffect } from "react";

export const Contact = () => {
    useEffect(() => {
        document.title = 'Contact - Yin Woods';
      }, []);
    return (<main>Contact page</main>)
}