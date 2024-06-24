import { clockIcon, searchIcon,notificationIcon,lessIcon,arrowLeftIcon } from "../../assets/icons"

const DashboardHeader = () => {
    return (
        <header className="dashboard-header">
                <div className="dashboard-header-txt">
                    <a className="arrow-left" href="index.html">
                        <img src={arrowLeftIcon} alt=""/>
                    </a>
                    <p>Panel de Control</p>
                    <img className="less-icon" src={lessIcon} alt="menor icon"/>
                    <p>Estadisticas de Ventas</p>
                </div>
                <div className="dashboard-search">
                    <img src={notificationIcon} alt=""/>
                    <img src={clockIcon} alt=""/>
                    <div className="dashboard-search-input">
                        <img src={searchIcon} alt=""/>
                        <input type="text" placeholder="Search..."/>
                    </div>
                </div>
        </header>
    )
}

export default DashboardHeader