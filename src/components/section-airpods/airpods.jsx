
import './airpods.scss'
// import use hooks
import { useState, useEffect } from 'react'

import Airpods from "../../assets/img/airpods.png"
import RatingImg from "../../assets/svg/rating.svg"
import LikeImg from "../../assets/svg/likeimg.svg"

function SectionAirpods(){

// const [data, setData] = useState([])


// useEffect(() => {

//     fetch('https://6537a88fbb226bb85dd39095.mockapi.io/student/movie')
//     .then((res) => res.json())
//     .then((data) => setData(data))
   
// }, []);


    return(
       <div className='container'>
    
     
      <h1 className='airpods-title'>Наушники</h1>
     <ul className='airpods-list'>
        <li className='airpods-item'>
            <img className='like' src={LikeImg} alt="" />
            <img className='airpods-avatar' src={Airpods} alt="" />
            <div className="airpods-box">
                <h3 className='airpods-subtitle'>Apple BYZ S852I</h3>
                <p className='airpods-ptice'>2927 ₸</p>
                </div>
            <div className="airpods-rating">
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

export default SectionAirpods