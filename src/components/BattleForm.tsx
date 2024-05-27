import React, { useState } from 'react';
import './BattleForm.css';

interface BattleFormProps {
    onCalculate: (attacker: any, defender: any) => void;
}

const BattleForm: React.FC<BattleFormProps> = ({ onCalculate }) => {
    const [attacker, setAttacker] = useState({
        siege: 0,
        archers: 0,
        cavalry: 0,
        infantry: 0,
    });

    const [defender, setDefender] = useState({
        siege: 0,
        archers: 0,
        cavalry: 0,
        infantry: 0,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, side: 'attacker' | 'defender') => {
        const { name, value } = e.target;
        const parsedValue = parseInt(value);
        if (side === 'attacker') {
            setAttacker({ ...attacker, [name]: parsedValue });
        } else {
            setDefender({ ...defender, [name]: parsedValue });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onCalculate(attacker, defender);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Attacking Side</h2>
            <div className="field-group">
                <label>
                    Number of Siege Weapons:
                    <input type="number" name="siege" value={attacker.siege}
                           onChange={(e) => handleChange(e, 'attacker')} min="0"/>
                </label>
            </div>
            <div className="field-group">
                <label>
                    Number of Archers:
                    <input type="number" name="archers" value={attacker.archers}
                           onChange={(e) => handleChange(e, 'attacker')} min="0"/>
                </label>
            </div>
            <div className="field-group">
                <label>
                    Number of Cavalry:
                    <input type="number" name="cavalry" value={attacker.cavalry}
                           onChange={(e) => handleChange(e, 'attacker')} min="0"/>
                </label>
            </div>
            <div className="field-group">
                <label>
                    Number of Infantry:
                    <input type="number" name="infantry" value={attacker.infantry}
                           onChange={(e) => handleChange(e, 'attacker')} min="0"/>
                </label>
            </div>

            <h2>Defending Side</h2>
            <div className="field-group">
                <label>
                    Number of Siege Weapons:
                    <input type="number" name="siege" value={defender.siege}
                           onChange={(e) => handleChange(e, 'defender')} min="0"/>
                </label>
            </div>
            <div className="field-group">
                <label>
                    Number of Archers:
                    <input type="number" name="archers" value={defender.archers}
                           onChange={(e) => handleChange(e, 'defender')} min="0"/>
                </label>
            </div>
            <div className="field-group">
                <label>
                    Number of Cavalry:
                    <input type="number" name="cavalry" value={defender.cavalry}
                           onChange={(e) => handleChange(e, 'defender')} min="0"/>
                </label>
            </div>
            <div className="field-group">
                <label>
                    Number of Infantry:
                    <input type="number" name="infantry" value={defender.infantry}
                           onChange={(e) => handleChange(e, 'defender')} min="0"/>
                </label>
            </div>

            <div className="field-group">
                <button type="submit">Calculate Probability</button>
            </div>
        </form>
    );
};

export default BattleForm;