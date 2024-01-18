import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import LoginPage from "@/features/Auth/LoginPage"
import CartPage from "@/features/Cart/CartPage"
import MainPage from "@/features/Main/MainPage"
import AdminPage from "@/features/Admin/AdminPage"

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/" element={<Navigate replace to="/login" />} />
                <Route path="/main" element={<MainPage />} />
                <Route path="/cart" element={<CartPage/>}/>
                <Route path="/admin" element={<AdminPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router