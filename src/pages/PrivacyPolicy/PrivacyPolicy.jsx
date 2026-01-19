import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <div className="privacy-policy__container">
        {/* Header */}
        <div className="privacy-policy__header">
          <h1>Privacy Policy</h1>
          <p className="privacy-policy__subtitle">How we protect your personal data</p>
        </div>

        {/* Introduction */}
        <section className="privacy-policy__section">
          <p className="privacy-policy__intro">
            This Privacy Notice explains how Signature collects, uses, and protects personal data of users who visit or interact with our website. It is provided in accordance with Article 13 of the General Data Protection Regulation (GDPR) and applicable UK data protection laws.
          </p>
          <p className="privacy-policy__intro">
            This notice applies only to this website and does not cover third-party websites that may be accessed via external links. We are not responsible for the privacy practices of such third-party sites.
          </p>
        </section>

        {/* Section 1 */}
        <section className="privacy-policy__section">
          <h2 className="privacy-policy__section-title">Types of Data We Collect</h2>
          
          <h3 className="privacy-policy__subsection-title">What is Personal Data?</h3>
          <p>
            Personal data refers to any information relating to an identified or identifiable natural person. This includes, but is not limited to, a name, contact details, online identifiers, location data, or other information that can identify an individual directly or indirectly.
          </p>

          <h3 className="privacy-policy__subsection-title">Categories of Data</h3>
          <div className="privacy-policy__list">
            <div className="privacy-policy__list-item">
              <h4>Browsing Data</h4>
              <p>Technical data automatically collected during website use, such as IP addresses, browser type, operating system, and access times. This data is necessary for the proper functioning and security of the website.</p>
            </div>
            <div className="privacy-policy__list-item">
              <h4>Data You Provide Directly</h4>
              <p>Personal information provided by users through contact forms, email enquiries, or other direct communications, such as name, email address, phone number, and message content.</p>
            </div>
            <div className="privacy-policy__list-item">
              <h4>Social Media Data</h4>
              <p>Personal data provided by users when interacting with our official social media pages (e.g., comments, messages, or public posts). Processing of such data complies with applicable regulations and the privacy policies of the respective social media platforms.</p>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="privacy-policy__section">
          <h2 className="privacy-policy__section-title">Cookies and Tracking</h2>
          <p>
            This website uses cookies and similar tracking technologies to improve user experience and analyse website usage. For detailed information, please refer to our Cookie Policy, available via the website footer.
          </p>
        </section>

        {/* Section 3 */}
        <section className="privacy-policy__section">
          <h2 className="privacy-policy__section-title">Data Controller</h2>
          <div className="privacy-policy__info-box">
            <p><strong>Signature</strong></p>
            <p>United Kingdom</p>
            <p>Contact Email: <span className="privacy-policy__placeholder">[info@signaturebathroom.co.uk]</span></p>
          </div>
        </section>

        {/* Section 4 */}
        <section className="privacy-policy__section">
          <h2 className="privacy-policy__section-title">Data Protection Officer</h2>
          <p>
            If applicable, Signature has appointed a Data Protection Officer in accordance with Articles 37–39 of the GDPR.
          </p>
          <p>
            Contact: <span className="privacy-policy__placeholder">[DPO contact to be provided]</span>
          </p>
        </section>

        {/* Section 5 */}
        <section className="privacy-policy__section">
          <h2 className="privacy-policy__section-title">How We Use Your Data</h2>
          <div className="privacy-policy__table-wrapper">
            <table className="privacy-policy__table">
              <thead>
                <tr>
                  <th>Purpose</th>
                  <th>Legal Basis</th>
                  <th>How Long We Keep It</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Website navigation and analytics</td>
                  <td>Legitimate interest (Article 6(1)(f) GDPR)</td>
                  <td>Up to 7 days (unless required by law)</td>
                </tr>
                <tr>
                  <td>Website security and functionality</td>
                  <td>Legitimate interest (Article 6(1)(f) GDPR)</td>
                  <td>Up to 7 days</td>
                </tr>
                <tr>
                  <td>Cybercrime prevention</td>
                  <td>Legitimate interest (Article 6(1)(f) GDPR)</td>
                  <td>As required by law</td>
                </tr>
                <tr>
                  <td>Responding to your enquiries</td>
                  <td>Consent or legitimate interest</td>
                  <td>Until we've responded and followed up</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 6 */}
        <section className="privacy-policy__section">
          <h2 className="privacy-policy__section-title">Your Data is Voluntary</h2>
          <p>
            Providing personal data (other than browsing data) is voluntary. However, failure to provide required information may prevent us from responding to enquiries or providing requested services.
          </p>
        </section>

        {/* Section 7 */}
        <section className="privacy-policy__section">
          <h2 className="privacy-policy__section-title">Who We Share Your Data With</h2>
          <p>Personal data may be shared with:</p>
          <ul className="privacy-policy__bullet-list">
            <li>Website hosting and IT service providers</li>
            <li>Professional advisors and consultants</li>
            <li>Social media platforms (where interaction occurs)</li>
            <li>Public authorities, where required by law</li>
          </ul>
          <p>An updated list of data processors is available upon request.</p>
        </section>

        {/* Section 8 */}
        <section className="privacy-policy__section">
          <h2 className="privacy-policy__section-title">International Data Transfers</h2>
          <p>
            Personal data is primarily processed within the UK and the European Economic Area (EEA). If data is transferred outside these areas, it will be done in compliance with Articles 44–49 of the GDPR, using appropriate safeguards.
          </p>
        </section>

        {/* Section 9 */}
        <section className="privacy-policy__section">
          <h2 className="privacy-policy__section-title">Automated Decision-Making</h2>
          <p>
            Personal data is processed using manual and electronic means. No fully automated decision-making or profiling is carried out.
          </p>
        </section>

        {/* Section 10 */}
        <section className="privacy-policy__section">
          <h2 className="privacy-policy__section-title">Your Rights</h2>
          <p>Under GDPR, you have the right to:</p>
          <ul className="privacy-policy__bullet-list">
            <li>Access your personal data (Article 15 GDPR)</li>
            <li>Request correction or deletion (Articles 16–17 GDPR)</li>
            <li>Restrict processing (Article 18 GDPR)</li>
            <li>Data portability (Article 20 GDPR)</li>
            <li>Object to processing (Article 21 GDPR)</li>
            <li>Withdraw consent at any time</li>
          </ul>
          <p>To exercise these rights, contact us at:</p>
          <p>Email: <span className="privacy-policy__placeholder">[info@signaturebathroom.co.uk
]</span></p>
        </section>

        {/* Section 11 */}
        <section className="privacy-policy__section">
          <h2 className="privacy-policy__section-title">Lodge a Complaint</h2>
          <p>
            If you believe your data protection rights have been violated, you have the right to lodge a complaint with the UK Information Commissioner's Office (ICO) or seek judicial remedy.
          </p>
        </section>

        {/* Section 12 */}
        <section className="privacy-policy__section">
          <h2 className="privacy-policy__section-title">Updates to This Policy</h2>
          <p>
            Signature reserves the right to update or modify this Privacy Notice at any time. Any changes will be published on this page with an updated effective date.
          </p>
        </section>

        {/* Last Updated */}
        <div className="privacy-policy__footer">
          <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
