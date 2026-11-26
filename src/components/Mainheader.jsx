import '../styles/Mainheader.css';
import { Eye,Send } from 'lucide-react';

function MainHeader({onPreview,onSubmitCV,isPreviewMode = false}){

    return(
        <header className='header-section'>
            <div className='text-title'>
                <h2 className='header-title'>Build Your Professional CV</h2>
                <p className='header-text'>Fill in the details below to create your CV.You can edit anytime</p>
            </div>

            <div className='header-buttons'>
                <button className='preview' type='button' aria-label='Preview Cv' onClick={() => onPreview?.()}>
                    <Eye size={16}/>
                    <span>{isPreviewMode ? 'Back to Edit' : 'Preview'}</span>
                </button>

                <button className='submit-btn' type='button' aria-label='Submit Cv' onClick={() => onSubmitCV?.()}>
                    <Send size={16}/>
                    <span>Submit CV</span>
                </button>

            </div>
        </header>
    );
}

export default MainHeader;