export interface Sauna {
  id: number;
  name: string;
  prefecture: string;
  saunaTemp: number;
  coldBathTemp: number;
  rating: number;
  amenities: string[];
  description: string;
  address: string;
  hours: string;
  priceRange: string;
}
