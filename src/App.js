import { Switch, BrowserRouter, Route } from 'react-router-dom';

//Views
import HomeView from './Views/Home';
import AdminView from './Views/Admin';
import TechsView from './Views/Techs';
import Portfolio from './Views/Portfolio';
import PublicCodes from './Views/PublicCodes';
import WeAreWorking from './Views/Working';

//Components
import Header from './Components/Header/Header';

//Styles
import { RGBAColors } from './Styles/StylesColors';

//Render
function App() {
  const User = <div style={{ backgroundColor: RGBAColors.black }}>
                <Header />
                <HomeView />
                <Portfolio />
                <PublicCodes />
                <TechsView />
              </div>;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          { 
            <WeAreWorking />
            //User 
          } 
        </Route>
        <Route path='/admin' component={ AdminView }/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
