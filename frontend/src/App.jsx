import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

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
import RegisterUsers from "./pages/Dashboard/RegisterUsers";
import Settings from "./pages/Dashboard/Settings";

function App() {
  const [showAddEmployee, setShowAddEmployee] = useState(false);

  return (
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
            <DashboardLayout onAddEmployee={() => setShowAddEmployee(true)} />
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
          <Route path="register-users" element={<RegisterUsers />} />
          <Route path="settings" element={<Settings />} />
        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;