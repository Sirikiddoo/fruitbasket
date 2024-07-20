import React, {useState} from 'react';
import './App.css';
import Counter from "./Counter/Counter.jsx";
import Button from "./Button/Button.jsx";


function App() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [count4, setCount4] = useState(0);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState(0);
    const [zipCode, setZipCode] = useState('');
    const [delivery, setDelivery] = useState('');
    const [time, setTime] = useState('');
    const [comment, setComment] = useState('');
    const [check, setCheck] = useState(false);

    const increase = (setter, count) => () => setter(count + 1);
    const decrease = (setter, count) => () => { if (count > 0) setter(count - 1); };

    const resetCounts = () => {
        setCount1(0);
        setCount2(0);
        setCount3(0);
        setCount4(0);
    }

    const firstNameChange = (e) => setFirstName(e.target.value);
    const lastNameChange = (e) => setLastName(e.target.value);
    const ageChange = (e) => setAge(e.target.value);
    const zipCodeChange = (e) => setZipCode(e.target.value);
    const deliveryChange = (e) => setDelivery(e.target.value);
    const timeChange = (e) => setTime(e.target.value);
    const commentChange = (e) => setComment(e.target.value);
    const checkChange = (e) => setCheck(e.target.checked);

    const formSubmit = (e) => {
        e.preventDefault();
        console.log('Formulier verstuurd:', {firstName, lastName, age, zipCode, delivery, comment, time, check});
        console.log('Fruit:', count1, count2, count3, count4);
        setFirstName('');
        setLastName('');
        setAge(0);
        setZipCode('');
        setDelivery('');
        setComment('');
        setTime('');
        setCheck(false);
        resetCounts();
    };

    return (
        <div className="App">
            <section>
                <h1>Fruitmand Bezorgservice</h1>
                <Counter
                    label="Aardbeien🍓"
                    count={count1}
                    onIncrease={increase(setCount1, count1)}
                    onDecrease={decrease(setCount1, count1)}
                />
                <Counter
                    label="Bananen🍌"
                    count={count2}
                    onIncrease={increase(setCount2, count2)}
                    onDecrease={decrease(setCount2, count2)}
                />
                <Counter
                    label="Appels🍏"
                    count={count3}
                    onIncrease={increase(setCount3, count3)}
                    onDecrease={decrease(setCount3, count3)}
                />
                <Counter 
                    label="Kiwis🥝"
                    count={count4}
                    onIncrease={increase(setCount4, count4)}
                    onDecrease={decrease(setCount4, count4)}
                />
                <div>
                    <Button
                        onClick={resetCounts}
                        label="Reset"
                    />
                </div>
            </section>
            <section>
                <h1>FORMULIER</h1>
                <form onSubmit={formSubmit}>
                    <div>
                        <label htmlFor="firstname">Voornaam</label>
                        <input
                            type="text"
                            id="firstname"
                            value={firstName}
                            onChange={firstNameChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="lastname">Achternaam</label>
                        <input
                            type="text"
                            id="lastname"
                            value={lastName}
                            onChange={lastNameChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="age">Leeftijd</label>
                        <input
                            type="number"
                            id="age"
                            value={age}
                            onChange={ageChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="zipcode">Postcode</label>
                        <input
                            type="text"
                            id="zipcode"
                            value={zipCode}
                            onChange={zipCodeChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="delivery">Bezorgfrequentie</label>
                        <select
                            id="delivery"
                            value={delivery}
                            onChange={deliveryChange}>
                            <option value="week">iedere week</option>
                            <option value="omdeweek">om de week</option>
                            <option value="maand">iedere maand</option>
                        </select>
                    </div>
                    <div>
                        <label>
                            <input
                                type="radio"
                                id="time"
                                value="Overdag"
                                checked={time === "Overdag"}
                                onChange={timeChange}
                            />
                            Overdag
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="radio"
                                id="time"
                                value="Avond"
                                checked={time === "Avond"}
                                onChange={timeChange}
                            />
                            Avond
                        </label>
                    </div>
                    <div>
                        <label>
                            Opmerking
                            <textarea
                                name="comment"
                                rows={4}
                                cols={40}
                                value={comment}
                                onChange={commentChange}/>
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                id="check"
                                checked={check}
                                onChange={checkChange}
                            />
                            Ik ga akkoord met de voorwaarden
                        </label>
                    </div>
                    <Button
                        onClick={formSubmit}
                        label="Verzenden"
                        />
                </form>
            </section>
        </div>
    );
}

export default App;
