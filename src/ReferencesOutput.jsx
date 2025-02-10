import './ReferencesOutput.css';

function ReferencesOutput({ references }) {

    return references.length <= 0 ? ( <></> ) :
        (
        <div id="output-cv-references">
            <h3>References</h3>
            <div className="reference-output-list">
                { 
                    references.map((obj) => {
                        return (
                            <div className="reference-output" key={obj.id}>
                                <span className="reference-name">{obj.name}</span>
                                <span className="reference-position">{obj.position}</span>
                                <span className="reference-contact">{obj.contact}</span>
                            </div>
                        );
                    }) 
                }
            </div>
        </div>
        );
}

export default ReferencesOutput;
