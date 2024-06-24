import DashboardBestEmployees from './DashboardBestEmployees'
import DashboardDonutChartContent from './DashboardDonutChartContent'
import DashboardHeader from './DashboardHeader'
import './Dashboard.css'
import DashboardAreaChart from './DashboardAreaChart'
import DashboardTrendingFoods from './DashboardTrendingFoods'

const Dashboard = () => {
    
    return (
        <section className="dashboard">
            <DashboardHeader />
            <div className="dashboard-content">
                <div className="dashboard-slider">
                    <h2>Panel de Control</h2>
                    <div className="slides">
                        <p>Ayer</p>
                        <p className="active">Hoy</p>
                        <p>Semanal</p>
                        <p>Mensual</p>
                    </div>
                </div>
                <div className="dashboard-stats">
                    <div className="stat-item stat-item-section">
                        <h3>Ventas del Día</h3>
                        <DashboardAreaChart />
                    </div>
                    <DashboardDonutChartContent />
                    <div className="stat-item stat-item-section trending_dishes" id="trending_dishes">
                        <div className="trending_dishes-header mb-5">
                            <h2>Platos de tendencia</h2>
                            <select name="" id="">
                                <option value="">Hoy</option>
                                <option value="">Ayer</option>
                                <option value="">Semana Pasada</option>
                                <option value="">Mes Pasado</option>
                            </select>
                        </div>
                        <div className="trending-dishes-titles">
                            <h3 className='font-semibold mb-2'>Platos</h3>
                            <h3 className='font-semibold mb-2'>Pedidos</h3>
                        </div>
                        <div  id="trending-dishes-list">
                            <DashboardTrendingFoods />
                        </div>
                    </div>
                    <DashboardBestEmployees />
                </div>
            </div>
        </section>
    )
}

export default Dashboard