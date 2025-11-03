# x402 Endpoint Demo (Custom)

Це спрощена версія демо-сервера x402, налаштована під твої параметри.

## Параметри, що вшиті
- network: `bsc`
- payTo: `0xF97a410f2f0b64Cb5820baD63d878c3A967235AA`
- description: `NFT MINT x402bpunk`
- maxAmountRequired: `1`
- asset: `USD1`
- resource: `/api/mint`
- mimeType: `application/json`
- maxTimeoutSeconds: `300`

Файл, який віддає конфіг: `/.well-known/x402`.

## Запуск

```bash
npm install
npm start
```

Сервер стартує на http://localhost:3000

## Ендпоінти

1. **GET `/.well-known/x402`** — віддає x402-конфіг.
2. **POST `/api/mint`** — фейковий mint-ендпоінт, куди має прилітати запит після оплати.

Тут поки немає реальної валідації транзакції — це демо-сервер, щоб ти міг підв'язати його до свого UI.
