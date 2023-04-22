import React, { useState } from 'react';
import List from './components/list';
import Input from './components/input';

function App() {
    // eslint-disable-next-line no-unused-vars
    const [, setModalInputValue] = useState('');
    const tasks = [
        {
            id: 1,
            task: 'coding'
        },
        {
            id: 2,
            task: 'eat'
        },
        {
            id: 3,
            task: 'sleep'
        }
    ];

    const handleModalInputChange = event => {
        setModalInputValue(event.target.value);
    };

    return (
        <div>
            <h1>Tasks:</h1>
            <List tasks={tasks} />
            <button>Open Modal</button>
            <div>
                <h2>Modal</h2>
                <Input
                    name="modalInput"
                    placeholder="Enter task"
                    onChange={handleModalInputChange}
                />
                <button>Add Task</button>
            </div>
        </div>
    );
}

export default App;
