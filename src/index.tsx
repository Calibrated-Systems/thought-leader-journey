/* @refresh reload */
import { render } from 'solid-js/web';
import { Router, Route } from '@solidjs/router';

import './index.css';

import Layout from './components/layout';
import Home from './pages/home';
import EmbodiedInfluenceMetaLifecycle from './pages/embodied-influence';
import CommunityLifecycle from './pages/community-lifecycle';
import ThoughtLeaderDevelopment from './pages/thought-leader-development';
import BrandRecognitionLifecycle from './pages/brand-recognition-lifecycle';
import InflectionPoints from './pages/inflection-points';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(() => (
  <Router base="/thought-leader-journey" root={Layout}>
      <Route path="/" component={Home} />
      <Route path="/embodied-influence" component={EmbodiedInfluenceMetaLifecycle} />
      <Route path="/community" component={CommunityLifecycle} />
      <Route path="/development" component={ThoughtLeaderDevelopment} />
      <Route path="/recognition" component={BrandRecognitionLifecycle} />
      <Route path="/inflection-points" component={InflectionPoints} />
  </Router>
), root!);