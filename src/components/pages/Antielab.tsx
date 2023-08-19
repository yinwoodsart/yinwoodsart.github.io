import { useEffect } from "react";

export const Antielab = () => {
    useEffect(() => {
        document.title = 'Antielab - Yin Woods';
      }, []);
    return (<main>Antielab page</main>)
}