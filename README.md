# nft-project

A project demo using react + typescript + web3 + integrate with opensea api (Testnet)

## Getting Started

To start the development server, run:

```bash
npm run dev
```

To build the project, run:

```bash
npm run build
```

### Folder Structure

```bash
src/
  components/  
  hooks/
  apis/
```

### Router

The / route will take you to the ListPage.
The /detail/:contract/:id route will take you to the detail page.

### Web3 Related

Web3-related code are placed in the src/components/web3providers folder. The application will attempt to access the MetaMask address; if it's invalid, a hardcoded address will be used.

### Author

This project was created by Luke Liu.
