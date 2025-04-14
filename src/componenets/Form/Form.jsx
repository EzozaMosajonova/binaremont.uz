import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
} from "@mui/material";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CallRequestForm() {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = (event) => {
    event.preventDefault();

    const token = "8091527756:AAErWWMRg6UTuaI3RIVjiizXhwasqEIhlFQ";
    const chat_id = "6643238247";
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    if (!name.trim() || !phone.trim()) {
      toast.warn("Iltimos, barcha maydonlarni to‘ldiring!");
      return;
    }

    const messageContent = `
Yangi xabar:

Ismi: ${name}
Telefon: ${phone}
`;

    setLoading(true);

    axios
      .post(url, {
        chat_id: chat_id,
        text: messageContent,
      })
      .then(() => {
        toast.success("Xabar muvaffaqiyatli yuborildi!");
        setPhone("");
        setName("");
      })
      .catch((error) => {
        console.error("Xabar yuborishda xatolik:", error);
        toast.error("Xatolik yuz berdi. Iltimos, keyinroq qayta urinib ko‘ring.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div id="form" className="min-h-screen flex flex-col justify-center items-center px-4 py-12 bg-white">
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="text-center mb-8">
        <h1 className="font-bold text-5xl mb-2" data-aos="fade-down">ПЕРЕЗВОНИМ ВАМ И ОТВЕТИМ</h1>
        <Typography variant="h4" color="#146B6B" fontWeight="bold" data-aos="fade-up">
          НА ВСЕ ВАШИ ВОПРОСЫ
        </Typography>
      </div>

      <form data-aos="fade-right"
        className="w-full max-w-md flex flex-col items-center"
        onSubmit={sendMessage}
        id="myform"
      >
        <div className="w-full mb-4">
          <p className="mb-1 text-lg">Номер телефона</p>
          <PhoneInput
            country={"uz"}
            value={phone}
            onChange={(phone) => setPhone(phone)}
            inputStyle={{
              width: "100%",
              height: "55px",
              fontSize: "16px",
            }}
            containerStyle={{ width: "100%" }}
          />
        </div>

        <div className="w-full mb-4">
          <p className="mb-1 text-lg">Ваша имя</p>
          <TextField
            placeholder="John Smith"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            sx={{
              height: 50,
              fontWeight: "bold",
              fontSize: 16,
            }}
          />
        </div>

        <Button
          type="submit"
          variant="contained"
          disabled={loading}
          sx={{
            backgroundColor: "#146B6B",
            width: "100%",
            height: 50,
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          {loading ? "Yuborilmoqda..." : "Отправить"}
        </Button>
      </form>

      <div className="text-center mt-10">
        <Typography
          variant="h3"
          fontWeight="bold"
          data-aos="fade-down"
          sx={{
            fontSize: {
              xs: '24px',  // mobil
              sm: '32px',  // planshet
              md: '40px',  // katta ekran
            },
            textAlign: {
              xs: 'center',
              md: 'left',
            },
          }}
        >
          НУЖНО СРОЧНО? ЗВОНИТЕ:
        </Typography>

        <Typography
          variant="h4"
          fontWeight="bold"
          color="#146B6B"
          mt={1}
          data-aos="fade-up"
          sx={{
            fontSize: {
              xs: '20px',
              sm: '28px',
              md: '36px',
            },
            textAlign: {
              xs: 'center',
              md: 'left',
            },
          }}
        >
          +99890 097 50 00
        </Typography>
      </div>
    </div>
  );
}
