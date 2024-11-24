import { CEconItemPreviewDataBlock } from "./proto/generated/CEconItemPreviewDataBlock";
import crc32 from 'crc';

export function createInpsectLink(
    accountId?: number,
    itemId?: number,
    defIndex?: number,
    paintIndex?: number,
    rarity?: number,
    quality?: number,
    paintWear?: number,
    paintSeed?: number,
    killEaterScoreType?: number,
    killEaterValue?: number,
    customName?: string,
    stickers?: CEconItemPreviewDataBlock.ISticker[],
    inventory?: number,
    origin?: number,
    questId?: number,
    dropReason?: number,
    musicIndex?: number,
    entIndex?: number,
    petIndex?: number,
    keychains?: CEconItemPreviewDataBlock.ISticker[],
  ): string {
    return `${CsActionFunction} ${createInpsectLinkRawData(
        accountId, 
        itemId, 
        defIndex, 
        paintIndex, 
        rarity, 
        quality, 
        paintWear, 
        paintSeed, 
        killEaterScoreType, 
        killEaterValue, 
        customName, stickers, 
        inventory, 
        origin, 
        questId, 
        dropReason, 
        musicIndex, 
        entIndex, 
        petIndex, 
        keychains)}`;
}

export function createInpsectLinkRawData(
    accountId?: number,
    itemId?: number,
    defIndex?: number,
    paintIndex?: number,
    rarity?: number,
    quality?: number,
    paintWear?: number,
    paintSeed?: number,
    killEaterScoreType?: number,
    killEaterValue?: number,
    customName?: string,
    stickers?: CEconItemPreviewDataBlock.ISticker[],
    inventory?: number,
    origin?: number,
    questId?: number,
    dropReason?: number,
    musicIndex?: number,
    entIndex?: number,
    petIndex?: number,
    keychains?: CEconItemPreviewDataBlock.ISticker[],
  ): string {
    const proto = CEconItemPreviewDataBlock.create({
        accountid: accountId,
        itemid: itemId,
        defindex: defIndex,
        paintindex: paintIndex,
        rarity: rarity,
        quality: quality,
        paintwear: paintWear,
        paintseed: paintSeed,
        killeaterscoretype: killEaterScoreType,
        killeatervalue: killEaterValue,
        customname: customName,
        stickers: stickers,
        inventory: inventory,
        origin: origin,
        questid: questId,
        dropreason: dropReason,
        musicindex: musicIndex,
        entindex: entIndex,
        petindex: petIndex,
        keychains: keychains,
      });

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