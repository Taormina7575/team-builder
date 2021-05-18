import { React, useState } from "react";
import MemberList from "./Components/MemberList";
import Form from "./Components/Form";



function App() {

  const [members, setMembers] = useState([
    {
      fname: "Vincenzo",
      lname: "Taormina",
      age: 18,
      title: "Developer",
      Biography: "I am from New Jersey",
    },
  ]);
  
  return (
    <div>
      <Form setMembers={setMembers} members={members} />
      <MemberList members={members} />
    </div>
  );
}

export default App;
