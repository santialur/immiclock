import logo from './logo.svg';
import './App.css';

const getDiff = (targetDate) => {
  const today = new Date().getTime();
  const date2 = new Date(targetDate).getTime();
  const diffTime = today - date2;
  const diffDays = diffTime / (1000 * 3600 * 24);
  return Math.floor(diffDays);
} 

const addToDate = (startDate, days) => {
  startDate = new Date(startDate);
  startDate.setDate(startDate.getDate() + days);
  return startDate;
} 

const convertToString = (date) => {
  date = date.toString();
  return date.substring(0, date.indexOf('00:'));
}

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <i className='fa fa-id-card'></i>
        <h1> Immi Clock </h1>
      </header>
      <section className='content'>
        <div className='col'>
          <i className='fa fa-clock'></i>
          <h2> Days Passed:</h2>

          <div className='section'>
            <h3>EB-3 PERM - Filed:</h3>
            <p><b>August 15, 2022: </b> <span> {getDiff('08/15/2022')} Days Ago </span></p>
          </div>

          <div className='section'>
            <h3>EB-2 (i-140) - Filed:</h3>
            <p><b>January 7, 2022: </b> <span> {getDiff('01/07/2022')} Days Ago </span></p>
          </div>

          <div className='section'>
            <h3>EAD (i-765) - Received: </h3>
            <p><b>August 9, 2022: </b> <span> {getDiff('08/09/2022')} Days Ago </span></p>
          </div>
        </div>

        <div className='col'>
          <i className='fa fa-bullhorn'></i>
          <h2> Estimations:</h2>

          <div className='section'>
            <h3>DOL's - EB-3 PERM Estimation:</h3>
            <p><b>"180 Days": </b> <span> {convertToString(addToDate('08/15/2022', 180))} </span></p>
            <p><i>How long from today?: {getDiff(addToDate('08/15/2022', 180))*-1} Days</i></p>
            <br/>
            <p><b>"240 Days (With Audit)": </b> <span> {convertToString(addToDate('08/15/2022', 240))} </span></p>
          </div>

          <div className='section'>
            <h3>Lawfully's - i-140 Estimation:</h3>
            <p><b>"After an average of 312 Days, 55% Cases Approved": </b></p>
            <p> {convertToString(addToDate('01/07/2022', 312))} </p>
            <p><i>How long from today?: {getDiff(addToDate('01/07/2022', 314))*-1} Days</i></p>
          </div>

          <div className='section'>
            <h3>Lawfully's - i-131 (AP) Estimation:</h3>
            <p><b>"After an average of 35 Days, 51% Cases Approved": </b> </p>
            <p> {convertToString(addToDate('08/19/2022', 35))} </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
