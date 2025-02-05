import appImg from '../UI/2.png'

const FinanceTracker = () => {
  return (
    <div className="projContainer">
      <div className="projContent">
        <div className="projPageTitle">
          <h1>Finance Tracker</h1>
          <h4>WEB DEVELOPMENT</h4>
        </div>

        <div className="projIntroText">
          <div>
            <h2>Technologies</h2>
            <ul>
              <li>TypeScript</li>
              <li>React</li>
              <li>NextUI library</li>
            </ul>
          </div>
          <div className="projDescription">
            <h2>The Project</h2>
            <p>
              Finance tracker is an application created to help users track and
              view their expenses. Users can create expenses, edit, and delete
              them, while the application summarizes the amounts in a visually
              appealing way.
            </p>
          </div>
        </div>

        <div className="projImage">
          <img src={appImg} alt='Finance Tracker app homepage'/>
        </div>

        {/* <div>Process</div> */}
      </div>
    </div>
  );
};

export default FinanceTracker;
