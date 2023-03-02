import { MdShoppingCart, MdLogout } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import SearchForm from './SearchForm';
import { StyledHeader, StyledLogo } from './style';
import LogoKenzieBurguer from '../../assets/LogoKenzieBurguer.svg';
import { StyledContainer } from '../../styles/grid';
import { ShopPageContext } from '../../Context/ShopPageContext';
import { toastify } from '../Toastify';

const Header = () => {
  const { setModalCart, copyAllProducts, setProducts } =
    useContext(ShopPageContext);

  const navigate = useNavigate();

  return (
    <StyledHeader>
      <StyledContainer containerWidth={1300}>
        <div className='flexGrid'>
          <StyledLogo onClick={() => setProducts(copyAllProducts)}>
            <img
              src={LogoKenzieBurguer}
              alt='Kenzie Burguer Logo'
              className='logo'
            />
          </StyledLogo>
          <nav className='nav' role='navigation'>
            <SearchForm />
            <div className='buttons'>
              <button
                type='button'
                onClick={() => {
                  setModalCart(true);
                }}
              >
                <MdShoppingCart size={28} />
              </button>
              <button
                type='button'
                onClick={() => {
                  localStorage.removeItem('@TOKEN');
                  localStorage.removeItem('@USER');
                  navigate('/');
                  toastify('Você se desconectou!', 'info');
                }}
              >
                <MdLogout size={28} />
              </button>
            </div>
          </nav>
        </div>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
