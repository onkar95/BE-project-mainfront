import { createContext, useState } from "react";

const DashboardContest = createContext(null)

export const DashboardDataProvider = ({ children }) => {
    const [section, setSection] = useState(0)

    return (
        <DashboardContest.Provider value={{
            section, setSection
        }}>
            {children}
        </DashboardContest.Provider>
    )
}

export default DashboardContest