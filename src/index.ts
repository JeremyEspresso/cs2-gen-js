import { CEconItemPreviewDataBlock, ICEconItemPreviewDataBlock } from "./proto/generated/CEconItemPreviewDataBlock";
import crc32 from 'crc';

const KeychainDefIndex: number = 1355;
const StickerDefIndex: number = 1209;

export * from "./proto/generated/CEconItemPreviewDataBlock";

export function generateStickerInspectLink(stickerId: number, rarity: number): string {  
  const stickers = [CEconItemPreviewDataBlock.Sticker.create(
    {
      slot: 0,
      stickerId: stickerId
    })];

    return createInpsectLink({
      defindex: StickerDefIndex,
      rarity: rarity,
      quality: 4,
      stickers: stickers
    });
}

export function generateKeychainInspectLink(keychainId: number, pattern: number, rarity: number): string {  
  const keychains = [CEconItemPreviewDataBlock.Sticker.create(
    {
      slot: 0,
      stickerId: keychainId,
      pattern: pattern
    })];

    return createInpsectLink({
      defindex: KeychainDefIndex,
      rarity: rarity,
      quality: 4,
      paintseed: pattern,
      keychains: keychains
    });
}

export function createInpsectLink(properties?: ICEconItemPreviewDataBlock): string {
    return `${CsActionFunction} ${createInpsectLinkRawData(properties)}`;
}

export function createInpsectLinkRawData(properties?: ICEconItemPreviewDataBlock): string {
    const proto = CEconItemPreviewDataBlock.create(properties);
    const encodedProto = CEconItemPreviewDataBlock.encode(proto).finish();
   
    const buffer = Buffer.from(new Uint8Array(1 + encodedProto.length));
    buffer[0] = 0;
    buffer.set(encodedProto, 1);
     
    const crc = crc32.crc32(buffer);
    const xoredCrc = (crc & 0xffff) ^ (encodedProto.length * crc);
      
    let checksumBytes = new Uint8Array(4);
    
    new DataView(checksumBytes.buffer).setUint32(0, xoredCrc, false);
    const finalBuffer = new Uint8Array(buffer.length + checksumBytes.length);
    
    finalBuffer.set(buffer);
    finalBuffer.set(checksumBytes, buffer.length);
    
    return Array.from(finalBuffer).map(byte => byte.toString(16).padStart(2, '0')).join('').toUpperCase();
}

const CsActionFunction: string = "steam://rungame/730/76561202255233023/+csgo_econ_action_preview";