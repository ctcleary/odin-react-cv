import './ContactInfoOutput.css';

function ContactInfoOutput({ contactFields }) {

    return (
        <div className="contact-info-output">
            { 
                contactFields.map((obj) => {
                    return (
                        <div className="contact-info-pair" key={obj.id}>
                            <span className="divider">|</span> 
                            { (obj.label !== '') &&
                                <span className="contact-label">{obj.label}:</span>
                            }
                            <span className="contact-value">{obj.value}</span> 
                            <span className="divider">|</span>
                        </div>
                    );
                }) 
            }
        </div>
    )
}

export default ContactInfoOutput;
