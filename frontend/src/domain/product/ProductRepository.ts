import { ProductEntity } from 'product';

export default interface ProductRepository {
  get(filter: string): Promise<ProductEntity[]>;
}
