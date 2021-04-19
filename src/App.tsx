import React, { lazy, Suspense } from 'react';
import { history } from './store';
import { Route, Switch, Router, Redirect } from 'react-router-dom';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import './App.less';

import HomePage from '@modules/homepage';

// import AuthorRights from '@components/Test';

const AuthorRights = lazy(() => import('@components/Test'));
const { Content } = Layout;

export default class App extends React.Component {
  render() {
    // 菜单

    return (
      <Layout className="operation-galaxy" style={{ maxHeight: '100vh' }}>
        <Layout>
          <Content className="'galaxy-content'">
            <Router history={history}>
              <Suspense fallback={null}>
                <Switch>
                  {/* 主页 */}
                  <Route exact path="/home" component={HomePage} />
                  <Route exact path="/author/rights" component={AuthorRights} />
                  <Redirect to="/home/" />
                </Switch>
              </Suspense>
            </Router>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
