import React, { createContext, useContext, useState } from "react";

const AppContext = createContext(null);

export function useAppContext() {
  return useContext(AppContext);
}

export function AppProvider({ children }) {
  const [user, setUser] = useState({
    firstName: "Victor",
    lastName: "Emmanuel",
    email: "victor@email.com",
    phone: "+234 800 000 0000",
    role: "HR Administrator",
    avatarUrl: null,
  });

  const [company, setCompany] = useState({
    name: "Rails Tech Ltd",
    email: "admin@rails.com",
    phone: "+234 800 123 4567",
    address: "12 Marina Road, Victoria Island, Lagos",
    logoUrl: null,
  });

  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    smsNotifications: false,
  });

  const updateUser = (patch) => setUser((prev) => ({ ...prev, ...patch }));
  const updateCompany = (patch) => setCompany((prev) => ({ ...prev, ...patch }));
  const updatePreferences = (patch) => setPreferences((prev) => ({ ...prev, ...patch }));

  return (
    <AppContext.Provider value={{ user, company, preferences, updateUser, updateCompany, updatePreferences }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
