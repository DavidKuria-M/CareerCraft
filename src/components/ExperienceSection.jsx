import "../styles/GeneralInforSection.css";
import '../styles/ExperienceSection.css';
import { Briefcase, Calendar, Pencil, Check, Plus, Trash2} from "lucide-react";
import { useState } from "react";

function createEmptyExperience() {
    return {
        id: crypto.randomUUID(),
        companyName: '',
        positionTitle: '',
        dateRange: '',
        responsibilitiesText: '',
    };
}

function parseResponsibilities(text = '') {
    return text.split('\n').map((line) => line.replace(/^[-•*]\s*/, '').trim()).filter(Boolean);
}


function ExperienceSection({ experienceList, onSave }) {

    const [isEditing, setIsEditing] = useState(true);

    const [draftList, setDraftList] = useState(() => experienceList.length > 0 ? experienceList : [createEmptyExperience()]);

    function handleFieldChange(targetId, field, value) {
        setDraftList((prev) => prev.map((item) => item.id === targetId ? { ...item, [field]: value } : item));
    }

    function handleAddEntry() {
        setDraftList((prev) => [...prev, createEmptyExperience()]);
    }

    function handleDeleteEntry(targetId) {
        setDraftList((prev) => prev.filter((item) => item.id !== targetId));
    }

    function handleSubmit(e) {
        e.preventDefault();
        const cleanedList = draftList.filter(
            (item) =>
                item.companyName.trim() !== '' || item.positionTitle.trim() !== '' || item.dateRange.trim() !== '' || item.responsibilitiesText.trim() !== ''
        ).map((item) => ({
            ...item,
            responsibilities: parseResponsibilities(item.responsibilitiesText),
        })
        );
        onSave(cleanedList);
        setIsEditing(false);

        /*Debugging*/
        console.log(cleanedList);
    }

    

    function handleEdit() {
        setDraftList(
            experienceList.length > 0 ? experienceList : [createEmptyExperience()]
        );
        setIsEditing(true);
    }

    return (
    <section className="cv-card">
      <div className="cv-card-header">
        <div className="cv-card-title-group">
          <div className="section-icon-badge">
            <Briefcase size={18} />
          </div>
          <h3 className="cv-card-title">Work Experience</h3>
        </div>

        {!isEditing && (
          <button className="edit-btn" type="button" onClick={handleEdit}>
            <Pencil size={14} />
            <span>Edit</span>
          </button>
        )}
      </div>

      {isEditing ? (
        <form className="experience-form" onSubmit={handleSubmit}>
          <div className="experience-entries-edit">
            {draftList.map((exp, index) => (
              <div key={exp.id} className="experience-edit-block">
                <div className="entry-block-header">
                  <span className="entry-number">Experience #{index + 1}</span>
                  {draftList.length > 1 && (
                    <button
                      type="button"
                      className="remove-entry-btn"
                      onClick={() => handleDeleteEntry(exp.id)}
                      aria-label={`Remove Experience ${index + 1}`}
                    >
                      <Trash2 size={14} />
                      <span>Remove</span>
                    </button>
                  )}
                </div>

                <div className="form-grid">
                  <label className="form-field">
                    <span>Company Name</span>
                    <input
                      type="text"
                      placeholder="eg. Microsoft"
                      value={exp.companyName}
                      onChange={(e) =>
                        handleFieldChange(exp.id, 'companyName', e.target.value)
                      }
                      required
                    />
                  </label>

                  <label className="form-field">
                    <span>Position Title</span>
                    <input
                      type="text"
                      placeholder="eg. CyberSecurity Analyst"
                      value={exp.positionTitle}
                      onChange={(e) =>
                        handleFieldChange(
                          exp.id,
                          'positionTitle',
                          e.target.value
                        )
                      }
                      required
                    />
                  </label>

                  <label className="form-field form-field-full">
                    <span>Date Range</span>
                    <input
                      type="text"
                      placeholder="eg. Jan 2025 - Apr 2026"
                      value={exp.dateRange}
                      onChange={(e) =>
                        handleFieldChange(exp.id, 'dateRange', e.target.value)
                      }
                      required
                    />
                  </label>

                  <label className="form-field form-field-full">
                    <span>Main Responsibilities (one per line)</span>
                    <textarea
                      rows={5}
                      placeholder={
                        'Monitored networks and analyzed security logs\nAutomated incident detection using Python\nConducted internal app pentesting'
                      }
                      value={exp.responsibilitiesText}
                      onChange={(e) =>
                        handleFieldChange(
                          exp.id,
                          'responsibilitiesText',
                          e.target.value
                        )
                      }
                    />
                  </label>
                </div>
              </div>
            ))}
          </div>

          <div className="multi-form-actions">
            <button
              type="button"
              className="add-entry-btn"
              onClick={handleAddEntry}
            >
              <Plus size={16} />
              <span>Add Experience</span>
            </button>

            <button type="submit" className="section-submit-btn">
              <Check size={16} />
              <span>Submit</span>
            </button>
          </div>
        </form>
      ) : experienceList.length === 0 ? (
        <p className="empty-section-text">
          No work experience added yet. Click Edit to add your roles.
        </p>
      ) : (
        <div className="experience-display-list">
          {experienceList.map((exp) => (
            <div key={exp.id} className="experience-display-item">
              <div className="exp-top-row">
                <div>
                  <h4 className="exp-company">{exp.companyName}</h4>
                  <p className="exp-position">{exp.positionTitle}</p>
                </div>

                {exp.dateRange && (
                  <div className="exp-date">
                    <Calendar size={14} />
                    <span>{exp.dateRange}</span>
                  </div>
                )}
              </div>

              {exp.responsibilities?.length > 0 && (
                <ul className="exp-bullets">
                  {exp.responsibilities.map((point, idx) => (
                    <li key={`${exp.id}-bullet-${idx}`}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default ExperienceSection;