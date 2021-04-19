import React from 'react';
import ReactDOM from 'react-dom';
import { ErrorBoundary } from '@sentry/react';
import { Provider } from 'react-redux';
import App from './App';
import store, { history } from './store';
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider } from 'antd';
import { ConnectedRouter } from 'connected-react-router';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ConfigProvider locale={zhCN}>
        <ErrorBoundary fallback={'An error has occured'}>
          <App />
        </ErrorBoundary>
      </ConfigProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
