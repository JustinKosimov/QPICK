
import './cases.scss'
// import use hooks
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import Case from "../../assets/img/case.png"


function SectionCases(){

const [data, setData] = useState([])


useEffect(() => {

    fetch('https://65c7cfb0e7c384aada6efcb0.mockapi.io/elements/products')
    .then((res) => res.json())
    .then((data) => setData(data))
   
}, []);


    return(
       
       <div className='container'>
    


      <h1 className='cases-title'>Чехлы</h1>


    



<ul className='cases-list'>
    {
        data.map((item, index) => {
            ;
            return(
             <NavLink to={"/inner-page"} key={index}>
                <li className='cases-item'>
                    <img className='cases-avatar' src={item.product_img} alt="" />
                    <div className="cases-box">                    <h3 className='cases-subtitle'> {item.product_name.length > 18 ? item.product_name.slice(0, 14) + "..." : item.product_name}</h3>
                    <p className='cases-ptice'>{ item.product_price } T</p>
                    </div>
               
                    </li>
                    </NavLink>
            )
        })
    }       
</ul>

</div>
    );
}

export default SectionCases