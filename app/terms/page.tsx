export default function Terms() {
  return (
    <main className="min-h-screen bg-black text-white px-8 py-16">
      <div className="max-w-[480px] mx-auto">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p className="text-sm text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Agreement to Terms</h2>
            <p>
              By accessing and using this website, you accept and agree to be bound by the terms and 
              provision of this agreement. If you do not agree to abide by the above, please do not 
              use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials on mindful computer's 
              website for personal, non-commercial transitory viewing only. This is the grant of a license, 
              not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>modify or copy the materials</li>
              <li>use the materials for any commercial purpose or for any public display</li>
              <li>attempt to reverse engineer any software contained on the website</li>
              <li>remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Disclaimer</h2>
            <p>
              The materials on mindful computer's website are provided on an 'as is' basis. mindful computer 
              makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties 
              including without limitation, implied warranties or conditions of merchantability, fitness for a 
              particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Limitations</h2>
            <p>
              In no event shall mindful computer or its suppliers be liable for any damages (including, without 
              limitation, damages for loss of data or profit, or due to business interruption) arising out of 
              the use or inability to use the materials on mindful computer's website, even if mindful computer 
              or a mindful computer authorized representative has been notified orally or in writing of the 
              possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, 
              or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Accuracy of Materials</h2>
            <p>
              The materials appearing on mindful computer's website could include technical, typographical, or 
              photographic errors. mindful computer does not warrant that any of the materials on its website 
              are accurate, complete, or current. mindful computer may make changes to the materials contained 
              on its website at any time without notice. However, mindful computer does not make any commitment 
              to update the materials.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Links</h2>
            <p>
              mindful computer has not reviewed all of the sites linked to our website and is not responsible 
              for the contents of any such linked site. The inclusion of any link does not imply endorsement by 
              mindful computer of the site. Use of any such linked website is at the user's own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Modifications</h2>
            <p>
              mindful computer may revise these terms of service for its website at any time without notice. 
              By using this website you are agreeing to be bound by the then current version of these terms 
              of service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws and you 
              irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
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
