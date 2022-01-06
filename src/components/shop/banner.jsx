import  Black from '../../assets/black.svg'
import bannerr from '../../assets/banner.svg'
import '../../style/shop.css'
import location from "../../assets/check.svg"
const banner = () =>{
    return(
        <div className='bannercontainer'>
            <img src={Black} height="30px" width="30px"/>
            <div className="bannertop">
                <img src={location}/>
                <span className="banner-top">UlaanBaatar,Mongolia</span>
            </div>
            <input className="search" placeholder="Search store" type="text" />
            <img src={bannerr} width="90%" />
            <span className="text">Exclusive Offer</span>
        </div>
    )
}
export default banner