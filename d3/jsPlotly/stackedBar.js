<!--

function showLastLabel()
{
    var shown = chart.data.shown().map(function(item){ return item.id }) // get visible ids: ['data1', 'data2', ...]
    var last = (shown[shown.length - 1])
    d3.select('.c3-chart-texts').selectAll('.c3-target').style('display', 'none') // hide all
    d3.select('.c3-chart-texts').selectAll('.c3-target-' + last).style('display', 'block') // show last
}

var totals = []

var chart = c3.generate({
    legend: {
      item: {
        onclick: function (id) { 
            chart.toggle([id]) // keep default functionality
            showLastLabel()
        }
      }
    },
    onrendered: function(){
        totals = []
    },
    data: { 
        labels: {
            format: function(v, id, i, j)
            {
                if (isNaN(totals[i])) totals[i] = 0 
                // sum only visible
                if (chart)
                {
                    var shown = chart.data.shown().map(function(item){ return item.id })
                    if (shown.indexOf(id) != -1) totals[i] += v
                }
                else
                {
                    totals[i] += v
                }
                
                return totals[i]
            }
        },
        columns: [
            ['data1', 30, 200, 200, 400, 150, 250],
            ['data2', 130, 100, 100, 200, 150, 50],
            ['data3', 230, 200, 200, 300, 250, 250]
        ],
        type: 'bar',
        order: null, // disable reordering of stack
        groups: [
            ['data1', 'data2', 'data3']
        ]
    }
});



showLastLabel() // initial