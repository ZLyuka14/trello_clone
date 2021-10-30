import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import LoadingBar from 'react-top-loading-bar';
import Board from './pages/Board/Board';
import Home from './pages/Home/Home';

/**
 * This is main component of the application.
 * @returns jsx element
 */
function App(): JSX.Element {
  const [progress, setProgress] = useState(0);
  return (
    <Router>
      <div>
        <LoadingBar
          className="loading__bar"
          color="blue"
          progress={progress}
          onLoaderFinished={(): void => setProgress(0)}
        />
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
          <Route path={`${process.env.PUBLIC_URL}/board/:board_id`} component={Board} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
