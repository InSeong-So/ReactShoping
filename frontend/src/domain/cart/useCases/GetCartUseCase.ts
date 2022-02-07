import Cart from '..';
import CartRepository from '../CartRepository';

export default class GetCartUseCase {
  private cartRepository: CartRepository;
  constructor(cartRepository: CartRepository) {
    this.cartRepository = cartRepository;
  }

  execute(): Promise<Cart> {
    return this.cartRepository.get();
  }
}
