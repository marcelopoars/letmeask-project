import { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";
import { database } from "../services/firebase";

import { Main } from "../components/Main";
import { Hero } from "../components/Hero";
// import { Logo } from "../components/Logo";
import { Button } from "../components/Button";

import googleIconImg from "../assets/images/google-icon.svg";

import "../styles/auth.scss";

export function Home() {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();
  const [roomCode, setRoomCode] = useState("");

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }

    history.push("/rooms/new");
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if (roomCode.trim() === "") {
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      alert("Esta sala não existe.");
      return;
    }

    if (roomRef.val().endedAt) {
      alert("Esta sala já foi encerrada");
      return;
    }

    if (user?.email === 'marcelo.fatecpoa@gmail.com') {
      history.push(`/admin/rooms/${roomCode}`);
    } else {
      history.push(`/rooms/${roomCode}`);
    }

  }

  return (
    <div id="page-auth">
      <Hero />

      <Main>
        <div className="main-content">
          {/* <Logo /> */}

          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleIconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>

          <div className="separator">ou entre em uma sala</div>

          <form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Digite o código da sala"
              onChange={(event) => setRoomCode(event.target.value)}
              value={roomCode}
              autoFocus
            />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </Main>
    </div>
  );
}
