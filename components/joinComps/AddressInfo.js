import { Grid, TextField, MenuItem, FormControl, InputLabel, Select, Typography, RadioGroup, FormControlLabel, Radio, FormGroup, Box } from "@mui/material";
import { State }  from 'country-state-city';

const AddressInfo = ({formik}) => {
    const states = State.getStatesOfCountry('US');
    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography variant="h5" sx={{ paddingLeft: 1, paddingTop: 1, color: '#000000' }}>
                    Address Information
                </Typography>
            </Grid>

            <Grid item xs={12} sx={{ padding: 1 }}>
                <TextField
                    fullWidth
                    variant='outlined'
                    name="address1"
                    label='Street Address'
                    value={formik.values.address1}
                    onChange={formik.handleChange}
                    error={formik.touched.address1 && Boolean(formik.errors.address1)}
                    helperText={formik.touched.address1 && formik.errors.address1}
                    onBlur={formik.handleBlur}
                />
            </Grid>

            <Grid item xs={12} sx={{ padding: 1 }}>
                <TextField
                    fullWidth
                    variant='outlined'
                    name="address2"
                    label='Address 2'
                    value={formik.values.address2}
                    onChange={formik.handleChange}
                    error={formik.touched.address2 && Boolean(formik.errors.address2)}
                    helperText={formik.touched.address2 && formik.errors.address2}
                    onBlur={formik.handleBlur}
                />
            </Grid>

            <Grid item xs={12} md={6} sx={{ padding: 1 }}>
                <TextField
                    fullWidth
                    variant='outlined'
                    name="city"
                    label='City'
                    value={formik.values.city}
                    onChange={formik.handleChange}
                    error={formik.touched.city && Boolean(formik.errors.city)}
                    helperText={formik.touched.city && formik.errors.city}
                    onBlur={formik.handleBlur}
                />
            </Grid>

            <Grid item xs={12} md={3} sx={{ padding: 1 }}>
                <TextField
                    fullWidth
                    select
                    variant='outlined'
                    name="state"
                    label='State'
                    value={formik.values.state}
                    onChange={formik.handleChange}
                    error={formik.touched.state && Boolean(formik.errors.state)}
                    helperText={formik.touched.state && formik.errors.state}
                    onBlur={formik.handleBlur}
                >
                    {states.map((states) => (
                        <MenuItem key={states.isoCode} value={states.isoCode}>
                            {states.name}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>

            <Grid item xs={12} md={3} sx={{ padding: 1 }}>
                <TextField
                    fullWidth
                    variant='outlined'
                    name="zip"
                    label='Zip'
                    value={formik.values.zip}
                    onChange={formik.handleChange}
                    error={formik.touched.zip && Boolean(formik.errors.zip)}
                    helperText={formik.touched.zip && formik.errors.zip}
                    onBlur={formik.handleBlur}
                />
            </Grid>
        </Grid> 
    );
}

export default AddressInfo;