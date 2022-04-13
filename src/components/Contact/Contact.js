import './Contact.css';
import React from 'react';

const Contact = () => {
    return(
        <div >
            <h1 className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Contactenos</h1>
        </div>
    )
}

export default Contact;