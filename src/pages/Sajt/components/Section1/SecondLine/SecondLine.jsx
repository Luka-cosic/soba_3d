import style from "./css/style.module.css";
import "./css/sec.css";

const SecondLine = ()=>{
    return(
        <div className={`${style.secont_line} secont_line`}>
                <div className={style.logo}>
                    <p className={`${style.logo_1} logo_1`}>HUB</p>
                    <p className={`${style.logo_2} logo_2`}>stadium</p>
                </div>
            </div>
    )
}

export default SecondLine;