import { useContext } from 'react';
import { StyledProductCard } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph, StyledTitle } from '../../../styles/typography';
import { IProducts } from '../../../Context/ShopPageContext/types';
import { ShopPageContext } from '../../../Context/ShopPageContext';
import { toastify } from '../../Toastify';

interface IProductProps {
  product: IProducts;
}

const ProductCard = ({ product }: IProductProps) => {
  const { setCart, cart } = useContext(ShopPageContext);

  const verfiProductCart = (productVerif: IProducts) => {
    const productRepeated = cart.find(
      (productCart) => productCart === productVerif
    );

    if (productRepeated === undefined) {
      setCart([...cart, product]);
      toastify(`${product.name} adicionado com sucesso!`, 'success');
    } else {
      toastify(`${productVerif.name} já adicionado!`, 'error');
    }
  };

  return (
    <StyledProductCard key={product.id}>
      <div className='imageBox'>
        <img src={product.img} alt={product.name} />
      </div>
      <div className='content'>
        <StyledTitle tag='h3' $fontSize='three'>
          {product.name}
        </StyledTitle>
        <StyledParagraph className='category'>
          {product.category}
        </StyledParagraph>
        <StyledParagraph className='price'>
          {product.price.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })}
        </StyledParagraph>
        <StyledButton
          $buttonSize='medium'
          $buttonStyle='green'
          onClick={() => {
            verfiProductCart(product);
          }}
        >
          Adicionar
        </StyledButton>
      </div>
    </StyledProductCard>
  );
};

export default ProductCard;
