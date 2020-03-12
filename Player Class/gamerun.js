const slotArr = [
	{
		id: 0,
		name: "Start",
		slotRowPos: "1/2",
		slotColPos: '1/2',
	},
	{
		id: 1,
		name: "Hai Duong",
		slotRowPos:'1/2',
		slotColPos:'2/3',
	},	
	{
		id: 2,
		name: "Vinh Phuc",
		slotRowPos:'1/2',
		slotColPos:'3/4',
	},	
	{
		id: 3,
		name: "Mu Hoa",
		slotRowPos:'1/2',
		slotColPos:'4/5',
	},
	{
		id: 4,
		name: "Hoe del",
		slotRowPos:'1/2',
		slotColPos:'5/6',
	},	
	{
		id: 5,
		name: "Lien Hoa",
		slotRowPos:'1/2',
		slotColPos:'6/7',
	},	
	{
		id: 6,
		name: "Hung Yen",
		slotRowPos:'1/2',
		slotColPos:'7/8',
	},	
	{
		id: 7,
		name: "Yen Hoa",
		slotRowPos:'1/2',
		slotColPos:'8/9',
	},	
	{
		id: 8,
		name: "Ha Noi",
		slotRowPos:'1/2',
		slotColPos:'9/10',
	},
]

class Player {
	constructor(idPos, rowPos, colPos, money){
		this.idPos = idPos; // position id, default : 0
		this.rowPos = rowPos; // start position, default: 1/2
		this.colPos = colPos; // start position, default: 1/2
		this.money = money; //start money
		// this.houseOwned: []
	}

	updatePlayerPosBySlotID(slotID){
		// Find Slot
		const slot = slotArr.find(el => el.id === slotID);

		// Update player'position
		this.rowPos = slot.slotRowPos;
		this.colPos = slot.slotColPos;
		return this;
	}

	moveTo(slotName){
		const slot = slotArr.find(el => el.name === slotName);
		this.rowPos = slot.slotRowPos;
		this.colPos = slot.slotColPos;
		return this;
	}

	advanceTo(slotName){

		// Find slot needed to advance to 
		const slot = slotArr.find(el => el.name === slotName);
		if (slot.id < this.idPos && slot.id !== 0){
			// Go THROUGH 'Start', +2000$
			this.money = this.money + 2000;
		}
		this.rowPos = slot.slotRowPos;
		this.colPos = slot.slotColPos;
		return this;
	}

	addMoney(quantity){
		this.money = this.money + quantity;
		return this;
	}

	goBack(step){
		if (this.idPos > step) {
			this.idPos = this.idPos - step;
		} else {
			this.idPos = this.idPos - step + slotArr.length; //In this example, slotArr.length=9
		}
		this.updatePlayerPosBySlotID(this.idPos);
		return this;
	}

	goForward(step){
		if (this.idPos + step >= slotArr.length){
			this.idPos = this.idPos + step - slotArr.length;
		} else {
			this.idPos = this.idPos + step;
		}
		this.updatePlayerPosBySlotID(this.idPos);	
		return this;
	}
}

const player = new Player(7, "1/2", "8/9", 0);
// player.goForward(3);
// player.advanceTo("Hung Yen");
// player.goBack(8); 
// console.log("Game Start:", player);
// player.moveTo("Hung Yen");
// player.addMoney(2000);
console.log(player);


