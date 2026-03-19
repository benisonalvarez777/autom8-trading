import React from "react";

const TELEGRAM_LINK = "https://t.me/DontCopyMaster";

const products = [
  { title: "Forex EA", description: "Automated trading bots.", price: "$100 - $1000" },
  { title: "Telegram Signals", description: "Daily forex signals.", price: "$50/month" },
  { title: "Mentoring", description: "1-on-1 coaching.", price: "$300" },
  { title: "Copy Trading", description: "Earn passively.", price: "Varies" },
];

export default function App() {
  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>Autom8 Trading</h1>
      <p>Automate your Forex success</p>

      <a href={TELEGRAM_LINK} target="_blank">
        <button>Join Telegram</button>
      </a>

      <div style={{ marginTop: 20 }}>
        {products.map((p, i) => (
          <div key={i} style={{ border: "1px solid #ccc", padding: 10, marginBottom: 10 }}>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <b>{p.price}</b><br/>
            <a href={TELEGRAM_LINK} target="_blank">
              <button>Buy via USDT</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
