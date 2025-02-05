import appImg from '../UI/3.png'

const Pickleball = () => {
    return (
<div className="projContainer">
      <div className="projContent">
        <div className="projPageTitle">
          <h1>Pickleball Skies</h1>
          <h4>MOBILE DEVELOPMENT</h4>
        </div>

        <div className="projIntroText">
          <div>
            <h2>Technologies</h2>
            <ul>
              <li>React Native</li>
              <li>JavaScript</li>
              <li>Weather API</li>
            </ul>
          </div>
          <div className="projDescription">
            <h2>The Project</h2>
            <p>
            Pickleball Skies is a mobile application that provides pickleball enthusiasts with the weather conditions for their location. Based on a main visual component and weather details, the app helps users decide whether it is ideal to play pickleball.
            </p>
          </div>
        </div>

        <div className="projImage">
          <img src={appImg} alt='Finance Tracker app homepage'/>
        </div>

        {/* <div>Process</div> */}
      </div>
    </div>
    )
}

export default Pickleball