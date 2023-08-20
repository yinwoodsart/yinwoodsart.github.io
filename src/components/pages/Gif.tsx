import './Gif.css';

export const Gif = () => {
    return (
        <main className="gif">
            <div className="gif-left-col">
               
                <div>
                    <iframe
                        title="cube"
                        src="https://giphy.com/embed/C7hzgTI3TbXT8tRaqz"
                        width="100%" 
                        height="100%"
                        allowFullScreen={true}>
                    </iframe>
                </div>

                <div>
                    <iframe
                        title="tv"
                        src="https://giphy.com/embed/fzxr3dQEcQeo5fwlCL"
                        width="100%" 
                        height="100%"
                        allowFullScreen={true}>
                    </iframe>
                </div>

                <div>
                    <iframe
                        title="windy"
                        src="https://giphy.com/embed/0fzAIrPwmdr9h8GfEc"
                        width="100%" 
                        height="100%"
                        allowFullScreen={true}>
                    </iframe>
                </div>

            </div>
            <div className="gif-right-col">
                <div className="shorter">
                    <iframe
                        title="triangle"
                        src="https://giphy.com/embed/QWAd9mSAypS0FE1u7s"
                        width="100%" 
                        height="100%"
                        allowFullScreen={true}>
                    </iframe>
                </div>
                <div>
                    <iframe
                        title="apple"
                        src="https://giphy.com/embed/4CdEI8CX265Dc6k53N"
                        width="100%" 
                        height="100%"
                        allowFullScreen={true}>
                    </iframe>
                </div>

                <div>
                    <iframe
                        title="flower"
                        src="https://giphy.com/embed/2qHtjXdQND8svHrwih"
                        width="100%" 
                        height="100%"
                        allowFullScreen={true}>
                    </iframe>
                </div>

            </div>


        </main>
    )
}     