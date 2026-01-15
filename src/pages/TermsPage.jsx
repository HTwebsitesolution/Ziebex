import { useState, useEffect } from 'react'
import TopBar from '../components/TopBar'
import Header from '../components/Header'
import Footer from '../components/Footer'

const TermsPage = () => {
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
            Terms & Conditions
          </h1>
          <div className="text-sm text-text-light mb-8">
            Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          </div>

          <div className="prose prose-lg max-w-none space-y-8 text-text-light">
            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing and using the Ziebex website and services, you agree to be bound by these Terms & Conditions. If you disagree with any part of these terms, you may not access our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">2. Services Description</h2>
              <p>
                Ziebex provides consultancy services, professional training, courses, project management, and related services. We reserve the right to modify, suspend, or discontinue any service at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">3. Use of Services</h2>
              <p>You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the services in any way that violates applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Transmit any harmful, offensive, or illegal content</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt the services</li>
                <li>Use automated systems to access the services without permission</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">4. Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, images, and software, is the property of Ziebex or its licensors and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">5. Course Enrollment and Affiliate Links</h2>
              <p>
                When you enroll in courses through our affiliate links (e.g., ProTrainings courses), the course provider's terms and conditions apply to that enrollment. We act as an affiliate and are not responsible for the course content, delivery, or the provider's policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">6. Consultancy Services</h2>
              <p>
                Our consultancy services are subject to separate agreements and contracts. The information provided on this website is for general purposes only and does not constitute professional advice. Specific advice should be sought for your particular circumstances.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">7. Payment Terms</h2>
              <p>
                Payment terms for services will be specified in individual service agreements. All prices are subject to change without notice. We reserve the right to refuse service to anyone at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">8. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, Ziebex shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">9. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless Ziebex, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses arising out of your use of the services or violation of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">10. Disclaimer of Warranties</h2>
              <p>
                The services are provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">11. Modifications to Terms</h2>
              <p>
                We reserve the right to modify these Terms & Conditions at any time. Changes will be effective immediately upon posting to this page. Your continued use of the services after changes are posted constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">12. Governing Law</h2>
              <p>
                These Terms & Conditions are governed by and construed in accordance with the laws of England and Wales. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">13. Severability</h2>
              <p>
                If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">14. Contact Information</h2>
              <p>
                If you have questions about these Terms & Conditions, please contact us:
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

export default TermsPage
