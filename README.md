# cs2gen
Generating Counter-Strike 2 on the fly in Typescript or Javascript.

You can find this package on NPM: [https://www.npmjs.com/package/cs2gen](https://www.npmjs.com/package/cs2gen)

# API
```ts
function generateStickerInspectLink(stickerId: number, rarity: number): string
function generateKeychainInspectLink(keychainId: number, pattern: number, rarity: number): string
function createInpsectLink(properties?: ICEconItemPreviewDataBlock): string
function createInpsectLinkRawData(properties?: ICEconItemPreviewDataBlock): string
```

# Examples
Create an inspect link for a sticker. In this case a Splyce sticker from th MLG Columbus 2016 tournament.
```ts
const inspectLink = generateStickerInspectLink(1011, 3);

console.log(inspectLink);
// output: steam://rungame/730/76561202255233023/+csgo_econ_action_preview 0018B909280330046205080010F3072DB453E2 
```

Create an inspect link for a keychain with a specific pattern. In this case a "Hot Howl" with pattern 1000 and the rarity set to 6 to match the in game actual rarity.
```ts
const inspectLink = generateKeychainInspectLink(7, 1000, 6);

console.log(inspectLink);
// output: steam://rungame/730/76561202255233023/+csgo_econ_action_preview 0018CB0A2806300440E807A201070800100750E80753132C36
```

Create a inspect link for a SSG 08 | Sea Calico in Battle-Scarred (0.49) wear with 4x Splyce | MLG Columbus 2016 stickers fully scraped. 
```ts
const inspectLink = createInpsectLink({
    defindex: 40,
    paintindex: 868,
    paintwear: 1056649722,
    quality: 4,
    rarity: 4,
    paintseed: 701,
    stickers: [
        CEconItemPreviewDataBlock.Sticker.create({
            stickerId: 1011,
            slot: 0,
            wear: 1
        }),
        CEconItemPreviewDataBlock.Sticker.create({
            stickerId: 1011,
            slot: 1,
            wear: 1
        }),
        CEconItemPreviewDataBlock.Sticker.create({
            stickerId: 1011,
            slot: 2,
            wear: 1
        }),
        CEconItemPreviewDataBlock.Sticker.create({
            stickerId: 1011,
            slot: 3,
            wear: 1
        })
    ]
});

console.log(inspectLink);
// output: steam://rungame/730/76561202255233023/+csgo_econ_action_preview 00182820E4062804300438FAE3ECF70340BD05620A080010F3071D0000803F620A080110F3071D0000803F620A080210F3071D0000803F620A080310F3071D0000803F087C326B
```