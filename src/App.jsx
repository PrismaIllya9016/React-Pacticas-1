import React from "react";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard userName="kikobeats" name="Kiko Beats" initialIsFollowing={true} />
      <TwitterFollowCard userName="plane" name="Elon Musk" />
      <TwitterFollowCard userName="PrismaIllya" name="Miguel Lopez" />
      <TwitterFollowCard userName="Crane" name="Crane Martinez" />
    </section>
  );
}
