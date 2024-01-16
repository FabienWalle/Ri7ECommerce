import LoginPage from "@/features/Auth/LoginPage"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router