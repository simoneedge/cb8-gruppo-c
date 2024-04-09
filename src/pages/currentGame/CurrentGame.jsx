import React from 'react';
import { Blu-shield, Red-shield } from 
import Modal from '../modal';

const MatchPage = () => {
    const [sport, setSport] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [cost, setCost] = useState('');
    const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  
    const handleParticipate = () => {
      // Logica per partecipare alla partita 
    };

const CurrentGame = () => {
  return (
    <div>
        <div>
        <div className='style.image'>
          <img src="Blue-Shild.svg" alt="First Team" />
        </div>
        <div style={{ margin: '0 10px' }}>
          Vs
        </div>
        <div className='style.image'>,
          <img src="Red-Shild.svg" alt="Second Team" />
        </div>
      </div>
      <div>
        <button style={{ marginRight: '10px' }}>Formazioni</button>
        <button>Termina Partita</button>
      </div>
    <p>Sport scelto: {sport}</p>
        <p>Data: {date}</p>
        <p>Ora: {time}</p>
        <p>Costo: {cost}</p>
        <input type="text" placeholder="Sport" value={sport} onChange={(e) => setSport(e.target.value)} />
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
        <input type="text" placeholder="Costo" value={cost} onChange={(e) => setCost(e.target.value)} />
        <button onClick={handleParticipate}>Partecipa ora</button>
        <iframe className='style.maps'
        src={`https://www.google.com/maps/embed/v1/place?q=${address}`}
        width="600"
        height="450"
        style={{ border: 0, marginTop: '20px' }}
        allowFullScreen=""
        loading="lazy"
      />
      <input type="text" placeholder="Indirizzo" value={address} onChange={(e) => setAddress(e.target.value)} />
      <input type="tel" placeholder="Numero di telefono" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      <button onClick={handleParticipate}>Partecipa ora</button>
    </div>
  </div>
);
};

export default CurrentGame;
