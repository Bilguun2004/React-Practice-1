import "../../style/explore.css"
const catergoryitem = ({backgroundcolor , img , text}) =>{
    return(
        
            <div className={backgroundcolor}>
                <img src={img} height="90px" width="90px"/>
                <span className="cattext">{text}</span>
            </div>
        
    )
}

export default catergoryitem