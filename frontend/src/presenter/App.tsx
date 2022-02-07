import React from 'react';
import { BLoCContext } from '../context';
import CartDrawer from './Cart/CartDrawer';
import Header from './components/Header';
import * as DependenciesProvider from '../factory/DependenciesProvider';
import ProductList from './Product/ProductList';

const App: React.FC = () => {
  return (
    <BLoCContext.Provider value={DependenciesProvider.provideCartBloc()}>
      <Header />
      <ProductList />
      <CartDrawer />
    </BLoCContext.Provider>
  );
};

export default App;
