import "../styles/EducationSection.css";
import "../styles/GeneralInforSection.css";
import {
  GraduationCap,
  Calendar,
  Pencil,
  Check,
  Plus,
  Trash2,
} from "lucide-react";
import { useState } from "react";

function createEmptyEducation() {
  return {
    id: crypto.randomUUID(),
    schoolName: "",
    studyTitle: "",
    studyDate: "",
  };
}

function EducationSection({ educationList, onSave }) {
  const [isEditing, setIsEditing] = useState(true);
  const [draflist, setDraftList] = useState(() =>
    educationList.length > 0 ? educationList : [createEmptyEducation()],
  );

  function handleFieldChange(targetId, field, value) {
    setDraftList((prev) =>
      prev.map((item) =>
        item.id === targetId ? { ...item, [field]: value } : item,
      ),
    );
  }

  function handleAddEntry() {
    setDraftList((prev) => [...prev, createEmptyEducation]);
  }

  function handleDeleteEntry(targetId) {
    setDraftList((prev) => prev.filter((item) => item.id !== targetId));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const cleanedList = draflist.filter(
      (item) =>
        item.schoolName.trim() != "" ||
        item.studyTitle.trim() !== "" ||
        item.studyDate.trim() !== "",
    );
    onSave(cleanedList);
    setIsEditing(false);
  }

  function handleEdit() {
    setDraftList(
      educationList.length > 0 ? educationList : [createEmptyEducation()],
    );
    setIsEditing(true);
  }

  return (
    <section className="cv-card">
      <div className="cv-card-header">
        <div className="cv-card-title-group">
          <div className="section-icon-badge">
            <GraduationCap size={18} />
          </div>
          <h3 className="cv-card-title">Education</h3>
        </div>
        {!isEditing && (
          <button type="button" className="edit-btn" onClick={handleEdit}>
            <Pencil size={14} />
            <span>Edit</span>
          </button>
        )}
      </div>
      {isEditing ? (
        <form className="education-form" onSubmit={handleSubmit}>
          <div className="education-entries-edit">
            {draflist.map((edu, index) => (
              <div key={edu.id} className="education-edit-block">
                <div className="entry-block-header">
                  <span className="entry-number">Education #{index + 1}</span>
                  {draflist.length > 1 && (
                    <button type="button" className="remove-entry-btn" onClick={() => handleDeleteEntry(edu.id)} aria-label={`Remove Education ${index + 1}`}>
                      <Trash2 size={14} />
                      <span>Remove</span>
                    </button>
                  )}
                </div>

                <div className="form-grid">
                  <label className="form-field form-field-full">
                    <span>School / Institution Name</span>
                    <input
                      type="text"
                      placeholder="eg..University of Sydney"
                      value={edu.schoolName}
                      onChange={(e) =>
                        handleFieldChange(edu.id, "schoolName", e.target.value)
                      }
                      required
                    />
                  </label>

                  <label className="form-field">
                    <span>Title of Study / Qualification</span>
                    <input
                      type="text"
                      placeholder="eg..Bachelor in Computer Science"
                      value={edu.studyTitle}
                      onChange={(e) =>
                        handleFieldChange(edu.id, "studyTitle", e.target.value)
                      }
                      required
                    />
                  </label>
                  <label className="form-field">
                    <span>Date of Study</span>
                    <input
                      type="text"
                      placeholder="eg..2023 - 2025"
                      value={edu.studyDate}
                      onChange={(e) =>
                        handleFieldChange(edu.id, "studyDate", e.target.value)
                      }
                      required
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
              <span>Add Education</span>
            </button>

            <button type="submit" className="section-submit-btn">
              <Check size={16} />
              <span>Submit</span>
            </button>
          </div>
        </form>
      ) : educationList.length === 0 ? (
        <p className="empty-section-text">
          No education added yet.Click Edit to add your qualifications.
        </p>
      ) : (
        <div className="education-display-list">
          {educationList.map((edu) => (
            <div key={edu.id} className="education-display-item0">
              <h4 className="edu-school">{edu.schoolName}</h4>
              <p className="edu-title">{edu.studyTitle}</p>
              {edu.studyDate && (
                <div className="edu-date">
                  <Calendar size={14} />
                  <span>{edu.studyDate}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default EducationSection;
