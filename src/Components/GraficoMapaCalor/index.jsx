import React from "react";

import {
  Chart,
  Series,
  CommonSeriesSettings,
  Legend,
  ValueAxis,
  ArgumentAxis,
  Label,
  Border,
  Tooltip,
  Export,
} from "devextreme-react/chart";

import { dataSource } from "./data";

const palette = ["#00ced1", "#ffd700", "#ff7f50"];

export default function MapaCalor() {
  return (
    <Chart
      id="chart"
      title={
        "Mapa de calor: São Paulo (02/2020)" 
      }
      
      palette={palette}
      onSeriesClick={seriesClick}
      dataSource={dataSource}
    >
      
      <Tooltip
        enabled={true}
        location="edge"
        customizeTooltip={customizeTooltip}
      />
      <CommonSeriesSettings type="bubble" />
      <ValueAxis title="Quantidade de pessoas">
        <Label customizeText={customizeText} />
      </ValueAxis>
      <ArgumentAxis title="Localização (Km)">
        <Label customizeText={customizeText} />
      </ArgumentAxis>
      <Series
        name="SAMU"
        argumentField="total1"
        valueField="older1"
        sizeField="perc1"
        tagField="tag1"
      />
      <Series
        name="Mecânico"
        argumentField="total2"
        valueField="older2"
        sizeField="perc2"
        tagField="tag2"
      />
      
      <Series
        name="Polícia"
        argumentField="total3"
        valueField="older3"
        sizeField="perc3"
        tagField="tag3"
      />
      <Legend position="inside" horizontalAlignment="left">
        <Border visible={true} />
      </Legend>
      <Export enabled={true} />
    </Chart>
  );
}

function customizeTooltip(pointInfo) {
  return {
    text: `${pointInfo.point.tag}<br/>Quilômetro: ${pointInfo.argumentText}<br/>Quantidade de pessoas: ${pointInfo.valueText} (${pointInfo.size}%)`,
  };
}

function seriesClick(e) {
  const series = e.target;
  if (series.isVisible()) {
    series.hide();
  } else {
    series.show();
  }
}

function customizeText(e) {
  return `${e.value}`;
}
