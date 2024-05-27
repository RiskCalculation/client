import React, { useState } from 'react';
import BattleForm from './components/BattleForm';
import './App.css';
import { SERVER_URL } from './config/config';
import {exec} from "node:child_process";

function App() {
    const [result, setResult] = useState<string>('');

    const calculateProbability = (attacker: any, defender: any) => {
        //execute the python script to calculate the probability analyse/battle-calculator.py
        exec(`python analyse/battle-calculator.py ${attacker}${defender}`, (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
            setResult(stdout);
        });
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