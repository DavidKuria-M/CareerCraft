import '../styles/TopBar.css';
import { Search,Bell, LogIn } from 'lucide-react';
import { useNavigate } from 'react-router';

function TopBar({searchQuery = '',onSearchChange}){
    const navigate = useNavigate();
    return(
        <nav className='top-bar' aria-label='Top navigation'>
            <div className='search-bar'>
                <Search size={16} className='search-icon'/>
                <input type='search' placeholder='Search for jobs' className='search-input' value={searchQuery} onChange={(e) => onSearchChange?.(e.target.value)} />
            </div>

            <div className='top-bar-actions'>
                <button type='button' className='bell-btn' aria-label='Notifications'>
                    <Bell size={20}/>
                    <span className='notification-dot'/>
                </button>

                <button className='sign-in-btn' type='button' onClick={() => navigate('/sign-in')}>
                    <LogIn size={16}/>
                    <span>Sign In</span>
                </button>        
            </div>
        </nav>
   
    )
}

export default TopBar