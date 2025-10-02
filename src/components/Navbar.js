'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAVIGATION_ITEMS, BRAND_INFO } from '../constants/navigation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState('');
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Mark as mounted to safely use window-dependent values on client
    setIsMounted(true);
    
    const updateHash = () => {
      if (typeof window !== 'undefined') {
        setCurrentHash(window.location.hash || '');
      }
    };
    
    updateHash();
    window.addEventListener('hashchange', updateHash);
    return () => window.removeEventListener('hashchange', updateHash);
  }, []);

  const isItemActive = useMemo(() => {
    return (item) => {
      // Route links: compare against pathname only (SSR-safe)
      if (item.type === 'route') {
        return pathname === item.href;
      }
      // Hash links: only evaluate on client after mount to avoid hydration mismatch
      if (item.href?.startsWith('#')) {
        return isMounted && currentHash === item.href;
      }
      return false;
    };
  }, [pathname, currentHash, isMounted]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo/Brand */}
        <Link href="/" className="navbar-brand">
          <span className="brand-bracket">&lt;</span>
          <span className="brand-name">{BRAND_INFO.name}</span>
          <span className="brand-bracket">&gt;</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="navbar-nav">
          {NAVIGATION_ITEMS.map((item) => (
            item.type === 'route' ? (
              <Link key={item.id} href={item.href} className={`nav-link ${isItemActive(item) ? 'active' : ''}`}>
                {item.name}
              </Link>
            ) : (
              <a key={item.id} href={item.href} className={`nav-link ${isItemActive(item) ? 'active' : ''}`}>
                {item.name}
              </a>
            )
          ))}
          
          {/* Moon Icon */}
          <button className="theme-toggle">
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="mobile-menu-button"
        >
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="mobile-nav open">
          {NAVIGATION_ITEMS.map((item) => (
            item.type === 'route' ? (
              <Link
                key={item.id}
                href={item.href}
                className={`nav-link ${isItemActive(item) ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ) : (
              <a
                key={item.id}
                href={item.href}
                className={`nav-link ${isItemActive(item) ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            )
          ))}
          
          {/* Mobile Moon Icon */}
          <button className="theme-toggle">
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                clipRule="evenodd"
              />
            </svg>
            Theme Toggle
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
