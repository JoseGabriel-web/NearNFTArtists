# :art: NearNFTArtists

NearNFTArtists is an smart contract on the Near Protocol blockchain which allows the creation of an NFT artist profile and for people looking to hire these artists to do so through this smart contract. We make possible:

- The creation of a NFT artist profile.
- The list of artists.
- The availity to change the availability status.
- More utilities are on the way.


# :exclamation: Instalation:

To get this project installed:

## :clipboard: Requisites:

- Make sure to have installed Node.js ≥ 12 (we recommend nvm version).

- Make sure to have installed yarn: npm install -g yarn.

- Install dependencies: yarn install.

- Create a test near account NEAR test account.

- Instal NEAR CLI globally: near-cli.

# Configure NEAR CLI:

Configure near-cli:

```html
    near login
```

# Clone the repository:

```html
    git clone https://github.com/JoseGabriel-web/NearNFTArtists.git
```

```html
    cd NearNFTArtists
```

# :movie_camera: Proyect Build and development deployment:



```html
    yarn devdeploy
```


# Commands:



## Command to create a profile:

```html
    near call $CONTRACT_NAME becomeAnArtist '{"profesionalBackground": string, "hiringCost": number, "emailContact": string}' --account-id <id>.testnet
```

## Command to List all NFT Artists profiles:

```html
    near view $CONTRACT_NAME listNFTArtists
```

## Command to get specific NFT Artist profile:

```html
    near view $CONTRACT_NAME checkAnArtist '{"artistID": number}'
```

## Command to change availability status:

```html
    near call $CONTRACT_NAME changeStatus '{"artistID": 0}' --account-id <id>.testnet
```