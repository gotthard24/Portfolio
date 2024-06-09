import github from '../assets/githubhead.svg'
import itch from '../assets/itchdotio.svg'

const Projects = () => {
    return(
        <>
            <section>
                <div className="title_div">
                    <h2 className="sub">Projects</h2>
                    <div id='proj_icons'>
                        <img className="proj_icon" src={github} alt="" />
                        <img className="proj_icon" src={itch} alt="" />
                    </div>
                </div>
                <aside className="card_section">
                    <div className="card">
                        <p className="subsub"><span className="purple_p">{'{'}</span><span className="green_p">{'React'}</span><span className="purple_p">{','}</span><span className="green_p">{'TS'}</span><span className="purple_p">{','}</span><span className="green_p">{'Node.js'}</span><span className="purple_p">{'}'}</span></p>
                        <h3 className="sub_card">Visual English</h3>
                        <p className="standard_text">This full-stack project, built with React, 
                            Redux, TypeScript, and Node.js, is an a platform for learning English through a gamified experience. 
                            Users interact with image cards presented in English, 
                            Russian, and a Hebrew language. 
                            The game adapts to different levels of difficulty, 
                            making it suitable for learners at any stage. 
                        </p>
                        <a href="http://ec2-3-76-7-231.eu-central-1.compute.amazonaws.com/"><span className="subsub purple_p">See the project {'>'}</span></a>
                        <a href="https://github.com/gotthard24/Visual_Learn_FP"><span className="subsub purple_p">GitHub  {'>'}</span></a>
                    </div>
                    <div className="card">
                        <p className="subsub"><span className="purple_p">{'{'}</span><span className="green_p">{'C#'}</span><span className="purple_p">{','}</span><span className="green_p">{'Unity'}</span><span className="purple_p">{'}'}</span></p>
                        <h3 className="sub_card">Order Pleasure</h3>
                        <p className="standard_text">Mobile puzzle game for android 
                            devices with integrated ads using
                            C# and Unity Engine
                        </p>
                        <a href="https://gotthard24.itch.io/order-pleasure"><span className="subsub purple_p">See the project  {'>'}</span></a>
                        <a href="https://github.com/gotthard24/order_pleasure"><span className="subsub purple_p">GitHub  {'>'}</span></a>
                    </div>
                    <div className="card">
                        <p className="subsub"><span className="purple_p">{'{'}</span><span className="green_p">{'Vanilla JS'}</span><span className="purple_p">{','}</span><span className="green_p">{'Node.js'}</span><span className="purple_p">{','}</span><span className="green_p">{'SQL'}</span><span className="purple_p">{'}'}</span></p>
                        <h3 className="sub_card">Meal Maker</h3>
                        <p className="standard_text">Asynchronous JavaScript App
                            for calculating daily calories/ration
                            using Neon Postgress Data Base
                            and API of food and recipes 
                        </p>
                        <a href="https://www.loom.com/share/e817dff9d0c147ea85796db08af416a5?sid=626ce119-1d55-4d98-9c91-9052aaec6889"><span className="subsub purple_p">See the project  {'>'}</span></a>
                        <a href="https://github.com/gotthard24/Weight_Manager"><span className="subsub purple_p">GitHub  {'>'}</span></a>
                    </div>             
                </aside>     
            </section>
        </>
    )
}

export default Projects