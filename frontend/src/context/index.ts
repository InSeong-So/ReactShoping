import { CartBloc } from '../bloc/cart/CartBloc';
import createContext from './createContext';

const [BLoCContext, useBloc] = createContext<CartBloc>();

export { BLoCContext, useBloc };
