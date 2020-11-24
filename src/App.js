//React Router
import {  BrowserRouter, Switch, Route, Link } from 'react-router-dom';

//Views
import Header from './Components/Header/Header';
import HomeView from './Views/Home';

//Render
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path=''>
          <HomeView />
        </Route>
        <Route path='contacto'>
          <div>Hola</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
