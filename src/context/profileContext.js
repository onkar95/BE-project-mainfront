import { createContext, useState } from 'react';

export const ProfileContext = createContext(null);

export const ProfileDataProvider = ({ children }) => {
    let [selectedSkills, setSelectedSkills] = useState([])
    let [selectedRoles, setSelectedRoles] = useState([])
    const [PrimaryRole, setPrimaryRole] = useState('')
    const [selectedDropdownVal, setSelectedDropdownVal] = useState('select')

    const [EmployeeSize, setEmployeeSize] = useState()
    const [Locations, setLocations] = useState("")
    const [remoteOffice, setremoteOffice] = useState('')
    const [SalaryRange, setSalaryRange] = useState('')
    const [TypeOfJobs, setTypeOfJobs] = useState('')

    const [userProfile, setuserProfile] = useState()

    const [EditFlag, setEditFlag] = useState(false)

    const [selected, setSelected] = useState(0);


    const handelRemove = (val, removefor) => {

        let ans;
        switch (removefor) {
            case 'skills':
                ans = selectedSkills.filter((Allval) => {
                    return Allval !== val;
                })
                setSelectedSkills(ans)
                break;
            case 'Roles':
                ans = selectedRoles.filter((Allval) => {
                    return Allval !== val;
                })
                setSelectedRoles(ans)
                break;

            default:
                break;
        }
    }


    const handelAdd = (val, type) => {
        let value = val.target.value
        if (value !== 'select') {
            switch (type) {
                case 'skills':
                    if (!selectedSkills.includes(value)) {
                        setSelectedSkills([...selectedSkills, value]);
                    }
                    break;
                case 'Roles':
                    if (!selectedRoles.includes(value)) {
                        setSelectedRoles([...selectedRoles, value]);
                    }
                    break;
                case 'Role':
                    setPrimaryRole(value)
                    break;
                case 'EmployeeSize':
                    setEmployeeSize(value)
                    break;
                case 'Locations':
                    setLocations(value)
                    break;
                case 'remoteOffice':
                    setremoteOffice(value)
                    break;
                case 'SalaryRange':
                    setSalaryRange(value)
                    break;
                case 'TypeOfJobs':
                    setTypeOfJobs(value)
                    break;


                default:
                    break;
            }
        }
        // setSelectedSkills([...selectedSkills, value])
    }


    return (
        <ProfileContext.Provider value={{
            selectedSkills, setSelectedSkills,
            selectedRoles, setSelectedRoles,
            PrimaryRole, setPrimaryRole,
            handelAdd, handelRemove,
            EmployeeSize, setEmployeeSize,
            Locations, setLocations,
            remoteOffice, setremoteOffice,
            SalaryRange, setSalaryRange,
            TypeOfJobs, setTypeOfJobs,
            selected, setSelected,
            selectedDropdownVal, setSelectedDropdownVal,
            EditFlag, setEditFlag,
            userProfile, setuserProfile
        }}>
            {children}
        </ProfileContext.Provider >
    )
}

export default ProfileContext;