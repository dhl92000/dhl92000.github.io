import appImg from '../UI/1.png'

const Retrosquares = () => {
    return (
<div className="projContainer">
      <div className="projContent">
        <div className="projPageTitle">
          <h1>Retrosquares</h1>
          <h4>WEB DEVELOPMENT</h4>
        </div>

        <div className="projIntroText">
          <div>
            <h2>Technologies</h2>
            <ul>
              <li>React</li>
              <li>Express.js</li>
              <li>AWS</li>
              <li>MySQL</li>
              <li>Nodejs</li>
            </ul>
          </div>
          <div className="projDescription">
            <h2>The Project</h2>
            <p>
            Retrosquares is an application that allows users to upload and manage images as Polaroid-esque posts
            with captions. Users can also search and filter 'squares' with hashtags.
            </p>
          </div>
        </div>

        <div className="projImage">
          <img src={appImg} alt='Retrosquares app homepage'/>
        </div>

        {/* <div>Process</div> */}
      </div>
    </div>
    )
}

export default Retrosquares