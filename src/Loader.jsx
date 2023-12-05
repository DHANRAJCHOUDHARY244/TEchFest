import React, {useState, useEffect} from 'react';
import App from './App'
import FireLoader from './atom.mp4'
const Loader = (props) => {
  const [showContent, setShowContent] = useState (false);

  useEffect (() => {
    const timer = setTimeout (() => {
      setShowContent (true);
    }, 8000); // 10 seconds

    return () => clearTimeout (timer);
  }, []);

  return (
    <>
      {!showContent &&
        
          <video autoPlay muted loop width="100%" height="100%" src={FireLoader} />
        }

      {showContent &&
        <>
          {props.children}
        </>}
    </>
  );
};

export default Loader;
