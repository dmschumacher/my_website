function init(){
	cities();
	addEvents();
};


//declaring new function
function addColumns(cityPop){
    
    $('tr').each(function(i){

    	if (i == 0){

    		//add new column "City Size"
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

    		//Add variable citySize to the table
    		$(this).append('<td>' + citySize + '</td>');
    	};
    });
};

function addEvents(){

	$('table').mouseover(function(){
		
		var color = "rgb(";
		console.log("color = ");

		for (var i=0; i<3; i++){

			var random = Math.round(Math.random() * 255);

			color += random;

			if (i<2){
				color += ",";
			
			} else {
				color += ")";
			};

		};


		$(this).css('color', color);
	});

	function clickme(){

		alert('Hey, you clicked me!');
	};

	$('table').on('click', clickme);
};


function cities(){
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

	//append table element
	$("#mydiv").append("<table>");

	//apend header to table
	$("table").append("<tr>");

	//add columns with titles
	$("tr").append("<th>City</th><th>Population</th>");

	//loop to add more rows
	for(var i = 0; i < cityPop.length; i++){
		var row = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
		$("table").append(row);
	};

	addColumns(cityPop);
};


$(document).ready(init);