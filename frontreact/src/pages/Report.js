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
  },
    []);

  return (
    <section id='report'>
      <div className='report-container'>
        <h1><FormattedMessage id="report2" /> </h1>
        <Chart data={products} />
      </div>
    </section>
  );
};
