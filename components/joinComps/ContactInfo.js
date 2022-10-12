import { Grid, TextField, Typography } from "@mui/material";

const ContactInfo = ({formik}) => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography variant="h5" sx={{ paddingLeft: 1, paddingTop: 1, color: '#000000' }}>
                    Contact Information
                </Typography>
            </Grid>


            <Grid item xs={12} md={6} sx={{ p: 1 }}>
                <TextField
                    fullWidth
                    variant='outlined'
                    id="phone"
                    name="phone"
                    label="Phone Number"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                    helperText={formik.touched.phone && formik.errors.phone}
                    onBlur={formik.handleBlur}
                />
            </Grid>

            <Grid item xs={12} md={6} sx={{ p: 1 }}>
                <TextField
                    fullWidth
                    variant='outlined'
                    id="phone2"
                    name="phone2"
                    label="Secondary Phone Number"
                    value={formik.values.phone2}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
            </Grid>

            <Grid item xs={12} md={6} sx={{ p: 1 }}>
                <TextField
                    fullWidth
                    variant='outlined'
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    onBlur={formik.handleBlur}
                />
            </Grid>

            <Grid item xs={12} md={6} sx={{ p: 1 }}>
                <TextField
                    fullWidth
                    variant='outlined'
                    id="email"
                    name="email"
                    label="Confirm Email Address"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    onBlur={formik.handleBlur}
                />
            </Grid>
        </Grid>
    );
}

export default ContactInfo;