import './Homepage.css'
import Projects from '../components/Projects';
import IMG_1290 from '../projectData/IMG_1290.jpg'
import allProjects from '../projectData/projectData'

const Homepage = () => {

    return (
        <div class="homepage">
            <div class="intro">
                {/* intro */}
                <div class="introTextDiv">
                    <p class="introName">Dahee Lee</p>

                    <p id="nameDef"><span style={{ color: "#0E8D44", fontSize: "1.5em" }}>&#10059;</span> / dahi / <span
                        id="nameKorean"> 다희 </span></p>

                    <div class="introBlurb">
                        <p>
                            Creative full stack software engineer obsessed with clean designs and clean code.
                        </p>

                        <p>
                            My passion is creating responsive, inspiring websites and applications that are intuitive for users. With an entrepreneurial background and excellent communication skills, I am adept at balancing both business and product needs when developing.
                        </p>
                    </div>
                </div>

                <div class="introImageDiv">
                    <img class="introImage" src={IMG_1290} alt="black and white headshot of Dahee against a wall with abstract art" />
                </div>
            </div>
            {/* skills */}
            <div class="skillsSection">
                <div>
                    <h1>Skills</h1>
                </div>

                <div class="skills">
                    <div class="skillsDiv">
                        <p>
                            Languages
                        </p>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                            <li>Python</li>
                        </ul>
                    </div>
                    <div class="skillsDiv">
                        <p>
                            Libraries, frameworks
                        </p>
                        <ul>
                            <li>ExpressJS</li>
                            <li>Django</li>
                            <li>React</li>
                            <li>React Native</li>
                            <li>Tailwind CSS</li>
                        </ul>
                    </div>

                    <div class="skillsDiv">
                        <p>
                            Technologies
                        </p>

                        <ul>
                            <li>AWS</li>
                            <li>Github</li>
                            <li>Heroku</li>
                            <li>MongoDB</li>
                            <li>MySQL</li>
                            <li>Netlify</li>
                            <li>PostgreSQL</li>
                        </ul>
                    </div>

                    <div class="skillsDiv">
                        <p>
                            Soft Skills
                        </p>
                        <ul>
                            <li>Collaboration</li>
                            <li>Conflict-resolution</li>
                            <li>Effective Communication</li>
                        </ul>
                    </div>


                </div>

            </div>

            {/* projects */}
            <Projects allProjects={allProjects} />

        </div>

    )
}

export default Homepage