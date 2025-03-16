import React, { useState } from "react";
import { PieChart, Pie, Sector, ResponsiveContainer, Cell } from "recharts";
import { ChartData, Party } from "@/app/lib/types";

// creates dynamic label
const renderActiveShape = (props: any) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    value,
  } = props;

  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#999"
      >{`Vote share`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`${value.toFixed(2)}%`}
      </text>
    </g>
  );
};

export default function electionChart({
  parties,
  electionDataToDisplay,
}: {
  parties: Array<Party>;
  electionDataToDisplay: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = (_: Event, index: number) => {
    setActiveIndex(index);
  };
  const data: Array<ChartData> = [];
  const COLORS: Array<string> = [];
  let otherVotes: number = 0;

  parties.forEach((party) => {
    if (party.displayOrder < 4) {
      const name: string = party.englishCode;
      const value: number =
        (electionDataToDisplay === "current"
          ? party.totalVotesPercentage
          : party.previousTotalVotesPercentage) * 100;
      const color: string = party.e?.colourDarkElected;

      data.push({ name, value });
      COLORS.push(color);
    } else if (party.displayOrder < 6) {
      otherVotes =
        otherVotes +
        (electionDataToDisplay === "current"
          ? party.totalVotesPercentage
          : party.previousTotalVotesPercentage) *
          100;
    } else if (party.displayOrder === 6) {
      data.push({ name: "OTHERS", value: otherVotes });
      COLORS.push("#6d777e");
    }
  });

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={200} height={200}>
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={40}
          outerRadius={60}
          fill="#8884d8"
          dataKey="value"
          onMouseEnter={onPieEnter}
        >
          {data.map((_entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
