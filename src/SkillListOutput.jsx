import './SkillListOutput.css';

function SkillListOutput({ skillLists }) {

    return skillLists.length <= 0 ? ( <></> ) :
        (
        <div id="output-cv-skills">
            <h3>Skills</h3>
            <div className="skill-list-output">
                { 
                    skillLists.map((obj) => {
                        return (
                            <div className="skill-list-pair" key={obj.id}>
                                <span className="skill-list-label">{obj.label}</span>
                                <span className="skill-list-value">{obj.value}</span>
                            </div>
                        );
                    }) 
                }
            </div>
        </div>
        );
}

export default SkillListOutput;
