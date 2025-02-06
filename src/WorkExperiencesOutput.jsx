import './WorkExperiencesOutput.css';

function WorkExperiencesOutput({ workExperiences }) {

    return workExperiences.length <= 0 ? ( <></> ) :
        (
        <div id="output-cv-work-experience">
            <h3>Work Experience</h3>
            <div className="work-experience-list-output">
                { 
                    workExperiences.map((obj) => {
                        return (
                            <div className="work-experience" key={obj.id}>
                                <h4 className="work-experience-employer">{obj.employer}</h4>
                                <p className="work-experience-title">{obj.title}</p>
                                <p className="work-experience-date-range">{obj.dateStart} - {obj.dateEnd}</p>
                                <p className="work-experience-details">{obj.details}</p>
                            </div>
                        );
                    }) 
                }
            </div>
        </div>
        );
}

export default WorkExperiencesOutput;
