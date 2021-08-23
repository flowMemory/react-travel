import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, Register, SignIn, ProductDetail } from './views';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/registe" component={Register}></Route>
        <Route path="/signIn" component={SignIn}></Route>
        <Route path="/productDetail/:id" component={ProductDetail}></Route>
        <Route render={() => <h1>404 not found 页面去火星了 ！</h1>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
