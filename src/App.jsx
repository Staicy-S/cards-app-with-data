import "./App.css";
import { Card } from "./components/Card";
import { users } from "./data/users";
import { useState } from "react";

function App() {
  const [isHighlighted, setIsHighlighted] = useState("all");

  // function handleButtonClick() {
  //   setIsHighlighted(!isHighlighted);
  // }

  return (
    <>
      <header>
        <h1>Array function magic</h1>
        <button
          className={isHighlighted === "all" ? "highlighted" : null}
          onClick={() => setIsHighlighted("all")}
        >
          All
        </button>
        <button
          className={isHighlighted === "women-selected" ? "highlighted" : null}
          onClick={() => setIsHighlighted("women-selected")}
        >
          Women
        </button>
        <button
          className={isHighlighted === "men-selected" ? "highlighted" : null}
          onClick={() => setIsHighlighted("men-selected")}
        >
          Men
        </button>
        <button
          className={isHighlighted === "name-selected" ? "highlighted" : null}
          onClick={() => setIsHighlighted("name-selected")}
        >
          Name
        </button>
        <button
          className={isHighlighted === "age-selected" ? "highlighted" : null}
          onClick={() => setIsHighlighted("age-selected")}
        >
          Age
        </button>
      </header>
      <main>
        <section className="card-list">
          {users.map((user) => {
            return <Card key={user.email} user={user} />;
          })}
        </section>
      </main>
    </>
  );
}

export default App;
