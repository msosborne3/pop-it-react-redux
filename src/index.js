import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { createStore } from 'redux';
import { rootReducer } from './reducers';
import MoviesPage from './containers/MoviesPage';
import ShowsPage from './containers/ShowsPage';
import ShowsShow from './containers/ShowsShow';
import MoviesShow from './containers/MoviesShow';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <Route path='/movies' component={MoviesPage}>
          <Route path='/movies/:id' component={MoviesShow} />
        </Route>
        <Route path='/shows' component={ShowsPage}>
          <Route path='/shows/:id' component={ShowsShow} />
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
