import { useEffect } from "react";
import "./App.css";
import contactsData from './contacts.json';
import { useState } from 'react';


function App() {
  const [displayedContacts, setDisplayedContacts] = useState(contactsData.slice(0, 5));
  //console.log(arrayOfContacts)


  function pushRandomContact() {
    const remainingContacts = contactsData.filter((eachContact)=>{
      return !displayedContacts.includes(eachContact)
    })
    console.log(remainingContacts);

    const randomInt = Math.floor(Math.random() * remainingContacts.length)
    const newContact = remainingContacts[randomInt]
    setDisplayedContacts([...displayedContacts,newContact])
  }

  function  sortByName() {
    const sortedContactsName = displayedContacts.sort((a,b)=>{
      if(a.name<b.name){
        return -1;
      }else if (a.name>b.name){
        return 1;
      } else {
        return 0;
      }
    })
    setDisplayedContacts(sortedContactsName)
  }


  function gotEmmy() {
    return wonEmmy ? "🌟" : ""
  }
  function gotOscar() {
    return wonOscar ? "🏆" : ""
  }
  //console.log(contactsData)
  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={() => pushRandomContact()}>Create random</button>
      <button onClick={() => sortByName()}>Sort name</button>
      <button onClick={() => sortByPopularity() }>Sort popularity</button>
      <table>
        <tbody>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>

        {displayedContacts.map((eachContact)=>{
          return(
            <tr key={eachContact.id}>
              <td><img src={eachContact.pictureUrl} alt={eachContact.name} /></td>
              <td>{eachContact.name}</td>
              <td>{eachContact.popularity}</td>
              <td><p>{eachContact.wonOscar ? "🏆" : "🚫"}</p></td>
              <td><p>{eachContact.wonEmmy ? "✨" : "🚫"}</p></td>
           </tr>
          )
        })}
          
        </tbody>
      </table>
    </div>
  );
}

export default App;
