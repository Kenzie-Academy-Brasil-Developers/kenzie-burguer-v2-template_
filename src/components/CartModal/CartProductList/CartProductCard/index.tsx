import { MdDelete } from 'react-icons/md';
import { useContext } from 'react';
import { StyledCartProductCard } from './style';
import { StyledTitle } from '../../../../styles/typography';
import { IProducts } from '../../../../Context/ShopPageContext/types';
import { ShopPageContext } from '../../../../Context/ShopPageContext';
import { toastify } from '../../../Toastify';

interface IProductCartProps {
  productCart: IProducts;
}

const CartProductCard = ({ productCart }: IProductCartProps) => {
  const { cart, setCart } = useContext(ShopPageContext);

  return (
    <StyledCartProductCard>
      <div className='imageBox'>
        <img src={productCart.img} alt={productCart.name} />
      </div>
      <div className='contentBox'>
        <StyledTitle tag='h3' $fontSize='three'>
          {productCart.name}
        </StyledTitle>
        <button
          type='button'
          aria-label='Remover'
          onClick={() => {
            const newCart = cart.filter(
              (product) => product.name !== productCart.name
            );
            setCart(newCart);
            toastify(`${productCart.name} removido!`, 'success');
          }}
        >
          <MdDelete size={24} />
        </button>
      </div>
    </StyledCartProductCard>
  );
};

export default CartProductCard;
