require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

// Статичний x402-конфіг за твоїми параметрами
const x402Config = {
  x402Version: 1,
  accepts: [
    {
      scheme: "exact",
      network: "bsc",
      maxAmountRequired: "1",
      resource: "/api/mint",
      description: "NFT MINT x402bpunk",
      mimeType: "application/json",
      payTo: "0xF97a410f2f0b64Cb5820baD63d878c3A967235AA",
      maxTimeoutSeconds: 300,
      asset: "USD1"
    }
  ]
};

// Опціонально можна вказати payer через .env
if (process.env.PAYER) {
  x402Config.payer = process.env.PAYER;
}

// Віддаємо конфіг
app.get('/.well-known/x402', (req, res) => {
  res.json(x402Config);
});

// Фейковий mint-ендпоінт
app.post('/api/mint', (req, res) => {
  // Тут ти можеш перевіряти підпис, tx hash, що завгодно.
  // Поки що просто скажемо, що все ок.
  res.json({
    ok: true,
    message: "Mint success placeholder (x402bpunk).",
    receivedBody: req.body || {}
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`x402 custom server started on port ${PORT}`);
});
