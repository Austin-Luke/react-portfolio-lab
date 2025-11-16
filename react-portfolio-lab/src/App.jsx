
import './App.css';

const App = () => {
  const skill = { name: 'lesson', comfort: 8, frontEnd: true, backend: true };

  const mySkills = [
  {
    name:'HTML',
    comfort: 9,
    frontEnd: true,
    backend: false
  },
  {
    name:'CSS',
    comfort: 7,
    frontEnd: true,
    backend: false
  },
  {
    name:'JavaScript',
    comfort: 5,
    frontEnd: true,
    backend: true
  },
]

  const skillsList = mySkills.map((skill, index) =>
    <li lessons={index}>{skill.name}</li>
  );

  return (
    <>
    <nav>
      <h1>Austin Berndlmaier</h1>
    </nav>
    <body>
      <h2>Coding Skills Self-Assessment</h2>
      <ul>
        {mySkills.map((skill, index) =>
          <li key={index}>
            <strong>{skill.name}</strong> - Ability: {skill.comfort}
            {skill.frontEnd ? '/10 - Front-End' : ''}
            {skill.backend ? ' & Back-End' : ''}
          </li>
        )}
      </ul>
      </body>
    </>
  );
};

export default App;















































// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
