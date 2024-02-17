
import './hero.scss'

// import imgs
import HeroImg from "../../assets/img/iphone-13.png"


function Hero() {


    return (
        <>
            <div className="container">
                <div className="wrapper-box-hero">
                    <div className="hero-card">
                    <h1 className='hero-title'>Аксессуары для Iphone 13 Pro Max</h1>
                    <img className='hero-img' src={HeroImg} alt="" />
                    </div>
         </div>
            </div>

        </>
    )
}

export default Hero
