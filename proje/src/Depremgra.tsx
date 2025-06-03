import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Card, Typography, Spin, Input, Space } from "antd";

const { Title } = Typography;

// Marker ikonları düzgün görünmesi için gerekli ayar
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const DepremMap = () => {
  const [quakes, setQuakes] = useState<any[]>([]);
  const [filteredQuakes, setFilteredQuakes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("https://api.orhanaydogdu.com.tr/deprem/kandilli/live")
      .then((res) => res.json())
      .then((json) => {
        setQuakes(json.result);
        setFilteredQuakes(json.result);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleSearch = (value: string) => {
    setSearchText(value);
    const filtered = quakes.filter((q) =>
      q.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredQuakes(filtered);
  };

  return (
    <Card style={{ margin: 20 }} bordered>
      <Title level={4}>Türkiye'deki Son Depremler (Harita Görünümü)</Title>

      <Space style={{ marginBottom: 16 }}>
        <Input.Search
          placeholder="Şehir veya bölge ara..."
          enterButton
          allowClear
          onSearch={handleSearch}
        />
      </Space>

      {loading ? (
        <div style={{ textAlign: "center", padding: "40px" }}>
          <Spin tip="Harita yükleniyor..." size="large" />
        </div>
      ) : (
        <MapContainer
          center={[39.0, 35.0] as [number, number]}
          zoom={6}
          scrollWheelZoom={true}
          style={{ height: "600px", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {filteredQuakes.map((quake, idx) => (
            <Marker
              key={idx}
              position={[
                parseFloat(quake.latitude),
                parseFloat(quake.longitude),
              ] as [number, number]}
            >
              <Popup>
                <strong>{quake.title}</strong>
                <br />
                Büyüklük: {quake.mag}
                <br />
                Derinlik: {quake.depth} km
                <br />
                Tarih: {quake.date}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      )}
    </Card>
  );
};

export default DepremMap;
