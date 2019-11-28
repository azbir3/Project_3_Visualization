function init(csvname, column, labels) { 
  var values=[]
  var labels=[]

  d3.csv(csvname, function (data) 
  {
      for ( var i=0; i < data.length; i++){
        values.push(data[i][column]);
        labels.push(data[i].BOROUGH);
      }
      var data = [{
        values: values,
        labels: labels,
        type: "pie"
      }];
      
        var layout = {
          height: 500,
          width: 650
        };
      
        Plotly.plot("pie", data, layout);
  });
}
  
  function updatePlotly(newdata) {
    var PIE = document.getElementById("pie");
    Plotly.restyle(PIE, "values", [newdata]);
  }
  
  function getData(dataset) {
    var csvname="";
    var column="";
    //var labels="";
    switch (dataset) {
    case "datasetWKD":
      csvname="weekday_borough.csv"
      column="Total Accidents"
      labels="WEEKDAY"
      //labels = ["Sunday", "Monday", "Tuesday", "Wednessday", "Thursday", "Friday", "Saturday"]
      //labels.push(data[i].WEEKDAY);
      break;
    case "datasetMO":
      csvname="month_borough.csv"
      column="Total_Accidents"
      labels="MONTH"
      break;
    // case "dataset19":
    //   data = [19696, 38958, 23543, 34978, 3223];
    //   break;
    default: 
      csvname="borough_summary.csv"
      column="Number_of_Accidents"
      labels="BOROUGH"
    break;
    }
  //updatePlotly(data);
  init(csvname, column, labels);
}

init("../data/borough_summary.csv", "Number_of_Accidents", "BOROUGH");