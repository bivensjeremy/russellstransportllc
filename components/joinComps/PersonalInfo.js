import { Grid, Typography, TextField, FormControl, InputLabel, Select, MenuItem, Divider } from "@mui/material";

const PersonalInfo = ({formik}) => {
    return (
        <Grid container>
            <Grid item xs={12}>
                        <Typography variant="h5" sx={{ paddingLeft: 1, paddingTop: 1, color: '#000000' }}>
                            Personal Information
                        </Typography>

                        <Divider
                            sx={{ height: 3, borderRadius: 3 }}
                            color="#000000"
                        />
                    </Grid>

                     <Grid item xs={12} md={5} sx={{ p: 1 }}>
                         <TextField
                            fullWidth
                            variant='outlined'
                            id="firstName"
                            name="firstName"
                            label='First Name'
                            value={formik.values.firstName}
                            onChange={formik.handleChange}
                            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                            helperText={formik.touched.firstName && formik.errors.firstName}
                            onBlur={formik.handleBlur}
                        />
                    </Grid>

                    <Grid item xs={12} md={1} sx={{ p: 1 }}>
                        <TextField
                            fullWidth
                            variant='outlined'
                            id="middleInitial"
                            name="middleInitial"
                            label='M.I.'
                            value={formik.values.middleInitial}
                            onChange={formik.handleChange}
                            error={formik.touched.middleInitial && Boolean(formik.errors.middleInitial)}
                            helperText={formik.touched.middleInitial && formik.errors.middleInitial}
                            onBlur={formik.handleBlur}
                        />
                    </Grid>

                    <Grid item xs={12} md={5} sx={{ p: 1 }}>
                        <TextField
                            fullWidth
                            variant='outlined'
                            id="lastname"
                            name="lastName"
                            label='Last Name'
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                            helperText={formik.touched.lastName && formik.errors.lastName}
                            onBlur={formik.handleBlur}
                        />
                    </Grid>

                    <Grid item xs={12} md={1} sx={{ p: 1 }}>
                        <FormControl fullWidth>
                            <InputLabel>Suffix</InputLabel>
                            <Select
                                name="suffix"
                                value={formik.values.suffix}
                                label="suffix"
                                onChange={formik.handleChange}
                                error={formik.touched.subject && Boolean(formik.errors.suffix)}
                                helperText={formik.touched.suffix && formik.errors.suffix}
                                onBlur={formik.handleBlur}
                            >
                                <MenuItem value="Jr.">Jr.</MenuItem>
                                <MenuItem value="Sr.">Sr.</MenuItem>
                                <MenuItem value="2nd">2nd</MenuItem>
                                <MenuItem value="III">III</MenuItem>
                                <MenuItem value="IV">IV</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                 </Grid>
    );
}

export default PersonalInfo;