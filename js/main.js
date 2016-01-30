/////////////////////////////////////////////////
//Function init()
//
// call main functions once the page has loaded
//
// arguments: none
// returns: none
/////////////////////////////////////////////////
function init(){
	cities();
	addEvents();
};


/////////////////////////////////////////////////
//Function addColumns(cityPop)
//
// adds new column "City Size" 
// to the table
//
// arguments: cityPop: city population
// returns: none
/////////////////////////////////////////////////
function addColumns(cityPop){
    
    $('tr').each(function(i){

    	if (i == 0){

    		//add new column "City Size" to the row
    		$(this).append('<th>City Size</th>');
    	} else {

    		//Declare, but don't define new variable "citySize"	
    		var citySize;
    		
    		//if the population of the city is less than 100,000 assign
    		//the citySize variable to "Small"
    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';

    		//Otherwise if the city's population is less thab 500,000
    		//assign the citySize variable to "Medium"
    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';

    		//If neither of the previous criteria are met, assign the 
    		//variable citySize to "Large"
    		} else {
    			citySize = 'Large';
    		};

    		//Add variable citySize to the table by adding it to the 
    		// current row in a new c cell
    		$(this).append('<td>' + citySize + '</td>');
    	};
    });
};

/////////////////////////////////////////////////
//Function addEvents()
//
// adds a new mouseover and on click functions
//
// arguments: none
// returns: none
/////////////////////////////////////////////////
function addEvents(){

	//call new fucntion when ever the mouse moves over
	//the table
	$('table').mouseover(function(){
		
		//css colors are in the format rgb(0,0,0)
		var color = "rgb(";

		for (var i=0; i<3; i++){

			//create random number
			var random = Math.round(Math.random() * 255);

			//add number to the color variable
			color += random;

			//if this is the 1st (i=0) or second (i=1)
			// time through the loop, add a comma to color variable
			if (i<2){
				color += ",";
			
			//otherwise, close the rgb parenthesis
			} else {
				color += ")";
			};

		};

		//add color variable as css color style for table
		$(this).css('color', color);
	});

	function clickme(){

		alert('Hey, you clicked me!');
	};

	//when table is clicked, call clickme function
	$('table').on('click', clickme);
};

/////////////////////////////////////////////////
//Function cities()
//
// adds a table of cities and their populations to the
// web page
//
// arguments: none
// returns: none
/////////////////////////////////////////////////
function cities(){
	//define array of city obkects
	var cityPop = [
		{
			city: 'Madison',
			population: 243344
		},
		{
			city: 'Milwaukee',
			population: 599164 
		},
		{
			city: 'Minneapolis',
			population: 400070 
		},
		{
			city: 'St. Paul',
			population: 294873
		}

	];

	//append table element to mydiv
	$("#mydiv").append("<table>");

	//add new row to table
	$("table").append("<tr>");

	//add columns with titles
	$("tr").append("<th>City</th><th>Population</th>");

	//loop trhough all cities to ada new item to each row
	for(var i = 0; i < cityPop.length; i++){
		var row = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
		$("table").append(row);
	};

	//add an addition column to the table
	addColumns(cityPop);
};

//webpage is loaded, can begin calling functions
$(document).ready(init);