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
                        title="female"
                        src="https://giphy.com/embed/0hJMpQiak6Abo8LmUW"
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
                        title="loop"
                        src="https://giphy.com/embed/5n3GgK7YsYXJ1j6lPY"
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