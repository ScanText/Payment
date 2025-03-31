import React, { useState } from "react";
import { Container, TextField, MenuItem, Button, Paper, Typography } from "@mui/material";

// Список кодов
const codes = [
  "J7F8-X9M1-Z3BQ-LK2N", "TR4P-LV8X-KD1Q-YG7A", "QW9Z-M2C3-XR8L-HJ5T",
  "AF3B-NX0T-PQ5K-ZL9R", "LM2P-V7QT-WX6N-BA3E", "XZ1K-LQ9M-NT7P-YU3D",
  "HJ5Q-KX8L-VTR3-NM1P", "PK2Y-Z7QT-HF6L-DR1X", "NF8X-YL2C-WT5Q-KM3Z",
  "DL7P-XT9K-VQ1Y-NC6B", "TY9K-WR3L-HX2P-BQ7Z", "MK6L-PX8C-ZN1T-YR2Q",
  "BR5X-VL7K-TQ9P-HC3N", "RC9Q-WT3Y-XM1L-PK7V", "KF2X-NL8Q-TR1P-ZW5C"
];

const networks = ["Ethereum", "Binance Smart Chain", "Polygon", "Solana"];
const cryptocurrencies = ["Bitcoin", "Ethereum", "USDT", "BNB"];

const CryptoForm = () => {
  const [email, setEmail] = useState("");
  const [network, setNetwork] = useState("");
  const [crypto, setCrypto] = useState("");
  const [code, setCode] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Выбор случайного кода
    const randomCode = codes[Math.floor(Math.random() * codes.length)];
    
    // Устанавливаем код в стейт
    setCode(randomCode);
  };

  return (
    <Container maxWidth="sm" sx={{ display: "flex", justifyContent: "center", height: "100vh", alignItems: "center", backgroundColor: "#f5f5f5" }}>
      <Paper elevation={3} sx={{ padding: 3, width: "100%", maxWidth: 400, textAlign: "center", backgroundColor: "#ffffff" }}>
        <Typography variant="h6" gutterBottom>
          Заполните форму
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField 
            fullWidth 
            label="Email" 
            variant="outlined" 
            margin="normal" 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          
          <TextField 
            select 
            fullWidth 
            label="Выбор сети" 
            variant="outlined" 
            margin="normal" 
            value={network} 
            onChange={(e) => setNetwork(e.target.value)} 
            required
          >
            {networks.map((net) => (
              <MenuItem key={net} value={net}>
                {net}
              </MenuItem>
            ))}
          </TextField>
          
          <TextField 
            select 
            fullWidth 
            label="Выбор криптовалюты" 
            variant="outlined" 
            margin="normal" 
            value={crypto} 
            onChange={(e) => setCrypto(e.target.value)} 
            required
          >
            {cryptocurrencies.map((coin) => (
              <MenuItem key={coin} value={coin}>
                {coin}
              </MenuItem>
            ))}
          </TextField>

          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}>
            Получить код-пароль
          </Button>
        </form>

        {code && (
          <Typography variant="h6" color="primary" sx={{ marginTop: 2, fontWeight: "bold" }}>
            Ваш код: {code}
          </Typography>
        )}
      </Paper>
    </Container>
  );
};

export default CryptoForm;
