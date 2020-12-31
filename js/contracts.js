const ethAbi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"amount","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"sender","type":"address"},{"name":"recipient","type":"address"},{"name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"stakeLists","outputs":[{"name":"stakeId","type":"uint40"},{"name":"stakedSuns","type":"uint72"},{"name":"stakeShares","type":"uint72"},{"name":"lockedDay","type":"uint16"},{"name":"stakedDays","type":"uint16"},{"name":"unlockedDay","type":"uint16"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"memberAddr","type":"address"},{"name":"enterDay","type":"uint256"},{"name":"entryIndex","type":"uint256"}],"name":"xfLobbyEntry","outputs":[{"name":"rawAmount","type":"uint256"},{"name":"referrerAddr","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"stakerAddr","type":"address"}],"name":"stakeCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"stakeIndex","type":"uint256"},{"name":"stakeIdParam","type":"uint40"}],"name":"stakeEnd","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"allocatedSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"address"}],"name":"xfLobbyMembers","outputs":[{"name":"headIndex","type":"uint40"},{"name":"tailIndex","type":"uint40"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"memberAddr","type":"address"}],"name":"xfLobbyPendingDays","outputs":[{"name":"words","type":"uint256[2]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newStakedSuns","type":"uint256"},{"name":"newStakedDays","type":"uint256"}],"name":"stakeStart","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"currentDay","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"stakerAddr","type":"address"},{"name":"stakeIndex","type":"uint256"},{"name":"stakeIdParam","type":"uint40"}],"name":"stakeGoodAccounting","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"beginDay","type":"uint256"},{"name":"endDay","type":"uint256"}],"name":"dailyDataRange","outputs":[{"name":"_dayStakeSharesTotal","type":"uint256[]"},{"name":"_dayPayoutTotal","type":"uint256[]"},{"name":"_dayDividends","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"xfLobby","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"beforeDay","type":"uint256"}],"name":"dailyDataUpdate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"dailyData","outputs":[{"name":"dayPayoutTotal","type":"uint72"},{"name":"dayDividends","type":"uint256"},{"name":"dayStakeSharesTotal","type":"uint72"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"recipient","type":"address"},{"name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"globals","outputs":[{"name":"lockedSunsTotal","type":"uint72"},{"name":"nextStakeSharesTotal","type":"uint72"},{"name":"shareRate","type":"uint40"},{"name":"stakePenaltyTotal","type":"uint72"},{"name":"dailyDataCount","type":"uint16"},{"name":"stakeSharesTotal","type":"uint72"},{"name":"latestStakeId","type":"uint40"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"enterDay","type":"uint256"},{"name":"count","type":"uint256"}],"name":"xfLobbyExit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"referrerAddr","type":"address"}],"name":"xfLobbyEnter","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"xfFlush","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"globalInfo","outputs":[{"name":"","type":"uint256[10]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"beginDay","type":"uint256"},{"name":"endDay","type":"uint256"}],"name":"xfLobbyRange","outputs":[{"name":"list","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"timestamp","type":"uint256"},{"indexed":false,"name":"enterDay","type":"uint256"},{"indexed":true,"name":"entryIndex","type":"uint256"},{"indexed":true,"name":"rawAmount","type":"uint256"}],"name":"XfLobbyEnter","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"timestamp","type":"uint256"},{"indexed":false,"name":"enterDay","type":"uint256"},{"indexed":true,"name":"entryIndex","type":"uint256"},{"indexed":true,"name":"xfAmount","type":"uint256"},{"indexed":true,"name":"referrerAddr","type":"address"}],"name":"XfLobbyExit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"updaterAddr","type":"address"},{"indexed":false,"name":"timestamp","type":"uint256"},{"indexed":false,"name":"beginDay","type":"uint256"},{"indexed":false,"name":"endDay","type":"uint256"}],"name":"DailyDataUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"stakeId","type":"uint40"},{"indexed":true,"name":"stakerAddr","type":"address"},{"indexed":false,"name":"stakedSuns","type":"uint256"},{"indexed":false,"name":"stakeShares","type":"uint256"},{"indexed":false,"name":"stakedDays","type":"uint256"}],"name":"StakeStart","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"stakeId","type":"uint40"},{"indexed":true,"name":"stakerAddr","type":"address"},{"indexed":true,"name":"senderAddr","type":"address"},{"indexed":false,"name":"stakedSuns","type":"uint256"},{"indexed":false,"name":"stakeShares","type":"uint256"},{"indexed":false,"name":"payout","type":"uint256"},{"indexed":false,"name":"penalty","type":"uint256"}],"name":"StakeGoodAccounting","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"stakeId","type":"uint40"},{"indexed":false,"name":"prevUnlocked","type":"uint40"},{"indexed":true,"name":"stakerAddr","type":"address"},{"indexed":false,"name":"lockedDay","type":"uint256"},{"indexed":false,"name":"servedDays","type":"uint256"},{"indexed":false,"name":"stakedSuns","type":"uint256"},{"indexed":false,"name":"stakeShares","type":"uint256"},{"indexed":false,"name":"dividends","type":"uint256"},{"indexed":false,"name":"payout","type":"uint256"},{"indexed":false,"name":"penalty","type":"uint256"},{"indexed":false,"name":"stakeReturn","type":"uint256"}],"name":"StakeEnd","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"stakeId","type":"uint40"},{"indexed":false,"name":"timestamp","type":"uint256"},{"indexed":false,"name":"newShareRate","type":"uint256"}],"name":"ShareRateChange","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"}]

var ercContracts = []
var trcContracts = []

ercContracts.push({name: "e2x", addr: "0x99a923b8f3a4e41740e3f8947fd7be6aa736d8a6", sharePercent: .9})
ercContracts.push({name: "nug", addr: "0xA15A5fae698E02EfECcd38b33107DE7253A44E02", sharePercent: .85})
ercContracts.push({name: "csee", addr: "0x89074ceEf58061c123a81b5a25Ce893e96eEC830", sharePercent: .97})


trcContracts.push({name: "t2x", addr: "THsSSczBw9RRMJWYL5j2MtcgaPasL2xPGP", sharePercent: .95})
trcContracts.push({name: "bub", addr: "TDbygTtZNsS1xsSNKcdsz3h45ma8bXwv3F", sharePercent: .97})
trcContracts.push({name: "cse", addr: "TVs1rRWrBkgQ5zxksYJuCeGthFohjKUGyy", sharePercent: .98})
trcContracts.push({name: "lck", addr: "TXZp52GAUSRxiuKN2wJkwzgyqaosurKJ6r", sharePercent: .95})
trcContracts.push({name: "msx", addr: "TFSCWYsykYeycgwfWNbbDLjQsH1JLtNEdC", sharePercent: .95})
trcContracts.push({name: "csn", addr: "TDy92nCDYonF2HVaq2gn2QeEkCNw7Gc6oZ", sharePercent: 1})
trcContracts.push({name: "nui", addr: "THddAHwJGHE5jtNrEHzompsDafgujH5YP1", sharePercent: .97})
trcContracts.push({name: "moons", addr: "TCm3MnZcz5ZTRWMVTYX6P32XMGLXrdZuo7", sharePercent: .95})

trcContracts.push({name: "u2x", addr: "TYW7i9H58VEi2kuTDAzGGPcnaM4AkV6Xzd", sharePercent: .95, type: "usdt"})

var ercUserAddress = void 0
var trcUserAddress = void 0


window.addEventListener('load', function () {
    // Load WEB3
    if (typeof web3 !== 'undefined') {
        web3 = new Web3(web3.currentProvider);
        console.log("user connected")
		window.ethereum.enable()

		const loginPromise = new Promise((resolve, reject) => {
			if (window.web3) {
				resolve(true)
			} else {
				window.addEventListener('load', () => {
					let tbAcc = setInterval(() => {
						if (window.tronWeb) resolve(true)
						clearInterval(tbAcc)
					}, 200)

					setTimeout(() => {
						clearInterval(tbAcc)
					}, 10000)
				})
			}
		})
			.then(() => {
				console.log("web3 logged in")
				return true
			})
			.catch((err) => {
				console.error('Error while detecting web3', err)
				return false
			})

		loginPromise.then((result) => {
			return new Promise(async (resolve, reject) => {

				web3.eth.getAccounts().then(function (result) {
					ercUserAddress = result[0]
					$('.erc-address')[0].innerHTML = "Showing total staked and divs earned for: <br>" + ercUserAddress
				})

				setInterval(async () => {
					web3.eth.getAccounts().then(function (result) {
						if (window.web3 && ercUserAddress !== result[0]) location.reload()
					})
				}, 700)
			})
		})
		
    }else{
        web3 = new Web3(new Web3.providers.HttpProvider("https://eth-mainnet.alchemyapi.io/v2/tL5AUiYyJbJqR3UCVY_isdL6VWePXkJf" || "https://mainnet.infura.io/v3/46fa67a3222a4d1fb00e93bd7b6c7bbb"))
    }
	loginTrc()
	setUp()
})

var sorted = false
async function setUp(){
	
	await setUpETH()
	await setUpTRX()
	
	if(ercUserAddress)
		for(var i = 0; i < ercContracts.length; i++){
			await getERCStakes(i)
		}
	if(!trcUserAddress)
		await loginTrc()
	
	if(trcUserAddress)
		for(var i = 0; i < trcContracts.length; i++){
			await getTRCStakes(i)
		}

		
	let cs = setInterval(() => {
		if(!sorted)
			checkSort()
		else{
			clearInterval(cs)
		}
	}, 200)

}

async function setUpETH() {

	for(var i = 0; i < ercContracts.length; i++){

			ercContracts[i].contract = new web3.eth.Contract(ethAbi, ercContracts[i].addr)
		
		if (!ercContracts[i].contract) {
			console.log("Error loading contract")
			return void 0
		}
		await displayInfo(ercContracts[i].contract, i, "eth")
	}
}

async function setUpTRX() {

	const loginPromise = new Promise((resolve, reject) => {
			if (window.tronWeb && window.tronWeb.ready) {
				resolve(true)
			} else {
				window.addEventListener('load', () => {
					let tbAcc = setInterval(() => {
						if (window.tronWeb && window.tronWeb.ready) resolve(true)
						clearInterval(tbAcc)
					}, 200)

					setTimeout(() => {
						clearInterval(tbAcc)
					}, 10000)
				})
			}
		})
		.then(() => {
			console.log("Tronweb installed and logged in")
			return true
		})
		.catch((err) => {
			console.error('Error while detecting tronweb', err)
			return false
		})
	loginPromise.then((result) => {
		return new Promise((resolve, reject) => {
			const userAddress = window.tronWeb.defaultAddress.base58
			if (!userAddress) return resolve(false)

			trcUserAddress = userAddress
			$('.trc-address')[0].innerHTML = "Showing total staked and divs earned for: <br>" + trcUserAddress

			window.addEventListener('load', (event) => {})

			setInterval(() => {
				if (window.tronWeb && trcUserAddress !== window.tronWeb.defaultAddress.base58) location.reload()
			}, 700)
		})
	})

	for(var i = 0; i < trcContracts.length; i++){
		await trc(i)
	}
}

async function loginTrc(){
	const loginPromise = new Promise((resolve, reject) => {
		if (window.tronWeb && window.tronWeb.ready) {
			resolve(true)
		} else {
			window.addEventListener('load', () => {
				let tbAcc = setInterval(() => {
					if (window.tronWeb && window.tronWeb.ready) resolve(true)
					clearInterval(tbAcc)
				}, 200)

				setTimeout(() => {
					clearInterval(tbAcc)
				}, 10000)
			})
		}
	})
	.then(() => {
		console.log("Tronweb installed and logged in")
		return true
	})
	.catch((err) => {
		console.error('Error while detecting tronweb', err)
		return false
	})
	loginPromise.then((result) => {
		return new Promise((resolve, reject) => {
			const userAddress = window.tronWeb.defaultAddress.base58
			if (!userAddress) return resolve(false)

			trcUserAddress = userAddress
			$('.trc-address')[0].innerHTML = "Showing total staked and divs earned for: <br>" + trcUserAddress

			window.addEventListener('load', (event) => {})

			setInterval(() => {
				if (window.tronWeb && trcUserAddress !== window.tronWeb.defaultAddress.base58) location.reload()
			}, 700)
		})
	})
}

async function trc(index){
	const HttpProvider = TronWeb.providers.HttpProvider;
	const fullNode = new HttpProvider('https://api.trongrid.io');
	const solidityNode = new HttpProvider('https://api.trongrid.io');
	const eventServer = new HttpProvider('https://api.trongrid.io');

	const tronWeb = new TronWeb(fullNode, solidityNode, eventServer);
		
	tronWeb.setAddress(trcContracts[index].addr);
	try{
		await tronWeb.contract().at(trcContracts[index].addr, function (error, result) {
			if (!error) {
				trcContracts[index].contract = result;
				if(trcContracts[index].type == "usdt")
					displayInfo(trcContracts[index].contract, index, "usdt")
				else
					displayInfo(trcContracts[index].contract, index, "trx")
			} else{
				console.error(error);
				trc(index)
			}
		})
	}catch(e){
		console.log(e)
		trc(index)
	}	
}

async function displayInfo(contract, index, type){
	
    contract.methods.currentDay().call({
        shouldPollResponse: true
    }).then(res => {
		if(type == "eth"){
			ercContracts[index].currentDay = res
			$(`.${ercContracts[index].name}`)[0].innerHTML = parseInt(res)
		}
		if(type == "trx"){
			trcContracts[index].currentDay = res
			$(`.${trcContracts[index].name}`)[0].innerHTML = parseInt(res)
		}
		if(type == "usdt"){
			trcContracts[index].currentDay = res
			$(`.${trcContracts[index].name}`)[0].innerHTML = parseInt(res)
		}
	
		contract.methods.xfLobby(res).call({
			shouldPollResponse: true,
		}).then(res => {
			
			if(type == "eth")
				$(`.${ercContracts[index].name}`)[1].innerHTML = (parseFloat(res) / 1e18).toFixed(3)
			if(type == "trx")
				$(`.${trcContracts[index].name}`)[1].innerHTML = (parseFloat(res) / 1e6).toFixed(0)
			if(type == "usdt")
				$(`.${trcContracts[index].name}`)[1].innerHTML = (parseFloat(res) / 1e6).toFixed(2)
			
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
			if ( x[0].innerHTML.replace(/,/g, '') < y[0].innerHTML.replace(/,/g, '') ) {
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
	var ethRows = eth.rows	
	
	var trx = document.getElementById("trx")
	var trxRows = trx.rows
	
	var usdt = document.getElementById("usdt")
	var usdtRows = usdt.rows
	
	if( ethRows[ethRows.length - 1].getElementsByClassName("value")[0].innerHTML != "---" && ethRows.length > 1 ){
		setTimeout(() => {
			sortTable("eth")
		}, 200)
	}
	if( trxRows[trxRows.length - 1].getElementsByClassName("value")[0].innerHTML != "---" && trxRows.length > 1 ){
		setTimeout(() => {
			sortTable("trx")
		}, 200)
	}
	if( usdtRows[usdtRows.length - 1].getElementsByClassName("value")[0].innerHTML != "---" && usdtRows.length > 1  ){
		setTimeout(() => {
			sortTable("usdt")
		}, 200)
	}
	
	if( ethRows[ethRows.length - 1].getElementsByClassName("value")[0].innerHTML == "---" && ethRows.length > 1 ){
		setUpETH()
	}else if( trxRows[trxRows.length - 1].getElementsByClassName("value")[0].innerHTML == "---" && trxRows.length > 1 ){
		setUpTRX()
	}else if( usdtRows[usdtRows.length - 1].getElementsByClassName("value")[0].innerHTML == "---" && usdtRows.length > 1 ){
		for(let i = trcContracts.length-1; trcContracts[i].type == "usdt"; i--){
			trc(i)
		}
	}else{
		setTimeout(() => {
			sorted = true
		}, 6000)
	}
	
}

function abbreviate_number(_num, fixed) {
    let num = parseFloat(_num)
    if (num === null) {
        return null;
    } // terminate early
    if (num === 0) {
        return '0';
    } // terminate early
    fixed = (!fixed || fixed < 0) ? 0 : fixed; // number of decimal places to show
    var b = (num).toPrecision(2).split("e"), // get power
        k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3), // floor at decimals, ceiling at trillions
        c = k < 1 ? num.toFixed(0 + fixed) : (num / Math.pow(10, k * 3)).toFixed(1 + fixed), // divide by power
        d = c < 0 ? c : Math.abs(c), // enforce -0 is 0
        e = d + ['', 'K', 'M', 'B', 'T'][k]; // append power

    return e;
}

/*
*
*
*
*
*
*START ERC STAKES
*
*
*
*
*
*/

var ercDayIndex = 1
var ercIndex = 0

function getERCDaysData(index) {
	
	ercDayIndex = 1
	ercIndex = 0
	
	ercContracts[index].daily = []

	while(ercDayIndex < ercContracts[index].currentDay){
		loadERCDaysData(index, ercDayIndex, ercIndex)
		ercDayIndex++
		ercIndex++
	}
}

function loadERCDaysData(index, di, ai){
	
	ercContracts[index].contract.methods.dailyData(di).call({}, function(error, res){
		if(error){
			loadERCDaysData(index, di, ai)
		}else{
			res.day = di
			ercContracts[index].daily[ai] = res
		}
	})

}

async function getERCStakes(index) {
    ercContracts[index].contract.methods.stakeCount(ercUserAddress).call({
        shouldPollResponse: true
    }).then(res => {
		let myStakesCount = res
		if( myStakesCount == 0 )
			return
		else
			getERCDaysData(index)
		
		setTimeout(() => {

			let toBeRendered = []

			let strt = 0
			ck1()
			function ck1() {
				if (strt < myStakesCount) {
					getDrc()
					strt++
				}
			}
			function getDrc() {
				ercContracts[index].contract.methods.stakeLists(ercUserAddress, strt).call({
					shouldPollResponse: true
				}).then(res2 => {
					toBeRendered.push(res2)

					if (toBeRendered.length == myStakesCount) {
						getTotalERCDivs(index, toBeRendered)
					}else {
						ck1()
					}
				})
			}
		}, 3000)
    })
}

function getTotalERCDivs(index, data) {
	ercContracts[index].staked = 0
	ercContracts[index].divs = 0
	
    data.forEach(item => {

        item.lockedDay = parseInt(item.lockedDay)
        item.stakedDays = parseInt(item.stakedDays)
		
        let stakedSuns = item.stakedSuns
        let stakeShares = item.stakeShares
		
		ercContracts[index].staked += stakedSuns / 1e8

        calcERCDividends(index, item.lockedDay, item.stakedDays, stakeShares)

    })
	$(`.${ercContracts[index].name}`)[2].innerHTML = abbreviate_number(ercContracts[index].staked, 1)
}

function calcERCDividends(index, lockedDay, stakedDays, stakeShares) {
	setTimeout(() => {

		for (var i = 0; i < stakedDays; i++) {	
		
			ercContracts[index].daily.forEach(item => {

				if (item.day == lockedDay + i) {
					let divs = item.dayDividends
					let userShares = item.dayStakeSharesTotal
					let shares = stakeShares

					if(Number.isNaN(divs) || Number.isNaN(shares) || Number.isNaN(userShares) || shares == 0 || userShares == 0){
						divs = 0
						shares = 1
						userShares = 1
					}
					ercContracts[index].divs += (divs * ercContracts[index].sharePercent * shares) / userShares
				}
			})
		}
	$(`.${ercContracts[index].name}`)[3].innerHTML = (ercContracts[index].divs  / 1e18).toFixed(6)
	}, 3000)	
}
/*
*END ERC STAKES
*
*
*
*START TRC STAKES
*/

const TrcDaysData = []
var trcDayIndex = 1
var trcIndex = 0

async function getTRCDaysData(index) {
	
	trcDayIndex = 1
	trcIndex = 0
	
	trcContracts[index].daily = []

	
	while(trcDayIndex < trcContracts[index].currentDay){
		await loadTRCDaysData(index, trcDayIndex, trcIndex)
		trcDayIndex++
		trcIndex++
	}
	if(TrcDaysData[trcContracts[index].currentDay-1] == "undefined")
		getTRCDaysData(index)

}

async function loadTRCDaysData(index, di, ai){
	try{
		await trcContracts[index].contract.methods.dailyData(di).call({}, function(error, res){
			if(error){
				loadTRCDaysData(index, di, ai)
				return
			}else{
				res.day = di
				trcContracts[index].daily[ai] = res
			}
		})
	}catch(e){
		console.log(e)
		loadTRCDaysData(index, di, ai)
	}
}

async function getTRCStakes(index) {
	
    trcContracts[index].contract.methods.stakeCount(trcUserAddress).call({}, function(error, res){
		if(error){
			getTRCStakes(index)
			return
		}else{
			const myStakesCount = res
			
			if( myStakesCount == 0 )
				return
			else
				getTRCDaysData(index)
				
			setTimeout(() => {

				let toBeRendered = []

				let strt = 0
				ck1()
				function ck1() {
					if (strt < myStakesCount) {
						getDrc()
						strt++
					}
				}
				function getDrc() {
					trcContracts[index].contract.methods.stakeLists(trcUserAddress, strt).call({}, function(error, res2){
						if(error){
							getDrc()
							return
						}else{
							toBeRendered.push(res2)

							if (toBeRendered.length == myStakesCount) {
								getTotalTRCDivs(index, toBeRendered)
							}else {
								ck1()
							}
						}
					})
				}
			}, 3000)
		}
    })
}



function getTotalTRCDivs(index, data) {
	trcContracts[index].staked = 0
	trcContracts[index].divs = 0
	
    data.forEach(item => {

        item.lockedDay = parseInt(item.lockedDay)
        item.stakedDays = parseInt(item.stakedDays)
		
        let stakedSuns = item.stakedSuns
        let stakeShares = item.stakeShares
		
		trcContracts[index].staked += stakedSuns / 1e8

        calcTRCDividends(index, item.lockedDay, item.stakedDays, stakeShares)

    })
	$(`.${trcContracts[index].name}`)[2].innerHTML = abbreviate_number(trcContracts[index].staked, 1)
}

function calcTRCDividends(index, lockedDay, stakedDays, stakeShares) {
	setTimeout(() => {
		for (var i = 0; i < stakedDays; i++) {
			trcContracts[index].daily.forEach(item => {

				if (item.day == lockedDay + i) {
					let divs = item.dayDividends
					let userShares = item.dayStakeSharesTotal
					let shares = stakeShares

					if(Number.isNaN(divs) || Number.isNaN(shares) || Number.isNaN(userShares) || shares == 0 || userShares == 0){
						divs = 0
						shares = 0
						userShares = 1
					}
					
					trcContracts[index].divs += ( (divs * trcContracts[index].sharePercent) * (shares / userShares) )
				}
			})
		}
		$(`.${trcContracts[index].name}`)[3].innerHTML = (trcContracts[index].divs / 1e6).toFixed(2)
	}, 3000)
}
