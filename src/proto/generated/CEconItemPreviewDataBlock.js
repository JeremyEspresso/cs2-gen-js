/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const CEconItemPreviewDataBlock = $root.CEconItemPreviewDataBlock = (() => {

    /**
     * Properties of a CEconItemPreviewDataBlock.
     * @exports ICEconItemPreviewDataBlock
     * @interface ICEconItemPreviewDataBlock
     * @property {number|null} [accountid] CEconItemPreviewDataBlock accountid
     * @property {number|Long|null} [itemid] CEconItemPreviewDataBlock itemid
     * @property {number|null} [defindex] CEconItemPreviewDataBlock defindex
     * @property {number|null} [paintindex] CEconItemPreviewDataBlock paintindex
     * @property {number|null} [rarity] CEconItemPreviewDataBlock rarity
     * @property {number|null} [quality] CEconItemPreviewDataBlock quality
     * @property {number|null} [paintwear] CEconItemPreviewDataBlock paintwear
     * @property {number|null} [paintseed] CEconItemPreviewDataBlock paintseed
     * @property {number|null} [killeaterscoretype] CEconItemPreviewDataBlock killeaterscoretype
     * @property {number|null} [killeatervalue] CEconItemPreviewDataBlock killeatervalue
     * @property {string|null} [customname] CEconItemPreviewDataBlock customname
     * @property {Array.<CEconItemPreviewDataBlock.ISticker>|null} [stickers] CEconItemPreviewDataBlock stickers
     * @property {number|null} [inventory] CEconItemPreviewDataBlock inventory
     * @property {number|null} [origin] CEconItemPreviewDataBlock origin
     * @property {number|null} [questid] CEconItemPreviewDataBlock questid
     * @property {number|null} [dropreason] CEconItemPreviewDataBlock dropreason
     * @property {number|null} [musicindex] CEconItemPreviewDataBlock musicindex
     * @property {number|null} [entindex] CEconItemPreviewDataBlock entindex
     * @property {number|null} [petindex] CEconItemPreviewDataBlock petindex
     * @property {Array.<CEconItemPreviewDataBlock.ISticker>|null} [keychains] CEconItemPreviewDataBlock keychains
     */

    /**
     * Constructs a new CEconItemPreviewDataBlock.
     * @exports CEconItemPreviewDataBlock
     * @classdesc Represents a CEconItemPreviewDataBlock.
     * @implements ICEconItemPreviewDataBlock
     * @constructor
     * @param {ICEconItemPreviewDataBlock=} [properties] Properties to set
     */
    function CEconItemPreviewDataBlock(properties) {
        this.stickers = [];
        this.keychains = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CEconItemPreviewDataBlock accountid.
     * @member {number} accountid
     * @memberof CEconItemPreviewDataBlock
     * @instance
     */
    CEconItemPreviewDataBlock.prototype.accountid = 0;

    /**
     * CEconItemPreviewDataBlock itemid.
     * @member {number|Long} itemid
     * @memberof CEconItemPreviewDataBlock
     * @instance
     */
    CEconItemPreviewDataBlock.prototype.itemid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * CEconItemPreviewDataBlock defindex.
     * @member {number} defindex
     * @memberof CEconItemPreviewDataBlock
     * @instance
     */
    CEconItemPreviewDataBlock.prototype.defindex = 0;

    /**
     * CEconItemPreviewDataBlock paintindex.
     * @member {number} paintindex
     * @memberof CEconItemPreviewDataBlock
     * @instance
     */
    CEconItemPreviewDataBlock.prototype.paintindex = 0;

    /**
     * CEconItemPreviewDataBlock rarity.
     * @member {number} rarity
     * @memberof CEconItemPreviewDataBlock
     * @instance
     */
    CEconItemPreviewDataBlock.prototype.rarity = 0;

    /**
     * CEconItemPreviewDataBlock quality.
     * @member {number} quality
     * @memberof CEconItemPreviewDataBlock
     * @instance
     */
    CEconItemPreviewDataBlock.prototype.quality = 0;

    /**
     * CEconItemPreviewDataBlock paintwear.
     * @member {number} paintwear
     * @memberof CEconItemPreviewDataBlock
     * @instance
     */
    CEconItemPreviewDataBlock.prototype.paintwear = 0;

    /**
     * CEconItemPreviewDataBlock paintseed.
     * @member {number} paintseed
     * @memberof CEconItemPreviewDataBlock
     * @instance
     */
    CEconItemPreviewDataBlock.prototype.paintseed = 0;

    /**
     * CEconItemPreviewDataBlock killeaterscoretype.
     * @member {number} killeaterscoretype
     * @memberof CEconItemPreviewDataBlock
     * @instance
     */
    CEconItemPreviewDataBlock.prototype.killeaterscoretype = 0;

    /**
     * CEconItemPreviewDataBlock killeatervalue.
     * @member {number} killeatervalue
     * @memberof CEconItemPreviewDataBlock
     * @instance
     */
    CEconItemPreviewDataBlock.prototype.killeatervalue = 0;

    /**
     * CEconItemPreviewDataBlock customname.
     * @member {string} customname
     * @memberof CEconItemPreviewDataBlock
     * @instance
     */
    CEconItemPreviewDataBlock.prototype.customname = "";

    /**
     * CEconItemPreviewDataBlock stickers.
     * @member {Array.<CEconItemPreviewDataBlock.ISticker>} stickers
     * @memberof CEconItemPreviewDataBlock
     * @instance
     */
    CEconItemPreviewDataBlock.prototype.stickers = $util.emptyArray;

    /**
     * CEconItemPreviewDataBlock inventory.
     * @member {number} inventory
     * @memberof CEconItemPreviewDataBlock
     * @instance
     */
    CEconItemPreviewDataBlock.prototype.inventory = 0;

    /**
     * CEconItemPreviewDataBlock origin.
     * @member {number} origin
     * @memberof CEconItemPreviewDataBlock
     * @instance
     */
    CEconItemPreviewDataBlock.prototype.origin = 0;

    /**
     * CEconItemPreviewDataBlock questid.
     * @member {number} questid
     * @memberof CEconItemPreviewDataBlock
     * @instance
     */
    CEconItemPreviewDataBlock.prototype.questid = 0;

    /**
     * CEconItemPreviewDataBlock dropreason.
     * @member {number} dropreason
     * @memberof CEconItemPreviewDataBlock
     * @instance
     */
    CEconItemPreviewDataBlock.prototype.dropreason = 0;

    /**
     * CEconItemPreviewDataBlock musicindex.
     * @member {number} musicindex
     * @memberof CEconItemPreviewDataBlock
     * @instance
     */
    CEconItemPreviewDataBlock.prototype.musicindex = 0;

    /**
     * CEconItemPreviewDataBlock entindex.
     * @member {number} entindex
     * @memberof CEconItemPreviewDataBlock
     * @instance
     */
    CEconItemPreviewDataBlock.prototype.entindex = 0;

    /**
     * CEconItemPreviewDataBlock petindex.
     * @member {number} petindex
     * @memberof CEconItemPreviewDataBlock
     * @instance
     */
    CEconItemPreviewDataBlock.prototype.petindex = 0;

    /**
     * CEconItemPreviewDataBlock keychains.
     * @member {Array.<CEconItemPreviewDataBlock.ISticker>} keychains
     * @memberof CEconItemPreviewDataBlock
     * @instance
     */
    CEconItemPreviewDataBlock.prototype.keychains = $util.emptyArray;

    /**
     * Creates a new CEconItemPreviewDataBlock instance using the specified properties.
     * @function create
     * @memberof CEconItemPreviewDataBlock
     * @static
     * @param {ICEconItemPreviewDataBlock=} [properties] Properties to set
     * @returns {CEconItemPreviewDataBlock} CEconItemPreviewDataBlock instance
     */
    CEconItemPreviewDataBlock.create = function create(properties) {
        return new CEconItemPreviewDataBlock(properties);
    };

    /**
     * Encodes the specified CEconItemPreviewDataBlock message. Does not implicitly {@link CEconItemPreviewDataBlock.verify|verify} messages.
     * @function encode
     * @memberof CEconItemPreviewDataBlock
     * @static
     * @param {ICEconItemPreviewDataBlock} message CEconItemPreviewDataBlock message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CEconItemPreviewDataBlock.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.accountid != null && Object.hasOwnProperty.call(message, "accountid"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.accountid);
        if (message.itemid != null && Object.hasOwnProperty.call(message, "itemid"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.itemid);
        if (message.defindex != null && Object.hasOwnProperty.call(message, "defindex"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.defindex);
        if (message.paintindex != null && Object.hasOwnProperty.call(message, "paintindex"))
            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.paintindex);
        if (message.rarity != null && Object.hasOwnProperty.call(message, "rarity"))
            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.rarity);
        if (message.quality != null && Object.hasOwnProperty.call(message, "quality"))
            writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.quality);
        if (message.paintwear != null && Object.hasOwnProperty.call(message, "paintwear"))
            writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.paintwear);
        if (message.paintseed != null && Object.hasOwnProperty.call(message, "paintseed"))
            writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.paintseed);
        if (message.killeaterscoretype != null && Object.hasOwnProperty.call(message, "killeaterscoretype"))
            writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.killeaterscoretype);
        if (message.killeatervalue != null && Object.hasOwnProperty.call(message, "killeatervalue"))
            writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.killeatervalue);
        if (message.customname != null && Object.hasOwnProperty.call(message, "customname"))
            writer.uint32(/* id 11, wireType 2 =*/90).string(message.customname);
        if (message.stickers != null && message.stickers.length)
            for (let i = 0; i < message.stickers.length; ++i)
                $root.CEconItemPreviewDataBlock.Sticker.encode(message.stickers[i], writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
        if (message.inventory != null && Object.hasOwnProperty.call(message, "inventory"))
            writer.uint32(/* id 13, wireType 0 =*/104).uint32(message.inventory);
        if (message.origin != null && Object.hasOwnProperty.call(message, "origin"))
            writer.uint32(/* id 14, wireType 0 =*/112).uint32(message.origin);
        if (message.questid != null && Object.hasOwnProperty.call(message, "questid"))
            writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.questid);
        if (message.dropreason != null && Object.hasOwnProperty.call(message, "dropreason"))
            writer.uint32(/* id 16, wireType 0 =*/128).uint32(message.dropreason);
        if (message.musicindex != null && Object.hasOwnProperty.call(message, "musicindex"))
            writer.uint32(/* id 17, wireType 0 =*/136).uint32(message.musicindex);
        if (message.entindex != null && Object.hasOwnProperty.call(message, "entindex"))
            writer.uint32(/* id 18, wireType 0 =*/144).int32(message.entindex);
        if (message.petindex != null && Object.hasOwnProperty.call(message, "petindex"))
            writer.uint32(/* id 19, wireType 0 =*/152).uint32(message.petindex);
        if (message.keychains != null && message.keychains.length)
            for (let i = 0; i < message.keychains.length; ++i)
                $root.CEconItemPreviewDataBlock.Sticker.encode(message.keychains[i], writer.uint32(/* id 20, wireType 2 =*/162).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified CEconItemPreviewDataBlock message, length delimited. Does not implicitly {@link CEconItemPreviewDataBlock.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CEconItemPreviewDataBlock
     * @static
     * @param {ICEconItemPreviewDataBlock} message CEconItemPreviewDataBlock message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CEconItemPreviewDataBlock.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CEconItemPreviewDataBlock message from the specified reader or buffer.
     * @function decode
     * @memberof CEconItemPreviewDataBlock
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CEconItemPreviewDataBlock} CEconItemPreviewDataBlock
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CEconItemPreviewDataBlock.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CEconItemPreviewDataBlock();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.accountid = reader.uint32();
                    break;
                }
            case 2: {
                    message.itemid = reader.uint64();
                    break;
                }
            case 3: {
                    message.defindex = reader.uint32();
                    break;
                }
            case 4: {
                    message.paintindex = reader.uint32();
                    break;
                }
            case 5: {
                    message.rarity = reader.uint32();
                    break;
                }
            case 6: {
                    message.quality = reader.uint32();
                    break;
                }
            case 7: {
                    message.paintwear = reader.uint32();
                    break;
                }
            case 8: {
                    message.paintseed = reader.uint32();
                    break;
                }
            case 9: {
                    message.killeaterscoretype = reader.uint32();
                    break;
                }
            case 10: {
                    message.killeatervalue = reader.uint32();
                    break;
                }
            case 11: {
                    message.customname = reader.string();
                    break;
                }
            case 12: {
                    if (!(message.stickers && message.stickers.length))
                        message.stickers = [];
                    message.stickers.push($root.CEconItemPreviewDataBlock.Sticker.decode(reader, reader.uint32()));
                    break;
                }
            case 13: {
                    message.inventory = reader.uint32();
                    break;
                }
            case 14: {
                    message.origin = reader.uint32();
                    break;
                }
            case 15: {
                    message.questid = reader.uint32();
                    break;
                }
            case 16: {
                    message.dropreason = reader.uint32();
                    break;
                }
            case 17: {
                    message.musicindex = reader.uint32();
                    break;
                }
            case 18: {
                    message.entindex = reader.int32();
                    break;
                }
            case 19: {
                    message.petindex = reader.uint32();
                    break;
                }
            case 20: {
                    if (!(message.keychains && message.keychains.length))
                        message.keychains = [];
                    message.keychains.push($root.CEconItemPreviewDataBlock.Sticker.decode(reader, reader.uint32()));
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CEconItemPreviewDataBlock message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CEconItemPreviewDataBlock
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CEconItemPreviewDataBlock} CEconItemPreviewDataBlock
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CEconItemPreviewDataBlock.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CEconItemPreviewDataBlock message.
     * @function verify
     * @memberof CEconItemPreviewDataBlock
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CEconItemPreviewDataBlock.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.accountid != null && message.hasOwnProperty("accountid"))
            if (!$util.isInteger(message.accountid))
                return "accountid: integer expected";
        if (message.itemid != null && message.hasOwnProperty("itemid"))
            if (!$util.isInteger(message.itemid) && !(message.itemid && $util.isInteger(message.itemid.low) && $util.isInteger(message.itemid.high)))
                return "itemid: integer|Long expected";
        if (message.defindex != null && message.hasOwnProperty("defindex"))
            if (!$util.isInteger(message.defindex))
                return "defindex: integer expected";
        if (message.paintindex != null && message.hasOwnProperty("paintindex"))
            if (!$util.isInteger(message.paintindex))
                return "paintindex: integer expected";
        if (message.rarity != null && message.hasOwnProperty("rarity"))
            if (!$util.isInteger(message.rarity))
                return "rarity: integer expected";
        if (message.quality != null && message.hasOwnProperty("quality"))
            if (!$util.isInteger(message.quality))
                return "quality: integer expected";
        if (message.paintwear != null && message.hasOwnProperty("paintwear"))
            if (!$util.isInteger(message.paintwear))
                return "paintwear: integer expected";
        if (message.paintseed != null && message.hasOwnProperty("paintseed"))
            if (!$util.isInteger(message.paintseed))
                return "paintseed: integer expected";
        if (message.killeaterscoretype != null && message.hasOwnProperty("killeaterscoretype"))
            if (!$util.isInteger(message.killeaterscoretype))
                return "killeaterscoretype: integer expected";
        if (message.killeatervalue != null && message.hasOwnProperty("killeatervalue"))
            if (!$util.isInteger(message.killeatervalue))
                return "killeatervalue: integer expected";
        if (message.customname != null && message.hasOwnProperty("customname"))
            if (!$util.isString(message.customname))
                return "customname: string expected";
        if (message.stickers != null && message.hasOwnProperty("stickers")) {
            if (!Array.isArray(message.stickers))
                return "stickers: array expected";
            for (let i = 0; i < message.stickers.length; ++i) {
                let error = $root.CEconItemPreviewDataBlock.Sticker.verify(message.stickers[i]);
                if (error)
                    return "stickers." + error;
            }
        }
        if (message.inventory != null && message.hasOwnProperty("inventory"))
            if (!$util.isInteger(message.inventory))
                return "inventory: integer expected";
        if (message.origin != null && message.hasOwnProperty("origin"))
            if (!$util.isInteger(message.origin))
                return "origin: integer expected";
        if (message.questid != null && message.hasOwnProperty("questid"))
            if (!$util.isInteger(message.questid))
                return "questid: integer expected";
        if (message.dropreason != null && message.hasOwnProperty("dropreason"))
            if (!$util.isInteger(message.dropreason))
                return "dropreason: integer expected";
        if (message.musicindex != null && message.hasOwnProperty("musicindex"))
            if (!$util.isInteger(message.musicindex))
                return "musicindex: integer expected";
        if (message.entindex != null && message.hasOwnProperty("entindex"))
            if (!$util.isInteger(message.entindex))
                return "entindex: integer expected";
        if (message.petindex != null && message.hasOwnProperty("petindex"))
            if (!$util.isInteger(message.petindex))
                return "petindex: integer expected";
        if (message.keychains != null && message.hasOwnProperty("keychains")) {
            if (!Array.isArray(message.keychains))
                return "keychains: array expected";
            for (let i = 0; i < message.keychains.length; ++i) {
                let error = $root.CEconItemPreviewDataBlock.Sticker.verify(message.keychains[i]);
                if (error)
                    return "keychains." + error;
            }
        }
        return null;
    };

    /**
     * Creates a CEconItemPreviewDataBlock message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CEconItemPreviewDataBlock
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CEconItemPreviewDataBlock} CEconItemPreviewDataBlock
     */
    CEconItemPreviewDataBlock.fromObject = function fromObject(object) {
        if (object instanceof $root.CEconItemPreviewDataBlock)
            return object;
        let message = new $root.CEconItemPreviewDataBlock();
        if (object.accountid != null)
            message.accountid = object.accountid >>> 0;
        if (object.itemid != null)
            if ($util.Long)
                (message.itemid = $util.Long.fromValue(object.itemid)).unsigned = true;
            else if (typeof object.itemid === "string")
                message.itemid = parseInt(object.itemid, 10);
            else if (typeof object.itemid === "number")
                message.itemid = object.itemid;
            else if (typeof object.itemid === "object")
                message.itemid = new $util.LongBits(object.itemid.low >>> 0, object.itemid.high >>> 0).toNumber(true);
        if (object.defindex != null)
            message.defindex = object.defindex >>> 0;
        if (object.paintindex != null)
            message.paintindex = object.paintindex >>> 0;
        if (object.rarity != null)
            message.rarity = object.rarity >>> 0;
        if (object.quality != null)
            message.quality = object.quality >>> 0;
        if (object.paintwear != null)
            message.paintwear = object.paintwear >>> 0;
        if (object.paintseed != null)
            message.paintseed = object.paintseed >>> 0;
        if (object.killeaterscoretype != null)
            message.killeaterscoretype = object.killeaterscoretype >>> 0;
        if (object.killeatervalue != null)
            message.killeatervalue = object.killeatervalue >>> 0;
        if (object.customname != null)
            message.customname = String(object.customname);
        if (object.stickers) {
            if (!Array.isArray(object.stickers))
                throw TypeError(".CEconItemPreviewDataBlock.stickers: array expected");
            message.stickers = [];
            for (let i = 0; i < object.stickers.length; ++i) {
                if (typeof object.stickers[i] !== "object")
                    throw TypeError(".CEconItemPreviewDataBlock.stickers: object expected");
                message.stickers[i] = $root.CEconItemPreviewDataBlock.Sticker.fromObject(object.stickers[i]);
            }
        }
        if (object.inventory != null)
            message.inventory = object.inventory >>> 0;
        if (object.origin != null)
            message.origin = object.origin >>> 0;
        if (object.questid != null)
            message.questid = object.questid >>> 0;
        if (object.dropreason != null)
            message.dropreason = object.dropreason >>> 0;
        if (object.musicindex != null)
            message.musicindex = object.musicindex >>> 0;
        if (object.entindex != null)
            message.entindex = object.entindex | 0;
        if (object.petindex != null)
            message.petindex = object.petindex >>> 0;
        if (object.keychains) {
            if (!Array.isArray(object.keychains))
                throw TypeError(".CEconItemPreviewDataBlock.keychains: array expected");
            message.keychains = [];
            for (let i = 0; i < object.keychains.length; ++i) {
                if (typeof object.keychains[i] !== "object")
                    throw TypeError(".CEconItemPreviewDataBlock.keychains: object expected");
                message.keychains[i] = $root.CEconItemPreviewDataBlock.Sticker.fromObject(object.keychains[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a CEconItemPreviewDataBlock message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CEconItemPreviewDataBlock
     * @static
     * @param {CEconItemPreviewDataBlock} message CEconItemPreviewDataBlock
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CEconItemPreviewDataBlock.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults) {
            object.stickers = [];
            object.keychains = [];
        }
        if (options.defaults) {
            object.accountid = 0;
            if ($util.Long) {
                let long = new $util.Long(0, 0, true);
                object.itemid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.itemid = options.longs === String ? "0" : 0;
            object.defindex = 0;
            object.paintindex = 0;
            object.rarity = 0;
            object.quality = 0;
            object.paintwear = 0;
            object.paintseed = 0;
            object.killeaterscoretype = 0;
            object.killeatervalue = 0;
            object.customname = "";
            object.inventory = 0;
            object.origin = 0;
            object.questid = 0;
            object.dropreason = 0;
            object.musicindex = 0;
            object.entindex = 0;
            object.petindex = 0;
        }
        if (message.accountid != null && message.hasOwnProperty("accountid"))
            object.accountid = message.accountid;
        if (message.itemid != null && message.hasOwnProperty("itemid"))
            if (typeof message.itemid === "number")
                object.itemid = options.longs === String ? String(message.itemid) : message.itemid;
            else
                object.itemid = options.longs === String ? $util.Long.prototype.toString.call(message.itemid) : options.longs === Number ? new $util.LongBits(message.itemid.low >>> 0, message.itemid.high >>> 0).toNumber(true) : message.itemid;
        if (message.defindex != null && message.hasOwnProperty("defindex"))
            object.defindex = message.defindex;
        if (message.paintindex != null && message.hasOwnProperty("paintindex"))
            object.paintindex = message.paintindex;
        if (message.rarity != null && message.hasOwnProperty("rarity"))
            object.rarity = message.rarity;
        if (message.quality != null && message.hasOwnProperty("quality"))
            object.quality = message.quality;
        if (message.paintwear != null && message.hasOwnProperty("paintwear"))
            object.paintwear = message.paintwear;
        if (message.paintseed != null && message.hasOwnProperty("paintseed"))
            object.paintseed = message.paintseed;
        if (message.killeaterscoretype != null && message.hasOwnProperty("killeaterscoretype"))
            object.killeaterscoretype = message.killeaterscoretype;
        if (message.killeatervalue != null && message.hasOwnProperty("killeatervalue"))
            object.killeatervalue = message.killeatervalue;
        if (message.customname != null && message.hasOwnProperty("customname"))
            object.customname = message.customname;
        if (message.stickers && message.stickers.length) {
            object.stickers = [];
            for (let j = 0; j < message.stickers.length; ++j)
                object.stickers[j] = $root.CEconItemPreviewDataBlock.Sticker.toObject(message.stickers[j], options);
        }
        if (message.inventory != null && message.hasOwnProperty("inventory"))
            object.inventory = message.inventory;
        if (message.origin != null && message.hasOwnProperty("origin"))
            object.origin = message.origin;
        if (message.questid != null && message.hasOwnProperty("questid"))
            object.questid = message.questid;
        if (message.dropreason != null && message.hasOwnProperty("dropreason"))
            object.dropreason = message.dropreason;
        if (message.musicindex != null && message.hasOwnProperty("musicindex"))
            object.musicindex = message.musicindex;
        if (message.entindex != null && message.hasOwnProperty("entindex"))
            object.entindex = message.entindex;
        if (message.petindex != null && message.hasOwnProperty("petindex"))
            object.petindex = message.petindex;
        if (message.keychains && message.keychains.length) {
            object.keychains = [];
            for (let j = 0; j < message.keychains.length; ++j)
                object.keychains[j] = $root.CEconItemPreviewDataBlock.Sticker.toObject(message.keychains[j], options);
        }
        return object;
    };

    /**
     * Converts this CEconItemPreviewDataBlock to JSON.
     * @function toJSON
     * @memberof CEconItemPreviewDataBlock
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CEconItemPreviewDataBlock.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for CEconItemPreviewDataBlock
     * @function getTypeUrl
     * @memberof CEconItemPreviewDataBlock
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CEconItemPreviewDataBlock.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CEconItemPreviewDataBlock";
    };

    CEconItemPreviewDataBlock.Sticker = (function() {

        /**
         * Properties of a Sticker.
         * @memberof CEconItemPreviewDataBlock
         * @interface ISticker
         * @property {number|null} [slot] Sticker slot
         * @property {number|null} [stickerId] Sticker stickerId
         * @property {number|null} [wear] Sticker wear
         * @property {number|null} [scale] Sticker scale
         * @property {number|null} [rotation] Sticker rotation
         * @property {number|null} [tintId] Sticker tintId
         * @property {number|null} [offsetX] Sticker offsetX
         * @property {number|null} [offsetY] Sticker offsetY
         * @property {number|null} [offsetZ] Sticker offsetZ
         * @property {number|null} [pattern] Sticker pattern
         */

        /**
         * Constructs a new Sticker.
         * @memberof CEconItemPreviewDataBlock
         * @classdesc Represents a Sticker.
         * @implements ISticker
         * @constructor
         * @param {CEconItemPreviewDataBlock.ISticker=} [properties] Properties to set
         */
        function Sticker(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Sticker slot.
         * @member {number} slot
         * @memberof CEconItemPreviewDataBlock.Sticker
         * @instance
         */
        Sticker.prototype.slot = 0;

        /**
         * Sticker stickerId.
         * @member {number} stickerId
         * @memberof CEconItemPreviewDataBlock.Sticker
         * @instance
         */
        Sticker.prototype.stickerId = 0;

        /**
         * Sticker wear.
         * @member {number} wear
         * @memberof CEconItemPreviewDataBlock.Sticker
         * @instance
         */
        Sticker.prototype.wear = 0;

        /**
         * Sticker scale.
         * @member {number} scale
         * @memberof CEconItemPreviewDataBlock.Sticker
         * @instance
         */
        Sticker.prototype.scale = 0;

        /**
         * Sticker rotation.
         * @member {number} rotation
         * @memberof CEconItemPreviewDataBlock.Sticker
         * @instance
         */
        Sticker.prototype.rotation = 0;

        /**
         * Sticker tintId.
         * @member {number} tintId
         * @memberof CEconItemPreviewDataBlock.Sticker
         * @instance
         */
        Sticker.prototype.tintId = 0;

        /**
         * Sticker offsetX.
         * @member {number} offsetX
         * @memberof CEconItemPreviewDataBlock.Sticker
         * @instance
         */
        Sticker.prototype.offsetX = 0;

        /**
         * Sticker offsetY.
         * @member {number} offsetY
         * @memberof CEconItemPreviewDataBlock.Sticker
         * @instance
         */
        Sticker.prototype.offsetY = 0;

        /**
         * Sticker offsetZ.
         * @member {number} offsetZ
         * @memberof CEconItemPreviewDataBlock.Sticker
         * @instance
         */
        Sticker.prototype.offsetZ = 0;

        /**
         * Sticker pattern.
         * @member {number} pattern
         * @memberof CEconItemPreviewDataBlock.Sticker
         * @instance
         */
        Sticker.prototype.pattern = 0;

        /**
         * Creates a new Sticker instance using the specified properties.
         * @function create
         * @memberof CEconItemPreviewDataBlock.Sticker
         * @static
         * @param {CEconItemPreviewDataBlock.ISticker=} [properties] Properties to set
         * @returns {CEconItemPreviewDataBlock.Sticker} Sticker instance
         */
        Sticker.create = function create(properties) {
            return new Sticker(properties);
        };

        /**
         * Encodes the specified Sticker message. Does not implicitly {@link CEconItemPreviewDataBlock.Sticker.verify|verify} messages.
         * @function encode
         * @memberof CEconItemPreviewDataBlock.Sticker
         * @static
         * @param {CEconItemPreviewDataBlock.ISticker} message Sticker message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Sticker.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.slot != null && Object.hasOwnProperty.call(message, "slot"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.slot);
            if (message.stickerId != null && Object.hasOwnProperty.call(message, "stickerId"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.stickerId);
            if (message.wear != null && Object.hasOwnProperty.call(message, "wear"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.wear);
            if (message.scale != null && Object.hasOwnProperty.call(message, "scale"))
                writer.uint32(/* id 4, wireType 5 =*/37).float(message.scale);
            if (message.rotation != null && Object.hasOwnProperty.call(message, "rotation"))
                writer.uint32(/* id 5, wireType 5 =*/45).float(message.rotation);
            if (message.tintId != null && Object.hasOwnProperty.call(message, "tintId"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.tintId);
            if (message.offsetX != null && Object.hasOwnProperty.call(message, "offsetX"))
                writer.uint32(/* id 7, wireType 5 =*/61).float(message.offsetX);
            if (message.offsetY != null && Object.hasOwnProperty.call(message, "offsetY"))
                writer.uint32(/* id 8, wireType 5 =*/69).float(message.offsetY);
            if (message.offsetZ != null && Object.hasOwnProperty.call(message, "offsetZ"))
                writer.uint32(/* id 9, wireType 5 =*/77).float(message.offsetZ);
            if (message.pattern != null && Object.hasOwnProperty.call(message, "pattern"))
                writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.pattern);
            return writer;
        };

        /**
         * Encodes the specified Sticker message, length delimited. Does not implicitly {@link CEconItemPreviewDataBlock.Sticker.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CEconItemPreviewDataBlock.Sticker
         * @static
         * @param {CEconItemPreviewDataBlock.ISticker} message Sticker message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Sticker.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Sticker message from the specified reader or buffer.
         * @function decode
         * @memberof CEconItemPreviewDataBlock.Sticker
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CEconItemPreviewDataBlock.Sticker} Sticker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Sticker.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CEconItemPreviewDataBlock.Sticker();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.slot = reader.uint32();
                        break;
                    }
                case 2: {
                        message.stickerId = reader.uint32();
                        break;
                    }
                case 3: {
                        message.wear = reader.float();
                        break;
                    }
                case 4: {
                        message.scale = reader.float();
                        break;
                    }
                case 5: {
                        message.rotation = reader.float();
                        break;
                    }
                case 6: {
                        message.tintId = reader.uint32();
                        break;
                    }
                case 7: {
                        message.offsetX = reader.float();
                        break;
                    }
                case 8: {
                        message.offsetY = reader.float();
                        break;
                    }
                case 9: {
                        message.offsetZ = reader.float();
                        break;
                    }
                case 10: {
                        message.pattern = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Sticker message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CEconItemPreviewDataBlock.Sticker
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CEconItemPreviewDataBlock.Sticker} Sticker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Sticker.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Sticker message.
         * @function verify
         * @memberof CEconItemPreviewDataBlock.Sticker
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Sticker.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.slot != null && message.hasOwnProperty("slot"))
                if (!$util.isInteger(message.slot))
                    return "slot: integer expected";
            if (message.stickerId != null && message.hasOwnProperty("stickerId"))
                if (!$util.isInteger(message.stickerId))
                    return "stickerId: integer expected";
            if (message.wear != null && message.hasOwnProperty("wear"))
                if (typeof message.wear !== "number")
                    return "wear: number expected";
            if (message.scale != null && message.hasOwnProperty("scale"))
                if (typeof message.scale !== "number")
                    return "scale: number expected";
            if (message.rotation != null && message.hasOwnProperty("rotation"))
                if (typeof message.rotation !== "number")
                    return "rotation: number expected";
            if (message.tintId != null && message.hasOwnProperty("tintId"))
                if (!$util.isInteger(message.tintId))
                    return "tintId: integer expected";
            if (message.offsetX != null && message.hasOwnProperty("offsetX"))
                if (typeof message.offsetX !== "number")
                    return "offsetX: number expected";
            if (message.offsetY != null && message.hasOwnProperty("offsetY"))
                if (typeof message.offsetY !== "number")
                    return "offsetY: number expected";
            if (message.offsetZ != null && message.hasOwnProperty("offsetZ"))
                if (typeof message.offsetZ !== "number")
                    return "offsetZ: number expected";
            if (message.pattern != null && message.hasOwnProperty("pattern"))
                if (!$util.isInteger(message.pattern))
                    return "pattern: integer expected";
            return null;
        };

        /**
         * Creates a Sticker message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CEconItemPreviewDataBlock.Sticker
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CEconItemPreviewDataBlock.Sticker} Sticker
         */
        Sticker.fromObject = function fromObject(object) {
            if (object instanceof $root.CEconItemPreviewDataBlock.Sticker)
                return object;
            let message = new $root.CEconItemPreviewDataBlock.Sticker();
            if (object.slot != null)
                message.slot = object.slot >>> 0;
            if (object.stickerId != null)
                message.stickerId = object.stickerId >>> 0;
            if (object.wear != null)
                message.wear = Number(object.wear);
            if (object.scale != null)
                message.scale = Number(object.scale);
            if (object.rotation != null)
                message.rotation = Number(object.rotation);
            if (object.tintId != null)
                message.tintId = object.tintId >>> 0;
            if (object.offsetX != null)
                message.offsetX = Number(object.offsetX);
            if (object.offsetY != null)
                message.offsetY = Number(object.offsetY);
            if (object.offsetZ != null)
                message.offsetZ = Number(object.offsetZ);
            if (object.pattern != null)
                message.pattern = object.pattern >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a Sticker message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CEconItemPreviewDataBlock.Sticker
         * @static
         * @param {CEconItemPreviewDataBlock.Sticker} message Sticker
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Sticker.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.slot = 0;
                object.stickerId = 0;
                object.wear = 0;
                object.scale = 0;
                object.rotation = 0;
                object.tintId = 0;
                object.offsetX = 0;
                object.offsetY = 0;
                object.offsetZ = 0;
                object.pattern = 0;
            }
            if (message.slot != null && message.hasOwnProperty("slot"))
                object.slot = message.slot;
            if (message.stickerId != null && message.hasOwnProperty("stickerId"))
                object.stickerId = message.stickerId;
            if (message.wear != null && message.hasOwnProperty("wear"))
                object.wear = options.json && !isFinite(message.wear) ? String(message.wear) : message.wear;
            if (message.scale != null && message.hasOwnProperty("scale"))
                object.scale = options.json && !isFinite(message.scale) ? String(message.scale) : message.scale;
            if (message.rotation != null && message.hasOwnProperty("rotation"))
                object.rotation = options.json && !isFinite(message.rotation) ? String(message.rotation) : message.rotation;
            if (message.tintId != null && message.hasOwnProperty("tintId"))
                object.tintId = message.tintId;
            if (message.offsetX != null && message.hasOwnProperty("offsetX"))
                object.offsetX = options.json && !isFinite(message.offsetX) ? String(message.offsetX) : message.offsetX;
            if (message.offsetY != null && message.hasOwnProperty("offsetY"))
                object.offsetY = options.json && !isFinite(message.offsetY) ? String(message.offsetY) : message.offsetY;
            if (message.offsetZ != null && message.hasOwnProperty("offsetZ"))
                object.offsetZ = options.json && !isFinite(message.offsetZ) ? String(message.offsetZ) : message.offsetZ;
            if (message.pattern != null && message.hasOwnProperty("pattern"))
                object.pattern = message.pattern;
            return object;
        };

        /**
         * Converts this Sticker to JSON.
         * @function toJSON
         * @memberof CEconItemPreviewDataBlock.Sticker
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Sticker.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Sticker
         * @function getTypeUrl
         * @memberof CEconItemPreviewDataBlock.Sticker
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Sticker.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CEconItemPreviewDataBlock.Sticker";
        };

        return Sticker;
    })();

    return CEconItemPreviewDataBlock;
})();

export { $root as default };
