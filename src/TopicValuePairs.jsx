import './TopicValuePairs.css';

function TopicValuePairs({ headline, labelLabel, valueLabel, addInput, data, setTopicValuePair, removeTopicValuePair, topicPlaceholder, valuePlaceholder }) {


    return (
        <div className="input-list">
            <div className="input-list-header">
                <h3>{headline}</h3>
                <div className="add-button">
                    <button type="button"
                        onClick={addInput}>
                            + Add new pair
                    </button>
                </div>
            </div>
            <ul className="topic-value-inputs">
                { 
                    data.map((obj, i) => {
                        return (
                            <li key={obj.id}>
                                <label>
                                    <span>{labelLabel} #{i}</span>
                                    <input type="text" value={obj.label} onChange={(e) => { setTopicValuePair(obj.id, e.target.value, obj.value); }} placeholder={topicPlaceholder} />
                                </label>
                                <label>
                                    <span>{valueLabel} #{i}</span>
                                    <input type="text" value={obj.value} onChange={(e) => { setTopicValuePair(obj.id, obj.label, e.target.value); }} placeholder={valuePlaceholder}/>
                                </label>
                                <div className="remove-button">
                                    <button type="button" 
                                        onClick={() => removeTopicValuePair(obj.id)}>
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

export default TopicValuePairs;
