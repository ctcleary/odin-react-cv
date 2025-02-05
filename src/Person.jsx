import { useState } from 'react';

function Person() {
    const [age, setAge] = useState(100)
    const [firstName, setFirstName] = useState('John');
    const [lastName, setLastName] = useState('Doe');
    
    const fullName = firstName + ' ' + lastName;

    const changeFirstNameHandler = (e) => {
        setFirstName(e.target.value);
    }
    const changeLastNameHandler = (e) => {
        setLastName(e.target.value);
    }

    const handleIncreaseAge = () => {
        setAge( age + 1 );
    }

    return (
        <>
            <label>
                First Name: 
                <input type="text" value={firstName} onChange={changeFirstNameHandler} /><br/>
            </label>
            <label>
                Last Name: 
                <input type="text" value={lastName} onChange={changeLastNameHandler} />
            </label>
            <h1>{fullName}</h1>
            <h2>{age}</h2>
            <button onClick={handleIncreaseAge}>Increase Age</button>
        </>
    )
}

export default Person;