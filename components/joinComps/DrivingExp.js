import { Grid, Typography, FormControl, Select, InputLabel, MenuItem, TextField, Divider } from "@mui/material";

const DrivingExp = ({formik}) => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography variant="h5" sx={{ paddingLeft: 1, paddingTop: 1, color: '#000000' }}>
                    Tell Us About Your Experience
                </Typography>

                <Divider
                    sx={{ height: 3, borderRadius: 3 }}
                    color="#000000"
                />
            </Grid>

            <Grid item xs={12} sx={{ p: 1 }}>
                <TextField 
                    fullWidth
                    select
                    name="drivingExp"
                    value={formik.values.drivingExp}
                    label="How much driving experience have you had?"
                    onChange={formik.handleChange}
                    error={formik.touched.drivingExp && Boolean(formik.errors.drivingExp)}
                    helperText={formik.touched.drivingExp && formik.errors.drivingExp}
                    onBlur={formik.handleBlur}
                >
                    <MenuItem value="None">None</MenuItem>
                    <MenuItem value="< 6 months">Less than 6 Months</MenuItem>
                    <MenuItem value=">6mo <1yr">Greater than 6 Months, but less than 1 year</MenuItem>
                    <MenuItem value="1-3yrs">Between 1-3 Years</MenuItem>
                    <MenuItem value="> 3yrs">More than 3 years</MenuItem>
                </TextField>
            </Grid>

            <Grid item xs={12} sx={{ p: 1 }}>
                <TextField 
                    fullWidth
                    select
                    name="carriers"
                    value={formik.values.carriers}
                    label="How many carriers have you worked for in the last 3 years?"
                    onChange={formik.handleChange}
                    error={formik.touched.carriers && Boolean(formik.errors.carriers)}
                    helperText={formik.touched.carriers && formik.errors.carriers}
                    onBlur={formik.handleBlur}
                >
                    <MenuItem value="None">None</MenuItem>
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="3">3</MenuItem>
                    <MenuItem value="4">4</MenuItem>
                    <MenuItem value="More than 4">More than 4</MenuItem>
                </TextField>
            </Grid>

            <Grid item xs={12} sx={{ p: 1 }}>
                <TextField 
                    fullWidth
                    select
                    name="accidents"
                    value={formik.values.accidents}
                    label="How many accidents have you been in during the last 12 months? "
                    onChange={formik.handleChange}
                    error={formik.touched.accidents && Boolean(formik.errors.accidents)}
                    helperText={formik.touched.accidents && formik.errors.accidents}
                    onBlur={formik.handleBlur}
                >
                    <MenuItem value="None">None</MenuItem>
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="3">3</MenuItem>
                    <MenuItem value="4">4</MenuItem>
                    <MenuItem value="More than 4">More than 4</MenuItem>
                </TextField>
            </Grid>

            <Grid item xs={12} sx={{ p: 1 }}>
                <TextField 
                    fullWidth
                    select
                    name="violations"
                    value={formik.values.violations}
                    label="How many violations have you been cited for in the last 12 months?"
                    onChange={formik.handleChange}
                    error={formik.touched.violations && Boolean(formik.errors.violations)}
                    helperText={formik.touched.violations && formik.errors.violations}
                    onBlur={formik.handleBlur}
                >
                    <MenuItem value="None">None</MenuItem>
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="3">3</MenuItem>
                    <MenuItem value="4">4</MenuItem>
                    <MenuItem value="More than 4">More than 4</MenuItem>
                </TextField>
            </Grid>

            <Grid item xs={12} sx={{ p: 1 }}>
                <TextField
                    fullWidth
                    variant='outlined'
                    id="referred"
                    name="referred"
                    label="Referred By"
                    value={formik.values.referred}
                    onChange={formik.handleChange}
                    error={formik.touched.referred && Boolean(formik.errors.referred)}
                    helperText={formik.touched.referred && formik.errors.referred}
                    onBlur={formik.handleBlur}
                />
            </Grid>
        </Grid>
    );
}

export default DrivingExp;