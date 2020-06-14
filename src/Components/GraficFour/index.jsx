import React from 'react';

import { Chart, Series, CommonSeriesSettings, Label, Format, Legend, Export,  Subtitle } from 'devextreme-react/chart';
import { grossProductData } from './data.jsx';

class App extends React.Component {

  render() {
    return (
      <Chart id="chart"
        title="Botão Perigo"
       
        dataSource={grossProductData}
        onPointClick={this.onPointClick}
      >
        <Subtitle text="(in millions tonnes)" />
        <CommonSeriesSettings
          argumentField="state"
          type="bar"
          hoverMode="allArgumentPoints"
          selectionMode="allArgumentPoints"
        >
          <Label visible={true}>
            <Format type="fixedPoint" precision={0} />
          </Label>
        </CommonSeriesSettings>
        <Series
          argumentField="state"
          valueField="year2004"
          name="Polícia"
        />
        <Series
          valueField="year2001"
          name="Saúde"
        />
        <Series
          valueField="year1998"
          name="Mecânicos"
        />
        <Legend verticalAlignment="bottom" horizontalAlignment="center"></Legend>
        <Export enabled={true} />
      </Chart>
    );
  }

  onPointClick(e) {
    e.target.select();
  }
}

export default App;
