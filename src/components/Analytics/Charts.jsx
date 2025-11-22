import { useContext, useMemo } from "react";
import { DataContext } from "../../context/DataContext";

import {
  BarChart,
  Bar,
  LineChart,
  Line,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

// Chart Card Wrapper Component
function ChartCard({ title, height, children }) {
  return (
    <div
      className="w-full bg-card/60 backdrop-blur-xl border border-border
                 rounded-xl p-6 mb-10 shadow-lg hover:shadow-glow transition animate-fadeIn"
    >
      <h2 className="text-primary font-semibold mb-4 text-lg">{title}</h2>
      <div style={{ width: "100%", height }}>{children}</div>
    </div>
  );
}

export default function Charts() {
  const { allData } = useContext(DataContext);

  if (!allData.length)
    return (
      <p className="text-muted-foreground text-center mt-10">
        No data available
      </p>
    );

  const COLORS = ["#2CE4D0", "#3BB4F9", "#5CFF88", "#FFB34D", "#FF4D6D"];

  // Group helper
  const normalize = (value) => {
    if (!value) return "Unknown";
    value = value.toString().trim().toLowerCase();
    return value.charAt(0).toUpperCase() + value.slice(1);
  };

  const groupBy = (data, key) => {
    return Object.values(
      data.reduce((acc, item) => {
        const k = normalize(item[key]);
        acc[k] = acc[k] || { name: k, count: 0 };
        acc[k].count++;
        return acc;
      }, {})
    );
  };
  // DATASETS
  const domainData = useMemo(() => groupBy(allData, "domain"), [allData]);
  // --- PROJECT TYPE GROUPING FIXED ---
  // Build grouped raw data
  const typeDataRaw = groupBy(allData, "projectType");

  // Remove literal "Others" variations BEFORE sorting
  const cleanedTypes = typeDataRaw.filter(
    (item) => normalize(item.name) !== "Others"
  );

  // Sort desc
  const sortedTypes = [...cleanedTypes].sort((a, b) => b.count - a.count);

  // Take top N
  const TOP_N = 6;
  const topTypes = sortedTypes.slice(0, TOP_N);

  // Sum the rest into a TRUE Others bucket
  const othersCount = sortedTypes
    .slice(TOP_N)
    .reduce((sum, item) => sum + item.count, 0);

  // Final dataset
  const typeData =
    othersCount > 0
      ? [...topTypes, { name: "Others", count: othersCount }]
      : topTypes;

  const statusData = useMemo(() => groupBy(allData, "status"), [allData]);

  // Funding by faculty
  const fundingByFaculty = useMemo(() => {
    return Object.values(
      allData.reduce((acc, item) => {
        const faculty = normalize(item.facultyName);
        const amount = parseFloat(item.amount) || 0;
        acc[faculty] = acc[faculty] || { name: faculty, total: 0 };
        acc[faculty].total += amount;
        return acc;
      }, {})
    );
  }, [allData]);

  const agencyFunding = useMemo(() => {
    return Object.values(
      allData.reduce((acc, item) => {
        const agency = normalize(item.fundingAgency);
        const amount = parseFloat(item.amount) || 0;
        acc[agency] = acc[agency] || { name: agency, total: 0 };
        acc[agency].total += amount;
        return acc;
      }, {})
    );
  }, [allData]);

  // Projects per year
  const projectsByYear = useMemo(
    () =>
      Object.values(
        allData.reduce((acc, item) => {
          const year = item.from || "Unknown";
          acc[year] = acc[year] || { year, count: 0 };
          acc[year].count++;
          return acc;
        }, {})
      ),
    [allData]
  );

  // Top 10 funded faculty
  const topFunding = useMemo(
    () => [...fundingByFaculty].sort((a, b) => b.total - a.total).slice(0, 10),
    [fundingByFaculty]
  );

  return (
    <div className="flex flex-col w-full">
      <ChartCard title="Projects by Domain" height={380}>
        <ResponsiveContainer>
          <BarChart data={domainData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#3A3F47" />
            <XAxis
              dataKey="name"
              stroke="#A9B2C3"
              interval={0}
              angle={-20}
              textAnchor="end"
              height={80}
            />

            <YAxis />
            <Tooltip />
            <Bar dataKey="count">
              {domainData.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Projects by Type" height={360}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={typeData}
              dataKey="count"
              nameKey="name"
              outerRadius={120}
              labelLine={false} // ⛔ disables arrow lines
              label={false} // ⛔ removes external labels
            >
              {typeData.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Project Status Distribution" height={340}>
        <ResponsiveContainer>
          <BarChart data={statusData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#3A3F47" />
            <XAxis dataKey="name" stroke="#A9B2C3" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count">
              {statusData.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      {/* FUNDING BY FACULTY */}
      <ChartCard title="Funding by Faculty (Top 15)" height={450}>
        <ResponsiveContainer>
          <BarChart data={topFunding}>
            <CartesianGrid strokeDasharray="3 3" stroke="#3A3F47" />

            <XAxis
              dataKey="name"
              stroke="#A9B2C3"
              angle={-40}
              textAnchor="end"
              interval={0}
              height={120}
            />

            <YAxis
              label={{
                value: "Funding (Lakhs)",
                angle: -90,
                position: "insideLeft",
                fill: "#A9B2C3",
              }}
            />

            <Tooltip
              formatter={(value) => `${value} Lakhs`}
              contentStyle={{ background: "#111", borderRadius: "8px" }}
            />

            <Bar dataKey="total" barSize={35}>
              {topFunding.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Projects Over Years" height={360}>
        <ResponsiveContainer>
          <LineChart data={projectsByYear}>
            <CartesianGrid strokeDasharray="3 3" stroke="#3A3F47" />
            <XAxis dataKey="year" stroke="#A9B2C3" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="count"
              stroke="#3BB4F9"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Top 10 Funded Researchers" height={400}>
        <ResponsiveContainer>
          <BarChart data={topFunding} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="#3A3F47" />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" width={150} />
            <Tooltip />
            <Bar dataKey="total" fill="#2CE4D0" />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>
    </div>
  );
}
