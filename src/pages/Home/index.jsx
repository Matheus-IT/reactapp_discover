import { useEffect } from 'react';
import { useState } from 'react';
import Card from '../../components/Card';
import './styles.css';

export default function App() {
  const [ name, setName ] = useState('');
  const [ user, setUser ] = useState({name: '', avatar: ''});
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

  useEffect(() => {
    async function fetchData() {
      const url = 'https://api.github.com/users/Matheus-IT';
      const res = await fetch(url);
      const data = await res.json();
      setUser({name: data.name, avatar: data.avatar_url});
    }
    fetchData();
  }, []);

  return (
    <div className="container">
      <header>
        <h1>Attendance list</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="Profile" />
        </div>  
      </header>

      <input type="text" placeholder="Enter your name..." onChange={e => setName(e.target.value)} value={name}/>
      <button type="button" onClick={handleAddStudent}>Add</button>

      {
        people.map(p => <Card key={p.time} name={p.name} time={p.time} />)
      }
    </div>
  );
}
