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
      .style("visibility", "hidden")
      .attr("class", "tooltip")
      .style("background-color", "white")
      .style("padding", "5px")
      .style("position", "absolute")
      .style("border", "solid")
      .style("border-width", "2px")
      .style("border-radius", "5px")
      ;

    const barras = g.selectAll("react").data(data);
    barras.enter().append("rect")
      .attr("class", "bar")
      .style("fill", "rgb(53 53 184)")
      .attr("x", (d) => x(d.name))
      .attr("y", (d) => y(d.stock))
      .attr("height", (d) => iheight - y(d.stock))
      .attr("width", x.bandwidth())
      // .on("raton", (d) => {
      //   Tooltip
      //     .style("visibility", "visible")
      //     .text(`${d.name}:` + `${d.stock}`);
      // })
      // .on("raton2", (e) => {
      //   Tooltip
      //     .style("top", e.pageY - 25 + "px")
      //     .style("left", e.pageX - 25 + "px");
      // })
      // .on("raton3", () => {
      //   Tooltip.style("visibility", "hidden");
      // });
    ;
    g.append("g").classed("y--axis", true).call(d3.axisLeft(y));
  });
  return (
    <div id='chartArea'>
      <svg ref={barChart}></svg>
    </div>
  );
};