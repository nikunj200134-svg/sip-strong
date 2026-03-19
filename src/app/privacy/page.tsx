import React from 'react';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="text-brand-orange hover:text-brand-orange-hover transition-colors mb-6 inline-flex items-center gap-2">
            <span>←</span>
            <span>Back to Home</span>
          </Link>
          <h1 className="font-oswald text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-white/60 text-lg">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="font-oswald text-2xl font-bold text-white uppercase tracking-wide mb-4">
              1. Introduction
            </h2>
            <p className="text-white/80 leading-relaxed">
              SipStrong (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;, or &quot;Company&quot;) operates the sipstrong.com website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
            </p>
          </section>

          <section>
            <h2 className="font-oswald text-2xl font-bold text-white uppercase tracking-wide mb-4">
              2. Information Collection and Use
            </h2>
            <p className="text-white/80 leading-relaxed mb-4">
              We collect several different types of information for various purposes to provide and improve our Service to you.
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/80">
              <li>Personal Data: Name, email address, address, phone number</li>
              <li>Usage Data: Information about how you interact with our Website</li>
              <li>Payment Information: Processed through secure payment gateways</li>
              <li>Cookies: Small data files stored on your device</li>
            </ul>
          </section>

          <section>
            <h2 className="font-oswald text-2xl font-bold text-white uppercase tracking-wide mb-4">
              3. Use of Data
            </h2>
            <p className="text-white/80 leading-relaxed">
              SipStrong uses the collected data for various purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/80">
              <li>To provide and maintain our Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To allow you to participate in interactive features</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information for improving our Service</li>
              <li>To monitor the usage of our Service</li>
            </ul>
          </section>

          <section>
            <h2 className="font-oswald text-2xl font-bold text-white uppercase tracking-wide mb-4">
              4. Security of Data
            </h2>
            <p className="text-white/80 leading-relaxed">
              The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="font-oswald text-2xl font-bold text-white uppercase tracking-wide mb-4">
              5. Contact Us
            </h2>
            <p className="text-white/80 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-brand-orange font-oswald uppercase tracking-wide mt-4">
              privacy@sipstrong.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
