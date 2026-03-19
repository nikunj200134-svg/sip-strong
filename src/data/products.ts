export interface Product {
    id: number;
    title: string;
    category: string;
    price: string;
    priceValue: number;
    badge?: string;
    image: string;
    protein: string;
    proteinValue: number;
    flavor: string;
    rating: number;
    isNew?: boolean;
    isBestSeller?: boolean;
}

export const shopProducts: Product[] = [
    {
        id: 1,
        title: 'Performance Hydration Pouch',
        category: 'Electrolytes',
        price: '£32.00',
        priceValue: 32,
        badge: 'Top Rated',
        image: 'https://images.unsplash.com/photo-1579246849885-3bc55642d997?q=80&w=1000&auto=format&fit=crop',
        protein: '0g',
        proteinValue: 0,
        flavor: 'Orange Burst',
        rating: 4.9,
        isBestSeller: true
    },
    {
        id: 2,
        title: 'Intra-Workout Aminos',
        category: 'Recovery',
        price: '£45.00',
        priceValue: 45,
        badge: 'Elite Choice',
        image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=1000&auto=format&fit=crop',
        protein: '5g',
        proteinValue: 5,
        flavor: 'Blue Raspberry',
        rating: 4.7
    },
    {
        id: 3,
        title: 'Micronized Creatine',
        category: 'Creatine',
        price: '£29.00',
        priceValue: 29,
        badge: 'Pure Strength',
        image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1000&auto=format&fit=crop',
        protein: '0g',
        proteinValue: 0,
        flavor: 'Unflavored',
        rating: 4.8,
        isNew: true
    },
    {
        id: 4,
        title: 'Pre-Workout Ignition',
        category: 'Pre-workout',
        price: '£39.00',
        priceValue: 39,
        badge: 'High Stim',
        image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=1000&auto=format&fit=crop',
        protein: '0g',
        proteinValue: 0,
        flavor: 'Fruit Punch',
        rating: 4.6
    },
    {
        id: 5,
        title: 'Premium Whey Isolate',
        category: 'Whey Protein',
        price: '£55.00',
        priceValue: 55,
        badge: 'Best Seller',
        image: 'https://images.unsplash.com/photo-1579722820308-d74e571900a9?q=80&w=1000&auto=format&fit=crop',
        protein: '25g',
        proteinValue: 25,
        flavor: 'Gourmet Chocolate',
        rating: 4.9,
        isBestSeller: true
    },
    {
        id: 6,
        title: 'L-Glutamine Recovery',
        category: 'Glutamine',
        price: '£25.00',
        priceValue: 25,
        badge: 'New Formula',
        image: 'https://images.unsplash.com/photo-1594824436998-058a97fdd6a3?q=80&w=1000&auto=format&fit=crop',
        protein: '0g',
        proteinValue: 0,
        flavor: 'Unflavored',
        rating: 4.5
    },
    {
        id: 7,
        title: 'Liquid Energy Shot',
        category: 'Energy Drinks',
        price: '£15.00',
        priceValue: 15,
        badge: 'Instant Hit',
        image: 'https://images.unsplash.com/photo-1543362906-acfc16c67564?q=80&w=1000&auto=format&fit=crop',
        protein: '0g',
        proteinValue: 0,
        flavor: 'Berry Blast',
        rating: 4.4,
        isNew: true
    },
    {
        id: 8,
        title: 'Nighttime Whey Blend',
        category: 'Whey Protein',
        price: '£49.00',
        priceValue: 49,
        badge: 'Limited Edition',
        image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1000&auto=format&fit=crop',
        protein: '22g',
        proteinValue: 22,
        flavor: 'French Vanilla',
        rating: 4.8
    },
    {
        id: 9,
        title: 'Elite Athlete Stack',
        category: 'Bundles',
        price: '£110.00',
        priceValue: 110,
        badge: 'Save 20%',
        image: 'https://images.unsplash.com/photo-1579722822168-3e4b3e817e0b?q=80&w=1000&auto=format&fit=crop',
        protein: '30g',
        proteinValue: 30,
        flavor: 'Mixed',
        rating: 5.0,
        isBestSeller: true
    }
];
