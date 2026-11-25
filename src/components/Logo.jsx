import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ className = "h-9 w-9", showText = true, textClassName = "text-xl", link = true }) {
  const [imgError, setImgError] = useState(false);

  const LogoIcon = (
    <div className="relative flex items-center justify-center shrink-0">
      {!imgError ? (
        <img
          src="/logo-mark.png"
          alt="Dev Archive Lab Logo"
          className={`${className} object-contain transition-transform duration-300 group-hover:scale-105`}
          onError={() => setImgError(true)}
        />
      ) : (
        <div className={`${className} flex items-center justify-center rounded-lg bg-gradient-to-br from-logoBlue to-navy-dark p-1.5 shadow-glow-blue border border-cyanAccent/30`}>
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
            <path d="M25 20 H55 C70 20 80 30 80 50 C80 70 70 80 55 80 H25 V20 Z" fill="#0A5CFF" />
            <path d="M25 50 L45 35 H60 C68 35 72 40 72 50 C72 60 68 65 60 65 H45 Z" fill="#070E2C" />
            <path d="M25 45 L50 25 H60" stroke="#22D3EE" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </div>
      )}
      <div className="absolute inset-0 rounded-full bg-cyanAccent/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </div>
  );

  const Content = (
    <div className="flex items-center gap-3 group select-none">
      {LogoIcon}
      {showText && (
        <div className="flex flex-col">
          <span className={`font-display font-bold tracking-tight text-slateText group-hover:text-white transition-colors ${textClassName}`}>
            Dev Archive <span className="text-gold">Lab</span>
          </span>
          <span className="text-[10px] uppercase tracking-widest text-slateText-dim font-medium -mt-0.5">
            Full Stack & Growth Studio
          </span>
        </div>
      )}
    </div>
  );

  if (link) {
    return (
      <Link to="/" aria-label="Dev Archive Lab Home" className="inline-flex items-center focus-visible:rounded-lg">
        {Content}
      </Link>
    );
  }

  return Content;
}
