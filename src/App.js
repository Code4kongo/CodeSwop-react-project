import { Switch, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import UserOrgPage from './Pages/UserOrgPage'
import UserRepoPage from './Pages/UserRepoPage'
import AboutPage from './Pages/AboutPage'
import NavBar from './Components/NavBar'


const  App = ()  => {
  return (
    <div className = "container">
      <div className="row">
        <NavBar/>
        <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/about" exact component={AboutPage} />
            <Route path="/users/:userId/orgs" exact component={UserOrgPage} />
            <Route path="/users/:userId/repo" exact component={UserRepoPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
