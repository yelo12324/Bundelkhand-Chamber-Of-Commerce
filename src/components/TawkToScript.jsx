// app/components/TawkToScript.jsx
'use client';
import { useEffect } from 'react';

export default function TawkToScript() {
  useEffect(() => {
    const s1 = document.createElement('script');
    s1.src = 'https://embed.tawk.to/688dfd19af9e5c192b5bebba/1j1la9bdn';
    s1.async = true;
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    document.head.appendChild(s1);
  }, []);

  return null; // No visible output
}
