import { useEffect } from "react";

export const London = () => {
    useEffect(() => {
        document.title = 'London - Yin Woods';
      }, []);
    return (<main>London page</main>)
}