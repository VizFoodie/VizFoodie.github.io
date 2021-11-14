let radar1 = {
  type : 'radar',
  plot : {
    aspect : 'area',
    animation: {
      effect:3,
      sequence:1,
      speed:700
    }
  },
  scaleV : {
    visible : false
  },
  scaleK : {
    values : '0:7:1',
    labels : ['Fat','Saturated Fat','Cholesterol', 'Sodium', 'Carbohydrate', 'Fiber', 'Sugar', 'Protein' ],
    item : {
      fontColor : '#607D8B',
      backgroundColor : "white",
      borderColor : "#aeaeae",
      borderWidth : 1,
      padding : '5 10',
      borderRadius : 10
    },
    refLine : {
      lineColor : '#c10000'
    },
    tick : {
      lineColor : '#59869c',
      lineWidth : 2,
      lineStyle : 'dotted',
      size : 20
    },
    guide : {
      lineColor : "#607D8B",
      lineStyle : 'solid',
      alpha : 0.3,
      backgroundColor : "#c5c5c5 #718eb4"
    }
  },
  series : [
    {
      values : [17.6,5.7,57.8/ 1000,691.3/1000,61.8,4.3,13.7,26.2],
      text:'farm'
    }
  ]
};

zingchart.render({
  id : 'radar1',
  data : radar1,
});