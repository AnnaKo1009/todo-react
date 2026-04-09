import { useState } from 'react';
import { MainPage } from './pages/MainPage/MainPage';


function App() {
  return (
    <div className="App">
      <MainPage />
    </div>
  );
}

export default App;






// function Header() {
// const now = new Date();
//   return (
//     <header>
//       <h2>Список дел</h2>
//       <span>Время сейчас: {now.toLocaleTimeString()}</span>
//     </header>
//   )
// }

// export default function App() {
//   return (
//     <div className="app">
//       <h1>Todo App</h1>
//       <Header />
//       {/* Здесь будет ваше приложение */}
//     </div>
//   );
// }

