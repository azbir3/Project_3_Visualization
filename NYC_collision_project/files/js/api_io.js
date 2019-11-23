var baseURL = "https://data.cityofnewyork.us/resource/qiz3-axqb.json?$$app_token=k62csWQVTZcgh2GzhoS8uTzX5&$where=location IS NOT NULL";

function constructBasicApiUrl(fromYear, fromMonth, fromDate, fromHour, fromMinute, toYear, toMonth, toDate, toHour, toMinute) {
	var url = baseURL;
	if(fromMonth < 10) {
		fromMonth = "0" + fromMonth;
	}
	if(fromDate < 10) {
		fromDate = "0" + fromDate;
	}
	if(fromHour > 0 && fromHour < 10) {
		fromHour = "0" + fromHour;
	}
	if(fromMinute > 0 && fromMinute < 10) {
		fromMinute = "0" + fromMinute;
	}
	if(toMonth < 10) {
		toMonth = "0" + toMonth;
	}
	if(toDate < 10) {
		toDate = "0" + toDate;
	}
	if(toHour > 0 && toHour < 10) {
		toHour = "0" + toHour;
	}
	if(toMinute > 0 && toMinute < 10) {
		toMinute = "0" + toMinute;
	}
	url += " AND date between '" + fromYear + "-" + fromMonth + "-" + fromDate + "T00:00:00.000' and "
		+ "'" + toYear + "-" + toMonth + "-" + toDate + "T00:00:00.000'"
		+ " AND time between '" + fromHour + ":" + fromMinute + "' and '" + toHour + ":" + toMinute + "'";
	return url;
}

function addEqualsConstraint(url, key, value) {
	url += "&" + key + "=" + value;
	return url;
}

function getResponseForQuery(urlToLoad, callBack1, callBack2, callBack3) {
	$.ajax({
		url: urlToLoad,
		type: "GET",
		dataType: "json",
		success: function(result) {
			incidents = processResponse(result);
			callBack1(incidents);
			callBack2();
			callBack3();
		}	
	});
}

function processResponse(response) {
	incidents = [];
	for(i = 0; i < response.length; i++) {
		incident = response[i];
		reasonEntry = incident.contributing_factor_vehicle_1;
		locEntry = {
			lat: parseFloat(incident.latitude),
			lng: parseFloat(incident.longitude)
		};
		injuriesEntry = parseInt(incident.number_of_cyclist_injured)
			+ parseInt(incident.number_of_motorist_injured)
			+ parseInt(incident.number_of_pedestrians_injured)
			+ parseInt(incident.number_of_persons_injured);
		killedEntry = parseInt(incident.number_of_cyclist_killed)
			+ parseInt(incident.number_of_motorist_killed)
			+ parseInt(incident.number_of_pedestrians_killed)
			+ parseInt(incident.number_of_persons_killed);
		
		entry = {
			reason: reasonEntry,
			injuries: injuriesEntry,
			deaths: killedEntry,
			location: locEntry,
			infoContent: "Date of Incident: " + incident.date.split("T")[0]
				+ "<br />Time of Incident: " + incident.time
				+ "<br />ZipCode: " + incident.zip_code
				+ "<br />Total Injured: " + injuriesEntry + "    Total Killed: " + killedEntry
				+ "<br />Reason: " + reasonEntry
		};
		incidents[i] = entry;
	}
	return incidents;
}

