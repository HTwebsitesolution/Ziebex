import { useState, useEffect } from 'react'
import TopBar from '../components/TopBar'
import Header from '../components/Header'
import Footer from '../components/Footer'

const PrivacyPolicyPage = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header scrolled={scrolled} />
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-5">
          <h1 className="font-poppins text-4xl md:text-5xl font-extrabold text-dark mb-8">
            Privacy Policy
          </h1>
          <div className="text-sm text-text-light mb-8">
            Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          </div>

          <div className="prose prose-lg max-w-none space-y-8 text-text-light">
            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">1. Introduction</h2>
              <p>
                Ziebex ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
              <p>
                By using our website, you consent to the data practices described in this policy. If you do not agree with the practices described in this policy, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">2. Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Personal Information:</strong> Name, email address, phone number, company name, and other contact details you provide when requesting a consultation or using our services.</li>
                <li><strong>Technical Information:</strong> IP address, browser type, device information, pages visited, and time spent on our website.</li>
                <li><strong>Cookies:</strong> We use cookies to enhance your experience. For more information, see our Cookie Policy.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">3. How We Use Your Information</h2>
              <p>We use the collected information for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide, maintain, and improve our services</li>
                <li>To respond to your inquiries and provide customer support</li>
                <li>To send you marketing communications (with your consent)</li>
                <li>To comply with legal obligations</li>
                <li>To prevent fraud and ensure security</li>
                <li>To analyze website usage and improve user experience</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">4. Information Sharing and Disclosure</h2>
              <p>We do not sell your personal information. We may share your information with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Service Providers:</strong> Third-party vendors who assist us in operating our website and providing services</li>
                <li><strong>Business Partners:</strong> Trusted partners who work with us to deliver services (e.g., ProTrainings for course enrollments)</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                <li><strong>Business Transfers:</strong> In connection with any merger, sale, or acquisition of our business</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">6. Your Rights</h2>
              <p>Under UK GDPR, you have the following rights:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Access:</strong> Request copies of your personal data</li>
                <li><strong>Rectification:</strong> Request correction of inaccurate or incomplete data</li>
                <li><strong>Erasure:</strong> Request deletion of your personal data</li>
                <li><strong>Restriction:</strong> Request limitation of processing</li>
                <li><strong>Portability:</strong> Request transfer of your data</li>
                <li><strong>Objection:</strong> Object to processing of your personal data</li>
                <li><strong>Withdraw Consent:</strong> Withdraw consent at any time where processing is based on consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">7. Data Retention</h2>
              <p>
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">8. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">9. Children's Privacy</h2>
              <p>
                Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">11. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
              </p>
              <div className="mt-4 space-y-2">
                <p><strong>Email:</strong> info@ziebex.com</p>
                <p><strong>Phone:</strong> 07883 585922</p>
                <p><strong>Address:</strong> Ziebex, United Kingdom</p>
              </div>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default PrivacyPolicyPage
