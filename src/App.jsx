import "./App.css";
import { Card } from "./components/Card";
import { users } from "./data/users";
import { useState } from "react";

function App() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  // function filterUsers(user) {
  //   if (selectedFilter === "women-selected") {
  //     return user.gender === "female";
  //   } else if (selectedFilter === "men-selected") {
  //     return user.gender === "male";
  //   }
  // }
  // let filteredUsers = users.filter(filterUsers);

  let filteredUsers = users;

  if (selectedFilter === "women-selected") {
    filteredUsers = users.filter((user) => {
      return user.gender === "female";
    });
  } else if (selectedFilter === "men-selected") {
    filteredUsers = users.filter((user) => {
      return user.gender === "male";
    });
  }

  // let women = users.filter((user) => {
  //   return user.gender === "female";
  // });
  // console.log(women);

  // let men = users.filter((user) => {
  //   return user.gender === "male";
  // });
  // console.log(men);

  return (
    <>
      <header>
        <h1>Array function magic</h1>
        <button
          className={selectedFilter === "all" ? "highlighted" : null}
          onClick={() => setSelectedFilter("all")}
        >
          All
        </button>
        <button
          className={selectedFilter === "women-selected" ? "highlighted" : null}
          onClick={() => setSelectedFilter("women-selected")}
        >
          Women
        </button>
        <button
          className={selectedFilter === "men-selected" ? "highlighted" : null}
          onClick={() => setSelectedFilter("men-selected")}
        >
          Men
        </button>
        <button
          className={selectedFilter === "name-selected" ? "highlighted" : null}
          onClick={() => setSelectedFilter("name-selected")}
        >
          Name
        </button>
        <button
          className={selectedFilter === "age-selected" ? "highlighted" : null}
          onClick={() => setSelectedFilter("age-selected")}
        >
          Age
        </button>
      </header>
      <main>
        <section className="card-list">
          {filteredUsers.map((user) => {
            return <Card key={user.email} user={user} />;
          })}
        </section>
      </main>
    </>
  );
}

export default App;
