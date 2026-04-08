import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../public/Header';
import Footer from '../public/Footer';

export default function PublicLayout() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState('enter');

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setTransitionStage('exit');
      const timer = setTimeout(() => {
        setDisplayLocation(location);
        setTransitionStage('enter');
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [location, displayLocation]);

  return (
    <div className="public-layout">
      <Header />
      <main className="public-main">
        <div 
          className={`route-transition route-${transitionStage}`} 
          key={displayLocation.pathname}
        >
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}
