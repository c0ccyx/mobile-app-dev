import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


var sender = {
    name: "Mr Sender",
    street: "123 Fake St.",
    city: "Boston"
  };

var receiver = {
    name: "Mr Receiver",
    street: "123 Fake St",
    city: "Boston"
  };

const Envelope = ({ fromPerson, toPerson }) => {
  return (
    <div className="content">
      <div className="sender">
        <AddressLabel nameAL={fromPerson.name} streetAL={fromPerson.street} cityAL={fromPerson.city}/>
      </div>
      <div>
        <Stamp />
      </div>
      <div className="receiver">
        <AddressLabel nameAL={toPerson.name} streetAL={toPerson.street} cityAL={toPerson.city}/>
      </div>
    </div>
  )
};

const AddressLabel = ({ nameAL, streetAL, cityAL }) => {
  return (
    <span className="address-label">
      <div>{nameAL}</div>
      <div>{streetAL}</div>
      <div>{cityAL}</div>
    </span>
  )
};

const Stamp = () => {return (<div className="stamp"></div>)}

ReactDOM.render(<Envelope fromPerson={sender} toPerson={receiver}/>, document.getElementById('root'));
