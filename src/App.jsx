import "./App.css";
import { Card } from "./components/Card";
import { users } from "./data/users";
import { useState } from "react";

function App() {
  const [activeFilter, setActiveFilter] = useState("all");

  function handleFilterChange(filter) {
    setActiveFilter(filter);
  }

  return (
    <>
      <header>
        <h1>Array function magic</h1>
      </header>
      <main>
        <section className="filter-box">
          <button
            onClick={() => {
              handleFilterChange("all");
            }}
            style={
              activeFilter === "all"
                ? {
                    color: "white",
                    backgroundColor: "black",
                  }
                : undefined
            }
          >
            All
          </button>
          <button
            onClick={() => {
              handleFilterChange("men");
            }}
            style={
              activeFilter === "men"
                ? {
                    color: "white",
                    backgroundColor: "black",
                  }
                : undefined
            }
          >
            Men
          </button>
          <button
            onClick={() => {
              handleFilterChange("women");
            }}
            style={
              activeFilter === "women"
                ? {
                    color: "white",
                    backgroundColor: "black",
                  }
                : undefined
            }
          >
            Women
          </button>
          <button
            onClick={() => {
              handleFilterChange("by-name");
            }}
            style={
              activeFilter === "by-name"
                ? {
                    color: "white",
                    backgroundColor: "black",
                  }
                : undefined
            }
          >
            By name
          </button>
          <button
            onClick={() => {
              handleFilterChange("by-age");
            }}
            style={
              activeFilter === "by-age"
                ? {
                    color: "white",
                    backgroundColor: "black",
                  }
                : undefined
            }
          >
            By age
          </button>
        </section>
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
