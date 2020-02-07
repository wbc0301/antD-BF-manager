import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Login from './pages/login';
import Admin from './admin';
import Buttons from './pages/ui/buttons';
import Modals from './pages/ui/modals';
import NoMatch from './pages/nomatch'; // 404页面

import FormLogin from './pages/form/login'; // 表单   登录注册
import FormRegister from './pages/form/register';
import BasicTable from './pages/table/basicTable'; // table

import City from './pages/city';

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
                  <Route path="/ui/buttons" component={Buttons} />  {/* 练习 */}
                  <Route path="/ui/modals" component={Modals} />
                  <Route path="/form/login" component={FormLogin} />
                  <Route path="/form/reg" component={FormRegister} />
                  <Route path="/table/basic" component={BasicTable} />

                  <Route path="/city" component={City} /> {/* 城市 */}

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