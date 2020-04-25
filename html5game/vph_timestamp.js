function timestamp(){
	return (new Date().getTime()/1000) ;
}

function timestamp_objet(timestamp){
	return new Date(timestamp*1000);
}

function timestamp_get_date(timestamp){
	var object = timestamp_objet(timestamp);
	object.setSeconds(0);
	object.setMinutes(0);
	object.setHours(0);
	object.setMilliseconds(0);
	return (object.getTime()/1000) ;
}

function timestamp_date_span(date1,date2){
	return Math.floor(Math.abs(date1 -date2)/86400);
}