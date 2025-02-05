import './ContactInfo.css';

function ContactInfo({ headline, ulClassName, addContactField, contactFields, setContactField, removeContactField }) {


    return (
        <div className="input-list">
            <div className="input-list-header">
                <h3>{headline}</h3>
                <div className="add-button">
                    <button type="button"
                        onClick={addContactField}>
                            +
                    </button>
                </div>
            </div>
            <ul className={ulClassName}>
                {/* <li>
                    <div className="contact-label-header">Contact Info Label</div>
                    <div className="contact-value-header">Contact Info Value</div>
                </li> */}
                { 
                    contactFields.map((obj, i) => {
                        return (
                            <li key={obj.id}>
                                <label>
                                    <span>Label #{i}</span>
                                    <input type="text" value={obj.label} onChange={(e) => { setContactField(obj.id, e.target.value, obj.value); }} placeholder="Ph" />
                                </label>
                                <label>
                                    <span>Value #{i}</span>
                                    <input type="text" value={obj.value} onChange={(e) => { setContactField(obj.id, obj.label, e.target.value); }} placeholder="(555) 555-5555"/>
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

export default ContactInfo;
