<<<<<<< HEAD
// app/components/TawkToScript.jsx
=======
>>>>>>> 3cc8964d7b64fef45258009a6c3263bcb9ac4476
'use client';
import { useEffect } from 'react';

export default function TawkToScript() {
  useEffect(() => {
    const s1 = document.createElement('script');
<<<<<<< HEAD
    s1.src = 'https://embed.tawk.to/688dfd19af9e5c192b5bebba/1j1la9bdn';
=======
    s1.src = 'https://embed.tawk.to/68ac17d2be8646192a41710f/1j3g3q4o6';
>>>>>>> 3cc8964d7b64fef45258009a6c3263bcb9ac4476
    s1.async = true;
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    document.head.appendChild(s1);
<<<<<<< HEAD
  }, []);

  return null; // No visible output
}
=======

    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_API.onLoad = function () {
      window.Tawk_API.hideWidget(); 
      window.Tawk_API.showWidget();
    };
  }, []);

  return null;
}

>>>>>>> 3cc8964d7b64fef45258009a6c3263bcb9ac4476
