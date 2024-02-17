import Footer from "../footer/footer"
import Header from "../header/header"

import "./kontakti.scss"

// import imgs
import Location from "../../assets/img/location.png"
import Phone from "../../assets/img/phone.png"
import Whatsup from "../../assets/img/whatsup.png"
import Twitter from "../../assets/img/twitter.png"
import Insta from "../../assets/img/insta.png"
import Telegram from "../../assets/img/telegram.png"

function SectionKontakti() {


    return (
        <>
            <Header />
            <div className="container">
                <div className="wrapper-kontakti">
                    <div className="left-card-kontakti">
                        <img className="left-card-img" src={Location} alt="" />
                    </div>
                    <div className="right-card-kontakti">
                        <div className="right-card1">   <img className="right-card-img1" src={Whatsup} alt="" /></div>
                        <div className="right-card1">   <img className="right-card-img2" src={Twitter} alt="" /></div>
                        <div className="right-card1">   <img className="right-card-img3" src={Insta} alt="" /></div>
                        <div className="right-card1">   <img className="right-card-img4" src={Telegram} alt="" /></div>
                    </div>

                </div>
                <div className="card-bottom">
                    <img className="bottom-img" src={Phone} alt="" />

                    <h1 className="number">+7 777 777 77 77</h1>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default SectionKontakti
