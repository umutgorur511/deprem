import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Card, Spin, Typography, Divider, Tooltip as AntdTooltip } from "antd";
import moment from "moment";
import "moment/locale/tr";

moment.locale("tr");

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const { Title, Text } = Typography;

const EarthquakeStatsChart = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_day.geojson"
    )
      .then((res) => res.json())
      .then((json) => {
        const features = json.features.slice(0, 10); // ilk 10 deprem
        setData(features);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "50px 0" }}>
        <Spin tip="Deprem verileri yükleniyor..." size="large" />
      </div>
    );
  }

  const chartData = {
    labels: data.map((item) => item.properties.place),
    datasets: [
      {
        label: "Deprem Büyüklüğü (Mw)",
        data: data.map((item) => item.properties.mag),
        backgroundColor: "rgba(255, 99, 132, 0.6)",
        borderRadius: 5,
        barThickness: 30,
      },
    ],
  };

  return (
    <Card bordered style={{ margin: 20 }}>
      <Title level={4}>Dünya Üzerinde Son 24 Saatte Meydana Gelen Büyük Depremler</Title>
      <Divider />

      <Bar data={chartData} />

      <Divider orientation="left">Detaylı Bilgiler</Divider>

      {data.map((item, index) => (
        <Card key={index} type="inner" style={{ marginBottom: 10 }}>
          <Title level={5}>{item.properties.place}</Title>
          <Text>
            <strong>Büyüklük:</strong>{" "}
            <AntdTooltip title="Moment Magnitüd (Mw)">
              <Text strong type="danger">
                {item.properties.mag}
              </Text>
            </AntdTooltip>
            {" | "}
            <strong>Tarih:</strong> {moment(item.properties.time).format("LLL")}
            {" | "}
            <strong>Derinlik:</strong> {item.geometry.coordinates[2]} km
          </Text>
        </Card>
      ))}
    </Card>
  );
};

export default EarthquakeStatsChart;
