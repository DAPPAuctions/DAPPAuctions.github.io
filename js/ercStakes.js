/*
*START ERC STAKES
*/
var ercContract
var ercContractIndex
var currentERCDay
var ercUserAddress = void 0

function updateERCAddress() {
    let p1 = ercUserAddress.slice(42 - 4)
    $('.erc-address')[0].innerHTML = "ERC: " + ercUserAddress.slice(0, 4) + "..." + p1
	console.log("ERC: " + ercUserAddress.slice(0, 4) + "..." + p1)

}

const DaysData = []
var dayIndex = 1
var arrIndex = 0

function getERCDaysData(contract, listIndex) {
	ercContract = contract
	contractsList = list
	ercContractIndex = listIndex
	
	dayIndex = 1
	arrIndex = 0
	
	while(dayIndex < currentERCDay){
		loadERCDaysData(dayIndex, arrIndex)
		dayIndex++
		arrIndex++
	}
	getERCStakes()
}

function loadERCDaysData(di, ai){
	ercContract.methods.dailyData(di).call({
		shouldPollResponse: true
	}).then(res => {
		DaysData[ai] = res
		DaysData[ai].day = di
	})	
}

function getERCStakes() {
    ercContract.methods.stakeCount(ercUserAddress).call({
        shouldPollResponse: true
    }).then(res => {
        setTimeout(() => {
			const myStakesCount = res
			
			if( myStakesCount == 0 )
				return
				
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
				ercContract.methods.stakeLists(ercUserAddress, strt).call({
					shouldPollResponse: true
				}).then(res2 => {
					toBeRendered.push(res2)

					if (toBeRendered.length == myStakesCount) {
						getTotalERCDivs(toBeRendered)
					}else {
						ck1()
					}
				})
			}
        }, 500)
    })
}

let addUpDivs = 0
let addUpStaked = 0

async function getTotalERCDivs(data) {
	addUpStaked = 0
	addUpDivs = 0
    data.forEach(item => {

        item.lockedDay = parseInt(item.lockedDay)
        item.stakedDays = parseInt(item.stakedDays)
        let stakedSuns = item.stakedSuns
        let stakeShares = item.stakeShares

        await calcERCDividends(item.lockedDay, item.stakedDays, stakeShares, stakedSuns)
    })
	$(`.${ethContracts[ercContractIndex].name}`)[2].innerHTML = addUpStaked.toLocaleString()
	$(`.${ethContracts[ercContractIndex].name}`)[3].innerHTML = addUpDivs.toLocaleString()
}
/*START STAKE CALCULATIONS 
  dayPayoutTotal   uint72 :
  dayDividends   uint256 : 1e18
  dayStakeSharesTotal   uint72 :
*/
function calcERCDividends(lockedDay, stakedDays, stakeShares, stakedSuns) {
    setTimeout(() => {

        for (var i = 0; i < stakedDays; i++) {
            DaysData.forEach(item => {
                if (item.day == lockedDay + i) {
					let divs = item.dayDividends
					let userShares = item.dayStakeSharesTotal
					let shares = stakeShares
					if(userShares == 0){
						userShares = 1
						shares = 0
					}
					if(Number.isNaN(divs) || Number.isNaN(shares) || Number.isNaN(userShares) || shares == 0 || userShares == 0){
						divs = 0
						shares = 1
						userShares = 1
					}
                    addUpDivs += ( (divs / 1e18) ) * shares / userShares
                    addUpStaked += stakedSuns / 1e8
                }
            })
        }
    }, 3000)
}