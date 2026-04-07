import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call or Text',
      details: ['(555) 123-4567', 'We respond quickly!'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['hello@wellscleaningwell.com', 'We reply within 24 hours'],
    },
    {
      icon: MapPin,
      title: 'Location',
      details: ['Proudly Serving', 'Your Local Area'],
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon-Fri: 8am - 6pm', 'Sat: 9am - 4pm'],
    },
  ];

  const services = [
    'General Housekeeping',
    'Move-Out Cleaning',
    'Multi-Tenant Cleaning',
    'Office Cleaning',
    'Post-Construction Cleaning',
    'Post Event Cleaning',
  ];

  return (
    <div className="bg-black text-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-900 to-purple-700 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl mb-6">Contact Us</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            We'd love to hear from you! Call or text us anytime for a free, no-obligation quote.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className="bg-black border border-purple-600/30 rounded-lg p-6 text-center hover:border-purple-400 transition-all"
                >
                  <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl mb-3 text-purple-300">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-400 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-950 border border-purple-600/30 rounded-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl mb-4">
                Get Your <span className="text-purple-400">Free Quote</span>
              </h2>
              <p className="text-gray-400">
                Tell us a bit about what you need, and we'll get back to you with a personalized quote!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-black border-purple-600/30 text-white focus:border-purple-400"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-black border-purple-600/30 text-white focus:border-purple-400"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-black border-purple-600/30 text-white focus:border-purple-400"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service" className="text-white">Service Needed *</Label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full h-10 bg-black border border-purple-600/30 text-white rounded-md px-3 focus:border-purple-400 focus:outline-none"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-white">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-black border-purple-600/30 text-white focus:border-purple-400 min-h-[150px]"
                  placeholder="Tell us more about your cleaning needs..."
                />
              </div>

              <div className="text-center">
                <Button
                  type="submit"
                  size="lg"
                  className="bg-purple-600 hover:bg-purple-700 text-white"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section - Placeholder */}
      <section className="py-20 bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-black border border-purple-600/30 rounded-lg h-[400px] flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-purple-400 mx-auto mb-4" />
              <h3 className="text-2xl mb-2">Locally Owned & Operated</h3>
              <p className="text-gray-400">Proudly serving your local community</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}