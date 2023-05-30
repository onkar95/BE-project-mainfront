import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import img from '../../Assets/img.jpg';
import "./nav.css";

const CustomDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOptionClick = () => {
        // Handle the option click logic here
    };
    console.log(isOpen)
    const handleToggle = (isOpen) => {
        setIsOpen(isOpen);
    };

    return (
        <Dropdown show={isOpen} onToggle={handleToggle}>
            <Dropdown.Toggle variant="success" id="dropdown-basic" onClick={() => setIsOpen(!isOpen)}>
                <img className="profile_img" src={img} alt="Profile" />
            </Dropdown.Toggle>

            <Dropdown.Menu show={isOpen}>
                <Dropdown.Item onClick={handleOptionClick}>
                    <button>Profile 1</button>
                </Dropdown.Item>
                <Dropdown.Item onClick={handleOptionClick}>
                    <button>Profile 2</button>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default CustomDropdown;
