import { useState } from "react";

export default function Chapter01Scene01() {
    const [playerCount, setPlayerCount] = useState("");

    return (
        <section>
            <p>
                Congratulations, you've been clever enough to solve the puzzle. I'm sure you thought it very simple, probably even obvious. But, have you considered easy puzzles are just meant to cast a wider net?
            </p>

            <p>
                Do you just go around scanning random QR Codes? They could be dangerous you know. Then again, if you're scared to cross the street, how can you ever get anywhere? Fortunately for you this QR Code isn't malicious. Well, at least in the way you're thinking.
            </p>

            <p>
                Did you crack this code by yourself, or did you receive help from another?
            </p>

            <button onClick={e => setPlayerCount(playerCount + "SinglePlayer")}>Single Player</button>
            <button onClick={e => setPlayerCount(playerCount + "MultiPlayer")}>Multiplayer</button>
        </section>
    )
}