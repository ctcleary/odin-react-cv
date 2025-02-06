import './References.css';

function References({ addReference, data, setReference, removeReference }) {


    return (
        <div className="reference-input">
            <div className="reference-header">
                <h3>References</h3>
                <div className="add-button">
                    <button type="button"
                        onClick={addReference}>
                            + Add new reference
                    </button>
                </div>
            </div>
            <ul className="reference-inputs">
                { 
                    data.map((obj, i) => {
                        return (
                            <li key={obj.id}>
                                <label>
                                    <span>Name #{i}</span>
                                    <input type="text" value={obj.name} onChange={(e) => { setReference(obj.id, e.target.value, obj.position, obj.contact); }} placeholder="Timothy Smithers" />
                                </label>
                                <div className="remove-button">
                                    <button type="button" 
                                        onClick={() => removeReference(obj.id)}>
                                            -
                                    </button>
                                </div>
                                <label>
                                    <span>Position #{i}</span>
                                    <input type="text" value={obj.position} onChange={(e) => { setReference(obj.id, obj.name, e.target.value, obj.contact); }} placeholder="Microfirm - Technical Juggernaut"/>
                                </label>
                                <label>
                                    <span>Contact #{i}</span>
                                    <input type="text" value={obj.contact} onChange={(e) => { setReference(obj.id, obj.name, obj.position, e.target.value); }} placeholder="tsmithers@microfirm.fake.com" />
                                </label>

                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default References;
