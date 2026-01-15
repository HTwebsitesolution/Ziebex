import { useState } from 'react'
import emailjs from '@emailjs/browser'

const Consultation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const services = [
    'Professional Consulting',
    'Project Management',
    'Courses & Certifications',
    'Professional Training',
    'Education Consulting',
    'Web Solutions',
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // EmailJS configuration - Replace these with your actual EmailJS keys
      // Get these from: https://www.emailjs.com/
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID'
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'

      // EmailJS template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'Not provided',
        company: formData.company || 'Not provided',
        service: formData.service || 'Not specified',
        message: formData.message,
      }

      // Send email to info@ziebex.com
      const email1Params = {
        ...templateParams,
        to_email: 'info@ziebex.com',
      }

      // Send email to matthew@ziebex.com
      const email2Params = {
        ...templateParams,
        to_email: 'matthew@ziebex.com',
      }

      // Send both emails
      await Promise.all([
        emailjs.send(serviceId, templateId, email1Params, publicKey),
        emailjs.send(serviceId, templateId, email2Params, publicKey),
      ])

      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
      })
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    } catch (error) {
      console.error('Email sending failed:', error)
      setIsSubmitting(false)
      setSubmitStatus('error')
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    }
  }

  return (
    <section className="py-24 bg-gradient-to-br from-light via-white to-light">
      <div className="max-w-4xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-primary font-semibold text-base uppercase tracking-wider mb-4">
            Get Started Today
          </div>
          <h1 className="font-poppins text-4xl md:text-5xl font-extrabold text-dark mb-5">
            Get Your Free Consultation
          </h1>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            Ready to transform your business? Fill out the form below and our expert team will get back to you within 24 hours to discuss how we can help you achieve your goals.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          {submitStatus === 'success' && (
            <div className="mb-8 p-6 bg-green-50 border-2 border-green-200 rounded-2xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-green-800 mb-1">Thank You!</h3>
                  <p className="text-green-700">We've received your consultation request. Our team will contact you within 24 hours.</p>
                </div>
              </div>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-8 p-6 bg-red-50 border-2 border-red-200 rounded-2xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-red-800 mb-1">Error</h3>
                  <p className="text-red-700">There was an error sending your request. Please try again or contact us directly at info@ziebex.com</p>
                </div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-dark mb-2">
                Full Name <span className="text-accent">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-all text-dark"
                placeholder="John Doe"
              />
            </div>

            {/* Email and Phone Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-dark mb-2">
                  Email Address <span className="text-accent">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-all text-dark"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-dark mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-all text-dark"
                  placeholder="07883 585922"
                />
              </div>
            </div>

            {/* Company */}
            <div>
              <label htmlFor="company" className="block text-sm font-semibold text-dark mb-2">
                Company/Organization
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-all text-dark"
                placeholder="Your Company Name"
              />
            </div>

            {/* Service Selection */}
            <div>
              <label htmlFor="service" className="block text-sm font-semibold text-dark mb-2">
                Service of Interest <span className="text-accent">*</span>
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-all text-dark bg-white"
              >
                <option value="">Select a service...</option>
                {services.map((service, index) => (
                  <option key={index} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-dark mb-2">
                Tell Us About Your Needs <span className="text-accent">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-all text-dark resize-none"
                placeholder="Please describe your requirements, challenges, or goals..."
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-br from-primary to-secondary text-white px-10 py-5 rounded-full font-bold text-lg transition-all hover:-translate-y-1 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-3">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  'Request Free Consultation'
                )}
              </button>
            </div>

            {/* Privacy Note */}
            <p className="text-sm text-text-light text-center pt-4">
              By submitting this form, you agree to our{' '}
              <a href="#" className="text-primary hover:underline">Privacy Policy</a>
              {' '}and{' '}
              <a href="#" className="text-primary hover:underline">Terms & Conditions</a>
              .
            </p>
          </form>
        </div>

        {/* Contact Information */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-white rounded-2xl shadow-lg">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-dark mb-2">Email Us</h3>
            <p className="text-text-light">info@ziebex.com</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-lg">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="font-semibold text-dark mb-2">Call Us</h3>
            <p className="text-text-light">07883 585922</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-lg">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            <h3 className="font-semibold text-dark mb-2">Response Time</h3>
            <p className="text-text-light">Within 24 hours</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Consultation
