const ethAbi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"amount","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"sender","type":"address"},{"name":"recipient","type":"address"},{"name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"stakeLists","outputs":[{"name":"stakeId","type":"uint40"},{"name":"stakedSuns","type":"uint72"},{"name":"stakeShares","type":"uint72"},{"name":"lockedDay","type":"uint16"},{"name":"stakedDays","type":"uint16"},{"name":"unlockedDay","type":"uint16"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"memberAddr","type":"address"},{"name":"enterDay","type":"uint256"},{"name":"entryIndex","type":"uint256"}],"name":"xfLobbyEntry","outputs":[{"name":"rawAmount","type":"uint256"},{"name":"referrerAddr","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"stakerAddr","type":"address"}],"name":"stakeCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"stakeIndex","type":"uint256"},{"name":"stakeIdParam","type":"uint40"}],"name":"stakeEnd","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"allocatedSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"address"}],"name":"xfLobbyMembers","outputs":[{"name":"headIndex","type":"uint40"},{"name":"tailIndex","type":"uint40"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"memberAddr","type":"address"}],"name":"xfLobbyPendingDays","outputs":[{"name":"words","type":"uint256[2]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newStakedSuns","type":"uint256"},{"name":"newStakedDays","type":"uint256"}],"name":"stakeStart","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"currentDay","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"stakerAddr","type":"address"},{"name":"stakeIndex","type":"uint256"},{"name":"stakeIdParam","type":"uint40"}],"name":"stakeGoodAccounting","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"beginDay","type":"uint256"},{"name":"endDay","type":"uint256"}],"name":"dailyDataRange","outputs":[{"name":"_dayStakeSharesTotal","type":"uint256[]"},{"name":"_dayPayoutTotal","type":"uint256[]"},{"name":"_dayDividends","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"xfLobby","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"beforeDay","type":"uint256"}],"name":"dailyDataUpdate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"dailyData","outputs":[{"name":"dayPayoutTotal","type":"uint72"},{"name":"dayDividends","type":"uint256"},{"name":"dayStakeSharesTotal","type":"uint72"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"recipient","type":"address"},{"name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"globals","outputs":[{"name":"lockedSunsTotal","type":"uint72"},{"name":"nextStakeSharesTotal","type":"uint72"},{"name":"shareRate","type":"uint40"},{"name":"stakePenaltyTotal","type":"uint72"},{"name":"dailyDataCount","type":"uint16"},{"name":"stakeSharesTotal","type":"uint72"},{"name":"latestStakeId","type":"uint40"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"enterDay","type":"uint256"},{"name":"count","type":"uint256"}],"name":"xfLobbyExit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"referrerAddr","type":"address"}],"name":"xfLobbyEnter","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"xfFlush","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"globalInfo","outputs":[{"name":"","type":"uint256[10]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"beginDay","type":"uint256"},{"name":"endDay","type":"uint256"}],"name":"xfLobbyRange","outputs":[{"name":"list","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"timestamp","type":"uint256"},{"indexed":false,"name":"enterDay","type":"uint256"},{"indexed":true,"name":"entryIndex","type":"uint256"},{"indexed":true,"name":"rawAmount","type":"uint256"}],"name":"XfLobbyEnter","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"timestamp","type":"uint256"},{"indexed":false,"name":"enterDay","type":"uint256"},{"indexed":true,"name":"entryIndex","type":"uint256"},{"indexed":true,"name":"xfAmount","type":"uint256"},{"indexed":true,"name":"referrerAddr","type":"address"}],"name":"XfLobbyExit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"updaterAddr","type":"address"},{"indexed":false,"name":"timestamp","type":"uint256"},{"indexed":false,"name":"beginDay","type":"uint256"},{"indexed":false,"name":"endDay","type":"uint256"}],"name":"DailyDataUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"stakeId","type":"uint40"},{"indexed":true,"name":"stakerAddr","type":"address"},{"indexed":false,"name":"stakedSuns","type":"uint256"},{"indexed":false,"name":"stakeShares","type":"uint256"},{"indexed":false,"name":"stakedDays","type":"uint256"}],"name":"StakeStart","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"stakeId","type":"uint40"},{"indexed":true,"name":"stakerAddr","type":"address"},{"indexed":true,"name":"senderAddr","type":"address"},{"indexed":false,"name":"stakedSuns","type":"uint256"},{"indexed":false,"name":"stakeShares","type":"uint256"},{"indexed":false,"name":"payout","type":"uint256"},{"indexed":false,"name":"penalty","type":"uint256"}],"name":"StakeGoodAccounting","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"stakeId","type":"uint40"},{"indexed":false,"name":"prevUnlocked","type":"uint40"},{"indexed":true,"name":"stakerAddr","type":"address"},{"indexed":false,"name":"lockedDay","type":"uint256"},{"indexed":false,"name":"servedDays","type":"uint256"},{"indexed":false,"name":"stakedSuns","type":"uint256"},{"indexed":false,"name":"stakeShares","type":"uint256"},{"indexed":false,"name":"dividends","type":"uint256"},{"indexed":false,"name":"payout","type":"uint256"},{"indexed":false,"name":"penalty","type":"uint256"},{"indexed":false,"name":"stakeReturn","type":"uint256"}],"name":"StakeEnd","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"stakeId","type":"uint40"},{"indexed":false,"name":"timestamp","type":"uint256"},{"indexed":false,"name":"newShareRate","type":"uint256"}],"name":"ShareRateChange","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"}]
var ethContract, trxContract
var ethContracts = []
var trxContracts = []

ethContracts[0] = {name: "e2x", addr: "0x99a923b8f3a4e41740e3f8947fd7be6aa736d8a6"}
ethContracts[1] = {name: "nug", addr: "0xA15A5fae698E02EfECcd38b33107DE7253A44E02"}
ethContracts[2] = {name: "elck", addr: "0xdd3a8f6793afbfa8d7c8e2b19106175dccabec41"}
ethContracts[3] = {name: "csne", addr: "0x7245B0fe11c4AE2978c8a8D29f3b74477CE6F789"}

trxContracts[0] = {name: "t2x", addr: "THsSSczBw9RRMJWYL5j2MtcgaPasL2xPGP"}
trxContracts[1] = {name: "cse", addr: "TVs1rRWrBkgQ5zxksYJuCeGthFohjKUGyy"}
trxContracts[2] = {name: "lck", addr: "TXZp52GAUSRxiuKN2wJkwzgyqaosurKJ6r"}
trxContracts[3] = {name: "dsp", addr: "TUCjCMAwbpmeACMBkedFh9N5u3fUmpCrQ7"}
trxContracts[4] = {name: "gcp", addr: "TVXRW7L5dT9NAAiEUoasVYCYhyPyWbVyYB"}
trxContracts[5] = {name: "msx", addr: "TFSCWYsykYeycgwfWNbbDLjQsH1JLtNEdC"}
trxContracts[6] = {name: "csn", addr: "TDy92nCDYonF2HVaq2gn2QeEkCNw7Gc6oZ"}
trxContracts[7] = {name: "nui", addr: "THddAHwJGHE5jtNrEHzompsDafgujH5YP1"}
trxContracts[8] = {name: "moons", addr: "TCm3MnZcz5ZTRWMVTYX6P32XMGLXrdZuo7"}

window.addEventListener('load', function () {
    web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/46fa67a3222a4d1fb00e93bd7b6c7bbb"))
	
	const HttpProvider = TronWeb.providers.HttpProvider;
	const fullNode = new HttpProvider('https://api.trongrid.io')
	const solidityNode = new HttpProvider('https://api.trongrid.io')
	const eventServer = new HttpProvider('https://api.trongrid.io')

	const tronWeb = new TronWeb(fullNode, solidityNode, eventServer)
	
	setUp()
})

function setUp(){
	setUpETH()
	setUpTRX()
}

function setUpETH() {

	for(var i = 0; i < ethContracts.length; i++){

		ethContract = new web3.eth.Contract(ethAbi, ethContracts[i].addr)
		if (!ethContract) {
			console.log("Error loading contract")
			return void 0
		}
		
		displayInfo(ethContract, i, "eth")
		
	}
}

async function setUpTRX() {

	for(var i = 0; i < trxContracts.length; i++){
		trx(i)
		function trx(index){
			try{
				await tronWeb.contract().at(trxContracts[i].addr, function (error, result) {
					if (!error) {
						trxContract = result;
						displayInfo(trxContract, index, "trx")
					} else{
						console.error(error);
						trx(i)
					}
				})
			}catch(e){
				console.log(e)
				trx(i)
			}
		}
	}
}

function displayInfo(contract, index, type){
	
    contract.methods.currentDay().call({
        shouldPollResponse: true
    }).then(res => {
		if(type == "eth")
			$(`.${ethContracts[index].name}`)[0].innerHTML = parseInt(res)
		if(type == "trx")
			$(`.${trxContracts[index].name}`)[0].innerHTML = parseInt(res)
	
		contract.methods.xfLobby(res).call({
			shouldPollResponse: true,
		}).then(res => {
			if(type == "eth")
				$(`.${ethContracts[index].name}`)[1].innerHTML = (parseFloat(res) / 1e18)
			if(type == "trx")
				$(`.${trxContracts[index].name}`)[1].innerHTML = (parseFloat(res) / 1e6)
		})
	
	})
}

function sortTable(tableId) {
	var table, rows, switching, i, x, y, shouldSwitch
	table = document.getElementById(tableId)
	switching = true

	while (switching) {
		switching = false
		rows = table.rows

		for (i = 1; i < (rows.length - 1); i++) {
			shouldSwitch = false;

			x = rows[i].getElementsByClassName("value")
			y = rows[i + 1].getElementsByClassName("value")
			x2 = rows[i].getElementsByClassName("#")
			y2 = rows[i + 1].getElementsByClassName("#")
			
			if (parseInt(x[0].innerHTML) < parseInt(y[0].innerHTML)) {
				shouldSwitch = true
				break
			}
		}
		if (shouldSwitch) {
			rows[i].parentNode.insertBefore(rows[i + 1], rows[i])
			
			x2[0].innerHTML = "#"+ (i + 1)
			y2[0].innerHTML = "#"+ i
			
			switching = true
		}
	}
}

function checkSort(){
	var eth = document.getElementById("eth")
	var trx = document.getElementById("trx")
	var ethRows = eth.rows
	var trxRows = trx.rows

	if( trxRows[trxRows.length - 1].getElementsByClassName("value")[0].innerHTML != "---" ){
		sortTable("trx")
	}
	if( ethRows[ethRows.length - 1].getElementsByClassName("value")[0].innerHTML != "---" ){
		sortTable("eth")
	}
}

var cs = setInterval(() => {
	checkSort()
}, 100)
