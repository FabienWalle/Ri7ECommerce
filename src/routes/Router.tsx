import LoginPage from "@/features/Auth/LoginPage"
import MainPage from "@/features/Main/MainPage"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/" element={<Navigate replace to="/login" />} />
                <Route path="/main" element={<MainPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router