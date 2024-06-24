import { employees } from './data'

const DashboardBestEmployees = () => {
    return (
        <div className="stat-item stat-item-section best-employees" id="best-employees">
            <div className="best-employees__header">
                <h2>Mejores Empleados</h2>
                <select name="" id="">
                    <option value="">Hoy</option>
                    <option value="">Ayer</option>
                    <option value="">Semana Pasada</option>
                    <option value="">Mes Pasado</option>
                </select>
            </div>
            <div className="best-employees__titles">
                <h3>Empleados</h3>
                <h3>Ganancias</h3>
            </div>
            <div>
                {
                    employees.map((employee, index) => (
                        <div key={index} className='flex justify-between'>
                            <div className="best-employee-info">
                                <img src={employee.avatar} alt={employee.name} className="best-employee__img" />
                                <div>
                                    <h4 className="best-employee__name">{employee.name}</h4>
                                    <p className="best-employee__position">{employee.position}</p>
                                </div>
                            </div>
                            <p className="best-employee__earnings text-black">{employee.earnings} Bs.</p>
                        </div>

                    )
                    )
                }
            </div>
        </div>
    )
}

export default DashboardBestEmployees