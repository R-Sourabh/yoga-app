import * as React from "react";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FormControl, FormLabel, Radio, RadioGroup } from "@mui/material";
import {
  AccessibilityRounded,
  ConstructionOutlined,
} from "@mui/icons-material";
const theme = createTheme();

export default function SignIn() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [age, setAge] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [slot, setSlot] = React.useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    const baseUrl = window.location.protocol + "//" + window.location.host;
    console.log(baseUrl);

    await axios
      .post(`${baseUrl}/register`, {
        name,
        email,
        age,
        gender,
        phone,
        slot,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <AccessibilityRounded />
          </Avatar>
          <Typography component="h1" variant="h5">
            Yoga
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="age"
              label="Age"
              name="name"
              value={age}
              onChange={(event) => setAge(event.target.value)}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="phone"
              label="Contact Number"
              name="phone"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              autoFocus
            />
            <FormControl>
              <FormLabel id="gender-controlled-radio-buttons-group">
                Gender
              </FormLabel>
              <RadioGroup
                sx={{ display: "flex", flexDirection: "row" }}
                aria-labelledby="gender-radio-buttons-group-label"
                value={gender}
                onChange={(event) => setGender(event.target.value)}
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
            <FormControl>
              <FormLabel id="slot-controlled-radio-buttons-group">
                Time Slot
              </FormLabel>
              <RadioGroup
                sx={{ display: "flex", flexDirection: "row" }}
                aria-labelledby="slot-radio-buttons-group-label"
                value={slot}
                onChange={(event) => setSlot(event.target.value)}
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="6-7AM"
                  control={<Radio />}
                  label="6-7AM"
                />
                <FormControlLabel
                  value="7-8AM"
                  control={<Radio />}
                  label="7-8AM"
                />
                <FormControlLabel
                  value="8-9AM"
                  control={<Radio />}
                  label="8-9AM"
                />
                <FormControlLabel
                  value="5-6PM"
                  control={<Radio />}
                  label="5-6PM"
                />
              </RadioGroup>
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
