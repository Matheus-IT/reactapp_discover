import Card from '../../components/Card';
import './styles.css';

export default function App() {
  return (
    <div className="container">
      <h1>Attendance list</h1>
      <input type="text" placeholder="Enter your name..."/>
      <button type="button">Add</button>

      <Card />
    </div>
  );
}
