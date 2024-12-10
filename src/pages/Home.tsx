import React from 'react';
import { SearchBar } from '../components/SearchBar';
import { FeaturedDestinations } from '../components/FeaturedDestinations';
import { MapPin, Calendar, Camera, Compass } from 'lucide-react';

export function Home() {
  const features = [
    {
      icon: <MapPin className="h-6 w-6 text-orange-600" />,
      title: 'Explore India',
      description: 'Discover hidden gems and popular destinations across the country'
    },
    {
      icon: <Calendar className="h-6 w-6 text-orange-600" />,
      title: 'Easy Booking',
      description: 'Simple and secure booking process for your perfect trip'
    },
    {
      icon: <Camera className="h-6 w-6 text-orange-600" />,
      title: 'Unique Experiences',
      description: 'Authentic local experiences and cultural activities'
    },
    {
      icon: <Compass className="h-6 w-6 text-orange-600" />,
      title: 'Expert Guides',
      description: 'Professional local guides to enhance your journey'
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&q=80"
            alt="India landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Discover the Magic of India
          </h1>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Experience incredible destinations, authentic culture, and unforgettable moments
          </p>
          <SearchBar />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-block p-3 bg-orange-100 rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeaturedDestinations />
    </main>
  );
}