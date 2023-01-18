// JavaScript Document

var URI_weather = 'https://api.openweathermap.org/data/2.5/onecall?lat=37.061120&lon=-93.309500&exclude=minutely,hourly,alerts&units=imperial&appid=3c890e2eb127beb3199800aea092bd52';
var current = [];
var forecast = [];
var currentTime = new Date();

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(date.getDate() + days);
    return result;
}

$.ajax({
  url: URI_weather,
  dataType: "jsonp",
  success: function (data) {
    
  current = data.current.weather[0];
  forecast[0] = data.daily[0].weather[0];
  forecast[1] = data.daily[1].weather[0];
  forecast[2] = data.daily[2].weather[0];
	  

  switch(current.main){
	  case 'Clear':
		 $('.ghs_current_weather').append('<div><p class="ghs_time">'+currentTime.toLocaleDateString()+'</p><i class="fas fa-sun"></i><h2 class="weather_status">'+current.description+'</h2><p class="ghs_temp">'+Math.round(data.current.temp)+'&#8457;</p></div>');
		  break;
		  
	  case 'Clouds':
		  $('.ghs_current_weather').append('<div><p class="ghs_time">'+currentTime.toLocaleDateString()+'</p><i class="fas fa-cloud"></i><h2 class="weather_status">'+current.description+'</h2><p class="ghs_temp">'+Math.round(data.current.temp)+'&#8457;</p></div>');
		  break;
		  
	  case 'Rain':
	  case 'Mist':
	  case 'Drizzle':
		   $('.ghs_current_weather').append('<div><p class="ghs_time">'+currentTime.toLocaleDateString()+'</p><i class="fas fa-cloud-rain"></i><h2 class="weather_status">'+current.description+'</h2><p class="ghs_temp">'+Math.round(data.current.temp)+'&#8457;</p></div>');
		  break;
	  
	  case 'Atmosphere':
		   $('.ghs_current_weather').append('<div><p class="ghs_time">'+currentTime.toLocaleDateString()+'</p><i class="fas fa-meteor"></i><h2 class="weather_status">'+current.description+'</h2><p class="ghs_temp">'+Math.round(data.current.temp)+'&#8457;</p></div>');
		  break;
	  
	  case 'Snow':
		   $('.ghs_current_weather').append('<div><p class="ghs_time">'+currentTime.toLocaleDateString()+'</p><i class="fas fa-snowflake"></i><h2 class="weather_status">'+current.description+'</h2><p class="ghs_temp">'+Math.round(data.current.temp)+'&#8457;</p></div>');
		  break;
	  
	  case 'Thunderstorm':
		   $('.ghs_current_weather').append('<div><p class="ghs_time">'+currentTime+'</p><i class="fas fa-bolt"></i><h2 class="weather_status">'+current.description+'</h2><p class="ghs_temp">'+Math.round(data.current.temp)+'&#8457;</p></div>');
		  break;
  }
	  
	  
	  
	  for(var i = 0; i<=2; i++){
		  
		  var dtae = new Date(addDays(currentTime, i+1)).toLocaleDateString();
		  
		  	switch(forecast[i].main){
	  	case 'Clear':
		 $('.ghs_forecast_weather').append('<li class="ghs_day_'+i+'"><p class="ghs_time">'+dtae+'</p><i class="fas fa-sun"></i><h2 class="weather_status">'+forecast[i].description+'</h2><div class="ghs_min_max_temps"><p class="ghs_temp_daily">'+Math.round(data.daily[i].temp.min)+'&#8457;</p><p class="ghs_temp_daily">'+Math.round(data.daily[i].temp.max)+'&#8457;</p></div></li>');
		  break;
		  
	  	case 'Clouds':
		  $('.ghs_forecast_weather').append('<li class="ghs_day_'+i+'"><p class="ghs_time">'+dtae+'</p><i class="fas fa-cloud"></i><h2 class="weather_status">'+forecast[i].description+'</h2><div class="ghs_min_max_temps"><p class="ghs_temp_daily">'+Math.round(data.daily[i].temp.min)+'&#8457;</p><p class="ghs_temp_daily">'+Math.round(data.daily[i].temp.max)+'&#8457;</p></div></li>');
		  break;
		  
	  	case 'Rain':
		case 'Drizzle':
		case 'Mist':
		   $('.ghs_forecast_weather').append('<li class="ghs_day_'+i+'"><p class="ghs_time">'+dtae+'</p><i class="fas fa-cloud-rain"></i><h2 class="weather_status">'+forecast[i].description+'</h2><div class="ghs_min_max_temps"><p class="ghs_temp_daily">'+Math.round(data.daily[i].temp.min)+'&#8457;</p><p class="ghs_temp_daily">'+Math.round(data.daily[i].temp.max)+'&#8457;</p></div></li>');
		  break;
				
		case 'Atmosphere':
		   $('.ghs_forecast_weather').append('<li class="ghs_day_'+i+'"><p class="ghs_time">'+dtae+'</p><i class="fas fa-meteor"></i><h2 class="weather_status">'+forecast[i].description+'</h2><div class="ghs_min_max_temps"><p class="ghs_temp_daily">'+Math.round(data.daily[i].temp.min)+'&#8457;</p><p class="ghs_temp_daily">'+Math.round(data.daily[i].temp.max)+'&#8457;</p></div></li>');
		  break;
				
		case 'Snow':
		   $('.ghs_forecast_weather').append('<li class="ghs_day_'+i+'"><p class="ghs_time">'+dtae+'</p><i class="fas fa-snowflake"></i><h2 class="weather_status">'+forecast[i].description+'</h2><div class="ghs_min_max_temps"><p class="ghs_temp_daily">'+Math.round(data.daily[i].temp.min)+'&#8457;</p><p class="ghs_temp_daily">'+Math.round(data.daily[i].temp.max)+'&#8457;</p></div></li>');
		  break;
				
		case 'Thunderstorm':
		   $('.ghs_forecast_weather').append('<li class="ghs_day_'+i+'"><p class="ghs_time">'+dtae+'</p><i class="fas fa-bolt"></i><h2 class="weather_status">'+forecast[i].description+'</h2><div class="ghs_min_max_temps"><p class="ghs_temp_daily">'+Math.round(data.daily[i].temp.min)+'&#8457;</p><p class="ghs_temp_daily">'+Math.round(data.daily[i].temp.max)+'&#8457;</p></div></li>');
		  break;
  }
		  }
	  
  }
});