import '../styles/CVPreview.css';
import { Mail,Phone,MapPin,FileText } from 'lucide-react';

function CvPreview({generalInfo,educationList,experienceList,isPreviewMode,}){

    const hasGeneralInfo = generalInfo.fullName || generalInfo.roleTitle || generalInfo.email || generalInfo.phone  || generalInfo.location;


    return(
        <aside className={`cv-preview-wrapper ${isPreviewMode ? 'preview-expanded' : ''}`} arial-label="Live CV Preview">
            <div className='cv-preview-badge'>
                <FileText size={14}/>
                <span>Live CV Preview</span>
            </div>

            <article className='cv-paper'>
                <header className='cv-paper-header'>
                    <h2 className='cv-paper-name'>
                        {generalInfo.fullName || 'Your Full Name'}
                    </h2>
                    {generalInfo.roleTitle && (
                        <p className='cv-paper-role'>{generalInfo.roleTitle}</p>
                    )}
                    {hasGeneralInfo ? (
                        <div className='cv-paper-contacts'>
                            {generalInfo.email &&(
                                <span>
                                    <Mail size={13}/>
                                    {generalInfo.email}
                                </span>
                            )}
                            {generalInfo.phone &&(
                                <span>
                                    <Phone size={13}/>
                                    {generalInfo.phone}
                                </span>
                            )}
                            {generalInfo.location &&(
                                <span>
                                    <MapPin size={13}/>
                                    {generalInfo.location}
                                </span>
                            )}
                        </div>
                    ):(
                        <p className='cv-paper-placeholder'>
                            Fill out and submit your General Information on the left to populate your CV header.
                        </p>
                    )}
                </header>

                <section className='cv-paper-section'>
                    <h3 className='cv-paper-section-title'>Education</h3>
                    {educationList.length === 0 ?(
                        <p className='cv-paper-placeholder'>
                            Your submitted qualifications will appear here.
                        </p>
                    ):(
                        <div className='cv-paper-entries'>
                            {educationList.map((edu) => {
                                return(
                                    <div key={edu.id} className='cv-paper-entry'>
                                    <div className='cv-paper-entry-top'>
                                        <strong className='cv-paper-entry-primary'>
                                            {edu.schoolName}
                                        </strong>
                                        {edu.studyDate && (
                                            <span className='cv-paper-entry-date'>{edu.studyDate}</span>
                                        )}
                                    </div>
                                        <p className='cv-paper-entry-secondary'>{edu.studyTitle}</p>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </section>

                <section className='cv-paper-section'>
                    <h3 className='cv-paper-section-title'>Work Experience</h3>
                    {experienceList.length === 0 ? (
                        <p className='cv-paper-placeholder'>
                            Your submitted work experience and responsibilities will appear here.
                        </p>
                    ):(
                        <div className='cv-paper-entries'>
                            {experienceList.map((exp) => {
                                return(
                                    <div className='cv-paper-entry' key={exp.id}>
                                        <div className='cv-paper-entry-top'>
                                            <div>
                                                <strong className='cv-paper-entry-primary'>{exp.positionTitle}</strong>
                                                <span className='cv-paper-company'>{''} - {exp.companyName}</span>
                                            </div>

                                            {exp.dateRange &&(
                                                <span className='cv-paper-entry-date'>{exp.dateRange}</span>
                                            )}
                                        </div>
                                        {exp.responsibilities?.length > 0 && (
                                            <ul className='cv-paper-bullets'>
                                                {exp.responsibilities.map((point, idx) => (
                                                    <li key={`${exp.id}-preview-bullet-${idx}`}>{point}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </section>
            </article>
        </aside>
    );

}

export default CvPreview