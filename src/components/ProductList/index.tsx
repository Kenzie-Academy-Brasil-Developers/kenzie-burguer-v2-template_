import { useContext } from 'react';
import ProductCard from './ProductCard';
import { StyledProductList } from './style';
import { ShopPageContext } from '../../Context/ShopPageContext';

const ProductList = () => {
  const { products } = useContext(ShopPageContext);

  return (
    <StyledProductList>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </StyledProductList>
  );
};

export default ProductList;
