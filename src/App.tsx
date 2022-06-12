import React, {useState} from 'react';

import './App.css';

function App() {

  const [items,setItems] = useState([{
    name: "Anoka Desk",
    url: "https://secure.img1-fg.wfcdn.com/im/70268433/compr-r85/1697/169728879/anoka-desk.jpg",
    price: " $209,99",
    description: "This clean-lined computer desk brings versatile storage and modern style to your bedroom or dorm room."
  }])


  return (
    <div className="App">
      <h1>Items To Buy</h1>
    </div>
  );
}

export default App;
