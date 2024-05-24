import '../pages/AboutPage'

const Timeline = () => {
    return (
        <div class="timeline">
            <h1>About Me<span style={{ color: "#0E8D44", fontSize: "1.5em" }}>.</span></h1>

            <div class="timelineItem" id="currentItem">
                <p>
                    2023
                </p>


                <p>
                    Software Engineering Immersive graduate, <em>General Assembly</em>
                </p>
            </div>
            <div class="timelineItem">
                <p>
                    2020
                </p>
                <p>
                    Realtor, <em>Home Standards Brickstone Realty</em>
                </p>
            </div>
            <div class="timelineItem">
                <p>
                    2018
                </p>
                <p>
                    Airports Customer Experience Specialist, <em>Air Canada</em>
                </p>
            </div>
            <div class="timelineItem">
                <p>
                    2016
                </p>
                <p>
                    Reservations/Ticketing Representative, <em>Air Canada</em>
                </p>
            </div>
        </div>
    )
}

export default Timeline