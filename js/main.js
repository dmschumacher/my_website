/////////////////////////////////////////////////
//Function init()
//
// used to call main functions once the page has loaded
//
// arguments: none
////////////////////////////////////////////////////////////////////////////////
function init(){
	cities();
	addEvents();
};


////////////////////////////////////////////////////////////////////////////////
//Function addColumns(cityPop)
//
// adds new column "City Size" to the table
//
// arguments: cityPop: city population
////////////////////////////////////////////////////////////////////////////////
function addColumns(cityPop){
    
    //iterate through the table rows
    $('tr').each(function(i){

    	//if i is 0 this is the header row
    	if (i == 0){

    		//add new title "City Size" to the header row
    		$(this).append('<th>City Size</th>');
    	} else {

    		//Declare new variable "citySize"	
    		var citySize;
    		
    		//if the population of the city is less than 100,000 assign the 
    		//citySize variable to "Small"
    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';

    		//Otherwise if the city's population is less thab 500,000 assign the
    		//citySize variable to "Medium"
    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';

    		//If neither of the previous criteria are met, assign the variable 
    		//citySize to "Large"
    		} else {
    			citySize = 'Large';
    		};

    		//Add variable citySize to the table by adding it to the current 
    		//row in a new c cell
    		$(this).append('<td>' + citySize + '</td>');
    	};
    });
};

////////////////////////////////////////////////////////////////////////////////
//Function addEvents()
//
// adds a new mouseover and on click functions
//
// arguments: none
////////////////////////////////////////////////////////////////////////////////
function addEvents(){

	//call new function that will change the text color to a random color when
	//the user moves the mouse over tha table
	$('table').mouseover(function(){
		
		//css colors are in the format rgb(0,0,0)
		var color = "rgb(";

		for (var i=0; i<3; i++){

			//create random number between 0 and 255
			var random = Math.round(Math.random() * 255);

			//append random number to the color variable
			color += random;

			//if this is the 1st (i=0) or second (i=1) time through the loop, 
			//add a comma to color variable
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

	// function that identifies when the table has been clicked, and notifies 
	// the user with a message
	function clickme(){

		alert('Hey, you clicked me!');
	};

	//when table is clicked, call clickme function
	$('table').on('click', clickme);
};

////////////////////////////////////////////////////////////////////////////////
//Function cities()
//
// adds a table of cities and their populations to the web page
//
// arguments: none
////////////////////////////////////////////////////////////////////////////////
function cities(){
	//define array of city objects
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

	//loop through all cities to add a new item to each row
	for(var i = 0; i < cityPop.length; i++){
		var row = "<tr><td>" + cityPop[i].city + "</td><td>" + 
		cityPop[i].population + "</td></tr>";
		$("table").append(row);
	};

	//add an addition column to the table
	addColumns(cityPop);
};

//webpage is loaded, can begin calling functions
$(document).ready(init);