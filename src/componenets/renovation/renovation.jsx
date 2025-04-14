import React from "react";
import Img from "../../assets/backround.jpg"; // Import qilingan rasm
import {
  Headphones,
  Ruler,
  Calculator,
  HardHat,
  Building2,
  Handshake,
} from "lucide-react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";

// 6 bosqich
const steps = [
  {
    title: "Позвонить нам",
    subtitle: "+998 (90) 097-50-00",
    description: "Или оставить заявку через сайт",
    button: "ОСТАВИТЬ ЗАЯВКУ",
    icon: <Headphones size={32} color="#00695f" />,
  },
  {
    title: "БЕСПЛАТНЫЙ ВЫЕЗД",
    subtitle: "ЗАМЕРЩИКА НА ОБЪЕКТ",
    button: "ВЫЗВАТЬ ЗАМЕРЩИКА",
    icon: <Ruler size={32} color="#00695f" />,
  },
  {
    title: "РАСЧЕТ СМЕТЫ",
    subtitle: "И СОГЛАСОВАНИЕ ПРОЕКТА",
    button: "ОСТАВИТЬ ЗАЯВКУ",
    icon: <Calculator size={32} color="#00695f" />,
  },
  {
    title: "ВЫЕЗД ПРОРАБА",
    subtitle: "ДЛЯ ПОДПИСАНИЯ ДОГОВОРА",
    button: "ОСТАВИТЬ ЗАЯВКУ",
    icon: <HardHat size={32} color="#00695f" />,
  },
  {
    title: "ВЫПОЛНЕНИЕ РЕМОНТНЫХ",
    subtitle: "РАБОТ ПО ДОГОВОРУ",
    button: "ОСТАВИТЬ ЗАЯВКУ",
    icon: <Building2 size={32} color="#00695f" />,
  },
  {
    title: "УТВЕРЖДЕНИЕ И СДАЧА",
    subtitle: "ОБЪЕКТА ЗАКАЗЧИКУ",
    button: "ОСТАВИТЬ ЗАЯВКУ",
    icon: <Handshake size={32} color="#00695f" />,
  },
];

export default function RenovationSteps() {
  return (
    <div id="process" className="mt-18 text-white max-w-[1420px] mx-auto px-4 py-12">
      <Box sx={{ display: "flex", flexWrap: "wrap", p: 4 }}>
        {/* Chap tomondagi rasm va matn */}
        <Box
          sx={{
            width: { xs: "100%", md: "35%" },
            minHeight: 400,
            backgroundImage: `url(${Img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: 2,
            p: 3,
            mb: { xs: 4, md: 0 },
            color: "#fff",
          }}
        >
          <Typography variant="h5" className="text-3xl" color="#00B2B2">
            ПОСМОТРИТЕ <br /> ПРОСТУЮ СХЕМУ ИЗ
          </Typography>
          <Typography
            variant="h2"
            color="#00B2B2"
            sx={{ fontWeight: "bold", mt: 2 }}
          >
            6 ЭТАПОВ
            <br />
            КАК МЫ БУДЕМ
            <br />
            ДЕЛАТЬ ВАШ
            <br />
            РЕМОНТ
          </Typography>
        </Box>

        {/* O‘ng tomonda 6 bosqichli karta */}
        <Grid container spacing={2} sx={{ width: { xs: "100%", md: "65%" } }}>
          {steps.map((step, idx) => (
            <Grid item xs={12} md={6} key={idx}>
              <Card sx={{ height: "100%", borderRadius: 3, p: 2 }}>
                <CardContent>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    {step.icon}
                    <Typography data-aos="fade-right" variant="h6" sx={{ ml: 2 }}>
                      {step.title}
                    </Typography>
                  </Box>
                  <Typography data-aos="fade-left" variant="body2" sx={{ mb: 1 }}>
                    {step.subtitle}
                  </Typography>
                  {step.description && (
                    <Typography
                      variant="caption"
                      display="block"
                      sx={{ mb: 1 }}
                    >
                      {step.description}
                    </Typography>
                  )}
                  <Button
                    variant="outlined"
                    sx={{
                      borderColor: "#00695f",
                      color: "#00695f",
                      textTransform: "none",
                      mt: 1,
                    }}
                  >
                    {step.button}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
