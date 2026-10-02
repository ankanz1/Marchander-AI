export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  floor: number;
  image: string;
  description: string;
  specs: string[];
};

export const products: Product[] = [
  { id: "headphones", name: "Aether ANC Headphones", category: "Audio", price: 12999, floor: 10499, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e0?auto=format&fit=crop&w=900&q=85", description: "Studio-grade silence, tuned for the everyday commute.", specs: ["40hr battery", "Adaptive noise cancellation", "Spatial audio"] },
  { id: "speaker", name: "Orbit Mini Speaker", category: "Audio", price: 6499, floor: 5299, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=85", description: "A compact room-filling speaker with a warm, detailed sound.", specs: ["18hr battery", "IP67 water resistance", "Bluetooth 5.3"] },
  { id: "camera", name: "Lumen Pocket Camera", category: "Creator gear", price: 18999, floor: 15999, image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=85", description: "Small enough to take everywhere; capable enough to keep.", specs: ["4K video", "1-inch sensor", "Magnetic mount"] },
  { id: "watch", name: "Forma Essential Watch", category: "Wearables", price: 8999, floor: 7199, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85", description: "A considered everyday timepiece for active days.", specs: ["7-day battery", "Health sensors", "Sapphire glass"] },
];

export const formatINR = (amount: number) => `₹${amount.toLocaleString("en-IN")}`;
