const sampleListings = [
  {
    title: "Lakefront Cabin in Norway",
    description:
      "Relax in this serene lakefront cabin surrounded by the beauty of Norway's fjords.",
    image: {
      url: "https://images.unsplash.com/photo-1542482375-ff7ffb24e324?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      filename: "image_6.jpg",
    },
    price: 2000,
    location: "Geiranger",
    country: "Norway",
  },
  {
    title: "Luxury Suite in Paris",
    description:
      "Enjoy the elegance of Paris in this luxurious suite with a view of the Eiffel Tower.",
    image: {
      url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      filename: "image_7.jpg",
    },
    price: 5000,
    location: "Paris",
    country: "France",
  },
  {
    title: "Jungle Bungalow in Bali",
    description:
      "Immerse yourself in the lush greenery of Bali in this secluded jungle bungalow.",
    image: {
      url: "https://images.unsplash.com/photo-1558414581-6dfc07ef3cae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8anVuZ2xlJTIwYnVuZ2Fsb3d8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      filename: "image_8.jpg",
    },
    price: 1800,
    location: "Ubud",
    country: "Indonesia",
  },
  {
    title: "Urban Loft in Tokyo",
    description:
      "Experience the vibrant city life of Tokyo from this modern urban loft in Shibuya.",
    image: {
      url: "https://images.unsplash.com/photo-1598979105529-667d7aeb4840?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2l0eSUyMHZpZXd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      filename: "image_9.jpg",
    },
    price: 2200,
    location: "Tokyo",
    country: "Japan",
  },
  {
    title: "Desert Camp in Morocco",
    description:
      "Stay in a traditional Berber tent under the stars in the heart of the Sahara Desert.",
    image: {
      url: "https://images.unsplash.com/photo-1559175390-5826de4b3124?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGVzZXJ0JTIwY2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "image_10.jpg",
    },
    price: 1500,
    location: "Merzouga",
    country: "Morocco",
  },
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "image_1.jpg",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "image_2.jpg",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "image_3.jpg",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "image_4.jpg",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "image_5.jpg",
    },
    price: 800,
    location: "Portland",
    country: "United States",
  },
];


module.exports = { data: sampleListings };
