app.post('/api/mint', (req, res) => {
  // Симулюємо, що користувач ще не оплатив, тому відповідаємо 402
  res.status(402).json({
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
  });
});
