import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InteractiveMap from './components/InteractiveMap';
import WhatWeDo from './components/WhatWeDo';
import InkSpace from './components/InkSpace/InkSpace';
import Gallery from './components/Gallery';
import EventsTimeline from './components/EventsTimeline';
import Footer from './components/Footer';

function App() {
  return (
            <div className="min-h-screen">
              <Navbar />
              <Hero />
              <InteractiveMap />
              <WhatWeDo />
              <EventsTimeline />
              <InkSpace />
              <Gallery />
              <Footer />
            </div>
  );
}

export default App;