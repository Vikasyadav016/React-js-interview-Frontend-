import AdmitCard from './AdmitCard';
import './App.css';
import EmployeeICard from './EmployeeICard';
import MarkSheetFormatDownloadPdf from './MarksheetFormatDownloadPdf';
import Rainbow from './RRRRandam/Rainbow';
import StudentICard from './StudentICard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Rainbow /> */}
        {/* <MarkSheetFormatDownloadPdf /> */}
        {/* <AdmitCard /> */}
        <StudentICard />
        <EmployeeICard />

      </header>
    </div>
  );
}

export default App;
