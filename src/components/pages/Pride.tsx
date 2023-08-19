import { useEffect } from "react";

export const Pride = () => {
    useEffect(() => {
        document.title = 'Pride - Yin Woods';
      }, []);
    return (<main>Pride page</main>)
}