import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
      <p className="mb-4 text-sm text-gray-500">Effective Date: [Insert Date]</p>
      
      <p className="mb-6">
        These Terms and Conditions (“Terms”) govern access to and use of the VentureSlate platform (“Platform”),
        operated by TeMetaTech, a subsidiary of Hay Good Enterprises LLC, with its principal office located at
        506 North Main Street, Abbeville, SC 29620 (“Company,” “we,” or “us”). By accessing or using the Platform,
        you (“User”) acknowledge and agree to be bound by these Terms. If you do not agree to these Terms,
        please do not use the Platform.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. Purpose of the Platform</h2>
        <p>
          VentureSlate is designed to provide secure and trackable access to proprietary pitch decks and
          confidential materials shared by founders, startups, or business entities with designated stakeholders,
          such as investors or corporate partners. The Platform ensures transparency by recording digital proof of access.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">2. Access Control and IP Logging</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Access to any pitch deck or document is permission-based and restricted.</li>
          <li>The Platform automatically records the IP address and timestamp of the User at the point of access.</li>
          <li>This information serves as verifiable digital proof of access and is made available to the content owner.</li>
        </ul>
        <p className="mt-2">
          By using the Platform, you expressly consent to the collection and use of your IP address for this purpose.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">3. Confidentiality Obligations</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Maintain strict confidentiality of all materials accessed.</li>
          <li>Not copy, share, forward, or distribute any content without the explicit written consent of the content owner.</li>
          <li>Use the information solely for the purpose for which access was granted.</li>
        </ul>
        <p className="mt-2">
          Unauthorized use or disclosure may result in legal action, including potential civil or criminal liability.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">4. User Responsibilities</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Circumvent access controls or attempt to disable tracking features.</li>
          <li>Misrepresent your identity, affiliation, or purpose for requesting access.</li>
          <li>Use the Platform for any unlawful, fraudulent, or unethical activity.</li>
        </ul>
        <p className="mt-2">
          Violation of these responsibilities may result in immediate revocation of access and legal action.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">5. Intellectual Property Rights</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>All content uploaded or shared via VentureSlate remains the sole intellectual property of the respective owners.</li>
          <li>TeMetaTech does not claim ownership or control over such content.</li>
          <li>The design, architecture, technology, and content of the VentureSlate Platform are proprietary to TeMetaTech and protected by applicable intellectual property laws.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">6. Data Privacy</h2>
        <p>
          TeMetaTech only collects IP addresses and access logs strictly for audit, compliance, and verification purposes.
          We do not sell, distribute, or use this information for any marketing or third-party advertising purposes.
        </p>
        <p className="mt-2">
          For more details on how we collect and protect your information, please refer to our [Privacy Policy].
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">7. Modifications to Terms</h2>
        <p>
          TeMetaTech reserves the right to amend or update these Terms at any time. Updates will be posted on the
          Platform, and continued use constitutes acceptance of the modified Terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">8. Contact Information</h2>
        <p>
          <strong>TeMetaTech (Operator of VentureSlate)</strong><br />
          506 North Main Street, Abbeville, SC 29620<br />
          Phone: [Insert Phone Number]<br />
          Email: [Insert Email]<br />
          Website: [Insert Website]
        </p>
      </section>

      <p className="mt-6 italic">
        By accessing the Platform, you confirm that you have read, understood, and agreed to these Terms and Conditions.
      </p>
    </div>
  );
};

export default TermsAndConditions;
