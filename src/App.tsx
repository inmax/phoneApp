import React, { Suspense, lazy, useEffect, useState } from 'react';
import PhoneList from './components/PhoneList';
import Layout from './components/Layout';

export default function App(): JSX.Element {
  const [items, setItems] = useState([]);
  const getPhones = async () => {
    const url = 'http://localhost:3000/phones';
    await fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setItems(result.phones);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  useEffect(() => {
    //función que define el efecto SECUNDARIO
    getPhones();
  }, []);

  return <Layout content={<PhoneList phones={items} />} />;
}
