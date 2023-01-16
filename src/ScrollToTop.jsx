/* By default React router remembers the last location on each route,
*  causing user to land far away from the top of the different pages.
*  This function scrolls the window to the top-most location (0,0) 
*  whenever the location (route) changes.
*/
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop(props) {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>{props.children}</>
  )
};

export default ScrollToTop;
