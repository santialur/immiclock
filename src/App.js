import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Section from './components/Section';

//https://www.immi-usa.com/perm-processing-time-updates/
//https://flag.dol.gov/processingtimes
const DOL_PERM_DAYS_GOOD = 190;
const DOL_PERM_DAYS_BAD = 240;

const DOL_PERM_DAYS_AUDIT_GOOD = 90;
const DOL_PERM_DAYS_AUDIT_BAD = 120;
const PERM_DATE_FILED = '08/11/2022';

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
        <Card title="Days Passed:" icon='clock'>
          <Section title="EB-3 PERM - Filed:">
            <p>
              <b>August 11, 2022:</b>
              <span> {getDiff(PERM_DATE_FILED)} Days Ago </span>
            </p>
          </Section>

          <Section title="EB-2 (i-140) - Filed:">
            <p>
              <b>January 7, 2022:</b> 
              <span> {getDiff('01/07/2022')} Days Ago </span>
            </p>
          </Section>
          
          <Section title="EAD (i-765) - Received: ">
            <p>
              <b>August 9, 2022:</b> 
              <span> {getDiff('08/09/2022')} Days Ago </span>
            </p>
          </Section>
        </Card>

        <Card title="Estimations:" icon='bullhorn'>
          <Section title="DOL's - EB-3 PERM Estimation:">
              <br/>
              <h1>Without Audit</h1>
              <h2>Optimistic</h2>
              <p>
                <b>{DOL_PERM_DAYS_GOOD} Days:</b> 
                <span> {convertToString(addToDate(PERM_DATE_FILED, DOL_PERM_DAYS_GOOD))} </span>
              </p>
              <p>
                <i>How long from today?: {getDiff(addToDate(PERM_DATE_FILED, DOL_PERM_DAYS_GOOD))*-1} Days</i>
              </p>
              <p>
                <b>"+(Premium Processing)":</b> 
                <br/>
                <span><u>22 Days: (15 + Mail Time)</u> {convertToString(addToDate(PERM_DATE_FILED, DOL_PERM_DAYS_GOOD+22))} </span>
                <br/>
                <span><u>45 Days:</u> {convertToString(addToDate(PERM_DATE_FILED, DOL_PERM_DAYS_GOOD+45))} </span>
              </p>
              <br/>

              <h2>Pessimistic</h2>
              <p>
                <b>{DOL_PERM_DAYS_BAD} Days:</b> 
                <span> {convertToString(addToDate(PERM_DATE_FILED, DOL_PERM_DAYS_BAD))} </span>
              </p>
              <p>
                <i>How long from today?: {getDiff(addToDate(PERM_DATE_FILED, DOL_PERM_DAYS_BAD))*-1} Days</i>
              </p>
              <p>
                <b>"+(Premium Processing)":</b> 
                <br/>
                <span><u>22 Days: (15 + Mail Time)</u> {convertToString(addToDate(PERM_DATE_FILED, DOL_PERM_DAYS_BAD+22))} </span>
                <br/>
                <span><u>45 Days:</u> {convertToString(addToDate(PERM_DATE_FILED, DOL_PERM_DAYS_BAD+45))} </span>
              </p>
              <br/>

              <h1>With Audit</h1>
              <h2>Optimistic</h2>
              <p>
                <b>"{DOL_PERM_DAYS_GOOD+DOL_PERM_DAYS_AUDIT_GOOD} Days":</b> 
                <span> {convertToString(addToDate(PERM_DATE_FILED, DOL_PERM_DAYS_GOOD+DOL_PERM_DAYS_AUDIT_GOOD))} </span>
              </p>
              <p>
                <b>"+(Premium Processing)":</b> 
                <br/>
                <span><u>22 Days: (15 + Mail Time)</u> {convertToString(addToDate(PERM_DATE_FILED, DOL_PERM_DAYS_GOOD+DOL_PERM_DAYS_AUDIT_GOOD+22))} </span>
                <br/>
                <span><u>45 Days:</u> {convertToString(addToDate(PERM_DATE_FILED, DOL_PERM_DAYS_GOOD+DOL_PERM_DAYS_AUDIT_GOOD+45))} </span>
              </p>
              <br/>

              <h2>Pessimistic</h2>
              <p>
                <b>"{DOL_PERM_DAYS_BAD+DOL_PERM_DAYS_AUDIT_BAD} Days":</b> 
                <span> {convertToString(addToDate(PERM_DATE_FILED, DOL_PERM_DAYS_BAD+DOL_PERM_DAYS_AUDIT_BAD))} </span>
              </p>
              <p>
                <b>"+(Premium Processing)":</b> 
                <br/>
                <span><u>22 Days: (15 + Mail Time)</u> {convertToString(addToDate(PERM_DATE_FILED, DOL_PERM_DAYS_BAD+DOL_PERM_DAYS_AUDIT_BAD+22))} </span>
                <br/>
                <span><u>45 Days:</u> {convertToString(addToDate(PERM_DATE_FILED, DOL_PERM_DAYS_BAD+DOL_PERM_DAYS_AUDIT_BAD+45))} </span>
              </p>
              <br/>
          </Section>

          <Section title="Lawfully's - i-140 Estimation:">
            <p>
              <b>"After an average of 298 Days, 56% Cases Approved": </b>
            </p>
            <p> {convertToString(addToDate('01/07/2022', 298))} </p>
            <p>
              <i> How long from today?: {getDiff(addToDate('01/07/2022', 298))*-1} Days </i>
            </p>
          </Section>

          <Section title="Lawfully's - i-131 (AP) Estimation:">
            <p>
              <b>"After an average of 35 Days, 51% Cases Approved": </b> 
            </p>
            <p> {convertToString(addToDate('08/19/2022', 35))} </p>
          </Section>
        </Card>
      </section>
    </div>
  );
}

export default App;
