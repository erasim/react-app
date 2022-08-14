import React, {useState} from 'react';
import './Date.css';

const CustomDate = () => {
  const [time, setTime] = useState(new Date().toLocaleString());
  
  setInterval(()=> {
    setTime(new Date().toLocaleString())
  }, 1000)

  return (<div className="App">
  <span id='time'>Current Date And Time : {time}</span>

</div>);
}

// class CustomDate extends React.Component {
//   state = {
//     curDT: new Date().toLocaleString(),
//   };

//   // setInterval(() => {
//   //   this.setState({curDT: new Date().toLocaleString()})
//   // }, 1000);
//   setInterval( () => {element.innerHTML += "Hello"}, 1000);

//   render() {
   
//     return (
//       <div className="App">
//         <span id='time'>Current Date And Time : {this.state.curDT}</span>
     
//     </div>);
//   }
// }

export default CustomDate;