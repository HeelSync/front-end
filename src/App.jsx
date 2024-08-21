import { BrowserRouter, Navigate, Route,  Routes } from "react-router-dom";
import Home from "./ui/Home";
import store from "./state/store";
import { Provider } from "react-redux";

import AppLayout from "./ui/AppLayout";
import Dashboard from "./pages/Dashboard";
import Calendar from './pages/Calendar';
import ClassRegistration from './pages/ClassRegistration';
import StudyAbroadPlanner from './pages/StudyAbroadPlanner';
import Settings from "./pages/Settings";



function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />}/>
            <Route path="dashboard" element={<Dashboard />}/>
            <Route path="calendar" element={<Calendar />}/>
            <Route path="registration" element={<ClassRegistration />}/>
            <Route path="studyabroadplanner" element={<StudyAbroadPlanner />}/>
            <Route path="settings" element={<Settings />} />
          </Route>    
        </Routes>
    </BrowserRouter>
  </Provider>
  )
 
}

export default App
