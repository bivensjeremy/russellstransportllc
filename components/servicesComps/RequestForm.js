import { Cancel, CloudUpload, Verified } from "@mui/icons-material";
import { Box, Button, Checkbox, CircularProgress, Fade, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, Input, InputLabel, LinearProgress, MenuItem, OutlinedInput, Radio, RadioGroup, Select, TextField, Typography } from "@mui/material";
import { State }  from 'country-state-city';
import { useRef, useState } from "react";


const RequestForm = ({formik}) => {
    const states = State.getStatesOfCountry('US');
    const [fileUpload, setfileUpload] = useState(false);
    const [file, setFiles] = useState(null);
    const inputRef = useRef()

    // console.log(file.name)
    return (
        <form onSubmit={formik.handleSubmit}>
        <Grid container marginX='auto' sx={{ width: { xs: '90%', lg: '75%' }, padding: { sm: 1, md: 3 }, backgroundColor: '#FFF', borderRadius: 2 }}>
            <Grid item xs={12} md={6} sx={{ padding: 1 }}>
                <TextField
                    fullWidth
                    variant='outlined'
                    name="firstName"
                    label='First Name'
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                    helperText={formik.touched.firstName && formik.errors.firstName}
                    onBlur={formik.handleBlur}
                />
            </Grid>

            <Grid item xs={12} md={6} sx={{ padding: 1 }}>
                <TextField
                    fullWidth
                    variant='outlined'
                    name="lastName"
                    label='Last Name'
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                    helperText={formik.touched.lastName && formik.errors.lastName}
                    onBlur={formik.handleBlur}
                />
            </Grid>

            <Grid item xs={12} sx={{ padding: 1 }}>
                <TextField
                    fullWidth
                    variant='outlined'
                    name="companyName"
                    label='Company Name (Optional)'
                    value={formik.values.companyName}
                    onChange={formik.handleChange}
                    error={formik.touched.companyName && Boolean(formik.errors.companyName)}
                    helperText={formik.touched.companyName && formik.errors.companyName}
                    onBlur={formik.handleBlur}
                />
            </Grid>

            <Grid item xs={12} md={6} sx={{ padding: 1 }}>
                <TextField
                    fullWidth
                    variant='outlined'
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    onBlur={formik.handleBlur}
                />
            </Grid>

            <Grid item xs={12} md={6} sx={{ padding: 1 }}>
                <TextField
                    fullWidth
                    variant='outlined'
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
                    variant='outlined'
                    name="streetAddress"
                    label='Street Address'
                    value={formik.values.streetAddress}
                    onChange={formik.handleChange}
                    error={formik.touched.streetAddress && Boolean(formik.errors.streetAddress)}
                    helperText={formik.touched.streetAddress && formik.errors.streetAddress}
                    onBlur={formik.handleBlur}
                />
            </Grid>

            <Grid item xs={12} md={6} sx={{ paddingX: 1 }}>
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

            <Grid item xs={12} md={3} sx={{ paddingX: 1 }}>
                <TextField
                    sx={{ backgroundColor: 'white', borderRadius: 1}}
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

            <Grid item xs={12} md={3} sx={{ paddingX: 1, paddingBottom: 5 }}>
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

            <Grid item xs={12} md={4} sx={{ padding: 1, textAlign: 'center' }}>
                {/* <Typography>
                    Trailer Type
                </Typography> */}

                <FormControl fullWidth>
                    <InputLabel>Select Trailer Type</InputLabel>
                    <Select
                        name="trailerType"
                        value={formik.values.trailerType}
                        label="Trailer Typee"
                        onChange={formik.handleChange}
                    >
                        <MenuItem value="Dry Van">Dry Van</MenuItem>
                        <MenuItem value="Flat Bed">Flat Bed</MenuItem>
                        <MenuItem value="Step Deck">Step Deck</MenuItem>
                        <MenuItem value="Reefer">Reefer</MenuItem>
                        <MenuItem value="Other">Other</MenuItem>
                    </Select>
                </FormControl>
            </Grid>

            <Grid item xs={12} sm={4} md={4} sx={{ padding: 1, color: "#616161", textAlign: 'center' }}>
                <Typography>
                    Do You Have Any Freight Guard Reports?
                </Typography>

                <FormControl>
                    <RadioGroup
                        name="freightGuard"
                        value={formik.values.freightGuard}
                        onChange={formik.handleChange}
                    >
                        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="No" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>
            </Grid>

            <Grid item xs={12} sm={4} md={4} sx={{ padding: 1, color: '#616161', textAlign: 'center' }}>
                <Typography>
                    Desired Region(s)
                </Typography>

                <FormControl>
                    <FormGroup>
                        <FormControlLabel 
                            onChange={formik.handleChange}
                            name="region"
                            value="48 States"
                            label="48 States"
                            control={ <Checkbox /> }
                        />
                        <FormControlLabel
                            onChange={formik.handleChange}
                            name="region"
                            value="Northeast"
                            label="Northeast"
                            control={ <Checkbox /> }
                        />
                        <FormControlLabel
                            onChange={formik.handleChange}
                            name="region"
                            value="Southeast"
                            label="Southeast"
                            control={ <Checkbox /> }
                        />
                        <FormControlLabel
                            onChange={formik.handleChange}
                            name="region"
                            value="Southwest"
                            label="Southwest"
                            control={ <Checkbox /> }
                        />
                        <FormControlLabel
                            onChange={formik.handleChange}
                            name="region"
                            value="Midwest"
                            label="Midwest"
                            control={ <Checkbox /> }
                        />
                    </FormGroup>
                </FormControl>
            </Grid>

            {/* <Grid item xs={12} sm={4} md={3} sx={{ padding: 1, color: "#616161", textAlign: 'center' }}>
                <Typography gutterBottom>
                    Upload Carrier Agreement
                </Typography>

                <FormControl>
                    <Button 
                        variant="contained"
                        component="label"
                        fullWidth
                        startIcon={ formik.values.dispatchFile ? <Verified color="success"/> : <CloudUpload /> }   
                    >
                        { formik.values.dispatchFile ? 'File Uploaded' : 'Select File'}
                        <input 
                            hidden
                            name="file"
                            type="file" 
                            id="input"
                            onChange={() => (
                                setFiles(inputRef.current.files[0]),
                                setfileUpload(true),
                                formik.setFieldValue("dispatchFile", inputRef.current.files[0])
                            )}
                            ref={inputRef}
                                // formik.setFieldValue("dispatchFile",  e.target.value),
                                // setfileUpload(true)
                        />
                    </Button>
                
                    { formik.values.dispatchFile ? <Fade in={true} timeout={500}>    
                        <Button 
                            variant="contained"
                            color="error" sx={{ marginY: 1 }}
                            startIcon={ <Cancel /> }
                            onClick={ ()=> {
                                setfileUpload(false)
                                formik.setFieldValue("dispatchFile", "")
                                setFiles(null)
                            }}>
                                Remove File
                        </Button>
                    </Fade> : "" }
                </FormControl>

                { formik.values.dispatchFile ? <Fade in={true} timeout={1000}>
                    <TextField 
                        disabled
                        label="Selected File"
                        value={formik.values.dispatchFile.name}
                        variant="filled" 
                    />
                </Fade> : ''}
            </Grid> */}
            
            <Box sx={{ 
                margin: 'auto', 
                padding: 3,
            }}>
                <Button 
                    variant="contained" 
                    size="large" 
                    type="submit" 
                    fullWidth
                > {formik.isSubmitting ? <CircularProgress size={24} color="secondary" /> : 'Submit'} </Button>
            </Box>

        </Grid> 
        </form>          
    );
}

export default RequestForm;