import * as kweb from "@_koi/sdk/web.js";
const tools = new kweb.Web();

const addr = document.getElementById("address");
const amt = document.getElementById("amount");

async function transfer() {
    await tools.loadWallet();

    const transferTxId = await tools.transfer(amt, addr, "KOI");
    // number of token, receiver address, type of token(KOI or AR)
    console.log("Your transaction is " + transferTxId);
}

function myfunc() { transfer(); }