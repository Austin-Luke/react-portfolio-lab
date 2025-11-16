
import './App.css';

  // must import css file to show stylization in browser



const App = () => {
  
  // creates an umbrella component for easy exportation later


  const mySkills = [
  {
    name:'HTML',
    ability: 9,
    frontEnd: true,
    backend: false
  },
  {
    name:'CSS',
    ability: 7,
    frontEnd: true,
    backend: false
  },
  {
    name:'JavaScript',
    ability: 5,
    frontEnd: true,
    backend: true
  },
]

  // ^ the array of objects analyzed below when determining which info to display in browser
  // name and ability properties are directly read
  // frontEnd & backEnd are booleans evaluated below in ternary operators



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
            <strong>{skill.name}</strong> - Ability: {skill.ability}
            {skill.frontEnd ? '/10 - Front-End' : ''}
            {skill.backend ? ' & Back-End' : ''}
          </li>
        )}
      </ul>
      </body>
    </>
  );
};

  // looping and conditional rendering; very similar to HTML format
  // loops through each object, gathering properties to display
  // ternary operators used in place of if-statements
  // return must be immediately succeeded by ()


export default App;

  // allows other files to use this component














































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
