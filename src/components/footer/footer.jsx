
import './footer.scss'

// import imgs
import FooterLogo from "../../assets/svg/header-logo.svg"
import Social from "../../assets/svg/Social.svg"
import Network from "../../assets/svg/network.svg"

// import react-roter dom
import { NavLink } from "react-router-dom";


function Footer() {
  

  return (
   <div className="container">
    <div className="footer-box">
        <img className='footer-logo' src={FooterLogo} alt="" />
        <ul className='footer-list'>
            <li className='footer-item'>
                <NavLink to={"/oformlenya-page"} className='footer-link' href="#">Избранное</NavLink>
            </li>
            <li className='footer-item'>
                <NavLink to={"/karzina-page"} className='footer-link' href="#">Корзина</NavLink >
            </li>
            <li className='footer-item'>
                <NavLink to={"/kontakti-page"} className='footer-link' href="#">Контакты</NavLink>
            </li>
            <li></li>
        </ul>

        <div className="footer-card">
        <NavLink to={"/usloviya-page"} className='footer-card-title'>Условия сервиса</NavLink>
            <div className="footer-languge">
                <img className='footer-language-img' src={Network} alt="" />
                <p className='footer-russian-language'>Рус</p>
                <p className='footer-english-language'>Eng</p>
                
            </div>

        </div>

        <img className='footer-social-icons' src={Social} alt="" />
        
    </div>
   </div>
  )
}

export default Footer
