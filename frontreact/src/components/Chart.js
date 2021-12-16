import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

export const Chart = ({ width = 600, height = 600, data }) => {
  const barChart = useRef();

  useEffect(() => {
    const margin = { top: 10, left: 50, bottom: 40, right: 10 };
    const iwidth = width - margin.left - margin.right;
    const iheight = height - margin.top - margin.bottom;

    const svg = d3.select(barChart.current);
    svg.attr('width', width);
    svg.attr('height', height);

    let g = svg
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const y = d3.scaleLinear().domain([0, 500]).range([iheight, 0]);

    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.name))
      .range([0, iwidth])
      .padding(0.1);

    // Continue with implementation. Don't forget the tooltip
    var Tooltip = d3.select("#chartArea")
      .append("div") 
      .style("visibility","hidden")
      .attr("class", "tooltip")
      .style("background-color","white")
      .style("padding", "5.5px")
      .style("position","absolute")
      .style("border-width","2.5px")
      .style("border-radius","4.5px")
      .style("border", "solid")
      ;
    var raton = function(d){
      Tooltip.style("visibility","visible")
      .html(`${d.target._data_.name}: ${d.target._data_.stock}`
      );
    };
    var raton2 = function(d){
      Tooltip.style("left",d.pageX + 14 + "px")
      .style("top", d.pageY + "px");
    };
    var raton3 = function(d){
      Tooltip.style("visibility","hidden")
    };

    const bars = g.selectAll("react").data(data);
    bars.enter().append("react")
    .attr("class", "bar")
    .style("fill","rgb(53 53 184)")
    .attr("x", (d) => x(d.name))
    .attr("y", (d) => y(d.stock))
    .attr("height",(d) => iheight - y(d.stock))
    .attr("width", x.bandwidth())
    .on("raton", raton)
    .on("raton2", raton2)
    .on("raton3", raton3)
    ;

    g.append("g").classed("y--axis",true).call(d3.axisLeft(y));
  });

  return (
    <div id='chartArea'>
      <svg ref={barChart}></svg>
    </div>
  );
};
