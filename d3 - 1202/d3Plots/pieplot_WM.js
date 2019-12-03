function init(csvname, column, labelsColumn) { 
  var values=[]
  var labels=[]

  d3.csv(csvname, function (data) 
  {
      for ( var i=0; i < data.length; i++){
        values.push(data[i][column]);
        labels.push(data[i][labelsColumn]);
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
      
        Plotly.newPlot("pie", data, layout);
  });
}
  
  function updatePlotly(newdata) {
    var PIE = document.getElementById("pie");
    Plotly.restyle(PIE, "values", [newdata]);
  }
  
  function getData(dataset) {
    var csvname="";
    var column="";
    var labels="";
    switch (dataset) {
    case "datasetWKD":
      csvname="../data/weekday_borough.csv"
      column="Total_Accidents"
      labels="WEEKDAY"
      break;
    case "datasetMO":
      csvname="../data/month_borough.csv"
      column="Total_Accidents"
      labels="MONTH"
      break;
    default: 
      csvname="../data/borough_summary.csv"
      column="Number_of_Accidents"
      labels="BOROUGH"
    break;
    }
  //updatePlotly(data);
  init(csvname, column, labels);
}

init("../data/borough_summary.csv", "Number_of_Accidents", "BOROUGH");