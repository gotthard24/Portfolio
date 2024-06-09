import htmlIcon from '../assets/html.svg';
import css from '../assets/css.svg'
import boots from '../assets/Bootstrap.svg'
import js from '../assets/js.svg'
import ts from '../assets/ts.svg'
import react from '../assets/react.svg'
import py from '../assets/python.svg'
import csharp from '../assets/csharp.svg'
import sql from '../assets/sql.svg'
import nodejs from '../assets/nodejs.svg'
import git from '../assets/git.svg'
import postgr from '../assets/postgress.svg'
import aws from '../assets/aws.svg'
import docker from '../assets/docker.svg'

const Skills = () => {
    return(
        <>
            <section>
                    <div className="title_div">
                        <h2 className="sub">Skills</h2>
                    </div>
                    <aside className="skills_section">
                       <img className="icon" src={htmlIcon} alt="" />
                       <img className="icon" src={css} alt="" />
                       <img className="icon" src={boots} alt="" />
                       <img className="icon" src={js} alt="" />
                       <img className="icon" src={ts} alt="" />
                       <img className="icon" src={react} alt="" />
                       <img className="icon" src={py} alt="" />
                       <img className="icon" src={csharp} alt="" />
                       <img className="icon" src={sql} alt="" />
                       <img className="icon" src={nodejs} alt="" />
                       <img className="icon" src={git} alt="" />
                       <img className="icon" src={postgr} alt="" />
                       <img className="icon" src={aws} alt="" />
                       <img className="icon" src={docker} alt="" />
                    </aside>     
            </section>
        </>
    )
}

export default Skills