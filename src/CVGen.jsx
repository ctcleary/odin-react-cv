import './CVGen.css'
// import InputList from './InputList';
// import ContactInfo from './ContactInfo';
import TopicValuePairs from './TopicValuePairs';
import ContactInfoOutput from './ContactInfoOutput';
import SkillListOutput from './SkillListOutput';
import { useState } from "react";


function CVGen() {
    const [fullName, setFullName] = useState([
        'First',
        'M.',
        'Last'
    ]);
    const [titles, setTitles] = useState('Web Developer | Princess | Cardshark');
    const [contactFields, setContactFields] = useState([
        { id: crypto.randomUUID(), label: 'Ph', value: '(555) 555-5555' },
        { id: crypto.randomUUID(), label: 'E', value: 'me@mysite.com' },
    ]);
    const [summary, setSummary] = useState(
        'Multifaceted powerhouse of fractal exponentiation with an infinitudinous mobius strip of skill and competence. Sizzling example of a radiant star willing to steel down and buck up in the face of adversarial surface tension. An uncompromising insistence on excelsior standards and system-spanning ontology, and willing to heighten the parameters without reverance.'
    );
    const [skillLists, setSkillLists] = useState([
        { id: crypto.randomUUID(), label: 'Front End', value: 'Javascript, HTML, CSS, ReactJS' },
        { id: crypto.randomUUID(), label: 'Royal', value: 'decrees, court politics, formal dances' },
        { id: crypto.randomUUID(), label: 'Card Tricks', value: 'is this your card?' },
    ]);

    const [workExperiences, setWorkExperiences] = useState([
        {
            id: crypto.randomUUID(),
            employer: 'Sassafras Techno', 
            title: 'Front End Interloper', 
            dateStart: '2020-10-01', dateEnd: '2023-10-31', 
            detailsList: [
                'Progenitized the simulacra-balanced symphone tressels in under 10 months.',
                'Collaboradic and systemic meta-design constructed from simu-frags, improving quark percentage by 38%.',
                'Spearheaded initiative to low-thrum the tensor pylons in the CRM backlog.'
            ]
        },
        {
            id: crypto.randomUUID(),
            employer: 'BubbleTree Systems', 
            title: 'Experiential Consult', 
            dateStart: '2012-02-01', dateEnd: '2020-07-31', 
            detailsList: [
                'Forecasted unpredictive emissions of neuro-flash with a success rate of 78%.',
                'Improved open faced subtextual motherboarding productivity by 4x.',
                'Cusped the question-matrix into offshore, tantamount egress into quantized bundt units.'
            ]
        },

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

    function removeContactField(id) {
        setContactFields(
            contactFields.filter((obj) => {
                return obj.id !== id;
            })
        );
    }

    

    function addSkillList() {
        setSkillLists([
            ...skillLists,
            { id: crypto.randomUUID(), label: '', value: ''}
        ])
    }

    function setSkillList(id, label, value) {
        const foundSkillListObj = skillLists.find((obj) => {
            return obj.id === id;
        });
        const copy = skillLists.slice();

        copy.splice(
            copy.indexOf(foundSkillListObj),
            1,
            { id: id, label: label, value: value }
        );

        setSkillLists(copy);
    }

    function removeSkillList(id) {
        setSkillLists(
            skillLists.filter((obj) => {
                return obj.id !== id;
            })
        );
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
                                headline="Contact Info"
                                labelLabel="Type"
                                valueLabel="Contact Info"
                                ulClassName="contact-fields-inputs"
                                addInput={addContactField}
                                data={contactFields}
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
                                headline="Skill Lists"
                                labelLabel="Topic"
                                valueLabel="Skill List"
                                ulClassName="skill-lists-inputs"
                                addInput={addSkillList}
                                data={skillLists}
                                setTopicValuePair={setSkillList}
                                removeTopicValuePair={removeSkillList}
                                topicPlaceholder="Front End"
                                valuePlaceholder="Javascript, HTML, CSS, React"
                            />

                        <hr/>

                        <h3>Work Experience</h3>
                            {/* <WorkExperiences /> */}
                        
                        <hr/>
                    </div>
                </section>
                <section id="output">
                    <h2>Output CV</h2>
                    <div className="output-cv-container">
                        <div className="output-cv">
                            <h2>{fullName[0]} {fullName[1]} {fullName[2]}</h2>
                            <h3>{titles}</h3>
                            <ContactInfoOutput
                                contactFields={contactFields}
                            />
                            <hr />
                            <h3>Summary</h3>
                            <p className="summary-output">{summary}</p>
                            <hr />
                            <SkillListOutput
                                skillLists={skillLists}
                            />
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default CVGen;