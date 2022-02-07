import CartService from '.';

export default interface CartRepository {
  get(): Promise<CartService>;
  save(cart: CartService): Promise<boolean>;
}
