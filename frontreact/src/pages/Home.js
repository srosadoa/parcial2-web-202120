import React, { useEffect, useState } from "react";
import { getProductsService } from "../services/product";
import { Card } from "../components/Card";
import { FormattedMessage } from 'react-intl';

export const Home = ({ searchKey }) => {
  const [products, setProducts] = useState([]);

  const fetchProd = async (query) => { //Obtención Productos
    setProducts(await getProductsService(query));
  }
  useEffect(() => {
    fetchProd(searchKey);
  }, [searchKey]);

  return (
    <section id='home'>
      <div className='home-container'>
        <h1><FormattedMessage id='gallery' /></h1>
        <div className='home-card'>
          {products
          .map((m) => {
            return (
              <Card key={products._id}
                name={m.name}
                picture={m.picture}
                price={m.price}
                isActive={m.isActive}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
