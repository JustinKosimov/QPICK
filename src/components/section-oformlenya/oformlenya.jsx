import "./oformlenya.scss"
// import header // footer
import Header from "../header/header"
import Footer from "../footer/footer"

// import imgs
import Location2 from "../../assets/img/location2.png"
import LoctionIcon from "../../assets/svg/location-icon.svg"



function SectionOformlenya() {


    return (
        <>
            <Header />
            <div className="container">
                <h1 className="oformlenya-title">Оформление заказа</h1>
                <div className="oformlenya-wrapper">
                    <div className="left-card">
                        <div className="left-card-title">
                            <h3>Доставка курьером</h3>
                            <h3> 499 ₸</h3>
                        </div>
                        <img className="location-img" src={Location2} alt="" />
                        <div className="left-card-title2">
                            <img src={LoctionIcon} alt="" />
                            <h3 className="location-title">Адрес доставки</h3>
                        </div>
                        <div className="input-box">
                            <select className='oformlenya-select ' name="" id="">
                                <option className='option' value="">Город </option>
                                <option className='option' value="">Iphone 12</option>
                                <option className='option' value="">Iphone 12 pro</option>
                                <option className='option' value="">Iphone 12 pro max</option>
                                <option className='option' value="">Iphone 13</option>
                                <option className='option' value="">Iphone 13 pro</option>
                                <option className='option' value="">Iphone 13 pro max</option>
                                <option className='option' value="">Iphone 13 pro max</option>
                                <option className='option' value="">Iphone 14</option>
                                <option className='option' value="">Iphone 14 pro</option>
                                <option className='option' value="">Iphone 14 pro max</option>
                                <option className='option' value="">Iphone 15</option>
                                <option className='option' value="">Iphone 15 pro</option>
                                <option className='option' value="">Iphone 15 pro max</option>



                            </select>
                            <input className="input" type="text" placeholder="Улица / Район" />
                            <div className="input-box2">
                                <input className="input2" type="text" placeholder="Дом" />
                                <input className="input2" type="text" placeholder="Подъезд" />
                            </div>
                            <input className="input" type="text" placeholder="Квартира" />
                        </div>
                    </div>
                    <div className="right-card">
                        <div className="right-card1">
                            <h3 className="card1-title">Ваш заказ</h3>
                            <div className="card1-wrapper">
                                <div className="card1-right">
                                    <p className="card1-subtitle">Наушники Apple BYZ S852I</p>
                                    <p className="card1-subtitle">Доставка</p>
                                    <p className="card1-subtitle">К оплате</p>

                                </div>
                                <div className="card1-right">
                                    <p className="card1-subtitle">₸ 2 927</p>
                                    <p className="card1-subtitle">₸ 2 927</p>
                                    <p className="card1-subtitle">₸ 2 927</p>
                                </div>
                            </div>
                        </div>
                        <div className="right-card2">
                            <h3 className="card2-title">Способ оплаты</h3>
                            <p className="card2-subtitle">Счет на kaspi.kz</p>
                            <p className="card2-subtitle">Есть промокод?</p>
                        </div>
                        <div className="right-card3">
                            <h3 className="card3-title">Номер получателя</h3>
                            <input className="right-input" type="text" placeholder="+998 __ ___ __ __" />
                        </div>
                        <button className="right-card-btn">Закончить оформление</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default SectionOformlenya
