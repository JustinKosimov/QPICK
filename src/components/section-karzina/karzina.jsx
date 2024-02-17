import './karzina.scss'

// import header // footer
import Footer from '../footer/footer'
import Header from '../header/header'

// import imgs
import LeftTop from "../../assets/img/top-img.png"
import LeftBottom from "../../assets/img/bottom-img.png"
import RightTop from "../../assets/img/right-top.png"


function SctionKarzina() {
  

  return (
<>
<Header />
<div className="container">
    <div className="karzina-wrapper">
    <div className="karzina-left">
<div className="left-top">
<img src={LeftTop} alt="" />

</div>
<div className="left-bottom">
<img src={LeftBottom} alt="" />
</div>
    </div>
    <div className="karzina-right">
<img src={RightTop} alt="" />
    </div>
    </div>
</div>
<Footer />
</>
  )
}

export default SctionKarzina
