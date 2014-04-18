function Cycle( controller )
{
	this.controller = controller;
	
	var date = new Date();
	
	var month=new Array(12);
	month[0]="January";
	month[1]="February";
	month[2]="March";
	month[3]="April";
	month[4]="May";
	month[5]="June";
	month[6]="July";
	month[7]="August";
	month[8]="September";
	month[9]="October";
	month[10]="November";
	month[11]="December";
	this.month = month[date.getMonth()];
	
	var day=new Array(7);
	day[0]="Sunday";
	day[1]="Monday";
	day[2]="Tuesday";
	day[3]="Wednesday";
	day[4]="Thursday";
	day[5]="Friday";
	day[6]="Saturday";
	this.day = day[date.getDay()];
	
	this.year = date.getFullYear();

	this.getMonth = function()
	{
		return this.month;
	}
	
	this.getYear = function()
	{
		return this.year;
	}
	
	this.viewCycle = function()
	{
		this.controller.viewCycle();
	}
	
	this.addIncome = function( cycleId )
	{
		this.controller.addIncome( cycleId );
	}
	
	this.addBill = function( cycleId )
	{
		this.controller.addBill( cycleId );
	}
	
	this.editIncome = function( incomeId )
	{
		this.controller.editIncome( incomeId );
	}
	
	this.addPayment = function( billId )
	{
		this.controller.addPayment( billId )
	}
	
	this.generateIncomeTable = function()
	{
	
	}
	
	this.generateBillsTable = function( format )
	{
	
	}
}