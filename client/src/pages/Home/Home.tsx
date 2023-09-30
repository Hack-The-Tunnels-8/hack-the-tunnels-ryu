import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Page, ProductPreviewCard } from "../../components";
import { ServiceAPI } from "../../infrastructure";
import "./Home.style.scss";

function Home() {
  const [products, setProducts] = useState([ {title:"hello", description:"testetstetestetstest", price:23.5,url:"https://www.cs.rochester.edu/~pawlicki/ECOMM/tem/HTML/Figures%20Ch1to4/figure4-6.jpg"}]);

  useEffect(() => {
    const fetchData = async () => {
      const json = await ServiceAPI.fetchProducts();
      setProducts(json.data.products);
    };

    fetchData();
  }, []);

  return (
    <Page>
      <div className="parallax">
        <div className="home-page">
          <h1 className="home-page__title">Home</h1>
          <h2>Products:</h2>
          <p>Hello World</p>
          <div className="home-page__products">
            {products.map((product) => (
              <Link to={`/products/${product.id}`} key={`${product.id}`}>
                <ProductPreviewCard
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  imageUrl={product.imageUrl}
                  key={`${product.id}`}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Page>
  );
}

export default Home;
