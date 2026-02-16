"use client";

import { useState, useCallback } from "react";
import { useBrowser } from "@/context/useBrowser";

const EMOJI_ROWS = [
  "˚˖𓍢ִִ໋🌼🧺˚˖𓍢ִ🌿˚.",
  "༄˖°.🍃.ೃ࿔*:･",
  "𖡼.𖤣𖥧 𖠿 𖡼.𖤣𖥧",
  "ִֶָ𓂃 ࣪˖ ִֶָ🐇་༘࿐",
  "❀𖤣𖥧𖡼⊱✿⊰𖡼𖥧𖤣❀",
  "°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･",
  "✩°｡🧸𓏲⋆.🧺𖦹 ₊˚",
];

const FLOWERS = ["𓍢🌷͙֒", "❀࿐", ".☘︎ ݁˖."];

interface Seed {
  id: number;
  x: number;
  y: number;
  grown: boolean;
  flower: string;
}

function generateSeeds(): Seed[] {
  const count = Math.floor(Math.random() * 10) + 1;
  const seeds: Seed[] = [];
  for (let i = 0; i < count; i++) {
    seeds.push({
      id: i,
      x: Math.random() * 85 + 5,
      y: Math.random() * 75 + 15,
      grown: false,
      flower: FLOWERS[Math.floor(Math.random() * FLOWERS.length)],
    });
  }
  return seeds;
}

export default function GardenGame() {
  const { dispatch } = useBrowser();
  const [seeds, setSeeds] = useState<Seed[]>(() => generateSeeds());

  const growSeed = useCallback(
    (id: number) => {
      setSeeds((prev) => {
        const seed = prev.find((s) => s.id === id);
        if (!seed || seed.grown) return prev;
        return prev.map((s) => (s.id === id ? { ...s, grown: true } : s));
      });
      dispatch({ type: "ADD_LOVE_POINTS", payload: { amount: 0.5 } });
    },
    [dispatch],
  );

  const grownCount = seeds.filter((s) => s.grown).length;

  return (
    <div style={styles.garden}>
      <div style={styles.emojiDecor}>
        {EMOJI_ROWS.map((row, i) => (
          <div key={i} style={styles.emojiRow}>
            {row}
          </div>
        ))}
      </div>

      <div style={styles.seedBed}>
        <p style={styles.instruction}>water the seeds 💦</p>
        <div style={styles.field}>
          {seeds.map((seed) => (
            <span
              key={seed.id}
              onMouseEnter={() => growSeed(seed.id)}
              style={{
                ...styles.seed,
                left: `${seed.x}%`,
                top: `${seed.y}%`,
                fontSize: seed.grown ? "24px" : "16px",
                transition: "font-size 0.3s ease",
              }}
            >
              {seed.grown ? seed.flower : "🌱"}
            </span>
          ))}
        </div>
        {grownCount === seeds.length && (
          <p style={styles.complete}>
            all flowers bloomed! ˚˖𓍢ִִ໋🌼˚˖𓍢ִ🌿˚.
          </p>
        )}
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  garden: {
    cursor:
      "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32'><text y='24' font-size='24'>💦</text></svg>\") 16 16, auto",
  },
  emojiDecor: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    gap: "8px",
    margin: "16px 0",
    fontSize: "16px",
    lineHeight: 1.8,
    color: "#a0607a",
    opacity: 0.7,
  },
  emojiRow: {
    textAlign: "center" as const,
    letterSpacing: "2px",
  },
  seedBed: {
    margin: "24px 0",
  },
  instruction: {
    textAlign: "center" as const,
    color: "#b8a0aa",
    fontSize: "13px",
    marginBottom: "12px",
  },
  field: {
    position: "relative" as const,
    width: "100%",
    height: "300px",
    background: "#fef8fa",
    borderRadius: "12px",
    border: "1px solid #f0c4d4",
    overflow: "hidden",
  },
  seed: {
    position: "absolute" as const,
    cursor: "inherit",
    userSelect: "none" as const,
    transform: "translate(-50%, -50%)",
  },
  complete: {
    textAlign: "center" as const,
    color: "#a0607a",
    fontSize: "14px",
    marginTop: "12px",
    fontWeight: 600,
  },
};
