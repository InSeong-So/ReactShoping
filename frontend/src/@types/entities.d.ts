declare module 'cart' {
  export interface CartEntity {
    readonly id: string;
    readonly image: string;
    readonly title: string;
    readonly price: number;
    readonly quantity: number;
  }

  export interface CommonCartState {
    open: boolean;
  }

  export interface LoadingCartState {
    kind: 'LoadingCartState';
  }

  export interface UpdatedCartState {
    kind: 'UpdatedCartState';
    items: Array<CartItemState>;
    totalPrice: string;
    totalItems: number;
  }

  export interface ErrorCartState {
    kind: 'ErrorCartState';
    error: string;
  }

  export type CartState = (LoadingCartState | UpdatedCartState | ErrorCartState) & CommonCartState;

  export interface CartItemState {
    id: string;
    image: string;
    title: string;
    price: string;
    quantity: number;
  }

  export const cartInitialState: CartState = {
    kind: 'LoadingCartState',
    open: false,
  };
}
declare module 'product' {
  export interface ProductEntity {
    id: string;
    image: string;
    title: string;
    price: number;
  }
}
