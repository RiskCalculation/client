import React, { useState } from 'react';
import BattleForm from './components/BattleForm';
import './App.css';
import { SERVER_URL } from './config/config';

function App() {
    const [result, setResult] = useState<string>('');

    const calculateProbability = (attacker: any, defender: any) => {
        fetch(`${SERVER_URL}/calculate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ attack: attacker, defender: defender }),
        })
            .then((response) => response.text())
            .then((data) => setResult(data))
            .catch((error) => console.error('Error:', error));
    };

    return (
        <div className="App">
            <div className="container">
                <h1>Risk Game Battle Probability Calculator</h1>
                <BattleForm onCalculate={calculateProbability} />
                <div>
                    <h2>Result</h2>
                    <pre>{result}</pre>
                </div>
            </div>
        </div>
    );
}

export default App;