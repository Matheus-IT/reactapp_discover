import { useState } from 'react';
import Card from '../../components/Card';
import './styles.css';

export default function App() {
  const [ name, setName ] = useState('');
  const [ people, setPeople ] = useState([]);

  function handleAddStudent() {
    const newPerson = {
      name: name,
      time: new Date().toLocaleDateString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }),
    };
    setPeople(prevState => [...prevState, newPerson]);
    setName('');
  }

  return (
    <div className="container">
      <h1>Attendance list</h1>
      <input type="text" placeholder="Enter your name..." onChange={e => setName(e.target.value)} value={name}/>
      <button type="button" onClick={handleAddStudent}>Add</button>

      {
        people.map(p => <Card key={p.time} name={p.name} time={p.time} />)
      }
    </div>
  );
}
