import '../styles/GeneralInforSection.css';
import { useState } from 'react';
import {User,Mail,Phone,MapPin,Pencil,Check} from 'lucide-react';

function GeneralInfo({generalInfo, onSave}){

    const [isEditing,setIsEditing] = useState(true);
    const [formData,setFormData] = useState(generalInfo);

    function handleChange(e){
        const {name,value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]:value
        }));
    }

    function handleSubmit(e){
        e.preventDefault();
        onSave(formData);
        setIsEditing(false);
    }

    function handleEdit(){
        setFormData(generalInfo);
        setIsEditing(true);
    }

    const initials = (generalInfo.fullName || 'Guest User').trim().split(/\s+/).slice(0,2).map((part) => part[0]?.toUpperCase()).join('');

    return(
        <section className='cv-card'>
            <div className='cv-card-header'>
               <div className='cv-card-title-group'>
                    <div className='section-icon-badge'>
                        <User size={18}/>
                    </div>
                    <h3 className='cv-card-title'>General Information</h3>
               </div>

                {!isEditing && (
                    <button type='button' className='edit-btn' onClick={handleEdit}>
                        <Pencil size={14}/>
                        <span>Edit</span>
                    </button>
                )}
            </div>
            {isEditing ? (
                <form className='general-form' onSubmit={handleSubmit}>
                    <div className='form-grid'>
                        <label className='form-field'>
                            <span>Full Name</span>
                            <input type='text' name='fullName' placeholder='eg.Joe Owens' value={formData.fullName} onChange={handleChange} required/>
                        </label>
                        <label className='form-field'>
                            <span>Professional Title / Role</span>
                            <input type='text' name='roleTitle' placeholder='eg.Software Developer' value={formData.roleTitle} onChange={handleChange}/>
                        </label>
                        <label className='form-field'>
                            <span>Email Address</span>
                            <input type='email' name='email' placeholder='eg user@mail.com' value={formData.email} onChange={handleChange} required/>
                        </label>
                        <label className='form-field'>
                            <span>Phone Number</span>
                            <input type='tel' name='phone' placeholder='eg +2547*****' value={formData.phone} onChange={handleChange} required/>
                        </label>

                        <label className='form-field form-field-full'>
                            <span>Location</span>
                            <input type='text' name='location' placeholder='eg. Nairobi,Kenya' value={formData.location} onChange={handleChange}/>
                        </label>
                    </div>

                    <div className='form-actions'>
                        <button type='submit' className='section-submit-btn'>
                            <Check size={16}/>
                            <span>Submit</span>
                        </button>

                    </div>
                </form>
            ):(
                <div className='general-display'>
                    <div className='guest-avatar'>{initials}</div>
                    <div className='general-details'>
                        <h4 className='display-name'>{generalInfo.fullName}</h4>
                        {generalInfo.roleTitle && (
                            <p className='display-role'>{generalInfo.roleTitle}</p>
                        )}

                        <ul className='contact-list'>
                            <li>
                                <Mail size={15}/>
                                <span>{generalInfo.email}</span>
                            </li>
                            <li>
                                <Phone size={15}/>
                                <span>{generalInfo.phone}</span>
                            </li>
                            {generalInfo.location && (
                                <li>
                                    <MapPin size={15}/>
                                    <span>{generalInfo.location}</span>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            )}

        </section>
    );
}

export default GeneralInfo;