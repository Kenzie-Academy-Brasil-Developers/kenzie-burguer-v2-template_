import { useContext } from 'react';
import CartProductCard from './CartProductCard';
import { StyledCartProductList } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph } from '../../../styles/typography';
import { ShopPageContext } from '../../../Context/ShopPageContext';

const CartProductList = () => {
  const { cart, setCart } = useContext(ShopPageContext);

  const priceCurrent = cart.reduce((acc, cur) => acc + cur.price, 0);

  return (
    <StyledCartProductList>
      <ul>
        {cart.map((productCart) => (
          <CartProductCard key={productCart.id} productCart={productCart} />
        ))}
      </ul>
      <div className='totalBox'>
        <StyledParagraph>
          <strong>Total</strong>
        </StyledParagraph>
        <StyledParagraph className='total'>
          {priceCurrent.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })}
        </StyledParagraph>
      </div>
      <StyledButton
        $buttonSize='default'
        $buttonStyle='gray'
        onClick={() => {
          setCart([]);
        }}
      >
        Remover todos
      </StyledButton>
    </StyledCartProductList>
  );
};

export default CartProductList;
