const kweb = koi_tools.koi_web;
const tools = new kweb.Web();

// const addr = document.getElementById("address");
// const amt = document.getElementById("amount");

async function transfer() {
    const addr = document.getElementById("address").value;
    const amt = document.getElementById("amount").value;
    console.log('hello2');
    console.log(addr, amt);
    window.koiiWallet.connect();
    const transferTxId = await tools.transfer(amt, addr, "KOI");
    // number of token, receiver address, type of token(KOI or AR)
    console.log("Your transaction is " + transferTxId);
    document.getElementById("txnID").innerHTML = "Your transaction is " + transferTxId;
    console.log('hello3');

}

function myfunc() { transfer(); }