import React, { useEffect, useState } from "react";
import { Table, Input, Spin, Alert, Typography, Space, Divider } from "antd";
import moment from "moment";
import { SearchOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const EarthquakeList = () => {
  const [quakes, setQuakes] = useState([]);
  const [filteredQuakes, setFilteredQuakes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://api.orhanaydogdu.com.tr/deprem/kandilli/live");
        const json = await res.json();
        setQuakes(json.result);
        setFilteredQuakes(json.result);
      } catch (e) {
        console.error(e);
        setError("Veri alınamadı.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = quakes.filter((item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredQuakes(filtered);
  }, [searchText, quakes]);

  const columns = [
    {
      title: "Tarih",
      dataIndex: "date",
      render: (text) => moment(text).format("LLL"),
    },
    {
      title: "Yer",
      dataIndex: "title",
      render: (text) => <Text strong>{text}</Text>,
    },
    {
      title: "Büyüklük",
      dataIndex: "mag",
      render: (value) => (
        <Text strong type={value >= 4 ? "danger" : "secondary"}>
          {value}
        </Text>
      ),
    },
    {
      title: "Derinlik (km)",
      dataIndex: "depth",
      render: (value) => (
        <Text code style={{ fontSize: "90%" }}>
          {value}
        </Text>
      ),
    },
  ];

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        padding: "24px",
        boxSizing: "border-box",
        background: "#fafafa",
        overflow: "auto",
      }}
    >
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        <Title level={2} style={{ margin: 0 }}>Canlı Deprem Verileri</Title>

        <Input
          placeholder="Şehir veya bölge ara..."
          prefix={<SearchOutlined />}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          allowClear
          style={{ maxWidth: 400 }}
        />

        {error && <Alert type="error" message={error} showIcon />}

        {loading ? (
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "60vh" }}>
            <Spin size="large" />
          </div>
        ) : (
          <>
            <Divider />
            <Table
              dataSource={filteredQuakes.slice(0, 50)}
              columns={columns}
              rowKey={(record, index) => index}
              pagination={{ pageSize: 10 }}
              bordered
              size="middle"
              locale={{ emptyText: "Gösterilecek deprem verisi bulunamadı." }}
              style={{ background: "#fff" }}
            />
          </>
        )}
      </Space>
    </div>
  );
};

export default EarthquakeList;
