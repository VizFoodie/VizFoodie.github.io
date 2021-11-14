let pie1 = {
  type: 'pie',
  backgroundColor: '#2A2C3E',
  title: {
    text: 'Quick Pasta Supper',
    backgroundColor: '#FE9C8A',
    fontColor: '#1A1B26',
    fontSize: '16px',
    height: '40px'
  },
  subtitle: {
    backgroundColor: '#202235',
    height: '35px',
    y: '40px'
  },
  legend: {
    backgroundColor: 'none',
    borderWidth: '0px',
    item: {
      fontColor: 'white'
    },
    layout: 'h',
    marker: {
      type: 'circle',
      borderColor: 'white'
    },
    shadow: false,
    toggleAction: 'remove',
    y: '40px'
  },
  plot: {
    valueBox: [
      {
        text: '%t: %v',
        fontSize: '16px',
        placement: 'out'
      },
      {
        text: '%npv%',
        fontColor: '#1A1B26',
        fontSize: '16px',
        placement: 'in'
      }
    ],
    refAngle: 270
  },
  plotarea: {
    margin: '90 30 25 30'
  },
  tooltip: {
    borderColor: '#fff',
    borderRadius: '3px',
    borderWidth: '1px',
    fontColor: '#1A1B26',
    fontSize: '12px',
    shadow: false
  },
  series: [
    {
      values: [512.5],
      backgroundColor: '#FB7373',
      text: 'Calories'
    },
    {
      values: [17.6],
      backgroundColor: '#FFA089',
      text: 'Fat'

    },
    {
      values: [5.7],
      backgroundColor: '#F2C994',
      text: 'Saturated Fat'
    },
    {
      values: [57.8],
      backgroundColor: '#F2C994',
      text: 'Cholesterol'
    },
    {
      values: [691.3],
      backgroundColor: '#F2C994',
      text: 'Sodium'
    },
    {
      values: [61.8],
      backgroundColor: '#F2C994',
      text: 'Carbohydrate'
    },
    {
      values: [4.3],
      backgroundColor: '#F2C994',
      text: 'Fiber'
    },
    {
      values: [13.7],
      backgroundColor: '#F2C994',
      text: 'Sugar'
    },
    {
      values: [26.2],
      backgroundColor: '#F2C994',
      text: 'Protein'
    }
  ]
};

zingchart.render({
  id: 'pie1',
  data: pie1,
});