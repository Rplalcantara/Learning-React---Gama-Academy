import React, { useState } from "react";
import axios from "axios";
import * as S from "./styled";
import { useHistory } from "react-router-dom";

function App() {
  const history = useHistory();
  const [user, setUser] = useState("");
  const [error, setError] = useState(false);

  function handleSearch() {
    axios
      .get(`https://api.github.com/users/${user}/repos`)
      .then((response) => {
        const repositories = response.data;
        const repositoriesName = [];
        repositories.map((repository) => {
          repositoriesName.push(repository.name);
        });
        localStorage.setItem(
          "repositoriesName",
          JSON.stringify(repositoriesName)
        );
        setError(false);
        history.push("./repositories");
      })
      .catch((err) => {
        setError(true);
      });
  }
  return (
    <S.Container>
      <S.Content>
        <S.Input
          placeholder="Username"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              handleSearch();
            }
          }}
        />
        <S.Button type="button" onClick={handleSearch}>
          Search
        </S.Button>
      </S.Content>
      {error ? <S.Error>USER NOT FOUND!</S.Error> : ""}
    </S.Container>
  );
}

export default App;
