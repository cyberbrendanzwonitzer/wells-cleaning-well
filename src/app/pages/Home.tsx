import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Sparkles, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';

export default function Home() {
  const services = [
    { name: 'General Housekeeping', icon: '🏠' },
    { name: 'Move-Out Cleaning', icon: '📦' },
    { name: 'Multi-Tenant Cleaning', icon: '🏢' },
    { name: 'Office Cleaning', icon: '💼' },
    { name: 'Post-Construction Cleaning', icon: '🔨' },
    { name: 'Post Event Cleaning', icon: '🎉' },
  ];

  const features = [
    'Local & Family-Owned',
    'Trusted by Your Neighbors',
    'Flexible Scheduling',
    'Satisfaction Guaranteed',
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1597665863042-47e00964d899?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjbGVhbiUyMGxpdmluZyUyMHJvb20lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzU1MTU5MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Clean living room"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="h-6 w-6 text-purple-400" />
              <span className="text-purple-400">Your Local Cleaning Experts</span>
            </div>
            <h1 className="text-5xl md:text-6xl mb-6">
              Where We Do It <span className="text-purple-400">Well!</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Locally owned and operated. We're your neighbors, and we take pride in making your home or business sparkle!
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black">
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Our <span className="text-purple-400">Services</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We're a small business that cares about every detail. Here's how we can help you!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-black border border-purple-600/30 rounded-lg p-6 hover:border-purple-400 transition-all hover:transform hover:scale-105"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl mb-2 text-purple-300">{service.name}</h3>
                <p className="text-gray-400 text-sm">
                  Professional cleaning services with attention to detail and quality.
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl mb-6">
                Why Choose <span className="text-purple-400">Wells Cleaning Well</span>?
              </h2>
              <p className="text-gray-400 mb-8">
                As a local, family-owned business, we treat every home and office like it's our own. Your satisfaction is our reputation in the community!
              </p>
              
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Link to="/about">
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                    Learn More About Us
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1700478933733-c05d9e8d995d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGJ1c2luZXNzJTIwY2xlYW5pbmclMjB0ZWFtJTIwb3duZXJ8ZW58MXx8fHwxNzc1NTIyMDk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional cleaning team"
                className="rounded-lg w-full h-[400px] object-cover border-2 border-purple-600/30"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-purple-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Call us today for a free quote! We're local, friendly, and ready to make your space shine.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100">
              Get Your Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}