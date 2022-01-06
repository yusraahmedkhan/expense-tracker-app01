
import './App.css';
import { AddTracsaction } from './Components/AddTransaction';
import { Balance } from './Components/Balance';
import { Header } from './Components/Header';
import { History } from './Components/History';

function App() {
  return (
    <div className="container">
      <Header />
      <Balance />
      <History />
      <AddTracsaction />
          </div>
  );
}

export default App;
