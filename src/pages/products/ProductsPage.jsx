import React, { useEffect, useState } from "react";
import ProductsList from "../../components/Products/ProductsList";
import ProductOfferBanner from "../../components/Products/ProductOfferBanner/ProductOfferBanner";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import ErrorState from "../../components/common/ErrorState";
import EmptyState from "../../components/common/EmptyState";
import axios from "axios";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorState error={error} />;
  if (!products || products.length === 0) return <EmptyState />;

  return (
    <section className="m-auto mx-auto max-w-[1577px]">
      <ProductOfferBanner />
      <ProductsList products={products} />
    </section>
  );
};

export default ProductsPage;
