const uuid = require('uuid');

let consts = {}

consts.UUID = uuid.v4();

consts.NODE_VERSION = "0.22";
consts.NODE_VERSION_COMPATIBILITY = "0.21";
consts.NODE_PROTOCOL = "WebDollar";
consts.NODE_FALLBACK_INTERVAL =  10*1000; //miliseconds
consts.NODE_PORT =  12320; //port
consts.NODE_STATUS_INTERVAL =  20*1000; //miliseconds


consts.NODES_WAITLIST_TRY_RECONNECT_AGAIN =  60*1000; //miliseconds
consts.NODES_WAITLIST_INTERVAL =  5*1000; //miliseconds

consts.NODES_SIGNALING_SERVER_PROTOCOL_CONNECTING_WEB_PEERS_INTERVAL = 2*1000;


consts.PRIVATE_KEY_USE_BASE64 = true;
consts.PRIVATE_KEY_VERSION_PREFIX = "80"; //it is in HEX
consts.PRIVATE_KEY_CHECK_SUM_LENGTH = 4; //in bytes
consts.PRIVATE_KEY_LENGTH = 32; //ending BASE64 HEX

consts.PUBLIC_ADDRESS_VERSION_PREFIX = "00"; //ending BASE64 HEX
consts.PUBLIC_ADDRESS_LENGTH = 32; //ending BASE64 HEX
consts.PUBLIC_ADDRESS_CHECK_SUM_LENGTH = 4; //in bytes

consts.PUBLIC_KEY_LENGTH = 32; //ending BASE64 HEX

consts.PUBLIC_ADDRESS_PREFIX_BASE64 = "584043fe"; //BASE64 HEX  WEBD$
                                      //WEBD  584043
                                      //WEBD$ 584043FF

consts.PUBLIC_ADDRESS_SUFFIX_BASE64 = "EC3F"; //ending BASE64 HEX
                                       //#w$ EC3F
                                       //%#$ 8FBF

consts.PUBLIC_ADDRESS_PREFIX_BASE58 = "00"; //BASE58 HEX and it will be converted to Base64/58
consts.PUBLIC_ADDRESS_SUFFIX_BASE58 = "";

consts.BLOCKS_POW_LENGTH = 32;
consts.BLOCKS_NONCE = 4;
consts.HASH_ARGON2_PARAMS = {salt: 'WebDollar_make_$', saltBuffer: Buffer.from(['W','e','b','D','o','l','l','a','r','_','m','a','k','e','_','$']),time: 2, memPower:10, memBytes: 1024, parallelism: 2, type: 0, hashLen: 32, distPath: 'https://antelle.github.io/argon2-browser/dist' }
// change also to Browser-Mining-WebWorker.js

consts.TOKEN_ID_LENGTH = 32;
consts.MAX_UINT32 = 1 << 30;

consts.BLOCKS_MAX_SIZE_BYTES = 1024*1024 * 1; // in bytes
consts.SOCKET_MAX_SIZE_BYRES = consts.BLOCKS_MAX_SIZE_BYTES + 20;
consts.BLOCKS_LEVEL_INFINITE = 1 << 30;

consts.POPOW_ACTIVATED = false;
consts.POPOW_PARAMS={
    m: 6,
    k: 6,
    d: 0.5,
};

consts.POW_PARAMS={
    VALIDATE_LAST_BLOCKS : 20,
};

export default consts