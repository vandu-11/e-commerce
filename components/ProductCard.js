import React from 'react';
import styles from './ProductCard.module.css'; // Import styles for ProductCard

const ProductCard = ({ product }) => {
  return (
    <div className={styles.productCard}>
      <img src={product.imageUrl} alt={product.name} className={styles.image} />
      <div className={styles.details}>
        <h2 className={styles.name}>{product.name}</h2>
        <p className={styles.description}>{product.description}</p>
        <p className={styles.price}>Price: ${product.price}</p>
        <p className={styles.rating}>Rating: {product.rating}</p>
      </div>
    </div>
  );
};

export default ProductCard;
