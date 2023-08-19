import { useEffect } from "react";

export const Routine = () => {
    useEffect(() => {
        document.title = 'Routine - Yin Woods';
      }, []);
    return (<main>Routine page</main>)
}