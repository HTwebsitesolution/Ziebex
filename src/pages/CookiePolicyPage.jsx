import { useState, useEffect } from 'react'
import TopBar from '../components/TopBar'
import Header from '../components/Header'
import Footer from '../components/Footer'

const CookiePolicyPage = () => {
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
            Cookie Policy
          </h1>
          <div className="text-sm text-text-light mb-8">
            Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          </div>

          <div className="prose prose-lg max-w-none space-y-8 text-text-light">
            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">1. What Are Cookies?</h2>
              <p>
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">2. How We Use Cookies</h2>
              <p>We use cookies for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Essential Cookies:</strong> These are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.</li>
                <li><strong>Analytics Cookies:</strong> These help us understand how visitors interact with our website by collecting and reporting information anonymously.</li>
                <li><strong>Functional Cookies:</strong> These allow the website to remember choices you make (such as language preferences) and provide enhanced, personalized features.</li>
                <li><strong>Marketing Cookies:</strong> These may be used to track visitors across websites to display relevant advertisements.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">3. Types of Cookies We Use</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-dark mb-2">Strictly Necessary Cookies</h3>
                  <p>
                    These cookies are essential for you to browse the website and use its features. Without these cookies, services you have requested cannot be provided.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-dark mb-2">Performance Cookies</h3>
                  <p>
                    These cookies collect information about how you use our website, such as which pages you visit most often. This data is used to optimize our website's performance.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-dark mb-2">Functionality Cookies</h3>
                  <p>
                    These cookies allow the website to remember choices you make and provide enhanced features. For example, they may remember your login details or language preferences.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-dark mb-2">Targeting/Advertising Cookies</h3>
                  <p>
                    These cookies may be used to deliver advertisements relevant to you and your interests. They may also be used to limit the number of times you see an advertisement.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">4. Third-Party Cookies</h2>
              <p>
                Some cookies on our website are set by third-party services, such as:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Google Analytics:</strong> To analyze website traffic and user behavior</li>
                <li><strong>Social Media Platforms:</strong> When you share content on social media or interact with social media features</li>
                <li><strong>ProTrainings Widget:</strong> For displaying course information through their widget system</li>
              </ul>
              <p className="mt-4">
                These third parties may use cookies to collect information about your online activities across different websites. We do not control these cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">5. Managing Cookies</h2>
              <p>
                You have the right to accept or reject cookies. Most web browsers automatically accept cookies, but you can usually modify your browser settings to decline cookies if you prefer.
              </p>
              <p className="mt-4">
                Please note that blocking or deleting cookies may impact your user experience and some features of the website may not function properly.
              </p>
              
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-dark mb-2">How to Manage Cookies in Your Browser:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies and other site data</li>
                  <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                  <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
                  <li><strong>Edge:</strong> Settings → Privacy, search, and services → Cookies and site permissions</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">6. Cookie Consent</h2>
              <p>
                When you first visit our website, you may see a cookie consent banner. By clicking "Accept" or continuing to browse, you consent to our use of cookies as described in this policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">7. Updates to This Policy</h2>
              <p>
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Please review this page periodically for any updates.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">8. More Information</h2>
              <p>
                For more information about cookies and how they work, you can visit:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.allaboutcookies.org</a></li>
                <li><a href="https://www.youronlinechoices.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.youronlinechoices.com</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">9. Contact Us</h2>
              <p>
                If you have questions about our use of cookies, please contact us:
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

export default CookiePolicyPage
