import { ArrowLeft, Clock, Rocket, Star, Zap } from "lucide-react";
import '../styles/ComingSoon.css';
import { useNavigate } from "react-router";

function ComingSoon({showBackButton = false,onBackToDashboard}){

    const navigate = useNavigate();

    function handleBackClick(){
        if(onBackToDashboard){
            onBackToDashboard();
        }else{
            navigate('/');
        }
    }

    return(
        <section className={`coming-soon-container ${showBackButton ? 'standalone-page' : 'embedded-page'}`}>
            <div className="info-section">
                <h2>This Feature is Still in <span className="highlight-text">Production!</span></h2>
                <p>We're working hard to bring you an even better experience.</p>
                <p className="launch-line">This feature will be launched soon.<Rocket size={18}/></p>
            </div>

           <div className="section-details">
                <div className="detail-item">
                    <div className="detail-icon-circle">
                        <Clock size={20}/>
                    </div>
                    <div>
                        <h3>Coming Soon</h3>
                        <p>Stay tuned for updates</p>
                    </div>
                </div>

                <div className="detail-item">
                    <Star size={24} className="detail-icon-plain"/>
                    <div>
                        <h3>Better Features</h3>
                        <p>Enchanced functionality</p>
                    </div>
                </div>

                <div className="detail-item">
                    <Zap size={24} className="detail-icon-plain"/>
                    <div>
                        <h3>A Greater Experience</h3>
                        <p>Designed with you in mind</p>
                    </div>
                </div>
           </div>

           {showBackButton &&(
                <div className="btn-back-dashboard">
                    <button type="button" onClick={handleBackClick}>
                        <ArrowLeft size={18}/>
                        <span>Back to Dashboard</span>
                    </button>
                </div>
           )}
        </section>
    );
}

export default ComingSoon