import { Property } from "./property";

export interface CardProps {
  property: Property;
  isFavorite: boolean;
  onFavoriteToggle: () => void;
  showFavoriteButton?: boolean;
  propertyLink?: string;
}
