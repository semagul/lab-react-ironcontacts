import logo from './logo.svg';
import './App.css';
import contactList from './contacts.json';
import React, { useState } from 'react';

function App() {
  const [contacts, setContacts] = useState([...contactList].slice(0, 5));
  const randomContact = () => {
    const randomCelebrity = contactList[Math.floor(Math.random() * contactList.length)]
    setContacts([randomCelebrity, ...contacts])
  }
  const sortByName = () => {
    const sortedByName = contacts.sort(function (a, b) { return a.name.localeCompare(b.name) })
    setContacts([...sortedByName])
  }

  const sortByPopularity = () => {
    const sortedByPopularity = contacts.sort(function (a, b) { return a.popularity -  b.popularity })
    setContacts([...sortedByPopularity])
  }

  const removeContact = (contactId) => {
      const removedContacts = contacts.filter(contact => {
        return contact.id !== contactId;
      });
   
      setContacts([...removedContacts]);
    };
   
  return (
    <div>
      <h1>IronContacts</h1>
      <button onClick={randomContact}>Add random contact</button>
      <button onClick={sortByName}>Sort by name</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => (
            <tr key={contact.id}>
              <td><img src={contact.pictureUrl} height="120px" alt="profile"></img></td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>{contact.wonOscar && <p>🏆</p>}</td>
              <td>{contact.wonEmmy && <p>🏆</p>}</td>
              <td><button onClick={() => removeContact(contact.id)} className="btn-delete">Delete 
              </button></td>
            </tr>))}
        </tbody>
      </table>
    </div>
  )
}

export default App;
