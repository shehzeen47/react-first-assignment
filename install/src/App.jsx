import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <h1>React Boiler Plate</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur non odio molestiae impedit eos dignissimos ex. Porro placeat eius obcaecati aliquam laboriosam perspiciatis voluptates distinctio ex labore facere consequatur ipsa ad velit rerum maxime totam optio mollitia provident dolor id, aperiam iusto vel! Deleniti non in fugit voluptatem praesentium ipsum ipsam ab maiores at sint id assumenda esse error perferendis magni perspiciatis aliquid reiciendis amet nobis eum, a enim itaque consequuntur! Praesentium debitis et, quos natus laborum similique provident obcaecati fuga molestiae? Consectetur voluptates necessitatibus ad, ut veritatis saepe placeat reprehenderit, cupiditate dicta itaque ipsam reiciendis ratione! Veritatis quidem vitae distinctio dolor natus esse inventore quos dicta illum facilis saepe quae praesentium iure, error corrupti vel ex est sint! Ratione, nesciunt doloribus in eaque magni corporis optio, iusto, inventore fugit magnam voluptatibus voluptate architecto corrupti dolorem. Ad corporis at commodi ratione officiis, laborum nostrum delectus iure? Iure ea animi veniam ipsa ex facere nam repellendus fugiat cumque quod! Repellat, autem veritatis itaque animi aliquid provident nulla blanditiis temporibus, sint eius dicta corrupti libero. Perspiciatis, magni ratione, temporibus excepturi nisi iste dolores sequi, commodi earum ex ea nostrum sunt. Laudantium odio corrupti nemo quidem explicabo sunt aspernatur labore, corporis saepe blanditiis.</p>
    </>
  )
}

export default App
