import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import ReactGA from 'react-ga';
import store from './store';
import Home from './pages/Home';
import './styles/compiled.css';

const history = createBrowserHistory();
const trackingId = process.env.REACT_APP_GA_TRACKING || '';
ReactGA.initialize(trackingId, {
  gaOptions: {
    siteSpeedSampleRate: 100,
  },
});
history.listen(() => {
  ReactGA.pageview(window.location.pathname + window.location.search);
});

export default function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Provider store={store}>
      <div className='App'>
        <BrowserRouter basename='/'>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}
