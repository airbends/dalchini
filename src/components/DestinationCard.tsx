import React from 'react';
import { Star, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Destination } from '../types';

interface DestinationCardProps {
  destination: Destination;
}

export function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <Link 
      to={`/destination/${destination.id}`}
      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
    >
      <div className="relative">
        <img
          src={destination.imageUrl}
          alt={destination.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <h3 className="text-white font-semibold text-lg">{destination.name}</h3>
          <div className="flex items-center text-white/90 text-sm">
            <MapPin className="h-4 w-4 mr-1" />
            {destination.state}
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-600">
              {destination.rating} ({destination.reviewCount} reviews)
            </span>
          </div>
          <p className="text-orange-600 font-semibold">
            From ₹{destination.price}
          </p>
        </div>
        <p className="text-gray-600 text-sm line-clamp-2">{destination.description}</p>
      </div>
    </Link>
  );
}