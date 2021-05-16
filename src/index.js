import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import { routes } from './routes/index';
import './App.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navigation />
        <header className="App-header">
          <Switch>
            {routes.map((route) => (
              <Route key={route.path} {...route} />
            ))}
          </Switch>
        </header>
      </BrowserRouter>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
