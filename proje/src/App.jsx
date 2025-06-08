import { Layout, Tabs, Typography } from "antd";
import EarthquakeList from "./earthquake-list";
import EarthquakeInformation from "./earthquake-information";
import EarthquakeStatsChart from "./earthquake-stats-chart";

const { Header, Content } = Layout;
const { Title } = Typography;

const App = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ backgroundColor: "#001529", padding: "0 20px" }}>
        <Title style={{ color: "#fff", margin: 0 }} level={3}>
          📡 Türkiye Deprem Takip
        </Title>
      </Header>

      <Content style={{ padding: "24px", background: "#f0f2f5" }}>
        <Tabs defaultActiveKey="1" size="large">
          <Tabs.TabPane tab="Canlı Depremler" key="1">
           <EarthquakeList/>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Deprem Bilgilendirme" key="2">
          <EarthquakeInformation/>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Dünya Üzerinde Son 24 Saatte Meydana Gelen Büyük Depremler" key="3">
          <EarthquakeStatsChart/>
          </Tabs.TabPane>
        </Tabs>
      </Content>
    </Layout>
  );
};

export default App;
