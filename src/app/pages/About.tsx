import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Shield, Users, Award, Heart } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Shield,
      title: 'Trust & Reliability',
      description: 'We\'re fully insured and treat your home like our own. Your trust means everything to us.',
    },
    {
      icon: Users,
      title: 'Local Team',
      description: 'Our small team is trained, friendly, and committed to doing excellent work every time.',
    },
    {
      icon: Award,
      title: 'Quality Work',
      description: 'We stand behind our work. If you\'re not happy, we\'ll make it right—guaranteed.',
    },
    {
      icon: Heart,
      title: 'We Care',
      description: 'Your satisfaction matters to us personally. We listen and go the extra mile.',
    },
  ];

  return (
    <div className="bg-black text-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-900 to-purple-700 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl mb-6">About Wells Cleaning Well</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Where We Do It Well! Your local, family-owned cleaning service.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl mb-6">
                Our <span className="text-purple-400">Story</span>
              </h2>
              <div className="space-y-4 text-gray-300 text-lg">
                <p>
                  Wells Cleaning Well is a family-owned cleaning service right here in your community. We're not a big corporation—we're your neighbors!
                </p>
                <p>
                  What started as helping friends and family has grown into a trusted local business. We know the area, we care about our reputation, and we take personal pride in every job we do.
                </p>
                <p>
                  When you hire us, you're supporting a local family and getting cleaning services from people who genuinely care about making your space spotless.
                </p>
              </div>
            </div>

            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1700478933733-c05d9e8d995d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGJ1c2luZXNzJTIwY2xlYW5pbmclMjB0ZWFtJTIwb3duZXJ8ZW58MXx8fHwxNzc1NTIyMDk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Wells Cleaning Well team"
                className="rounded-lg w-full h-[500px] object-cover border-2 border-purple-600/30"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">
              Our <span className="text-purple-400">Values</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              As a small, local business, these values are at the heart of everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-950 border border-purple-600/30 rounded-lg p-6 text-center hover:border-purple-400 transition-all"
                >
                  <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl mb-3 text-purple-300">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-purple-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6">Our Promise</h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
            To provide honest, reliable cleaning services that make your life easier. We're a small business that believes in doing things right, treating people fairly, and being the kind of neighbor you can count on.
          </p>
        </div>
      </section>
    </div>
  );
}