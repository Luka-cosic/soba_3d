import style from './css/style.module.css';


const Navbar = ()=>{
    return(
<nav className={style.navbar}>
                <div className={style.menu_list}>
                    <a href="menu.html" className={style.menu_link}>MENU</a>
                    <a href="#" className={style.menu_link}>CETERING</a>
                    <a href="#" className={style.menu_link}>PROMOTIONS</a>
                    <a href="#" className={style.menu_link}>EVENTS</a>
                    <a href="#" className={style.menu_link}>JOBS</a>
                    <a href="#" className={style.menu_link}>ORDER</a>
                    <a href="#" className={style.menu_link}>RESERVE</a>
                    <a href="#" className={style.menu_link}>ENTERTAIMENTS</a>
                    <a href="#" className={style.menu_link}>AXE VAIVER</a>
                    <a href="#" className={style.media_link}>
                        <i className="fa_brands fa_twitter"></i>
                    </a>
                    <a href="#" className={style.media_link}>
                        <i className="fa_brands fa_facebook_f"></i>
                    </a>
                    <a href="#" className={style.media_link}>
                        <i className="fa_brands fa_instagram"></i>
                    </a>
                </div>
            </nav>
    )
}

export default Navbar;