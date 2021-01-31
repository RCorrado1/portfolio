//Views
import HomeView from './Views/Home';
import Portfolio from './Views/Portfolio';

//Components
import Header from './Components/Header/Header';

//Styles
import { RGBAColors } from './Styles/StylesColors';

//Render
function App() {
  return (
    <div style={{ backgroundColor: RGBAColors.black }}>
      <Header />
      <HomeView />
      <Portfolio />
    </div>
  );
}

export default App;
