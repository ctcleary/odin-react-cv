import './WorkExperiences.css';

function WorkExperiences({ addWorkExperience, data, setWorkExperience, removeWorkExperience }) {


    return (
        <div className="input-list">
            <div className="input-list-header">
                <h3>Work Experiences</h3>
                <div className="add-button">
                    <button type="button"
                        onClick={addWorkExperience}>
                            + Add new experience
                    </button>
                </div>
            </div>
            <ul className="work-experience-inputs">
                { 
                    data.map((obj, i) => {
                        return (
                            <li key={obj.id}>
                                <div className="input-row">
                                    <label>
                                        <span>Employer #{i}</span>
                                        <input type="text" value={obj.employer} onChange={(e) => {  }} placeholder="Microfirm" />
                                    </label>
                                    <label>
                                        <span>Title #{i}</span>
                                        <input type="text" value={obj.title} onChange={(e) => { }} placeholder="Engineer" />
                                    </label>
                                    <div className="remove-button">
                                        <button type="button" 
                                            onClick={() => removeWorkExperience(obj.id)}>
                                                -
                                        </button>
                                    </div>
                                </div>
                                <div className="input-row">
                                    <label>
                                        <span>Start Date #{i}</span>
                                        <input type="date" value={obj.dateStart} onChange={(e) => {  }} placeholder="Microfirm" />
                                    </label>
                                    <label>
                                        <span>End Date #{i}</span>
                                        <input type="date" value={obj.dateEnd} onChange={(e) => { }} placeholder="Engineer" />
                                    </label>
                                </div>
                                <div className="input-row">
                                    <div>Details</div>
                                    <textarea className="work-expereince-details-input" value={obj.details} onChange={(e) => { }} placeholder="Shineboxed the reams of analysis junctures." />
                                </div>
                            </li>
                        );
                        
                    })
                }
            </ul>
        </div>
    );
}

export default WorkExperiences;
