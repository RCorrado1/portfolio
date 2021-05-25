import { Switch, BrowserRouter, Route } from 'react-router-dom';

//Views
import HomeView from './Views/Home';
import AdminView from './Views/Admin';
import TechsView from './Views/Techs';
import Contacto from './Views/Contacto';
import Portfolio from './Views/Portfolio';
import WeAreWorking from './Views/Working';
import PublicCodes from './Views/PublicCodes';

//Components
import Header from './Components/Header/Header';

//Render
function App() {
  const User =  <div style={{ zIndex: '0' }}>
                  <Header />
                  <HomeView />
                  <Portfolio />
                  <PublicCodes />
                  <TechsView />
                  <Contacto />
                </div>;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          { 
            //<WeAreWorking />
            User 
          } 
        </Route>
        <Route path='/admin' component={ AdminView }/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
