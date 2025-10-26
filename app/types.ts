// app/types.ts
export interface Skin {
  id: number;
  name: string;
  type: string;
  rarity: string;
  price: number;
  priceChange: number;
  image: string;
  float: number;
}

export interface PriceHistory {
  date: string;
  price: number;
}

export interface SkinHistoryMap {
  [key: string]: PriceHistory[];
}
