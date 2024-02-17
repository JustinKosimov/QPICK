
import './header.scss'

// import imgs
import HeaderLogo from "../../assets/svg/header-logo.svg"
import Phone from "../../assets/svg/phone.svg"
import Like from "../../assets/svg/like.svg"


function Header() {


    return (
        <>
            <div className="container">
                <div className="wrapper-box">
                 <div className="header-box">
                 <img src={HeaderLogo} alt="" />
                    <div className="select">
                        <img src={Phone} alt="" />

                        <select className='header-select ' name="" id="">
                            <option className='option' value="">Выбрать модель телефона</option>
                            <option className='option' value="">Iphone 12</option>
                            <option className='option' value="">Iphone 12 pro</option>
                            <option className='option'  value="">Iphone 12 pro max</option>
                            <option className='option' value="">Iphone 13</option>
                            <option className='option' value="">Iphone 13 pro</option>
                            <option className='option'  value="">Iphone 13 pro max</option>
                            <option className='option' value="">Iphone 13 pro max</option>
                            <option className='option' value="">Iphone 14</option>
                            <option  className='option' value="">Iphone 14 pro</option>
                            <option  className='option' value="">Iphone 14 pro max</option>
                            <option  className='option' value="">Iphone 15</option>
                            <option  className='option' value="">Iphone 15 pro</option>
                            <option  className='option' value="">Iphone 15 pro max</option>

                         

                        </select>
                    </div>
                 </div>
                    <img src={Like} alt="" />
                </div>
            </div>

        </>
    )
}

export default Header
