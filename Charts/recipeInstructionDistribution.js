let instructionDistribution = {
  type: 'bar',
  backgroundColor: 'white',
  title: {
    text: 'Distribution of Number of Steps Per Recipe',
    margin: '15px auto',
    alpha: 1,
    backgroundColor: 'none',
    fontColor: '#7E7E7E',
    fontSize: '22px',
    fontFamily: 'sans-serif',
  },
  plot: {
    animation: {
      effect: 'ANIMATION_SLIDE_BOTTOM'
    },
    'background-color': "#ff0080",
    'bar-width': "50%"
  },
  plotarea: {
    margin: '80 60 100 60',
    y: '125px'
  },
  scrollX: {
    bar: {
      backgroundColor: '#eee',
      height: '10px',
      alpha: 0.5
    },
    handle: {
      backgroundColor: "#7e7e7e",
    }
  },
  scrollY: {
    bar: {
      backgroundColor: '#eee',
      height: '10px',
      alpha: 0.5
    },
    handle: {
      backgroundColor: "#7e7e7e",
    }
  },
  scaleX: {
    guide: {
      visible: false
    },
    item: {
      fontColor: '#7e7e7e',
      fontAngle: 15,
    },
    label: {
      text: 'Number of Steps',
      bold: true,
      fontAngle: 0,
      fontColor: '#7E7E7E',
      fontFamily: 'sans-serif',
      fontSize: '12px',
    },
    lineColor: '#7E7E7E',
    zooming: true,
    zoomTo: [0, 100],
  },
  scaleY: {
    values: '0:70000:10',
    guide: {
      visible: true
    },
    item: {
      fontColor: '#7e7e7e'
    },
    label: {
      text: 'Number of Recipes',
      bold: true,
      fontAngle: 0,
      fontColor: '#7E7E7E',
      fontFamily: 'sans-serif',
      fontSize: '12px',
      offsetX: '70px',
      offsetY: '-190px'
    },
    lineColor: '#7E7E7E',
  },
  tooltip: {
    text: '%v recipes has <br> %kl steps'
  },

  series: [
    {
      values: [54,21370,33471,55992,65906,65751,58894,49017,39615,31035,24194,17928,13685,10454,7917,5979,4574,3526,2590,2164,1651,1245,1049,804,644,545,444,327,284,219,187,155,128,123,104,72,65,55,43,47,38,27,23,25,16,17,19,12,14,3,5,5,3,9,3,3,4,4,5,2,2,4,1,1,3,4,2,1,1,1,1,0,0,1,0,0,0,1
      ],
      borderRadiusTopLeft: '7px',
      alpha: 0.95,
      backgroundColor: '#fb8072',
      fontFamily: 'sans-serif',
    }

  ]
};

zingchart.render({
  id : 'instructionDistribution',
  data : instructionDistribution,
});

