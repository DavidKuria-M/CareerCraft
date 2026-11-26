import '../styles/Sidebar.css';
import { Briefcase, Home, BarChart2, Settings, Rocket,ChevronDown } from 'lucide-react';

import { useNavigate } from 'react-router';



const NAV_ITEMS = [
    {id:'my-cv',label:'My CV',path:'/',icon:Home,badge:null},
    {id:'job-board',label:'Job Board',path:'/job-board',icon:Briefcase, badge:'coming soon'},
    {id:'my-application',label:'My Applications',path:'/my-applications',icon:BarChart2, badge:null},
    {id:'settings',label:'Settings',path:'/setting',icon:Settings, badge:null},
]

const tabToRoute ={
    'my-cv':'/',
    'job-board':'job-board',
    'my-application':'/my-application',
    'explore-jobs':'/explore-jobs',
    'settings':'/settings',
}


function Sidebar({activeTab,userName}){
    const navigate = useNavigate();

    function handleItemClick(itemId){
        const targetRoute = tabToRoute[itemId] || '/';
        navigate(targetRoute);
    }
    /*adding this but might remove*/
    const displayName = userName || "Guest";
    const initial = displayName.trim().charAt(0).toUpperCase();
    return(
        <aside className='sidebar'>
            <div className='sidebar-brand'>
                <div className='brand-logo'>
                    <Briefcase size={22}/>
                </div>
                <div>
                    <h2 className='brand-title'>CV Builder</h2>
                    <p className='brand-subtitle'>Create &bull; Edit &bull; Apply</p>
                </div>
            </div>
            <ul className='sidebar-nav'>
                {NAV_ITEMS.map((item) =>{
                    const isActive = activeTab === item.id;
                    const IconComponent = item.icon;
                    return(                      
                        <li key={item.id} type="button" className={`nav-item ${isActive ? 'active' : ''}`} onClick={() => handleItemClick(item.id)}>
                            <IconComponent size={22}/>
                            <span>{item.label}</span>
                            {item.badge && <span className='nav-badge'>{item.badge}</span>}
                        </li>

                    );
                })}
            </ul>
            <div className='sidebar-promo'>
                <div className='promo-icon'>
                    <Rocket size={32}/>
                </div>
                <h3 className='promo-title'>Find your Dream Job</h3>
                <p className='promo-text'>
                    Create your CV and get matched with top opportunities.
                </p>
                <button type="button" className='promo-btn' onClick={() => navigate('/explore-jobs')} >
                    Explore Jobs +
                </button>
            </div>

            <div className='sidebar-footer'>
                <div className='user-avatar'>{initial}</div>
                <span className='user-name'>{displayName}</span>
                <ChevronDown size={16}/>
            </div>
        </aside>
    )
}

export default Sidebar;