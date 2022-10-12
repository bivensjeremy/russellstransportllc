import { CircularProgress, Grid, Button, TextField, Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

export default function ContactMeForm({ formik }) {
    return (
            <form onSubmit={formik.handleSubmit}>
                <Grid container>
                     <Grid item xs={12} md={6} sx={{ p: 1 }}>
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

                    <Grid item xs={12} md={6} sx={{ p: 1 }}>
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

                    <Grid item xs={12} sx={{ padding: 1 }}>
                        <TextField 
                            fullWidth
                            select
                            name="subject"
                            value={formik.values.subject}
                            label="Subject"
                            onChange={formik.handleChange}
                            error={formik.touched.subject && Boolean(formik.errors.subject)}
                            helperText={formik.touched.subject && formik.errors.subject}
                            onBlur={formik.handleBlur}
                        >
                            <MenuItem value="Request Freight Shipping Quote">Request Freight Shipping Quote</MenuItem>
                            <MenuItem value="Inquire About Dispatching Services">Inquire About Dispatching Services</MenuItem>
                            <MenuItem value="Join Our Team">Join Our Driving Team</MenuItem>
                            <MenuItem value="Other">Other</MenuItem>
                        </TextField>
                    </Grid>

                    <Grid item xs={12} sx={{ p: 1 }}>
                        <TextField
                            fullWidth
                            variant='outlined'
                            id="message"
                            label="Message"
                            multiline
                            rows={10}
                            value={formik.values.message}
                            onChange={formik.handleChange}
                            error={formik.touched.message && Boolean(formik.errors.message)}
                            helperText={formik.touched.message && formik.errors.message}
                            onBlur={formik.handleBlur}
                        />
                    </Grid>

                    <Box  sx={{ 
                        width: {xs: '100%', md: '30%'}, 
                        margin: 'auto' 
                    }}>
                        <Button 
                            fullWidth
                            variant="contained" 
                            type="submit" 
                            size='large'
                            endIcon={formik.isSubmitting ? '' : <span className="material-icons">send</span> }
                            disabled={formik.isSubmitting}
                        >
                            { formik.isSubmitting ? <CircularProgress size={24} color="secondary" /> : 'Send' }
                        </Button>
                    </Box>
                </Grid>
            </form>
    );
};