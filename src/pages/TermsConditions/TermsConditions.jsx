import './TermsConditions.css';

const TermsConditions = () => {
  return (
    <div className="terms-conditions">
      <div className="terms-conditions__container">
        {/* Header */}
        <div className="terms-conditions__header">
          <h1>Terms and Conditions</h1>
          <p className="terms-conditions__subtitle">Legal agreement governing website use</p>
        </div>

        {/* Introduction */}
        <section className="terms-conditions__section">
          <p className="terms-conditions__intro">
            These Terms and Conditions govern the use of the website operated by Signature and define the legally binding relationship between users and the Owner.
          </p>
          <p className="terms-conditions__intro">
            By accessing or using this website, you confirm that you have read, understood, and agreed to be bound by these Terms.
          </p>
        </section>

        {/* Section 1 */}
        <section className="terms-conditions__section">
          <h2 className="terms-conditions__section-title">Owner Information</h2>
          <div className="terms-conditions__info-box">
            <p><strong>Company Name:</strong> Signature</p>
            <p><strong>Location:</strong> United Kingdom</p>
            <p><strong>Contact Email:</strong> <span className="terms-conditions__placeholder">[info@signaturebathroom.co.uk
]</span></p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="terms-conditions__section">
          <h2 className="terms-conditions__section-title">Scope of Application</h2>
          <p>These Terms apply to:</p>
          <ul className="terms-conditions__bullet-list">
            <li>The use of this website</li>
            <li>Any related services, content, or communications provided by Signature</li>
          </ul>
          <p>
            Certain provisions may apply only to specific categories of users (such as consumers or business users). Where applicable, such distinctions are clearly stated.
          </p>
        </section>

        {/* Section 3 */}
        <section className="terms-conditions__section">
          <h2 className="terms-conditions__section-title">User Eligibility</h2>
          <p>
            There are no restrictions on accessing this website based on user category. Users may browse the website freely. Certain features or services may require providing personal information.
          </p>
        </section>

        {/* Section 4 */}
        <section className="terms-conditions__section">
          <h2 className="terms-conditions__section-title">Website Content</h2>
          <p>
            All content available on this website, including but not limited to text, images, graphics, layouts, logos, and design elements, is owned by or licensed to Signature, unless otherwise stated.
          </p>
          <p>
            We make reasonable efforts to ensure that content does not infringe third-party rights. If you believe your rights have been violated, please contact us promptly.
          </p>
        </section>

        {/* Section 5 */}
        <section className="terms-conditions__section">
          <h2 className="terms-conditions__section-title">Intellectual Property Rights</h2>
          <p>
            All intellectual property rights related to this website and its content remain the exclusive property of Signature or its licensors.
          </p>
          <p>Users may not:</p>
          <ul className="terms-conditions__bullet-list">
            <li>Copy, reproduce, distribute, modify, publish, or reuse content</li>
            <li>Create derivative works</li>
            <li>Use content for commercial purposes</li>
          </ul>
          <p>
            unless expressly authorised in writing by Signature. Statutory exceptions to copyright remain unaffected.
          </p>
        </section>

        {/* Section 6 */}
        <section className="terms-conditions__section">
          <h2 className="terms-conditions__section-title">Access to Third-Party Resources</h2>
          <p>
            This website may contain links to third-party websites or services. Signature has no control over these external resources and is not responsible for their availability, content, or practices.
          </p>
          <p>
            Accessing third-party resources is at the user's own risk and subject to the third party's terms and policies.
          </p>
        </section>

        {/* Section 7 */}
        <section className="terms-conditions__section">
          <h2 className="terms-conditions__section-title">Acceptable Use</h2>
          <p>
            Users agree to use the website lawfully and responsibly. You must not:
          </p>
          <ul className="terms-conditions__bullet-list">
            <li>Violate applicable laws or regulations</li>
            <li>Infringe third-party rights</li>
            <li>Interfere with website security or functionality</li>
            <li>Upload or transmit harmful or malicious content</li>
          </ul>
          <p>
            Signature may take appropriate measures, including restricting access or reporting unlawful behaviour to authorities, to protect its legitimate interests.
          </p>
        </section>

        {/* Section 8 */}
        <section className="terms-conditions__section">
          <h2 className="terms-conditions__section-title">Service Availability</h2>
          <p>
            Signature may temporarily suspend or limit access to the website for maintenance, updates, or technical reasons.
          </p>
          <p>
            We are not liable for service interruptions caused by events beyond our reasonable control, including force majeure events.
          </p>
          <p>
            Signature reserves the right to modify or discontinue the website or services, in whole or in part, in accordance with applicable law.
          </p>
        </section>

        {/* Section 9 */}
        <section className="terms-conditions__section">
          <h2 className="terms-conditions__section-title">No Resale or Unauthorised Use</h2>
          <p>
            Users may not reproduce, duplicate, sell, resell, or exploit any part of the website or services without prior written permission from Signature.
          </p>
        </section>

        {/* Section 10 */}
        <section className="terms-conditions__section">
          <h2 className="terms-conditions__section-title">Privacy and Data Protection</h2>
          <p>
            Personal data is processed in accordance with our Privacy Policy, which forms an integral part of these Terms. Users are encouraged to review it carefully.
          </p>
        </section>

        {/* Section 11 */}
        <section className="terms-conditions__section">
          <h2 className="terms-conditions__section-title">No Waiver</h2>
          <p>
            Failure by Signature to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision.
          </p>
        </section>

        {/* Section 12 */}
        <section className="terms-conditions__section">
          <h2 className="terms-conditions__section-title">Changes to These Terms</h2>
          <p>
            Signature reserves the right to amend or update these Terms at any time. Changes will be effective upon publication on this page.
          </p>
          <p>
            Continued use of the website after changes constitutes acceptance of the revised Terms.
          </p>
        </section>

        {/* Section 13 */}
        <section className="terms-conditions__section">
          <h2 className="terms-conditions__section-title">Assignment</h2>
          <p>
            Signature may transfer or assign its rights and obligations under these Terms, taking users' legitimate interests into account.
          </p>
          <p>
            Users may not transfer their rights or obligations without prior written consent from Signature.
          </p>
        </section>

        {/* Section 14 */}
        <section className="terms-conditions__section">
          <h2 className="terms-conditions__section-title">Severability</h2>
          <p>
            If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain fully effective.
          </p>
        </section>

        {/* Section 15 */}
        <section className="terms-conditions__section">
          <h2 className="terms-conditions__section-title">Governing Law</h2>
          <p>
            These Terms are governed by the laws of the United Kingdom, without regard to conflict of law principles.
          </p>
        </section>

        {/* Section 16 */}
        <section className="terms-conditions__section">
          <h2 className="terms-conditions__section-title">Jurisdiction</h2>
          <p>
            Any disputes arising from or related to these Terms shall fall under the exclusive jurisdiction of the courts of the United Kingdom, unless mandatory consumer protection laws provide otherwise.
          </p>
        </section>

        {/* Section 17 */}
        <section className="terms-conditions__section">
          <h2 className="terms-conditions__section-title">Contact Information</h2>
          <p>
            For any questions regarding these Terms, please contact:
          </p>
          <div className="terms-conditions__info-box">
            <p>Email: <span className="terms-conditions__placeholder">[info@signaturebathroom.co.uk]</span></p>
          </div>
        </section>

        {/* Last Updated */}
        <div className="terms-conditions__footer">
          <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
