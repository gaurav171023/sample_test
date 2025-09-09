import React, { useState } from "react";

function App() {
  const [students, setStudents] = useState([
    { name: "Aman", marks: 85 },
    { name: "Riya", marks: 92 },
    { name: "Vikas", marks: 75 },
  ]);

  const sortByName = () => {
    setStudents([...students].sort((a,b)=>a.name.localeCompare(b.name)));
  }

  const sortByMarks = () => {
    setStudents([...students].sort((a,b)=>b.marks-a.marks));
  }

  return (
    <div>
      <h2>Student Table</h2>
      <button onClick={sortByName}>Sort by Name</button>
      <button onClick={sortByMarks}>Sort by Marks</button>
      <table border="1" cellPadding="8">
        <thead>
          <tr><th>Name</th><th>Marks</th></tr>
        </thead>
        <tbody>
          {students.map((s,index)=>(
            <tr key={index}><td>{s.name}</td><td>{s.marks}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
