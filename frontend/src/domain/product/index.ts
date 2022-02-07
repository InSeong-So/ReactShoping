import { ProductEntity } from 'product';
import ProductRepository from './ProductRepository';

export default class Product {
  private productRepository: ProductRepository;

  constructor(productRepository: ProductRepository) {
    this.productRepository = productRepository;
  }

  execute(filter: string): Promise<ProductEntity[]> {
    return this.productRepository.get(filter);
  }
}
