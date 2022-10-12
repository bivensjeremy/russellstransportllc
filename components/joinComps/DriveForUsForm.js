import { FormControl, Grid, InputLabel, MenuItem, Select, TextField, Box, Button, Typography, CircularProgress } from "@mui/material";
import AddressInfo from "./AddressInfo";
import ContactInfo from "./ContactInfo";
import DrivingExp from "./DrivingExp";
import PersonalInfo from "./PersonalInfo";

const DriveForUsForm = ({formik}) => {
    return (
        <form onSubmit={formik.handleSubmit}>
            <Grid 
                container
                marginX='auto'
                sx={{
                    backgroundColor: '#FFF',
                    borderRadius: 2
                }}
            >
                <PersonalInfo formik={formik} />

                <AddressInfo formik={formik} />

                <ContactInfo formik={formik} />

                <DrivingExp formik={formik} />

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
                        { formik.isSubmitting ? <CircularProgress size={24} color="secondary" /> : 'Submit' }
                    </Button>
                </Box>
            </Grid>
        </form>
    );
}

export default DriveForUsForm;