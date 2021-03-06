import GetProductsUseCase from '@/domain/product';
import { Bloc } from '@/bloc';
import { ProductsState } from 'product';

export const productsInitialState: ProductsState = {
  kind: 'LoadingProductsState',
  searchTerm: '',
};

export class ProductsBloc extends Bloc<ProductsState> {
  constructor(private getProductsUseCase: GetProductsUseCase) {
    super(productsInitialState);
  }

  search(filter: string) {
    this.getProductsUseCase
      .execute(filter)
      .then(products =>
        this.changeState({
          kind: 'LoadedProductsState',
          products: products,
          searchTerm: this.state.searchTerm,
        }),
      )
      .catch(error =>
        this.changeState({
          kind: 'ErrorProductsState',
          error: 'An error has ocurred loading products',
          searchTerm: this.state.searchTerm,
        }),
      );
  }
}
