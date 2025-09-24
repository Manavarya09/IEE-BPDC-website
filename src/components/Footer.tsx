import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-black text-gray-100 pt-12 pb-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="14" x="2" y="5" rx="2"/><path d="m22 5-10 7L2 5"/></svg>
            Contact
          </h2>
          <p className="mb-2 text-lg">General queries</p>
          <a href="mailto:studentcouncil@dubai.bits-pilani.ac.in" className="underline text-base hover:text-blue-400">IEEEBPDC@dubai.bits-pilani.ac.in</a>
        </div>
        {/* Address & Map */}
        <div>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
            Address
          </h2>
          <div className="mb-2 text-base">
            BITS Pilani, Dubai Campus<br />
            Dubai International Academic City<br />
            Dubai, United Arab Emirates
          </div>
          <div className="rounded-lg overflow-hidden mt-2 w-full h-32 md:h-36">
            <iframe
              title="BITS Pilani Dubai Campus Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.019370448996!2d55.40423907538244!3d25.11926297775106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f62e2e2e2e2e2%3A0x2e2e2e2e2e2e2e2e!2sBITS%20Pilani%2C%20Dubai%20Campus!5e0!3m2!1sen!2sae!4v1695222222222!5m2!1sen!2sae"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        {/* Socials */}
        <div className="flex flex-col gap-4">
          <a href="mailto:studentcouncil@dubai.bits-pilani.ac.in" className="flex items-center gap-4 bg-gray-800 rounded-xl px-5 py-4 hover:bg-gray-700 transition">
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="14" x="2" y="5" rx="2"/><path d="m22 5-10 7L2 5"/></svg>
            <div>
              <div className="font-semibold">Email</div>
              <div className="text-sm">IEEEBPDC@dubai.bits-pilani.ac.in</div>
            </div>
          </a>
          <a href="https://instagram.com/council.bitsdubai" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-gray-800 rounded-xl px-5 py-4 hover:bg-gray-700 transition">
            <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 2.75a5.75 5.75 0 1 1 0 11.5 5.75 5.75 0 0 1 0-11.5zm0 1.5a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5zm5.25 1.25a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg>
            <div>
              <div className="font-semibold">Instagram</div>
              <div className="text-sm">@IEEEBPDC</div>
            </div>
          </a>
          <a href="https://www.linkedin.com/company/ieee-bpdc/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-gray-800 rounded-xl px-5 py-4 hover:bg-gray-700 transition">
            <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.844-1.563 3.042 0 3.604 2.002 3.604 4.604v5.592z"/></svg>
            <div>
              <div className="font-semibold">LinkedIn</div>
              <div className="text-sm">IEEE BPDC</div>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
