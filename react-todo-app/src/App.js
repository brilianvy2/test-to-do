import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppContent from './components/AppContent';
import AppHeader from './components/AppHeader';
import PageTitle from './components/PageTitle';
import styles from './styles/modules/app.module.scss';
import LoginPage from './LoginPage';

function App() {
  return (
    <Router>
      <div className="container">
        <PageTitle>TODO List</PageTitle>
        <div className={styles.app__wrapper}>
          <AppHeader />
          <Route path="/" exact component={LoginPage} />
          <Route path="/todo" component={AppContent} />
        </div>
      </div>
    </Router>
  );
}

export default App;