import './CookiePolicy.css';

const CookiePolicy = () => {
  return (
    <div className="cookie-policy">
      <div className="cookie-policy__container">
        {/* Header */}
        <div className="cookie-policy__header">
          <h1>Cookie Policy</h1>
          <p className="cookie-policy__subtitle">How we use cookies and tracking technologies</p>
        </div>

        {/* Introduction */}
        <section className="cookie-policy__section">
          <p className="cookie-policy__intro">
            This Cookie Policy explains how Signature uses cookies and similar technologies on its website, in accordance with Regulation (EU) 2016/679 (GDPR), UK GDPR, and applicable data protection laws.
          </p>
        </section>

        {/* Section 1 */}
        <section className="cookie-policy__section">
          <h2 className="cookie-policy__section-title">What Are Cookies?</h2>
          <p>
            Cookies are small text files that websites send to a user's device (computer, tablet, or smartphone), where they are stored and then re-transmitted to the same website during subsequent visits. Cookies allow websites to recognise users, store preferences, and improve functionality and performance.
          </p>
          <p>
            Cookies may be:
          </p>
          <ul className="cookie-policy__bullet-list">
            <li><strong>First-party cookies</strong> — set directly by the website visited</li>
            <li><strong>Third-party cookies</strong> — set by domains different from the one the user is visiting (e.g., analytics, embedded media, advertising services)</li>
          </ul>
          <p>
            Cookies are used for purposes such as authentication, session management, preference storage, analytics, and marketing activities.
          </p>
          <p>
            For general information about cookies, users may visit: <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer">https://www.allaboutcookies.org</a>
          </p>
        </section>

        {/* Section 2 */}
        <section className="cookie-policy__section">
          <h2 className="cookie-policy__section-title">Other Tracking Technologies</h2>
          <p>
            In addition to cookies, this website may use similar technologies, including:
          </p>
          
          <div className="cookie-policy__list">
            <div className="cookie-policy__list-item">
              <h4>Local Storage</h4>
              <p>A technology used to optimise website navigation. It stores technical information (such as session identifiers) to improve user experience and does not independently track user preferences for marketing purposes.</p>
            </div>
            <div className="cookie-policy__list-item">
              <h4>Tracking Pixels</h4>
              <p>Also known as monitoring or tracking codes, these are small portions of code embedded in web pages or emails that allow the collection of information about user interactions, such as page views, device type, approximate location, or campaign performance. These tools help evaluate marketing effectiveness and website usage.</p>
            </div>
            <div className="cookie-policy__list-item">
              <h4>Plugins</h4>
              <p>Plugins are software components that extend website functionality. Social media plugins, for example, allow users to interact with social platforms (e.g., liking or sharing content). These interactions are governed by the privacy policies of the respective third-party providers.</p>
            </div>
            <div className="cookie-policy__list-item">
              <h4>Widgets</h4>
              <p>Widgets are graphical interface elements that allow interaction with external services, such as maps or social media feeds. When users interact with widgets, personal data may be collected by the third-party service provider.</p>
            </div>
          </div>

          <p>
            Any data processing carried out by third parties through these technologies is subject to their own privacy policies. Users are encouraged to consult those policies for further details.
          </p>
        </section>

        {/* Section 3 */}
        <section className="cookie-policy__section">
          <h2 className="cookie-policy__section-title">Managing Your Cookie Preferences</h2>
          <p>
            Users may manage or restrict cookies through:
          </p>
          <ul className="cookie-policy__bullet-list">
            <li>The cookie consent banner available on the website</li>
            <li>Browser settings</li>
          </ul>

          <h3 className="cookie-policy__subsection-title">Browser Management Guides</h3>
          <p>
            If you are unsure which browser you are using, access the "Help" section of your browser for further information.
          </p>
          <ul className="cookie-policy__bullet-list">
            <li>Google Chrome</li>
            <li>Mozilla Firefox</li>
            <li>Apple Safari</li>
            <li>Microsoft Edge</li>
            <li>Microsoft Internet Explorer</li>
            <li>Brave</li>
            <li>Opera</li>
          </ul>

          <p>
            Additional information is available at: <a href="https://www.youronlinechoices.eu" target="_blank" rel="noopener noreferrer">https://www.youronlinechoices.eu</a>
          </p>
        </section>

        {/* Section 4 */}
        <section className="cookie-policy__section">
          <h2 className="cookie-policy__section-title">Cookies Used on This Website</h2>
          <p>
            The use of cookies by Signature forms part of this Cookie Policy and our Privacy Policy, provided pursuant to Article 13 of Regulation (EU) 2016/679.
          </p>
          <p>
            Closing or rejecting the cookie banner may limit the use of cookies to strictly necessary technical cookies only.
          </p>

          <h3 className="cookie-policy__subsection-title">Technical Cookies</h3>
          <p>
            These cookies are strictly necessary for the operation of the website and the provision of requested services.
          </p>
          <p><strong>Activities Enabled:</strong></p>
          <ul className="cookie-policy__bullet-list">
            <li>Website navigation</li>
            <li>Security and performance</li>
            <li>Session management</li>
          </ul>
          <p><strong>Trackers Managed Directly by Signature:</strong></p>
          <ul className="cookie-policy__bullet-list">
            <li>Website session cookies</li>
          </ul>
          <p><strong>Trackers Managed by Third Parties:</strong></p>
          <ul className="cookie-policy__bullet-list">
            <li>Cookie consent management platform</li>
            <li>Security and performance services</li>
            <li>Content delivery networks (CDN)</li>
            <li>Spam and abuse prevention services</li>
          </ul>

          <h3 className="cookie-policy__subsection-title">Functionality Cookies</h3>
          <p>
            These cookies allow users to access specific features and improve usability.
          </p>
          <p><strong>Examples:</strong></p>
          <ul className="cookie-policy__bullet-list">
            <li>Contact forms</li>
            <li>Newsletter subscription tools</li>
            <li>Preference saving</li>
          </ul>

          <h3 className="cookie-policy__subsection-title">Experience and External Content</h3>
          <p>
            These cookies enable interaction with external platforms and embedded content.
          </p>
          <p><strong>Examples:</strong></p>
          <ul className="cookie-policy__bullet-list">
            <li>Video hosting services</li>
            <li>Map services</li>
            <li>Web fonts and icon libraries</li>
          </ul>

          <h3 className="cookie-policy__subsection-title">Measurement and Analytics Cookies</h3>
          <p>
            These cookies collect aggregated and anonymised data to analyse website usage and improve performance.
          </p>
          <p><strong>Examples:</strong></p>
          <ul className="cookie-policy__bullet-list">
            <li>Website traffic analysis tools</li>
            <li>User behaviour measurement tools</li>
            <li>Performance monitoring systems</li>
          </ul>

          <h3 className="cookie-policy__subsection-title">Marketing and Advertising Cookies</h3>
          <p>
            Marketing cookies are used to deliver personalised advertising and measure campaign effectiveness.
          </p>
          <p><strong>Examples:</strong></p>
          <ul className="cookie-policy__bullet-list">
            <li>Advertising conversion tracking</li>
            <li>Remarketing tools</li>
            <li>Audience profiling (where consent is given)</li>
          </ul>
          <p>
            These cookies are activated only with your explicit consent.
          </p>
        </section>

        {/* Section 5 */}
        <section className="cookie-policy__section">
          <h2 className="cookie-policy__section-title">Legal Basis for Cookie Processing</h2>
          <div className="cookie-policy__info-box">
            <p><strong>Technical cookies:</strong> Legitimate interest</p>
            <p><strong>Analytics, functionality, and marketing cookies:</strong> User consent</p>
            <p>Consent can be withdrawn at any time via browser settings or the cookie banner.</p>
          </div>
        </section>

        {/* Section 6 */}
        <section className="cookie-policy__section">
          <h2 className="cookie-policy__section-title">Data Controller</h2>
          <div className="cookie-policy__info-box">
            <p><strong>Signature</strong></p>
            <p>United Kingdom</p>
            <p>Contact Email: <span className="cookie-policy__placeholder">[info@signaturebathroom.co.uk
]</span></p>
          </div>
        </section>

        {/* Section 7 */}
        <section className="cookie-policy__section">
          <h2 className="cookie-policy__section-title">Updates to This Policy</h2>
          <p>
            Signature reserves the right to update this Cookie Policy at any time. Any changes will be published on this page with a revised update date.
          </p>
        </section>

        {/* Last Updated */}
        <div className="cookie-policy__footer">
          <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
