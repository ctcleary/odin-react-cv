import './CVGen.css'
// import InputList from './InputList';
import ContactInfo from './ContactInfo';
import ContactInfoOutput from './ContactInfoOutput';
import { useState } from "react";


function CVGen() {
    const [fullName, setFullName] = useState([
        'First',
        'M.',
        'Last'
    ]);
    const [summary, setSummary] = useState('Executive summary.');
    const [titles, setTitles] = useState('Web Developer | Princess | Cardshark');
    const [contactFields, setContactFields] = useState([
        { id: crypto.randomUUID(), label: 'Ph', value: '(555) 555-5555' },
        { id: crypto.randomUUID(), label: 'E', value: 'me@mysite.com' }
    ]);

    function setNameFields(first, middle, last) {
        setFullName([first, middle, last]);
    }

    function setContactField(id, label, value) {
        const foundFieldObj = contactFields.find((obj) => {
            return obj.id === id;
        });
        const copy = contactFields.slice();

        copy.splice(
            copy.indexOf(foundFieldObj), 
            1, 
            { id: id, label: label, value: value }
        );

        setContactFields(copy);
    }

    function addContactField() {
        setContactFields([
            ...contactFields, 
            { id: crypto.randomUUID(), label: '', value: '' }
        ])
    }

    function removeContactField(id) {
        setContactFields(
            contactFields.filter((obj) => {
                return obj.id !== id;
            })
        );
    }

    return (
        <>
            <h1>The Odin Project - React CV Generator Assignment</h1>
            <div className="cv-gen-wrapper">
                <section id="input">
                    <div className="input-fields">
                        <h2>Input fields</h2>
                        <hr />
                        <h3>Full Name</h3>
                        <div className="name-field">
                            <label htmlFor="first-name" className="name-label">First</label>
                            <input id="first-name" className="name-input" type="text" value={fullName[0]} onChange={(e) => { setNameFields(e.target.value, fullName[1], fullName[2])}} />
                        </div>
                        <div className="name-field">
                            <label htmlFor="middle-name" className="name-label">Middle </label>
                            <input id="middle-name" className="name-input" type="text" value={fullName[1]} onChange={(e) => { setNameFields(fullName[0], e.target.value), fullName[2]}} />
                        </div>
                        <div className="name-field">
                            <label htmlFor="last-name" className="name-label">Last </label>    
                            <input id="last-name" className="name-input" type="text" value={fullName[2]} onChange={(e) => { setNameFields(fullName[0], fullName[1], e.target.value)}} />
                        </div>
                        <hr />
                        <h3>Title(s)</h3>
                        <input className="titles" type="text" value={titles} onChange={(e) => { setTitles(e.target.value) }} />
                        
                        <hr />

                        <ContactInfo 
                                headline="Contact Info"
                                ulClassName="contact-fields"
                                addContactField={addContactField}
                                contactFields={contactFields}
                                setContactField={setContactField}s
                                removeContactField={removeContactField}
                            />
                        <hr />

                        <h3>Summary</h3>
                        <textarea className="summary-textarea" value={summary} onChange={(e) => { setSummary(e.target.value) }} />

                        <hr />
                        {/* <div>
                            <button type="button"
                                onClick={addContactField}>
                                    +
                            </button>
                        </div> */}
                        {/* <div>
                            <InputList 
                                headline="Contact Info"
                                fieldName="Contact Info"
                                ulClassName="contact-fields"
                                addContactField={addContactField}
                                contactFields={contactFields}
                                setContactField={setContactField}
                                setContactFields={setContactFields}
                                removeContactField={removeContactField}
                            />
                        </div> */}
                        {/* <ul className="contact-fields">
                            { contactFieldsEls }
                        </ul> */}
                    </div>
                </section>
                <section id="output">
                    <div className="output-cv-container">
                        <h2>Output CV</h2>
                        <hr/>
                        <div className="output-cv">
                            <h2>{fullName[0]} {fullName[1]} {fullName[2]}</h2>
                            <h3>{titles}</h3>
                            <ContactInfoOutput
                                contactFields={contactFields}
                            />
                            <hr />
                            <h3>Summary</h3>
                            <p>{summary}</p>
                            <hr />
                            {/* <ul>
                            { 
                                contactFields.map((obj) => {
                                    console.log(obj);
                                    return (
                                        <li key={obj.id}>{obj.label}: {obj.value}</li>
                                    );
                                }) 
                            }
                            </ul> */}
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default CVGen;