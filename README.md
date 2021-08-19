# SamaTech Frontend Challenge

Implement a simple viewer with two pages:
- Home page lists API data
- Sub-page shows individual data

The viewer is for NFT metadata - if you're not familiar with NFTs don't worry, the API responses are documented below and contain only basic data types.

The boilerplate for the app is mostly filled out already, it's only necessary to fill in TODOs and add the sub-page. You should not need to add any packages, but if you do please explain the decision.

The app uses Vite and Vue3.

## Requirements

- Fork this repository or upload a new version to your Github
- Implement the pages described above
- Use existing theme to produce a simple and clean layout
- Write notes on any issues you had, or anything that isn't working as intended
- List view includes:
  - "name"
  - ~40 characters of "description"
  - "file" thumbnail
  - "created" date
  - "status"
  - "price"
  - "quantity"
- Sub-page includes:
  - "name"
  - "description"
  - Large "file"
  - "created" date
  - "status"
  - "price"
  - "quantity"
  - "owner" information
- No raw text - use i18n
- Prefer `<script setup>` syntax in SFCs
  * See existing SFCs as an example, or review [docs](https://v3.vuejs.org/api/sfc-script-setup.html)
- Typescript or Javascript is ok
- Testing not required

## API data format

#### api/nfts

https://nft-test.tpa.finance/api/nfts
```json
[{
  "id": "number",
  "type": "string (ERC721 | ERC1155)",
  "name": "string",
  "description": "string",
  "created": "number (unix seconds)",
  "posted": "number (unix seconds) | undefined",
  "status": "string (SAVED | MINTED | PUBLISHED | APPROVED | PENDING_MINT | MINTED)",
  "file": "string (relative url from API_HOST, may be video or image)",
  "royalties": "string (percentage)",
  "price": "string (numeric)",
  "quantity": "string (numeric)",
  "owner": {
    "id": "number",
    "name": "string",
    "avatar": "string | null",
    "ethAddress": "string"
  }
},
{
  // etc...
}
]
```

#### api/nft/<nft_id>

https://nft-test.tpa.finance/api/nft/2
```json
{
  // All fields from objects in /api/nfts
  "txs":[
    {
      "id": "number",
      "type": "string (tx.erc721_transfer, tx.erc721_approve, tx.erc721_mint, tx.post_sale, tx.buy, tx.cancel_sale]",
      "hash": "string",
      "receipt": "string"
    },
    {
      // etc...
    }
  ]
}
```