import React from 'react';

import PieChart, {
  Series,
  Label,
  Legend,

} from 'devextreme-react/pie-chart';


import { countries } from './data';


const pieCharts = [{
  title: 'Caminhoneiros por estado',
  palette: 'Soft',
  dataSource: countries,
  
  
}];

function Grafic() {
  const pies = pieCharts.map((options, i) => (
    <PieChart
      className="pie"
      key={i}
      title={options.title}
      palette={options.palette}
      sizeGroup="piesGroup"
      dataSource={options.dataSource}
      margin={5}
      
    >
      <Series argumentField="name" valueField="area">
        <Label visible={true} format="percent" />
      </Series>
      <Legend
        verticalAlignment="bottom"
        horizontalAlignment="center"
        itemTextPosition="right"
        rowCount={2}
      />
    </PieChart>
  ));

  return (
    <div className="pies-container">
      {pies}
    </div>
  );
}

export default Grafic;
