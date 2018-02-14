const colors = require('colors/safe');
import {Node, Blockchain} from './index.js';
import global from "consts/global.js";

console.log("BROWSER MODE");

//Blockchain.createBlockchain("headers-node");
Blockchain.createBlockchain("light-node", ()=>{
    Node.NodeClientsService.startService();
    Node.NodeWebPeersService.startService();
});

window.onbeforeunload = () => {
    console.log(colors.yellow("SIGINT FIRED"))
    global.TERMINATED = true;

    setInterval(()=>{
        if ( global.MINIBLOCKCHAIN_LIGHT_CONFIGURATION_SAVED &&
            global.SEMAPHORE_PROCESS_DONE &&
            global.MINIBLOCKCHAIN_LIGHT_SAVED) {

            console.log(global.MINIBLOCKCHAIN_LIGHT_CONFIGURATION_SAVED)
            console.log(global.SEMAPHORE_PROCESS_DONE)
            console.log(global.MINIBLOCKCHAIN_LIGHT_SAVED)

            console.log(colors.yellow("process.exit(0)"));
        }
    })
}

