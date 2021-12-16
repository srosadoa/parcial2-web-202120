import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { Chart } from '../components/Chart';
import { getProductsService } from '../services/product';

export const Report = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProd = async () => {
      setProducts(await getProductsService());
    };
    fetchProd();
  }, []);

  return (
    <section id='report'>
      <div className='report-container'>
        <h1>Unidades en inventario</h1>
        <p>Show here the graph</p>
      </div>
    </section>
  );
};
