import './App.css';
import QrReader from 'react-qr-reader';
import {useState} from 'react';

function App() {

  const [name ,setName] = useState("");
  const [uid ,setUid] = useState("");
  const [dob ,setDob] = useState("");
  const [active ,setActive] = useState("no");
  const handleScan = (result) => {
    if(result)
    { 
      var XMLParser = require('react-xml-parser');
      var xml = new XMLParser().parseFromString(result);
      var value = xml.getElementsByTagName('PrintLetterBarcodeData');
      var user = value[0].attributes.name;
      var id = value[0].attributes.uid;
      var date = value[0].attributes.dob;
      setName(user);
      setUid(id);
      setDob(date);
      setActive("yes")
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
      <p className={active}>Name : {name}</p>
      <p className={active}>Adhaar No. : {uid}</p>
      <p className={active}>Date of Birth : {dob}</p>
      </div>
    </div>
  );
}

export default App;
