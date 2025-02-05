import './InputList.css';

function InputList({ headline, fieldName, ulClassName, addContactField, contactFields, setContactField, setContactFields, removeContactField }) {


    return (
        <div className="input-list">
            <div className="input-list-header">
                <h3>{headline}</h3>
                <div>
                    <button type="button"
                        onClick={addContactField}>
                            +
                    </button>
                </div>
            </div>
            <ul className={ulClassName}>
                { 
                    contactFields.map((obj, i) => {
                        return (
                            <li key={obj.id}>
                                <label>
                                    <span>{fieldName} #{i}</span>
                                    <input type="text" onChange={(e) => { setContactField(obj.id, e.target.value); }} />
                                </label>
                                <div className="remove-button">
                                    <button type="button" 
                                        onClick={() => removeContactField(obj.id)}>
                                            -
                                    </button>
                                </div>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default InputList;