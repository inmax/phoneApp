import React, { Suspense, lazy } from 'react';
import PhoneList from './components/PhoneList';
import Layout from './components/Layout';
import { fetchData, getProductList } from './../src/data/actions/productActions';

export default function App(): JSX.Element {
  const product = getProductList();
  console.log(product, 'product');
  return (
    <Layout
      content={
        <PhoneList
          phones={[
            {
              id: 0,
              name: 'iPhone 7',
              manufacturer: 'Apple',
              description:
                'iPhone 7 dramatically improves the most important aspects of the iPhone experience. It introduces advanced new camera systems. The best performance and battery life ever in an iPhone. Immersive stereo speakers. The brightest, most colorful iPhone display. Splash and water resistance*. And it looks every bit as powerful as it is. This is iPhone 7.',
              color: 'black',
              price: 769,
              imageFileName: 'IPhone_7.png',
              screen: '4,7 inch IPS',
              processor: 'A10 Fusion',
              ram: 2,
            },
          ]}
        />
      }
    />
  );
}
