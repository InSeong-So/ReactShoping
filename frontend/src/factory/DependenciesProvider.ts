import Product from '@/domain/product';
import ProductInMemoryRepository from '@/domain/product/ProductModel';
import { ProductsBloc } from '@/bloc/product/ProductBloc';
import CartInMemoryRepository from '@/domain/cart/CartModel';
import { CartBloc } from '@/bloc/cart/CartBloc';
import GetCartUseCase from '@/domain/cart/useCases/GetCartUseCase';
import AddProductToCartUseCase from '@/domain/cart/useCases/AddProductToCartUseCase';
import RemoveItemFromCartUseCase from '@/domain/cart/useCases/RemoveItemFromCartUseCase';
import EditQuantityOfCartItemUseCase from '@/domain/cart/useCases/EditQuantityOfCartItemUseCase';

export function provideProductsBloc(): ProductsBloc {
  const productRepository = new ProductInMemoryRepository();
  const getProductsUseCase = new Product(productRepository);
  const productsPresenter = new ProductsBloc(getProductsUseCase);

  return productsPresenter;
}

export function provideCartBloc(): CartBloc {
  const cartRepository = new CartInMemoryRepository();
  const getCartUseCase = new GetCartUseCase(cartRepository);
  const addProductToCartUseCase = new AddProductToCartUseCase(cartRepository);
  const removeItemFromCartUseCase = new RemoveItemFromCartUseCase(cartRepository);
  const editQuantityOfCartItemUseCase = new EditQuantityOfCartItemUseCase(cartRepository);
  const cartPresenter = new CartBloc(
    getCartUseCase,
    addProductToCartUseCase,
    removeItemFromCartUseCase,
    editQuantityOfCartItemUseCase,
  );

  return cartPresenter;
}
