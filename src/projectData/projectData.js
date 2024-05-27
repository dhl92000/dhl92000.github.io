import first from '../projectData/first.png'
import second from '../projectData/second.png'
import third from '../projectData/third.png'
import goodstart from '../projectData/goodstart.png'

const allProjects = [
    {
        name: "Retrosquares",
        description: "An application to upload images as Polaroid-esque posts",
        tech: ["React", "AWS", "Express.js", "MySQL", "Nodejs"],
        image: first,
        year: 2024,
        projectpage: true,
        projectBlurb: "An app for users to share and manage their images as Polaroid-esque posts, and filter views by hashtags.",
        detailedDescription: `<h1>About</h1>
        <p>
            Retrosquares is an application that allows users to upload and manage images as Polaroid-esque posts
            with captions. Users can also search and filter 'squares' with hashtags.
        </p>
        <p>
            I created this application because I wanted to learn about Amazon Web Services, handling image files
            and hashtags.
        </p>

        <h1>Challenges</h1>
        <h4>Unopinionated Frameworks</h4>
        <p>
            Using an unopinionated framework like Express.js provides a lot of freedom as to how to organize the application code, but it also provides a lot less structure. One of my biggest challenges was the organization of my backend API with all the technologies I wanted to use.
        </p>
        <p>
            I tackled this by breaking down what my application would require into smaller parts. For example, starting with my database model design and plotting the relationships between my models allowed me to easily identify the requirements for the rest of my backend code.
        </p>

        <h4>Many-to-Many Relationships</h4>
        <p>
            My database models needed to be relational with a many-to-many relationship.
        </p>
        <p>
            I became more comfortable with MySQL as I explored the MySQL Workbench application, and running local
            MySQL commands helped with understanding the various MySQL queries and workings of junction tables.
        </p>
        <h1>Results</h1>
        <p>
            By creating this project, I was able to use several technologies that were unfamiliar to me. It was challenging, but overall, a very rewarding experience. As I navigated AWS and MySQL documentation, deployed my backend through AWS EC2, and encountered handling image files as form data for the first time, many lessons were learnt.
        </p>
        <p>
            You can view a local version of the application <a href="https://retrosquares.netlify.app/">here.</a>
        </p>`
    },
    {
        name: "Good Start",
        description: "For users to get inspired daily with an immersive colour experience.",
        tech: ["HTML", "CSS", "JavaScript"],
        image: goodstart,
        projectpage: false
    },
    {
        name: "Places",
        description: "A toolkit website for builders to efficiently manage their pre-construction inventory and connect with buyers.",
        tech: ["PostgreSQL", "Sequelize", "Express.js", "React", "Tailwind"],
        image: second,
        projectpage: false
    },
    {
        name: "Pens",
        description: "Pens is a journalling app for users to unleash their creativity and share quotes and thoughts in a captivating way.",
        tech: ["MongoDB", "Express.js", "JavaScript"],
        image: third,
        projectpage: false
    }

]

export default allProjects