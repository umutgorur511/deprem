import React from "react";
import { Typography, Card, Divider, Row, Col } from "antd";

const { Title, Paragraph, Text } = Typography;

const EarthquakeInformation = () => {
  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "32px" }}>
      <Typography>
        <Title level={2} style={{ textAlign: "center" }}>
          Deprem Öncesi, Anı ve Sonrası Alabileceğiniz Önlemleri Biliyor Musunuz?
        </Title>

        {/* Deprem Öncesi */}
        <Card title="🏠 Deprem Öncesi Alınacak Önlemler" bordered={false}>
          <Paragraph>
            Yerleşim bölgeleri doğru belirlenmeli, kaygan zeminli, ovalık ve çığ riski taşıyan yerlerde yapılaşma olmamalıdır.
            Dik boğaz, vadiler ve dik yarlara bina yapılmamalıdır. Mevcut yapılar depreme dayanıklı hale getirilmelidir.
          </Paragraph>

          <Divider />

          <Title level={4}>🔧 Eşyaların Sabitlenmesi</Title>
          <Paragraph>
            Dolaplar, raflar, avizeler, beyaz eşyalar ve ısıtıcılar sabitlenmelidir. Gaz, yanıcı madde gibi tehlikeli
            içerikler güvenli biçimde depolanmalıdır. Cam ve kırılabilir eşyalar düşmeyecek şekilde yerleştirilmelidir.
          </Paragraph>

          <Divider />

          <Title level={4}>🧯 Acil Durum Hazırlıkları</Title>
          <Paragraph>
            Acil çıkış yolları belirlenmeli, işaretlenmeli, eşyalardan arındırılmalıdır. Yangın söndürücüler görünür,
            ulaşılabilir ve bakımlı olmalıdır. Tüm aileyle iletişim planı yapılmalı, önemli belgeler su geçirmez saklanmalı ve yedeklenmelidir.
          </Paragraph>

          <Paragraph>
            Tatbikatlarla planlar test edilmeli, 6 ayda bir güncellenmelidir. Deprem sigortası mutlaka yaptırılmalıdır.
          </Paragraph>
        </Card>

        {/* Deprem Anı */}
        <Divider />
        <Card title="⚠️ Deprem Anında Yapılması Gerekenler" bordered={false}>
          <Title level={4}>🏢 Bina İçindeyseniz</Title>
          <Paragraph>
            Panik yapmayın. Sabitlenmemiş eşyalardan uzak durarak masa altı, kanepe yanı gibi güvenli alanlarda
            <Text strong> “Çök – Kapan – Tutun” </Text> yöntemiyle korunun. Baş ve boynunuzu yastık, kitap gibi nesnelerle koruyun.
          </Paragraph>
          <Paragraph>
            Asansör kullanılmamalı, pencerelere, merdivenlere yönelinmemelidir. Kibrit ve çakmak kullanılmamalı, elektrik düğmelerine dokunulmamalıdır.
          </Paragraph>

          <Title level={4}>🌳 Açık Alandaysanız</Title>
          <Paragraph>
            Bina, direk, ağaç ve duvarlardan uzak durun. Yamaçlardan ve deniz kıyısından uzaklaşın. Açık arazide çömelerek
            çevrenizi kontrol edin. Kanalizasyon ve gaz hatlarına dikkat edin.
          </Paragraph>

          <Title level={4}>🚗 Araç Kullanıyorsanız</Title>
          <Paragraph>
            Güvenli bir yere çekip kontağı üstünde bırakın. Sarsıntı bitene kadar araçta kalın. Güvensiz bölgelerdeyseniz
            aracı terk ederek açık alana geçin. Tüneldeyseniz araçtan inip yanına yan yatarak baş-boyun koruyun.
          </Paragraph>

          <Title level={4}>🚇 Toplu Taşıma Araçlarındaysanız</Title>
          <Paragraph>
            Metroda veya trendeyseniz inmeden tutunabileceğiniz bir yere tutunun. Görevlilerin uyarılarına uyun.
          </Paragraph>
        </Card>

        {/* Deprem Sonrası */}
        <Divider />
        <Card title="✅ Deprem Sonrasında Yapılması Gerekenler" bordered={false}>
          <Title level={4}>🏠 Kapalı Alandaysanız</Title>
          <Paragraph>
            Önce kendi güvenliğinizden emin olun. Gaz kokusu varsa vanaları kapatın, camları açın ve binayı terk edin.
            Elektrik, su, doğalgaz hatları kapatılmalı. Radyo/TV gibi kaynaklardan duyuruları takip edin.
          </Paragraph>

          <Title level={4}>🌲 Açık Alandaysanız</Title>
          <Paragraph>
            Hasarlı yapılardan, enerji hatlarından uzak durun. Önce çevrenizde yardıma ihtiyacı olanlara destek olun,
            sonra mahalle toplanma alanına geçin.
          </Paragraph>

          <Title level={4}>🚨 Enkaz Altındaysanız</Title>
          <Paragraph>
            Panik yapmadan durumunuzu değerlendirin. Enerjinizi tasarruflu kullanın. Borulara, zemine vurarak ses çıkarın.
            Sesiniz yetiyorsa ekiplerle iletişim kurmaya çalışın. Aşırı bağırmaktan kaçının.
          </Paragraph>
        </Card>

        <Divider />

        <Paragraph style={{ textAlign: "center", fontStyle: "italic", marginTop: 24 }}>
          Afet bilinci hayat kurtarır. Hazırlıklı olmak, kendinizin ve sevdiklerinizin güvenliğini sağlar.
        </Paragraph>
      </Typography>
    </div>
  );
};

export default EarthquakeInformation;
