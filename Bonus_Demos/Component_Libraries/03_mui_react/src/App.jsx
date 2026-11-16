import { useState } from "react";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import theme from "./theme.js";

function createPlan(focus, minutes) {
  if (minutes < 20) {
    return `Spend ${minutes} minutes completing one small ${focus} task.`;
  }

  if (minutes < 50) {
    return `Work on ${focus} for 25 minutes, then use the remaining time to review.`;
  }

  return `Complete two 25-minute ${focus} sessions with a 5-minute break between them.`;
}

function App() {
  const [focus, setFocus] = useState("");
  const [minutes, setMinutes] = useState("");
  const [feedback, setFeedback] = useState({
    severity: "info",
    message: "Your recommended plan will appear here.",
  });

  function handleSubmit(event) {
    event.preventDefault();
    const cleanFocus = focus.trim();
    const numericMinutes = Number(minutes);

    if (!cleanFocus || numericMinutes < 1 || numericMinutes > 240) {
      setFeedback({
        severity: "warning",
        message: "Enter a study focus and a time from 1 to 240 minutes.",
      });
      return;
    }

    setFeedback({
      severity: "success",
      message: createPlan(cleanFocus, numericMinutes),
    });
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box component="header" sx={{ bgcolor: "#17324d", color: "white", borderBottom: 5, borderColor: "secondary.main" }}>
        <Container sx={{ py: 4 }}>
          <Typography variant="overline" sx={{ color: "#9fe3e3", fontWeight: 800 }}>
            Study Sprint
          </Typography>
          <Typography component="h1" variant="h3" sx={{ mt: 0.5 }}>
            Study session planner
          </Typography>
          <Typography variant="h6" sx={{ mt: 1, fontWeight: 400 }}>
            Turn the time you have into one realistic next step.
          </Typography>
        </Container>
      </Box>

      <Container component="main" sx={{ py: { xs: 3, md: 6 } }}>
        <Box sx={{ display: "grid", gap: 4, gridTemplateColumns: { xs: "1fr", lg: "minmax(0, 7fr) minmax(18rem, 5fr)" }, alignItems: "start" }}>
          <Paper component="section" aria-labelledby="planner-title" elevation={2} sx={{ p: { xs: 3, md: 4 }, borderLeft: 6, borderColor: "secondary.main" }}>
            <Typography id="planner-title" component="h2" variant="h4">
              Build a study plan
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 1, mb: 3 }}>
              Choose a focus and enter the number of minutes available.
            </Typography>

            <Stack component="form" spacing={3} onSubmit={handleSubmit} noValidate>
              <TextField
                id="focus-input"
                label="Study focus"
                placeholder="Example: responsive navigation"
                value={focus}
                onChange={(event) => setFocus(event.target.value)}
                fullWidth
              />
              <TextField
                id="minutes-input"
                label="Minutes available"
                placeholder="Example: 45"
                type="number"
                slotProps={{ htmlInput: { min: 1, max: 240, inputMode: "numeric" } }}
                value={minutes}
                onChange={(event) => setMinutes(event.target.value)}
                fullWidth
              />
              <Button type="submit" variant="contained" size="large" sx={{ alignSelf: { sm: "flex-start" } }}>
                Create study plan
              </Button>
              <Alert severity={feedback.severity} variant="outlined" role="status" aria-live="polite">
                {feedback.message}
              </Alert>
            </Stack>
          </Paper>

          <Paper component="aside" aria-labelledby="mui-title" variant="outlined" sx={{ p: 4, bgcolor: "#dcecee", borderColor: "#a8c7ca" }}>
            <Typography variant="overline" color="primary.dark" sx={{ fontWeight: 800 }}>
              Installed library model
            </Typography>
            <Typography id="mui-title" component="h2" variant="h5">
              What MUI supplied
            </Typography>
            <List dense disablePadding sx={{ mt: 1 }}>
              {[
                "React components and component APIs",
                "Theme-aware controls and feedback",
                "Consistent states and visual conventions",
                "An installed dependency maintained outside this project",
              ].map((item) => (
                <ListItem key={item} disableGutters sx={{ py: 0.25 }}>
                  <ListItemText primary={`• ${item}`} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
