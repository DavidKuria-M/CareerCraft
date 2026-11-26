import { useState } from "react";
import MainHeader from "./components/Mainheader";
import SubmitBanner from "./components/Submitbanner";
import GeneralInfo from "./components/GeneralInfoSection";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import CvPreview from "./components/CVPreview";
import { Routes,Route, useLocation } from "react-router";

//justimporting it first to see it,then fix the routing issue
import ComingSoon from "./components/ComingSoon";
import './App.css';
import DashboardLayout from "./components/Dashboard";


function App() {

  const [user] = useState(null);
  const [searchQuery,setSearchQuery] = useState('');
  const [isPreviewMode,setIsPreviewMode] = useState(false);
  const [generalInfo,setGeneralInfo] = useState({fullName: '',roleTitle:'',email:'',phone: '',location:'',});
  const [educationList,setEducationList] = useState([]);
  const [experienceList,setExperienceList] = useState([]);

  const location = useLocation();

  const routeToTab = {
    '/':'my-cv',
    '/job-board':'job-board',
    '/my-application':'my-application',
    '/explore-jobs' : 'explore-jobs',
    '/settings':'settings',
  }

  const activeTab = routeToTab[location.pathname] || 'my-cv';

  const currentUserName = user?.name?.trim || 'Guest';
  const isAuthenticated = Boolean(user);

  function handleTogglePreview(){
    setIsPreviewMode((prev) => !prev);
  }
  function handleSubmitCV(){
   //still to be worked on 
  }

  return(
    <Routes>
      <Route 
        path="/sign-in"
        element={<ComingSoon showBackButton={true} />}
      />
      <Route 
        element={
          <DashboardLayout activeTab={activeTab} userName={currentUserName} isAuthenitcated={isAuthenticated} searchQuery={searchQuery} onSearchChange={setSearchQuery}/>
        }
      >
        <Route
          path="/"
          element={
            <>
              <MainHeader isPreviewMode={isPreviewMode} onPreview={handleTogglePreview} onSubmitCV={handleSubmitCV}/>

              <div className={`cv-workspace ${isPreviewMode ? 'single-column' : ''}`}>
                {!isPreviewMode && (
                  <div className="cv-forms-column">
                    <GeneralInfo generalInfo={generalInfo} onSave={setGeneralInfo}/>
                    <EducationSection educationList={educationList} onSave={setEducationList}/>
                    <ExperienceSection experienceList={experienceList} onSave={setExperienceList}/>

                  </div>
                )}
                <CvPreview generalInfo={generalInfo} educationList={educationList} experienceList={experienceList} isPreviewMode={isPreviewMode}/>

              </div>
              <SubmitBanner onSubmitCV={handleSubmitCV}/>
            </>
          }
        />


      <Route path="/job-board" element={<ComingSoon showBackButton={false}/>}/>
      <Route path="/my-application" element={<ComingSoon showBackButton={false}/>}/>
      <Route path="/settings" element={<ComingSoon showBackButton={false}/>}/>
      <Route path="/explore-jobs" element={<ComingSoon showBackButton={false}/>}/>
    </Route>
    </Routes>   
  );
}



export default App
