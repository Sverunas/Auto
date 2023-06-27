import { Formik, Form, Field, ErrorMessage } from "formik";
import { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Paper,
  Typography,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  FormHelperText,
  Alert,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import SaveIcon from "@mui/icons-material/Save";
import "dayjs/locale/lt";
//import { expenseValidationSchema } from "../validations/validations";

function AddWorkerForm({ handleSubmit, isLoading, categories, success }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleAccordionChange = () => {
    setIsExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <Accordion expanded={isExpanded} onChange={handleAccordionChange}>
      <AccordionSummary
        expandIcon={isExpanded ? <RemoveIcon /> : <AddIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>ADD WORKER</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h5" gutterBottom>
            Add worker
          </Typography>
          <Formik
            initialValues={{ name: "", amount: "", date: null, category: "" }}
           // validationSchema={expenseValidationSchema}
            onSubmit={handleSubmit}
          >
            {({
              dirty,
              isValid,
              setFieldValue,
              values,
              errors,
              touched,
              setFieldTouched,
            }) => (
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      name="name"
                      label="Name"
                      focused={false}
                      fullWidth
                      required
                      autoComplete="off"
                      error={touched.name && Boolean(errors.name)}
                      helperText={touched.name && errors.name}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                  <Field
                      as={TextField}
                      name="name"
                      label="Surename"
                      focused={false}
                      fullWidth
                      required
                      autoComplete="off"
                      error={touched.name && Boolean(errors.name)}
                      helperText={touched.name && errors.name}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth required>
                      <LocalizationProvider
                        dateAdapter={AdapterDayjs}
                        adapterLocale="lt"
                      >
                        <Field
                         as={TextField}
                         name="spec"
                         label="Specializacija"
                         focused={false}
                         fullWidth
                         required
                         autoComplete="off"
                         error={touched.name && Boolean(errors.name)}
                         helperText={touched.name && errors.name}
                        />
                      </LocalizationProvider>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth required>
                      <InputLabel
                        id="demo-simple-select-label"
                        error={touched.category && Boolean(errors.category)}
                        required
                        label="sadad"
                      >
                        Category
                      </InputLabel>
                      <Field
                        as={Select}
                        name="servisas"
                        labelId="category-label"
                        id="servisas"
                        label="Servisas"
                        InputLabelProps={{ shrink: true }}
                        onChange={(event) => {
                          setFieldValue("category", event.target.value);
                        }}
                        error={touched.category && Boolean(errors.category)}
                      >
                        {categories.map((category) => (
                          <MenuItem
                            value={category.name}>

                            {category.name}
                          </MenuItem>
                        ))}
                      </Field>
                      <FormHelperText sx={{ color: "red" }}>
                        {touched.category && errors.category}
                      </FormHelperText>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <LoadingButton
                      loading={isLoading}
                      loadingPosition="start"
                      type="submit"
                      variant="contained"
                      startIcon={<SaveIcon />}
                      color="primary"
                      disabled={!dirty || !isValid}
                    >
                      Add
                    </LoadingButton>
                  </Grid>
                  <Grid item xs={3}>
                    {success && (
                      <Alert severity="success">Added successfully</Alert>
                    )}
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </Paper>
      </AccordionDetails>
    </Accordion>
  );
}

export default AddWorkerForm;
