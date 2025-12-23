import React from 'react';
import CustomCursorLight from './components/CustomCursorLight';
import Navigation from './components/Navigation';
import IdentityCore from './components/IdentityCore';
import LightMarquee from './components/LightMarquee';
import ProjectIncubator from './components/ProjectIncubator';
import SkillReactorWall from './components/SkillReactorWall';
import TimelineRibbon from './components/TimelineRibbon';
import BioScanner from './components/BioScanner';
import ContactTerminal from './components/ContactTerminal';

const App: React.FC = () => {
  return (
    <div className="antialiased selection:bg-lab-neon selection:text-lab-dark">
      {/* Global Elements */}
      <CustomCursorLight />
      <Navigation />

      {/* Main Content Flow */}
      <main className="flex flex-col w-full">
        <IdentityCore />
        <LightMarquee />
        <ProjectIncubator />
        <SkillReactorWall />
        <TimelineRibbon />
        <BioScanner />
      </main>

      <ContactTerminal />
    </div>
  );
};

export default App;
