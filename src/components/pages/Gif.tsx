import './Gif.css';

export const Gif = () => {
    return (
        <main className="gif">
            <div className="gif-left-col">
               
                {/* <div className="shorter">

                </div> */}
                <div>
                    <iframe 
                        title="eyes1"
                        src="https://giphy.com/embed/76G73yyx2ECSIkWeng" 
                        width="100%" 
                        height="100%"
                        allowFullScreen={true}>
                    </iframe>
                </div>

                <div>
                    <iframe
                        title="eyes2"
                        src="https://giphy.com/embed/Q9Qmp62OSdEVwrBn4v"
                        width="100%" 
                        height="60%"
                        allowFullScreen={true}>
                    </iframe>
                </div>

            </div>
            <div className="gif-right-col">
                
                <div>
                    <iframe
                        title="eyes3"
                        src="https://giphy.com/embed/XFZ09f4X5rxLlvItoE"
                        width="100%" 
                        height="100%"
                        allowFullScreen={true}>
                    </iframe>
                </div>
                
                
            </div>


        </main>
    )
}     