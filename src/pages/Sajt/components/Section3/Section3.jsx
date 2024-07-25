import style from "./css/sec3.module.css";


const Section3 = ()=>{
    return(
        <div className={style.adress}>
                <p className={style.adress_p}>
                    <i className={`${style.position_icon} fa-solid fa-location-dot `}></i>
                    2550 Innovation Drive, Auburn Hills, Mi 48326
                </p>
            </div>
    )
}

export default Section3;