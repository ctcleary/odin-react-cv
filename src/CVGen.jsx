import './CVGen.css'
// import InputList from './InputList';
import ContactInfo from './ContactInfo';
import { useState } from "react";


function CVGen() {
    const [contactFields, setContactFields] = useState([
        { id: crypto.randomUUID(), label: 'Ph', value: '(555) 555-5555' },
        { id: crypto.randomUUID(), label: 'E', value: 'me@mysite.com' }
    ]);

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
                        <ContactInfo 
                                headline="Contact Info"
                                ulClassName="contact-fields"
                                addContactField={addContactField}
                                contactFields={contactFields}
                                setContactField={setContactField}s
                                removeContactField={removeContactField}
                            />
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
                    <div className="output-cv">
                        <h2>Output CV</h2>
                        <h3>Contact Info</h3>
                        <ul>
                        { 
                            contactFields.map((obj) => {
                                console.log(obj);
                                return (
                                    <li key={obj.id}>{obj.label}: {obj.value}</li>
                                );
                            }) 
                        }
                        </ul>
                    </div>
                </section>
            </div>
        </>
    )
}

export default CVGen;