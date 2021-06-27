import { FormEvent, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { database } from "../services/firebase";
import { useAuth } from "../hooks/useAuth";

import { PageAuth } from "../components/PageAuth";
import { Hero } from "../components/Hero";
import { Main } from "../components/Main";
import { Button } from "../components/Button";


export function NewRoom() {
  const { user } = useAuth();
  const history = useHistory();
  const [newRoom, setNewRoom] = useState("");

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();

    if (newRoom.trim() === "") {
      return;
    }

    const roomRef = database.ref("rooms");

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    });

    history.push(`/admin/rooms/${firebaseRoom.key}`);
  }

  return (
    <PageAuth>
      <Hero />

      <Main>
        <h2>Criar uma nova sala</h2>

        <form onSubmit={handleCreateRoom}>
          <input
            type="text"
            placeholder="Nome da sala"
            onChange={(event) => setNewRoom(event.target.value)}
            value={newRoom}
          />
          <Button type="submit">Criar sala</Button>
        </form>
        <p>
          Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link>
        </p>
      </Main>
    </PageAuth>
  );
}
