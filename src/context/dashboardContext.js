import { useRef } from "react";
import { useEffect } from "react";
import { createContext, useState } from "react";

export const DashboardContest = createContext(null)

export const DashboardDataProvider = ({ children }) => {
    const [section, setSection] = useState(0)
    const localSection = sessionStorage.getItem('currentsection')
    const [innerWidth, setinnerWidth] = useState(window.innerWidth)
    const [sideBarToggel, setSideBarToggel] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setinnerWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <DashboardContest.Provider value={{
            section, setSection,
            innerWidth, setinnerWidth,
            sideBarToggel, setSideBarToggel,
        }}>
            {children}
        </DashboardContest.Provider>
    )
}

