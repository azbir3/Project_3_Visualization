function init(csvname, column, labelsColumn) { 
  var values=[]
  var labels=[]

  d3.csv(csvname, function (data) 
  {
        document.write(3)
      for ( var i=0; i < data.length; i++){
        values.push(data[i][column]);
        labels.push(data[i][labelsColumn]);
      }
      document.write(2)
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
  document.write(1)
    var csvname="";
    var column="";
    var labels="";
    switch (dataset) {
    case "datasetWKD":
      csvname="http://localhost:5000/weekday_borough"
      column="Total_Accidents"
      labels="WEEKDAY"
      break;
    case "datasetMO":
      csvname="http://localhost:5000/month_borough"
      column="Total_Accidents"
      labels="MONTH"
      break;
    default: 
      csvname="http://localhost:5000/borough_summary"
      column="Number_of_Accidents"
      labels="BOROUGH"
    break;
    }
  //updatePlotly(data);
  init(csvname, column, labels);
}

//init("http://localhost:5000/borough_summary", "Number_of_Accidents", "BOROUGH");