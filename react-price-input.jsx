import * as React from 'react';
import { useEffect, useState } from 'react';

/* This Snippet is incomplete */

export default function PriceForm({ data, setData, buttons }) {
  const [price, setPrice] = useState(0);

  const renderPrice = (p) => `${p.toString().slice(0, -2)}.${p.toString().slice(-2)}`;

  useEffect(() => {
    if (data && data.price) {
      setPrice(renderPrice(data.price));
    }
  }, [data]);

  const handleTypeInput = (e) => {
    setData({ ...data, type: e.target.value });
  };

  const handlePriceInput = (e) => {
    setPrice(e.target.value);
  };

  const validatePriceInput = () => {
    const newValue = parseFloat(price, 10) * 100;
    setData({ ...data, price: newValue });
  };

  return (
    <TextField
      label="Preis"
      name="price"
      type="number"
      value={price}
      onChange={handlePriceInput}
      onBlur={validatePriceInput}
      InputProps={{
        endAdornment: <InputAdornment position="end">CHF</InputAdornment>,
      }}
    />
  );
}