import Header from "@/components/Header"
import { RootState } from "@/store"
import { ReactNode } from "react";
import { useSelector } from "react-redux"

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    const theme = useSelector((state: RootState) => state.theme.theme)

    return (
        <div className="h-full w-full" data-theme={theme}>
            <Header />
            {children}
        </div>
    )
}

export default MainLayout
