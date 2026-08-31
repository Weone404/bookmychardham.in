export type PageType = 
  | 'home' 
  | 'chardham' 
  | 'flower-dropping' 
  | 'charter' 
  | 'about' 
  | 'booking' 
  | 'contact';

export type ServiceType = 
  | 'chardham-4dham'
  | 'kedarnath-sameday'
  | 'dodham-kedarnath-badrinath'
  | 'badrinath-sameday'
  | 'flower-dropping'
  | 'corporate-charter'
  | 'vip-transport'
  | 'aerial-filming'
  | 'emergency-air-ambulance';

export interface HelicopterPackage {
  id: string;
  number: string; // e.g. "01", "02"
  title: string;
  subtitle: string;
  duration: string;
  route: string[];
  startingPrice: string;
  pricePerPerson: number;
  charterPrice?: number;
  image: string;
  badge?: string;
  inclusions: string[];
  exclusions: string[];
  itinerary: {
    dayOrTime: string;
    title: string;
    description: string;
  }[];
  highlights: string[];
  serviceType: ServiceType;
}

export interface FleetItem {
  id: string;
  name: string;
  model: string;
  manufacturer: string;
  capacity: string;
  speed: string;
  range: string;
  altitudeCeiling: string;
  engine: string;
  description: string;
  image: string;
  bestFor: string[];
  features: string[];
}

export interface BookingFormData {
  serviceType: ServiceType;
  selectedPackageId?: string;
  departureBase: string;
  destination: string;
  travelDate: string;
  returnDate?: string;
  passengers: number;
  passengerWeights: number[];
  fullName: string;
  phone: string;
  email: string;
  specialRequirements: string;
  vipDarshanAssistance: boolean;
  hotelAccommodation: boolean;
}

export interface TrustStat {
  value: string;
  label: string;
  detail: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  location: string;
  service: string;
  quote: string;
  rating: number;
  date: string;
}

export interface BaseLocation {
  city: string;
  title: string;
  helipadName: string;
  address: string;
  coordinates: string;
  phone: string;
  isPrimary?: boolean;
}

export type TripType = 'ROUND TRIP' | 'ONE WAY' | 'MULTI CITY';

export type CabinClass = 'Economy' | 'Business' | 'First';

export interface Airport {
  city: string;
  name: string;
  code: string;
  country: string;
  popular?: boolean;
}

export interface FlightSearchParams {
  tripType: TripType;
  origin: Airport;
  destination: Airport | null;
  destinationText: string;
  departureDate: string;
  returnDate: string;
  cabinClass: CabinClass;
  adults: number;
  children: number;
  infants: number;
}

export interface FlightResult {
  id: string;
  flightNumber: string;
  aircraft: string;
  origin: Airport;
  destination: Airport;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  stops: number;
  price: number;
  cabinClass: CabinClass;
  availableSeats: number;
  milesReward: number;
}

export type ModalType = 
  | 'destination'
  | 'origin'
  | 'date'
  | 'cabin'
  | 'results'
  | 'checkin'
  | 'status'
  | 'baggage'
  | 'search'
  | 'menu'
  | null;

