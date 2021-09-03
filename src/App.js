import Footer from './components/Footer';
import Navabar from './components/Navabar';
import Docs from './pages/Docs';
import Features from './pages/Features';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navabar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/features" component={Features} />
        <Route exact path="/docs" component={Docs} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
