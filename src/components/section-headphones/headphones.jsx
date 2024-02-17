
import './headphones.scss'
// import use hooks
import { useState, useEffect } from 'react'

import Headphone from "../../assets/img/headphone.png"
import RatingImg from "../../assets/svg/rating.svg"
import LikeImg from "../../assets/svg/likeimg.svg"

function SectionHeadphones(){

// const [data, setData] = useState([])


// useEffect(() => {

//     fetch('https://6537a88fbb226bb85dd39095.mockapi.io/student/movie')
//     .then((res) => res.json())
//     .then((data) => setData(data))
   
// }, []);


    return(
       <div className='container'>
    
     
      <h1 className='headphones-title'>Наушники</h1>
     <ul className='headphones-list'>
        <li className='headphones-item'>
            <img className='like' src={LikeImg} alt="" />
            <img className='headphones-avatar' src={Headphone} alt="" />
            <div className="headphone-box">
                <h3 className='headphones-subtitle'>Apple BYZ S852I</h3>
                <p className='headphone-ptice'>2927 ₸</p>
                </div>
            <div className="headphones-rating">
                <img className='rating-img' src={RatingImg} alt="" />
                <p className='rating-number'>4.7</p>
            </div>
        </li>
     </ul>

    


{/* 
<ul className='cases-list'>
    {
        data.map((item, index) => {
            ;
            return(
             
                <li className='cases-item'>
                    <img className='cases-avatar' src={item.avatar} alt="" />
                 
                
                    </li>
            )
        })
    }       
</ul> */}

</div>
    );
}

export default SectionHeadphones