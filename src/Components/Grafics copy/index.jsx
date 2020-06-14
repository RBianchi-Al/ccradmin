import React from 'react';

import PieChart, {
  Series,
  Label,
  Legend,

} from 'devextreme-react/pie-chart';


import {waterLandRatio } from './data';


const pieCharts = [ {
  title: 'Consultas',
  palette: 'Soft Pastel',
  dataSource: waterLandRatio
}];

function GraficOne() {
  const pies = pieCharts.map((options, i) => (
    <PieChart
      className="pie"
      key={i}
      title={options.title}
      palette={options.palette}
      sizeGroup="piesGroup"
      dataSource={options.dataSource}
    >
      <Series argumentField="name" valueField="area">
        <Label visible={true} format="percent" />
      </Series>
      <Legend
        verticalAlignment="bottom"
        horizontalAlignment="center"
        itemTextPosition="right"
        rowCount={1}
      />
    </PieChart>
  ));

  return (
    <div className="pies-container">
      {pies}
    </div>
  );
}

export default GraficOne;
