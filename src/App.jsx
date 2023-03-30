import { useRef } from 'react';

import Nav from './components/Nav';
import Jumbotron from './components/Jumbotron';
import SoundSection from './components/SoundSection';
import DisplaySection from './components/DisplaySection';
import WebgiViewer from './components/WebgiViewer';

function App() {
  const webgiViewerRef = useRef();

  const handlePreview = () => {
    webgiViewerRef.current.triggerPreview();
  };

  return (
    <div className="App">
      <Nav />
      <Jumbotron />
      <SoundSection />
      <DisplaySection triggerPreview={handlePreview} />
      <WebgiViewer ref={webgiViewerRef} />
    </div>
  );
}

export default App;
