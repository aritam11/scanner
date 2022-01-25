import logo from './logo.svg';
import './App.css';
import QrReader from 'react-qr-reader';
import {useState} from 'react';

function App() {

  const [scan ,setScan] = useState("");
  const handleScan = (result) => {
    if(result)
    { 
      var XMLParser = require('react-xml-parser');
      var xml = new XMLParser().parseFromString(result);
      var value = xml.getElementsByTagName('PrintLetterBarcodeData');
      setScan(value);
    }
  }
  const handleError = (error) => {
    console.log(error);
  }

  return (
    <div className="App">
      <div className="scanner">
      <QrReader
      delay={300}
      style={{width:'100%'}}
      onError={handleError}
      onScan={handleScan}
      />
      <p>{scan}</p>
      </div>
    </div>
  );
}

export default App;
