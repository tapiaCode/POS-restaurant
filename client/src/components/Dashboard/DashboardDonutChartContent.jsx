import DashboardDonutChart from "./DashboardDonutChart"

const DashboardDonutChartContent = () => {
    return (
        <div className="donut stat-item-section">
            <div className="stat-item chart">
                <div>
                    <h4>Ingresos Totales</h4>
                    <select name="" id="">
                        <option value="">Hoy</option>
                        <option value="">Ayer</option>
                        <option value="">Semana Pasada</option>
                        <option value="">Mes Pasado</option>
                    </select>
                </div>
                <div id="donutChart">
                    <DashboardDonutChart />
                </div>
            </div>
            <div className="stats-customers stat-item">
                <h3>Perdidas</h3>
                <p>-2.33%</p>
                <h4>21,375</h4>
                <span className="progress-bar"></span>
            </div>
            <div className="stats-customers stat-item">
                <h3>Clientes</h3>
                <p>+32.40%</p>
                <h4>256</h4>
                <span className="progress-bar"></span>
            </div>
        </div>
    )
}

export default DashboardDonutChartContent