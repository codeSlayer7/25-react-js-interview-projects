import { useEffect, useState } from "react";
import "./styles.css";

function LoadMoreData({url}) {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disable, setDisable] = useState(false);
  async function fetchProducts() {
    try {
      setLoading(true);
      const resposne = await fetch(
        `${url}?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await resposne.json();
      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
        console.log(result);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [products]);

  // Will be url changed or constant= ?
  if (loading) {
    return <h2> Loading data ...</h2>;
  }
  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length
          ? products.map((productItem) => (
              <div className="product" key={productItem.id}>
                <img src={productItem.images[0]} alt={productItem.title} />
                <p>{productItem.title}</p>
              </div>
            ))
          : null}
      </div>

      <div className="button-container">
        <button disabled={disable} onClick={() => setCount(count + 1)}>
          Load More Data
        </button>
        {disable ?? <p>you reached limit</p>}
      </div>
    </div>
  );
}

export default LoadMoreData;
