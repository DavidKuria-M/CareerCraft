import '../styles/Submitbanner.css';
import { Rocket,Send} from 'lucide-react';

function SubmitBanner({onSubmitCV}){

    return(
        <footer className='submit-banner'>
            <div className='left-side-panel'>
                <div className='rocket-wrapper'>
                    <Rocket size={18} className='rocket-icon'/>
                </div>
                <div className='banner-text'>
                    <h3 className='next-step-title'>Ready to take the next step?</h3>
                    <p className='submit-cv-text'>Submit your CV to match with available job opportunities.</p>
                </div>
            </div>

            <button type='button' className='cv-submit-footer' onClick={() => onSubmitCV?.()}>
                <Send size={12} className='send-icon'/>
                <span className='submit'>Submit CV</span>
            </button>

        </footer>
    );
}


export default SubmitBanner;