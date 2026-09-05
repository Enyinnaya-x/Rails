import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { AppProvider } from "./context/AppContext";

// Landing
import LandingPage from "./pages/Landing/landingpage";

// Auth
import SignUp from "./pages/Auth/SignUp";
import Login from "./pages/Auth/Login";

// Dashboard
import DashboardLayout from "./components/dashboard/DashboardLayout";
import DashboardHome from "./pages/Dashboard/DashboardHome";
import Users from "./pages/Dashboard/Users";
import Payroll from "./pages/Dashboard/Payroll";
import Messaging from "./pages/Dashboard/Messaging";
import Settings from "./pages/Dashboard/Settings";
import Reports from "./pages/Dashboard/Reports";

// Profile
import Profile from "./pages/Profiles/profile";

function App() {
  const [showAddEmployee, setShowAddEmployee] = useState(false);

  return (
    <AppProvider>
      <BrowserRouter>
      <Routes>

        {/* Landing */}
        <Route path="/" element={<LandingPage />} />

        {/* Authentication */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <DashboardLayout
              onAddEmployee={() => setShowAddEmployee(true)}
            />
          }
        >
          <Route
            index
            element={
              <DashboardHome
                showAddEmployee={showAddEmployee}
                setShowAddEmployee={setShowAddEmployee}
              />
            }
          />

          <Route path="users" element={<Users />} />
          <Route path="payroll" element={<Payroll />} />
          <Route path="messaging" element={<Messaging />} />
          <Route path="settings" element={<Settings />} />
          <Route path="reports" element={<Reports />} />
          <Route path="profile" element={<Profile />} />

        </Route>

      </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;