import { useNavigate } from "react-router-dom"

const Header = () => {
    const navigate = useNavigate()

    return(
        <>
            <header className="header_wrapper">
                <div className="header_content">
                    <p className="subsub"><span className="purple_p">console.log</span><span className="green_p">(<span className="orange_p">"</span>Hello, World!<span className="orange_p">"</span>)</span></p>
                    <h2 className="title" id="im">Daniel Kovalenko</h2>
                    <h3 className="title mobile">Full Stack Developer</h3>
                    <button id="cv_button" onClick={() => navigate('/cv')}>Open CV</button>
                </div>
            </header>
        </>
    )
}

export default Header