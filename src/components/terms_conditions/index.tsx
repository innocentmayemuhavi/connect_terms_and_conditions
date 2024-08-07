import { Link } from "react-router-dom";
const TermsAndConditions = () => (
  <main>
    <h1 className="title">Terms and Conditions</h1>
    <h2>Welcome to Connect!</h2>
    <p>
      These terms and conditions ("Terms") outline the rules and regulations for
      using the Connect mobile application ("App"). By accessing or using the
      App, you agree to be bound by these Terms and all applicable laws and
      regulations. If you disagree with any of these Terms, you are prohibited
      from using the App.
    </p>
    <h2>1.User Accounts</h2>
    <ul>
      <li>
        <strong>Age Requirements:</strong> You must be 12 years of age or older
        (or the minimum age required in your jurisdiction) to create an account
        and use the App.
      </li>
      <li>
        <strong>Account Security:</strong> You are responsible for maintaining
        the confidentiality of your account information (username and password)
        and for restricting access to your device. You agree to accept
        responsibility for all activities or actions that occur under your
        account.
      </li>
      <li>
        <strong>Account Information:</strong>
        You agree to provide truthful and accurate information when creating an
        account.
      </li>
    </ul>
    <h2>2.Data We Collect</h2>
    <li>
      <strong>Name:</strong>Used to personalize your experience and identify you
      on the platform.
    </li>
    <li>
      <strong>Email:</strong>Used to create your account, send you important
      information, and for password recovery. We store passwords securely using
      industry-standard hashing techniques.r
    </li>
    <li>
      <strong>Profile Picture:</strong>Used to personalize your experience and
      identify you on the platform.
    </li>
    <li>
      <strong>Optional Information:</strong>
      <ul>
        <li>
          <strong>Location:</strong>
          You can choose to share your location to connect with people nearby or
          use location-based features within the App.
        </li>
      </ul>
    </li>
    <h2>3.How We Use Your Data</h2>
    <p>We use your data to</p>
    <ul>
      <li>Personalise your experience and identify you on the platform.</li>
      <li>
        Send you important information, including messages and notifications.
      </li>
      <li>Create and manage your account.</li>
      <li>
        Connect with people nearby or use location-based features within the
        App.
      </li>
    </ul>
    <h2>4.Data Sharing</h2>
    <p>
      We will never share your personal data with third parties without your
      consent, except in the following cases:
    </p>
    <ul>
      <li>
        <strong>Legal Requirements:</strong>
        To comply with legal requirements or respond to lawful requests from law
        enforcement.
      </li>
      <li>
        <strong>Safety</strong>
        To protect the rights and safety of ourselves or others.
      </li>
      <li>
        <strong>Service Providers:</strong>
        To a service provider that assists us in operating the App, but only
        under strict obligations of confidentiality.
      </li>
      <li>
        <strong>User Connections</strong>
        To provide a connection to other users with you on the platform.
      </li>
    </ul>
    <h2>5.User Content</h2>
    <p>
      You are responsible for all content you upload, post, or share through the
      App ("User Content"). You retain all ownership rights to your User
      Content. However, by uploading User Content, you grant Connect a
      non-exclusive, royalty-free, worldwide license to use, display, reproduce,
      modify, translate, and distribute your User Content on the App and for
      promotional purposes.
    </p>
    <h2>6.Content Restriction</h2>
    <p>You agree not to upload User Content that is:</p>
    <ul>
      <li>Illegal, hateful, threatening, or abusive.</li>
      <li>Defamatory, libelous, or otherwise objectionable.</li>
      <li>
        Violates any applicable federal, state, or local laws or regulations.
      </li>
      <li>Obscene, indecent, or pornographic.</li>
      <li>
        Infringes any patent, trademark, trade secret, copyright, or other
        intellectual property right.
      </li>
      <li>Promotes harmful, violent, or otherwise offensive activities.</li>
      <li>Violates the privacy or personal information rights of others.</li>
    </ul>
    <h2>7.Content Removal:</h2>
    <p>
      Connect reserves the right to remove any User Content that violates these
      Terms or that we deem inappropriate.
    </p>
    <h2>8.intellectual Property</h2>
    <p>
      The App and its content, including but not limited to text, graphics,
      images, logos, and software, are the property of Connect or its licensors.
      All rights are reserved.
    </p>
    <h2>9.Termination</h2>
    <p>
      We may terminate or suspend your account at any time and for any reason,
      with or without notice. You may also terminate your account at any time.
      Upon termination of your account, your right to use the App will cease
      immediately.
    </p>
    <h2>10.Disclaimer</h2>
    <p>
      The App is provided "as is" and without warranties of any kind, express or
      implied. Connect disclaims all warranties, including, but not limited to,
      the implied warranties of merchantability, fitness for a particular
      purpose, and non-infringement
    </p>
    <p>
      Connect does not warrant that the App will be uninterrupted or error-free,
      that defects will be corrected, or that the App or the server that makes
      it available are free of viruses or other harmful components.
    </p>
    <h2>11.Limitation of Liability</h2>
    <p>
      Connect shall not be liable for any direct, indirect, incidental, special,
      consequential, or exemplary damages, including, but not limited to,
      damages for loss of profits, data, or goodwill, arising out of or in any
      way connected with the use of the App, even if advised of the possibility
      of such damages.
    </p>
    <h2>12.Governing Law</h2>
    <p>
      These Terms shall be governed by and construed in accordance with the laws
      of Kenya, without regard to its conflict of law provisions.
    </p>
    <h2>13.Changes to Terms</h2>
    <p>
      We may update these Terms at any time by posting the revised version on
      the App. You are advised to review the Terms periodically for any changes.
      Your continued use of the App after the revised Terms are posted will be
      considered your acceptance of the changes.
    </p>
    <h2>14.Changes to this Privacy Policy</h2>
    <p>We may update this Privacy Policy from time to time.</p>
    <h2>Contact us</h2>
    <p>Contact us if you have any questions.</p>
    <p>Connect Team</p>
    <p>
      Email: <a>innocentmuhavimaye@gmail.com</a>
    </p>
    <p>Phone:Phone: +254 796331359</p>
    <Link to="/privacy-policy">Read our PRIVACY POLICY</Link>
  </main>
);
export default TermsAndConditions;
