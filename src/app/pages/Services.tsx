import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Home, Package, Building2, Briefcase, HardHat, PartyPopper, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';

export default function Services() {
  const services = [
    {
      title: 'General Housekeeping',
      icon: Home,
      image: 'https://images.unsplash.com/photo-1597665863042-47e00964d899?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjbGVhbiUyMGxpdmluZyUyMHJvb20lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzU1MTU5MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Keep your home spotless with our regular housekeeping services. We handle everything from dusting and vacuuming to kitchen and bathroom cleaning.',
      features: [
        'Dusting and wiping surfaces',
        'Vacuuming and mopping floors',
        'Kitchen and bathroom sanitization',
        'Bed making and linen changes',
      ],
    },
    {
      title: 'Move-Out Cleaning',
      icon: Package,
      image: 'https://images.unsplash.com/photo-1757742690834-aa581b9f53b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbXB0eSUyMGFwYXJ0bWVudCUyMG1vdmluZ3xlbnwxfHx8fDE3NzU1MTU5MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Moving out? We provide thorough cleaning to help you get your deposit back and leave the property in pristine condition.',
      features: [
        'Deep cleaning of all rooms',
        'Appliance cleaning inside and out',
        'Window and blind cleaning',
        'Carpet cleaning and stain removal',
      ],
    },
    {
      title: 'Multi-Tenant Cleaning',
      icon: Building2,
      image: 'https://images.unsplash.com/photo-1622127148478-d5bcca029d56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG9mZmljZSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzU1MTU5MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Maintain clean and welcoming common areas for your tenants with our multi-tenant property cleaning services.',
      features: [
        'Common area cleaning',
        'Hallway and stairwell maintenance',
        'Lobby and entrance cleaning',
        'Trash removal and disposal',
      ],
    },
    {
      title: 'Office Cleaning',
      icon: Briefcase,
      image: 'https://images.unsplash.com/photo-1622127148478-d5bcca029d56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG9mZmljZSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzU1MTU5MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Create a productive work environment with our professional office cleaning services, tailored to your business needs.',
      features: [
        'Desk and workstation cleaning',
        'Conference room sanitization',
        'Break room and kitchen cleaning',
        'Restroom deep cleaning',
      ],
    },
    {
      title: 'Post-Construction Cleaning',
      icon: HardHat,
      image: 'https://images.unsplash.com/photo-1763478493873-1c9d502ef0e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwY2xlYW51cHxlbnwxfHx8fDE3NzU0ODAxMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Transform your newly constructed or renovated space into a move-in ready property with our specialized cleaning services.',
      features: [
        'Dust and debris removal',
        'Paint and adhesive cleanup',
        'Window and fixture polishing',
        'Floor cleaning and protection',
      ],
    },
    {
      title: 'Post Event Cleaning',
      icon: PartyPopper,
      image: 'https://images.unsplash.com/photo-1768508951405-10e83c4a2872?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMHZlbnVlJTIwc2V0dXB8ZW58MXx8fHwxNzc1NTE1OTEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Let us handle the cleanup after your event so you can focus on your guests and memories. We work quickly and efficiently.',
      features: [
        'Venue restoration',
        'Trash and recycling removal',
        'Table and chair cleaning',
        'Floor cleaning and spot treatment',
      ],
    },
  ];

  return (
    <div className="bg-black text-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-900 to-purple-700 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl mb-6">Our Services</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Quality cleaning services from your local neighbors. We take pride in every job, big or small!
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    !isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="bg-purple-600 p-3 rounded-lg">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h2 className="text-3xl text-purple-400">{service.title}</h2>
                    </div>
                    
                    <p className="text-gray-300 mb-6 text-lg">
                      {service.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-purple-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link to="/contact">
                      <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                        Request This Service
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </div>

                  <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="rounded-lg w-full h-[400px] object-cover border-2 border-purple-600/30"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6">Need a Custom Cleaning Solution?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Every home and business is unique. Let's chat about your specific needs—we're happy to customize our services!
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
              Get a Custom Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}