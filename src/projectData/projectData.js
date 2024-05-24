import first from '../projectData/first.png'
import second from '../projectData/second.png'
import third from '../projectData/third.png'
import goodstart from '../projectData/goodstart.png'

const allProjects = [
    {
        name: "Retrosquares",
        description: "An application to upload images as Polaroid-esque posts",
        tech: ["React", "AWS", "Express.js", "MySQL"],
        image: first,
        projectpage: true
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