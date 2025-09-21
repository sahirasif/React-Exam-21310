import React from 'react';

const Footer: React.FC = () => (
  <footer className="relative z-50 bg-[#191F33]">
    <div className="flex flex-col items-center px-4 py-12">
      <div>
        <a className="mb-8 flex items-center justify-center gap-5 text-white" href="/">
          <img
            alt="Logo"
            style={{ color: 'transparent' }}
            width="50"
            src="https://baitussalam.org/images/logo-2.svg"
          />
          <span className="text-3xl font-semibold tracking-wider">Bait-us-Salam</span>
        </a>
        <p className="max-w-xl text-center text-lg font-medium text-white">Shop Today!</p>
      </div>
    </div>
    <div className="bg-[#2E3447]">
      <div className="px-3 py-3 text-center">
        <span className="text-[#767E94]">
          Coded with 💙 by{' '}
          <a
            href="https://www.linkedin.com/in/abdulbasitprofile/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            Abdul Basit
          </a>{' '}
          in Karachi
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;