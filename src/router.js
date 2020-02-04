import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Login from './pages/login';
import Admin from './admin';
import Buttons from './pages/ui/buttons.js';
import Modals from './pages/ui/modals.js';
import NoMatch from './pages/nomatch'; // 404页面

export default class IRouter extends React.Component {
  render() {
    return (
      <HashRouter>
        <App>  {/* 组件中通过{this.props.children}站位 */}
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/" render={() => (
              <Admin>
                <Switch>
                  <Route path="/ui/buttons" component={Buttons} />
                  <Route path="/ui/modals" component={Modals} />
                  <Route component={NoMatch} />
                </Switch>
              </Admin>
            )} />
            <Route path="/order/detail" component={Login} />
          </Switch>
        </App>
      </HashRouter>
    )
  }
}