import './CVGen.css'
// import InputList from './InputList';
// import ContactInfo from './ContactInfo';
import TopicValuePairs from './TopicValuePairs';
import WorkExperiences from './WorkExperiences';
import References from './References';
import ContactInfoOutput from './ContactInfoOutput';
import SkillListOutput from './SkillListOutput';
import WorkExperiencesOutput from './WorkExperiencesOutput';
import ReferencesOutput from './ReferencesOutput';
import { useState } from "react";


function CVGen() {
    const [fullName, setFullName] = useState([
        'First',
        'M.',
        'Last'
    ]);
    const [titles, setTitles] = useState('Web Developer • Princess • Cardshark');
    const [contactFields, setContactFields] = useState([
        { id: crypto.randomUUID(), label: 'Ph', value: '(555) 555-5555' },
        { id: crypto.randomUUID(), label: 'E', value: 'me@mysite.com' },
        { id: crypto.randomUUID(), label: '', value: 'https://mysite.com/' },
    ]);
    const [summary, setSummary] = useState(
        'Multifaceted powerhouse of fractal exponentiation with an infinitudinous mobius strip of skill and competence. Sizzling example of a radiant star willing to steel down and buck up in the face of adversarial surface tension. An uncompromising insistence on excelsior standards and system-spanning ontology, and willing to heighten the parameters without reverance.'
    );
    const [skillLists, setSkillLists] = useState([
        { id: crypto.randomUUID(), label: 'Front End', value: 'Javascript • HTML • CSS • ReactJS' },
        { id: crypto.randomUUID(), label: 'Royal', value: 'decrees • court politics • formal dances' },
        { id: crypto.randomUUID(), label: 'Card Tricks', value: '"Is this your card?"  • fool-making • levitation' },
    ]);

    const [workExperiences, setWorkExperiences] = useState([
        {
            id: crypto.randomUUID(),
            employer: 'Sassafras Techno', 
            title: 'Front End Interloper', 
            dateStart: '2020-10-01', dateEnd: '2023-10-31', 
            details: '• Progenitized the simulacra-balanced symphone tressels in under 10 months.' +
                '• Collaboradic and systemic meta-design constructed from simu-frags, improving quark percentage by 38%.' +
                '• Spearheaded initiative to low-thrum the tensor pylons in the CRM backlog.'
        },
        {
            id: crypto.randomUUID(),
            employer: 'BubbleTree Systems', 
            title: 'Existential Consult', 
            dateStart: '2012-02-01', dateEnd: '2020-07-31', 
            details: '• Forecasted unpredictive emissions of neuro-flash with a success rate of 78%.' +
                '• Improved open faced subtextual motherboarding productivity by 4x.' +
                '• Cusped the question-matrix into offshore, tantamount egress into quantized bundt units.'
        },

    ]);
    const [references, setReferences] = useState([
        { name: 'Tawniton Jemini', position: 'TestKitWatch - Fire Marshal', contact: 'tjemini@testkitwatch.fake.com'},
        { name: 'Koobaby Watchout', position: 'HomeGoods - Tissue Paper Specialist', contact: 'koobaby@hg.fake.com'},
        { name: 'The Fir', position: 'Forest God', contact: 'thefir@firmament.fake.com'},
    ])

    function setNameFields(first, middle, last) {
        setFullName([first, middle, last]);
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

    function setContactField(id, label, value) {
        const foundContactIdx = contactFields.findIndex((obj) => {
            return obj.id === id;
        });

        const copy = contactFields.slice();
        copy.splice(
            foundContactIdx, 
            1, 
            { id: id, label: label, value: value }
        );

        setContactFields(copy);
    }


    function addSkillList() {
        setSkillLists([
            ...skillLists,
            { id: crypto.randomUUID(), label: '', value: ''}
        ])
    }

    function removeSkillList(id) {
        setSkillLists(
            skillLists.filter((obj) => {
                return obj.id !== id;
            })
        );
    }

    function setSkillList(id, label, value) {
        const foundSkillListIdx = skillLists.findIndex((obj) => {
            return obj.id === id;
        });
        const copy = skillLists.slice();

        copy.splice(
            foundSkillListIdx,
            1,
            { id: id, label: label, value: value }
        );

        setSkillLists(copy);
    }



    function addWorkExperience() {
        setWorkExperiences([
            ...workExperiences,
            { employer: '', title: '', startDate: '', endDate: '', details: '' }
        ])
    }

    function removeWorkExperience(id) {
        setWorkExperiences(
            workExperiences.filter((obj) => {
                return obj.id !== id;
            })
        )
    }

    function setWorkEmployer(id, value) {
        const foundWorkExpObj = workExperiences.find((obj) => {
            return obj.id === id;
        });
        const copy = workExperiences.slice();

        copy.splice(
            copy.indexOf(foundWorkExpObj),
            1,
            {
                ...foundWorkExpObj,
                employer: value
            }
        );
        setWorkExperiences(copy);
    }
    function setWorkTitle(id, value) {
        const foundWorkExpObj = workExperiences.find((obj) => {
            return obj.id === id;
        });
        const copy = workExperiences.slice();

        copy.splice(
            copy.indexOf(foundWorkExpObj),
            1,
            {
                ...foundWorkExpObj,
                title: value
            }
        );
        setWorkExperiences(copy);
    }
    function setWorkDateStart(id, value) {
        const foundWorkExpObj = workExperiences.find((obj) => {
            return obj.id === id;
        });
        const copy = workExperiences.slice();

        copy.splice(
            copy.indexOf(foundWorkExpObj),
            1,
            {
                ...foundWorkExpObj,
                dateStart: value

            }
        );
        setWorkExperiences(copy);
    }
    function setWorkDateEnd(id, value) {
        const foundWorkExpObj = workExperiences.find((obj) => {
            return obj.id === id;
        });
        const copy = workExperiences.slice();

        copy.splice(
            copy.indexOf(foundWorkExpObj),
            1,
            {
                ...foundWorkExpObj,
                dateEnd: value

            }
        );
        setWorkExperiences(copy);
    }
    function setWorkDetails(id, value) {
        const foundWorkExpObj = workExperiences.find((obj) => {
            return obj.id === id;
        });
        const copy = workExperiences.slice();

        copy.splice(
            copy.indexOf(foundWorkExpObj),
            1,
            {
                ...foundWorkExpObj,
                details: value
            }
        )
        setWorkExperiences(copy);
    }



    function addReference() {
        setReferences([
            ...references,
            { name: '', position: '', contact: ''}
        ])
    }

    function removeReference(id) {
        setReferences(
            references.filter((obj) => {
                return obj.id !== id;
            })
        )
    }

    function setReference(id, name, position, contact) {
        const foundRefIdx = references.findIndex((obj) => {
            return obj.id === id;
        });

        const copy = references.slice();
        copy.splice(
            foundRefIdx,
            1,
            { id: id, name: name, position: position, contact: contact }
        );

        setReferences(copy);
    }

    return (
        <>
            <h1 id="top-level-headline">The Odin Project - React CV Generator Assignment</h1>
            <div className="cv-gen-wrapper">
                <section id="input">
                    <div className="input-fields">
                        <h2>CV Data Input</h2>
                        <hr />
                        <h3>Full Name</h3>
                        <div className="name-field">
                            <label htmlFor="first-name" className="name-label">First</label>
                            <input id="first-name" className="name-input" type="text" value={fullName[0]} onChange={(e) => { setNameFields(e.target.value, fullName[1], fullName[2])}} />
                        </div>
                        <div className="name-field">
                            <label htmlFor="middle-name" className="name-label">Middle </label>
                            <input id="middle-name" className="name-input" type="text" value={fullName[1]} onChange={(e) => { setNameFields(fullName[0], e.target.value, fullName[2]) }} />
                        </div>
                        <div className="name-field">
                            <label htmlFor="last-name" className="name-label">Last </label>    
                            <input id="last-name" className="name-input" type="text" value={fullName[2]} onChange={(e) => { setNameFields(fullName[0], fullName[1], e.target.value)}} />
                        </div>
                        <hr />
                        <h3>Title(s)</h3>
                        <input className="titles" type="text" value={titles} onChange={(e) => { setTitles(e.target.value) }} />
                        
                        <hr />

                        <TopicValuePairs 
                                data={contactFields}
                                headline="Contact Info"
                                labelLabel="Type"
                                valueLabel="Contact Info"
                                ulClassName="contact-fields-inputs"
                                addInput={addContactField}
                                setTopicValuePair={setContactField}
                                removeTopicValuePair={removeContactField}
                                topicPlaceholder="Ph:"
                                valuePlaceholder="(555) 555-5555"
                            />
                        <hr />

                        <h3>Summary</h3>
                        <textarea className="summary-textarea" value={summary} onChange={(e) => { setSummary(e.target.value) }} />

                        <hr />

                        <TopicValuePairs 
                                data={skillLists}
                                headline="Skill Lists"
                                labelLabel="Topic"
                                valueLabel="Skill List"
                                ulClassName="skill-lists-inputs"
                                addInput={addSkillList}
                                setTopicValuePair={setSkillList}
                                removeTopicValuePair={removeSkillList}
                                topicPlaceholder="Front End"
                                valuePlaceholder="Javascript, HTML, CSS, React"
                            />

                        <hr/>

                        <WorkExperiences 
                            data={workExperiences}
                            addWorkExperience={addWorkExperience}
                            setWorkEmployer={setWorkEmployer}
                            setWorkTitle={setWorkTitle}
                            setWorkDateStart={setWorkDateStart}
                            setWorkDateEnd={setWorkDateEnd}
                            setWorkDetails={setWorkDetails}
                            removeWorkExperience={removeWorkExperience}
                        />
                        
                        <hr/>

                        <References 
                            data={references}
                            addReference={addReference}
                            removeReference={removeReference}
                            setReference={setReference}
                        />
                    </div>
                </section>
                <section id="output">
                    <h2>Output CV</h2>
                    <div className="output-cv-container">
                        <div className="output-cv">
                            <header className="output-header">
                                <h2>{fullName[0]} {fullName[1]} {fullName[2]}</h2>
                                <h3>{titles}</h3>
                                <ContactInfoOutput
                                    contactFields={contactFields}
                                />
                            </header>
                            <section className="output-summary">
                                <h3>Summary</h3>
                                <p className="summary-text-output">{summary}</p>
                            </section>
                            <section className="output-skills">
                                <SkillListOutput
                                    skillLists={skillLists}
                                />
                            </section>
                            <section className="output-work-experience">
                                <WorkExperiencesOutput
                                    workExperiences={workExperiences}
                                />
                            </section>
                            <section className="output-work-experience">
                                <ReferencesOutput
                                    references={references}
                                />
                            </section>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default CVGen;