
// Component that scrolls the window to the top on route change
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


function ScrollToTop() {
  // Get the current route path
  const { pathname } = useLocation();

  // Scroll to top whenever the route changes
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  // This component does not render anything
  return null;
}

export default ScrollToTop;
