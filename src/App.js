import './App.css';
import { Switch, Route } from 'react-router-dom';
import Homepage from './components/homepage/Homepage';
import MyContent from './components/MyContent/MyContent';
import Header from './components/Header/Header';
import Detail from './components/Detail/detail';
import NotFound from './components/404/NotFound';

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/MyContent' component={MyContent} />
        <Route path='/search/:id' component={Detail} />
        <Route path='/detail/:id' component={Detail} />
        <Route path='/movies' component={MyContent} />
        <Route path='/series' component={MyContent} />
        <Route path='/episodes' component={MyContent} />
        <Route component={NotFound} />

      </Switch>
    </div>
  );
}

export default App;
