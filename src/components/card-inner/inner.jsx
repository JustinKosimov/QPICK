
import Footer from '../footer/footer'
import Header from '../header/header'
import './inner.scss'

import { useState, useEffect } from 'react'

function CardInner() {

    const [data, setData] = useState([])


    useEffect(() => {

        fetch('https://65c7cfb0e7c384aada6efcb0.mockapi.io/elements/products')
            .then((res) => res.json())
            .then((data) => setData(data))

    }, []);


    return (

        <div className='container'>
            <Header />
            <div className="inner-box">

                <h1 className='inner-title'>Чехлы</h1>




                <ul className='inner-list'>
                    {
                        data.slice(0, 1).map((item, index) => {
                            ;
                            return (
                                <>

                                    <li className='inner-item'>
                                        <div className="inner-imgs">
                                            <img className='inner-avatar' src={item.product_urls} alt="" />
                                            <img className='inner-avatar' src={item.product_urls.slice(1)} alt="" />
                                            <img className='inner-avatar' src={item.product_urls.slice(2)} alt="" />
                                        </div>
                                        <div className="inner-box-2">
                                            <h3 className='inner-subtitle'> {item.product_name}</h3>
                                            <p className='inner-ptice'>{item.product_price} T</p>
                                        </div> 
                                    </li>

                                    {/* <div className="inner-wrapper-box">
                                        <div className="inner-top">
                                            <h1 className='inner-top-title'>Описание и характеристики</h1>
                                        </div>
                                        <div className="inner-bottom">
                                            <p className='inner-bottom-subtitle'>{item.product_description}</p>
                                        </div>
                                    </div> */}

                                </>


                            )
                        })
                    }
                </ul>
            </div>

            <Footer />
        </div>
    );
}

export default CardInner