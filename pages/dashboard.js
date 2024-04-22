import React from 'react';
import SearchBar from '../components/searchbar';
import ProductCard from '../components/ProductCard'; // Assuming you have a ProductCard component
import Image1 from '../../public/images/ball.jpg'; // Adjust the path as needed


const DashboardPage = () => {
  const handleSearch = (event) => {
    const searchText = event.target.value;
    // Implement search logic based on searchText
    console.log('Search Text:', searchText);
  };

  // Sample product data
  
  const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description of Product 1',
      price: 19.99,
      imageUrl: '/images/ball.jpg',
      rating: 4.5,
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description of Product 2',
      price: 29.99,
      imageUrl: '/images/bat.jpg',
      rating: 4.2,
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description of Product 3',
      price: 39.99,
      imageUrl: '/images/Bottle.jpg',
      rating: 4.8,
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'Description of Product 4',
      price: 49.99,
      imageUrl: '/images/pant.jpg',
      rating: 4.0,
    },
    {
      id: 5,
      name: 'Product 5',
      description: 'Description of Product 5',
      price: 59.99,
      imageUrl: '/images/shoe.jpg',
      rating: 4.6,
    },
    {
      id: 6,
      name: 'Product 6',
      description: 'Description of Product 6',
      price: 69.99,
      imageUrl: '/images/sunglass.jpg',
      rating: 4.3,
    },
    {
      id: 7,
      name: 'Product 7',
      description: 'Description of Product 7',
      price: 79.99,
      imageUrl: '/images/pen.jpg',
      rating: 4.7,
    },
    {
      id: 8,
      name: 'Product 8',
      description: 'Description of Product 8',
      price: 89.99,
      imageUrl: '/images/book.jpg',
      rating: 4.1,
    },
  ];

  return (
    <div className="dashboard-container">
      <h1>Welcome to Your Dashboard</h1>
      <SearchBar placeholder="Search products..." onChange={handleSearch} />
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
