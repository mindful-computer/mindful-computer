export default function Privacy() {
  return (
    <main className="min-h-screen bg-black text-white px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p className="text-sm text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Introduction</h2>
            <p>
              At mindful computer, we respect your privacy and are committed to protecting your personal data. 
              This privacy policy explains how we collect, use, and safeguard your information when you visit 
              our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Information We Collect</h2>
            <p>
              We may collect information about you in a variety of ways. The information we may collect via 
              our website includes:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Personal data you voluntarily provide to us</li>
              <li>Derived data such as your IP address, browser type, and operating system</li>
              <li>Mobile data such as your mobile device ID and model</li>
              <li>Third-party data such as information from our partners</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">How We Use Your Information</h2>
            <p>
              Having accurate information about you permits us to provide you with a smooth, efficient, 
              and customized experience. Specifically, we may use information collected about you via 
              our website to:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Create and manage your account</li>
              <li>Process your transactions</li>
              <li>Send you administrative information</li>
              <li>Send you marketing and promotional communications</li>
              <li>Respond to your comments and questions</li>
              <li>Improve our website and user experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Disclosure of Your Information</h2>
            <p>
              We may share information we have collected about you in certain situations. Your information 
              may be disclosed as follows:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>By law or to protect rights</li>
              <li>Third-party service providers</li>
              <li>Marketing communications</li>
              <li>Business transfers</li>
              <li>Other third parties with your consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Data Security</h2>
            <p>
              We use administrative, technical, and physical security measures to help protect your 
              personal information. While we have taken reasonable steps to secure the personal 
              information you provide to us, please be aware that despite our efforts, no security 
              measures are perfect or impenetrable, and no method of data transmission can be 
              guaranteed against any interception or other type of misuse.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Policy for Children</h2>
            <p>
              We do not knowingly solicit information from or market to children under the age of 13. 
              If you become aware of any data we have collected from children under age 13, please 
              contact us using the information provided below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Controls for Do-Not-Track Features</h2>
            <p>
              Most web browsers and some mobile operating systems and mobile applications include a 
              Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference 
              not to have data about your online browsing activities monitored and collected. At this 
              stage, no uniform technology standard for recognizing and implementing DNT signals has 
              been finalized.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Changes to This Privacy Policy</h2>
            <p>
              We may update this privacy policy from time to time. The updated version will be indicated 
              by an updated "Last updated" date and the updated version will be effective as soon as it 
              is accessible. If we make material changes to this privacy policy, we may notify you either 
              by prominently posting a notice of such changes or by directly sending you a notification.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Contact Us</h2>
            <p>
              If you have questions or comments about this privacy policy, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-gray-900 rounded-lg">
              <p><strong>Email:</strong> mc@monkz.xyz</p>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <a 
            href="/" 
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </main>
  )
}
