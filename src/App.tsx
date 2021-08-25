import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import { Home, Register, SignIn, ProductDetail } from './views';
import store  from './store/index';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/registe" component={Register}></Route>
          <Route path="/signIn" component={SignIn}></Route>
          <Route path="/productDetail/:id" component={ProductDetail}></Route>
          <Route render={() => <h1>404 not found 页面去火星了 ！</h1>} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
