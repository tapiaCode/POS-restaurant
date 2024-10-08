import './App.css'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import DashboardPage from './pages/DashboardPage'
import Dashboard from './components/Dashboard/Dashboard'
import Bills from './components/Bills/Bills'
import Home from './components/Home'
import useAuth from './hooks/useAuth'
import Profile from './components/Profile/Profile'
import ProtectedRoute from './components/ProtectedRoute'
import FoodsContainer from './components/Foods/FoodsContainer'
import CategoriesFoods from './components/Foods/Categories/CategoriesFoods'
import BurgersContainer from './components/Foods/Burgers/BurgersContainer'
import PizzasContainer from './components/Foods/Pizzas/PizzasContainer'
import WokContainer from './components/Foods/Wok/WokContainer'
import PastaContainer from './components/Foods/Pasta/PastaContainer'
import DrinksContainer from './components/Foods/Drinks/DrinksContainer'
import DessertsContainer from './components/Foods/Desserts/DessertsContainer'
import Settings from './components/Settings'
import Support from './components/Support/Support'
import Messages from './components/Messages/Messages'

function App() {
    const { auth } = useAuth();

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<h1>Acerca De</h1>} />
                <Route path="/dashboard" element={<ProtectedRoute isAllowed={auth} />}>
                    <Route path='/dashboard' element={<DashboardPage />}>
                        <Route index={true} element={<Dashboard />} />
                        <Route path="/dashboard/settings" element={<Settings />} />
                        <Route path="/dashboard/profile" element={<Profile />} />
                        <Route path="/dashboard/notifications" element={<h2>Panel de Notificaciones</h2>} />
                        <Route path="/dashboard/messages" element={<Messages />} />
                        <Route path="/dashboard/employees" element={<h2>Panel de empleados</h2>} />
                        <Route path="/dashboard/food-drinks" element={<FoodsContainer />}>
                            <Route index={true} element={<CategoriesFoods />} />
                            <Route path="/dashboard/food-drinks/burgers" element={<BurgersContainer />} />
                            <Route path='/dashboard/food-drinks/pizzas' element={<PizzasContainer />} />
                            <Route path='/dashboard/food-drinks/drinks' element={<DrinksContainer />} />
                            <Route path='/dashboard/food-drinks/wok' element={<WokContainer />} />
                            <Route path='/dashboard/food-drinks/pasta' element={<PastaContainer />} />
                            <Route path='/dashboard/food-drinks/desserts' element={<DessertsContainer />} />
                            <Route path='/dashboard/food-drinks/*' element={<Navigate to='/dashboard/food-drinks' />} />
                        </Route>
                        <Route path="/dashboard/bills" element={<Bills />} />
                        <Route path="/dashboard/support" element={<Support />} />
                        <Route path="/dashboard/*" element={<Navigate to='/dashboard' />} />
                    </Route>
                </Route>
                <Route path="*" element={<h1>No Encontrado </h1>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App

