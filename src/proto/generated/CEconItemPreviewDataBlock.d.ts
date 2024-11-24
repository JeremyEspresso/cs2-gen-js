import * as $protobuf from "protobufjs";
import Long = require("long");
/** Properties of a CEconItemPreviewDataBlock. */
export interface ICEconItemPreviewDataBlock {

    /** CEconItemPreviewDataBlock accountid */
    accountid?: (number|null);

    /** CEconItemPreviewDataBlock itemid */
    itemid?: (number|Long|null);

    /** CEconItemPreviewDataBlock defindex */
    defindex?: (number|null);

    /** CEconItemPreviewDataBlock paintindex */
    paintindex?: (number|null);

    /** CEconItemPreviewDataBlock rarity */
    rarity?: (number|null);

    /** CEconItemPreviewDataBlock quality */
    quality?: (number|null);

    /** CEconItemPreviewDataBlock paintwear */
    paintwear?: (number|null);

    /** CEconItemPreviewDataBlock paintseed */
    paintseed?: (number|null);

    /** CEconItemPreviewDataBlock killeaterscoretype */
    killeaterscoretype?: (number|null);

    /** CEconItemPreviewDataBlock killeatervalue */
    killeatervalue?: (number|null);

    /** CEconItemPreviewDataBlock customname */
    customname?: (string|null);

    /** CEconItemPreviewDataBlock stickers */
    stickers?: (CEconItemPreviewDataBlock.ISticker[]|null);

    /** CEconItemPreviewDataBlock inventory */
    inventory?: (number|null);

    /** CEconItemPreviewDataBlock origin */
    origin?: (number|null);

    /** CEconItemPreviewDataBlock questid */
    questid?: (number|null);

    /** CEconItemPreviewDataBlock dropreason */
    dropreason?: (number|null);

    /** CEconItemPreviewDataBlock musicindex */
    musicindex?: (number|null);

    /** CEconItemPreviewDataBlock entindex */
    entindex?: (number|null);

    /** CEconItemPreviewDataBlock petindex */
    petindex?: (number|null);

    /** CEconItemPreviewDataBlock keychains */
    keychains?: (CEconItemPreviewDataBlock.ISticker[]|null);
}

/** Represents a CEconItemPreviewDataBlock. */
export class CEconItemPreviewDataBlock implements ICEconItemPreviewDataBlock {

    /**
     * Constructs a new CEconItemPreviewDataBlock.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICEconItemPreviewDataBlock);

    /** CEconItemPreviewDataBlock accountid. */
    public accountid: number;

    /** CEconItemPreviewDataBlock itemid. */
    public itemid: (number|Long);

    /** CEconItemPreviewDataBlock defindex. */
    public defindex: number;

    /** CEconItemPreviewDataBlock paintindex. */
    public paintindex: number;

    /** CEconItemPreviewDataBlock rarity. */
    public rarity: number;

    /** CEconItemPreviewDataBlock quality. */
    public quality: number;

    /** CEconItemPreviewDataBlock paintwear. */
    public paintwear: number;

    /** CEconItemPreviewDataBlock paintseed. */
    public paintseed: number;

    /** CEconItemPreviewDataBlock killeaterscoretype. */
    public killeaterscoretype: number;

    /** CEconItemPreviewDataBlock killeatervalue. */
    public killeatervalue: number;

    /** CEconItemPreviewDataBlock customname. */
    public customname: string;

    /** CEconItemPreviewDataBlock stickers. */
    public stickers: CEconItemPreviewDataBlock.ISticker[];

    /** CEconItemPreviewDataBlock inventory. */
    public inventory: number;

    /** CEconItemPreviewDataBlock origin. */
    public origin: number;

    /** CEconItemPreviewDataBlock questid. */
    public questid: number;

    /** CEconItemPreviewDataBlock dropreason. */
    public dropreason: number;

    /** CEconItemPreviewDataBlock musicindex. */
    public musicindex: number;

    /** CEconItemPreviewDataBlock entindex. */
    public entindex: number;

    /** CEconItemPreviewDataBlock petindex. */
    public petindex: number;

    /** CEconItemPreviewDataBlock keychains. */
    public keychains: CEconItemPreviewDataBlock.ISticker[];

    /**
     * Creates a new CEconItemPreviewDataBlock instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CEconItemPreviewDataBlock instance
     */
    public static create(properties?: ICEconItemPreviewDataBlock): CEconItemPreviewDataBlock;

    /**
     * Encodes the specified CEconItemPreviewDataBlock message. Does not implicitly {@link CEconItemPreviewDataBlock.verify|verify} messages.
     * @param message CEconItemPreviewDataBlock message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICEconItemPreviewDataBlock, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CEconItemPreviewDataBlock message, length delimited. Does not implicitly {@link CEconItemPreviewDataBlock.verify|verify} messages.
     * @param message CEconItemPreviewDataBlock message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICEconItemPreviewDataBlock, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CEconItemPreviewDataBlock message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CEconItemPreviewDataBlock
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CEconItemPreviewDataBlock;

    /**
     * Decodes a CEconItemPreviewDataBlock message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CEconItemPreviewDataBlock
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CEconItemPreviewDataBlock;

    /**
     * Verifies a CEconItemPreviewDataBlock message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CEconItemPreviewDataBlock message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CEconItemPreviewDataBlock
     */
    public static fromObject(object: { [k: string]: any }): CEconItemPreviewDataBlock;

    /**
     * Creates a plain object from a CEconItemPreviewDataBlock message. Also converts values to other types if specified.
     * @param message CEconItemPreviewDataBlock
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CEconItemPreviewDataBlock, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CEconItemPreviewDataBlock to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CEconItemPreviewDataBlock
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace CEconItemPreviewDataBlock {

    /** Properties of a Sticker. */
    interface ISticker {

        /** Sticker slot */
        slot?: (number|null);

        /** Sticker stickerId */
        stickerId?: (number|null);

        /** Sticker wear */
        wear?: (number|null);

        /** Sticker scale */
        scale?: (number|null);

        /** Sticker rotation */
        rotation?: (number|null);

        /** Sticker tintId */
        tintId?: (number|null);

        /** Sticker offsetX */
        offsetX?: (number|null);

        /** Sticker offsetY */
        offsetY?: (number|null);

        /** Sticker offsetZ */
        offsetZ?: (number|null);

        /** Sticker pattern */
        pattern?: (number|null);
    }

    /** Represents a Sticker. */
    class Sticker implements ISticker {

        /**
         * Constructs a new Sticker.
         * @param [properties] Properties to set
         */
        constructor(properties?: CEconItemPreviewDataBlock.ISticker);

        /** Sticker slot. */
        public slot: number;

        /** Sticker stickerId. */
        public stickerId: number;

        /** Sticker wear. */
        public wear: number;

        /** Sticker scale. */
        public scale: number;

        /** Sticker rotation. */
        public rotation: number;

        /** Sticker tintId. */
        public tintId: number;

        /** Sticker offsetX. */
        public offsetX: number;

        /** Sticker offsetY. */
        public offsetY: number;

        /** Sticker offsetZ. */
        public offsetZ: number;

        /** Sticker pattern. */
        public pattern: number;

        /**
         * Creates a new Sticker instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Sticker instance
         */
        public static create(properties?: CEconItemPreviewDataBlock.ISticker): CEconItemPreviewDataBlock.Sticker;

        /**
         * Encodes the specified Sticker message. Does not implicitly {@link CEconItemPreviewDataBlock.Sticker.verify|verify} messages.
         * @param message Sticker message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CEconItemPreviewDataBlock.ISticker, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Sticker message, length delimited. Does not implicitly {@link CEconItemPreviewDataBlock.Sticker.verify|verify} messages.
         * @param message Sticker message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CEconItemPreviewDataBlock.ISticker, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Sticker message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Sticker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CEconItemPreviewDataBlock.Sticker;

        /**
         * Decodes a Sticker message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Sticker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CEconItemPreviewDataBlock.Sticker;

        /**
         * Verifies a Sticker message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Sticker message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Sticker
         */
        public static fromObject(object: { [k: string]: any }): CEconItemPreviewDataBlock.Sticker;

        /**
         * Creates a plain object from a Sticker message. Also converts values to other types if specified.
         * @param message Sticker
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CEconItemPreviewDataBlock.Sticker, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Sticker to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Sticker
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
