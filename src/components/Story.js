import lisbon from '../UI/lisbon.png'
import '../pages/AboutPage'

const Story = () => {
    return (
        <div class="storyDiv">
            <h1>My Story</h1>
            <div class="story">
                <div class="storyText">
                    <p>
                        Hi, I'm Dahee!
                    </p>
                    <p>
                        I started my career in the aviation industry and became addicted to travel and exploring new places. During this time, I developed a knack for
                        connecting with customers, and an interest in the Toronto real estate market. I started my
                        business as a real estate salesperson, growing a repeat clientele through referrals, creating a
                        marketing plan and website, and everything in between.
                    </p>

                    <p>
                        While in these industries, I noticed that my clients had a lot of trouble using applications
                        with hyper-minimal user interfaces. Similarly, at the airport, I would witness passengers
                        staring blankly at the self-check-in terminals, not knowing what to do.
                    </p>
                    <p>
                        This curiosity in how these applications were made was what started my journey in software development. I am a full stack developer and am passionate about creating responsive, intuitive interfaces and scalable applications. Feel free to connect with me on LinkedIn or reach out at dahlee97@gmail.com.
                    </p>
                </div>

                <div id="storyImageDiv">
                    <img src={lisbon} alt="Dahee by the Tagus River in Lisbon" />
                </div>
            </div>
        </div>
    )
}

export default Story