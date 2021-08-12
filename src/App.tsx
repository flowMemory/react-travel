import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './views';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
