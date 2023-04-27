import React, { useEffect, useState } from 'react';
import './style.css';
import './script.js';
import Header from './Header.js';

function MyComponent() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.addEventListener('load', function() {
      var loader = document.getElementById('loading-screen');
      setTimeout(function() {
        loader.style.display = 'none';
        setLoading(false);
      }, 3000); // Change 3000 to the duration of your progress bar animation in milliseconds
    });

    fetch('loading.php')
      .then(response => response.json())
      .then(data => {
        // Do something with the data
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {loading && (
        <div id="loading-screen">
          <div id="progress-bar"></div>
        </div>
      )}
      {!loading && <Header />}
    </div>
  );
}

export default MyComponent;
