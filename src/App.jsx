import React from 'react';
import './app.scss';
import { Content } from 'carbon-components-react/lib/components/UIShell';
import { Route, Routes } from 'react-router-dom';
import TutorialHeader from './components/TutorialHeader';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';

function App() {
  return (
    <>
      <TutorialHeader />
      <Content>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/repos" element={<RepoPage />} />
        </Routes>
      </Content>
    </>
  );
}

export default App;
