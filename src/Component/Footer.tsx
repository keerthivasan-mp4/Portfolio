

import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = "keerthiv741@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="bg-[#0a0a0a] text-white py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
        
        {/* Left Column: Heading & Description */}
        <div className="flex flex-col justify-center space-y-6">
          <span className="text-xs md:text-sm font-mono tracking-widest text-neutral-400 uppercase">
            Contact
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight leading-[1.1]">
            Let&apos;s build something.
          </h2>
          <p className="text-neutral-400 text-base md:text-lg max-w-md leading-relaxed">
            Open to full-time forward deployed and product engineering roles. I reply within a day.
          </p>
        </div>

        {/* Right Column: Contact Links List */}
        <div className="flex flex-col border-t border-neutral-800 divide-y divide-neutral-800">
          
          {/* Email Row */}
          <div 
            onClick={handleCopyEmail}
            className="group flex items-center justify-between py-5 px-2 cursor-pointer transition-colors hover:bg-neutral-900/50"
          >
            <div className="flex items-center space-x-4">
              <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="font-medium text-neutral-200">Email</span>
            </div>
            <div className="flex items-center space-x-2 text-neutral-400 group-hover:text-white transition-colors">
              <span className="text-sm md:text-base">{email}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"></path>
              </svg>
              {copied && <span className="text-xs text-green-400 ml-1">Copied!</span>}
            </div>
          </div>

          {/* LinkedIn Row (Highlighted style like the image block) */}
          <a 
            href="https://www.linkedin.com/in/keerthi-vasan-284653261/?isSelfProfile=true" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center justify-between py-5 px-4 bg-neutral-900/80 border border-neutral-800 my-2 rounded-lg transition-all hover:border-neutral-700"
          >
            <div className="flex items-center space-x-4">
              <svg className="w-5 h-5 text-neutral-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span className="font-medium text-white">LinkedIn</span>
            </div>



            <div className="flex items-center space-x-2 text-neutral-400 group-hover:text-white transition-colors">
              <span className="text-sm md:text-base">Keerthi Vasan.J</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </div>
          </a>

          {/* GitHub Row */}
          <a 
            href="https://github.com/keerthivasan-mp4" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center justify-between py-5 px-2 transition-colors hover:bg-neutral-900/50"
          >
            <div className="flex items-center space-x-4">
              <svg className="w-5 h-5 text-neutral-400" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span className="font-medium text-neutral-200">GitHub</span>
            </div>
            <div className="flex items-center space-x-2 text-neutral-400 group-hover:text-white transition-colors">
              <span className="text-sm md:text-base">Keerthivasan-mp4</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </div>
          </a>

        </div>

      </div>
    </section>
  );
};

export default Contact;