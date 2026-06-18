export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-img-wrap">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-info">
        <h4>{product.title}</h4>
        <p>{product.price}</p>
        <div className="rating">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              width="20"
              height="18"
              className={i < product.rating ? "filled" : "empty"}
            >
              <use href="#icon-star" />
            </svg>
          ))}
        </div>

        <a href="#" className="add-to-cart-btn">
          Add to Cart
        </a>
      </div>
    </div>
  );
}
