import { Outlet } from "react-router";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

function DashboardLayout({activeTab,userName,isAuthenitcated,searchQuery,onSearchChange}){

    return(
        <div className="app-layout">
            <Sidebar activeTab={activeTab} userName={userName} isAuthenitcated={isAuthenitcated}/>
            <main className="main">
                <TopBar searchQuery={searchQuery} onSearchChange={onSearchChange} isAuthenitcated={isAuthenitcated}/>
                <Outlet/>
            </main>
        </div>
    );
}

export default DashboardLayout;