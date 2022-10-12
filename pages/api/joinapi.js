export default function handler (req, res) {
    const HOST = process.env.NEXT_PUBLIC_HOST
    const PASS = process.env.NEXT_PUBLIC_PASS
    const USER = process.env.NEXT_PUBLIC_USER
    
    const nodemailer = require('nodemailer')
    const smtpTrans = nodemailer.createTransport({
        host: HOST,
        port: 465,
        secure: true,
        auth: {
            user: USER,
            pass: PASS
       }
    });
    const mailOpts = {
        from: USER,
        replyTo: req.body.email,
        to: 'info@russellstransportllc.com',
        subject: 'Drive For Us',
        html: 
        `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Drive For Us Form</title>
</head>

<body>
    <table role="presentation" class="body">
        <tr>
            <td>
                <div class="content">
                    <!-- START CENTERED WHITE CONTAINER -->
                    <table role="presentation" class="whiteContainer">
                        <!-- START MAIN CONTENT AREA -->
                        <tr>
                            <td class="wrapper">
                                <table role="presentation" >
                                    <tr>
                                        <th colspan="2" class="headerInfo">Personal Information</th>
                                    </tr>
                                    <tr>
                                        <th>Full Name:</th>
                                        <td>${req.body.firstName} ${req.body.middleInitial} ${req.body.lastName} ${req.body.suffix}</td>
                                    </tr>
                                    <tr>
                                        <th>First Name:</th>
                                        <td>${req.body.firstName}</td>
                                    </tr>
                                    <tr>
                                        <th>Middle Initial:</th>
                                        <td>${req.body.middleInitial}</td>
                                    </tr>
                                    <tr>
                                        <th>Last Name:</th>
                                        <td>${req.body.lastName}</td>
                                    </tr>
                                    <tr>
                                        <th>Suffix:</th>
                                        <td>${req.body.suffix}</td>
                                    </tr>

                                    <tr>
                                        <th colspan="2" class="headerInfo">Address Information</th>
                                    </tr>
                                    <tr>
                                        <th>Full Address:</th>
                                        <td>${req.body.address1}, ${req.body.address2}, ${req.body.city}, ${req.body.state}, ${req.body.zip}</td>
                                    </tr>
                                    <tr>
                                        <th>Street:</th>
                                        <td>${req.body.address1}</td>
                                    </tr>
                                    <tr>
                                        <th>Address 2:</th>
                                        <td>${req.body.address2}</td>
                                    </tr>
                                    <tr>
                                        <th>City:</th>
                                        <td>${req.body.city}</td>
                                    </tr>
                                    <tr>
                                        <th>State:</th>
                                        <td>${req.body.state}</td>
                                    </tr>
                                    <tr>
                                        <th>Zip:</th>
                                        <td>${req.body.zip}</td>
                                    </tr>

                                    <tr>
                                        <th colspan="2" class="headerInfo">Contact Information</th>
                                    </tr>
                                    <tr>
                                        <th>Primary Phone:</th>
                                        <td>${req.body.phone}</td>
                                    </tr>
                                    <tr>
                                        <th>Alt Phone:</th>
                                        <td>${req.body.phone2}</td>
                                    </tr>
                                    <tr>
                                        <th>Email Address:</th>
                                        <td>${req.body.email}</td>
                                    </tr>

                                    <tr>
                                        <th colspan="2" class="headerInfo">Driving Experience</th>
                                    </tr>
                                    <tr>
                                        <th>Driving Experience:</th>
                                        <td>${req.body.drivingExp}</td>
                                    </tr>
                                    <tr>
                                        <th>Carriers worked for in the last 3 years:</th>
                                        <td>${req.body.carriers}</td>
                                    </tr>
                                    <tr>
                                        <th>Accidents in the last 12 months:</th>
                                        <td>${req.body.accidents}</td>
                                    </tr>
                                    <tr>
                                        <th>Violations cited for in the last 12 months:</th>
                                        <td>${req.body.violations}</td>
                                    </tr>
                                    <tr>
                                        <th>Referred By:</th>
                                        <td>${req.body.referred}</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <!-- END MAIN CONTENT AREA -->
                    </table>
                    <!-- END CENTERED WHITE CONTAINER -->
                </div>
            </td>
        </tr>
    </table>
</body>

    <style>
        body {
            /* background-color: black; */
            background-color: #dfdfdf;
            font-family: sans-serif;
            font-size: 14px;
            line-height: 1.4;
            margin: 0; 
            padding: 0;
        }
        table {
            border: 0;
            width: 100%;
        }
        th {
            text-align: end;
        }
        .content {
            box-sizing: border-box; 
            display: block; 
            margin: 0 auto; 
            max-width: 75vw; 
            padding: 10px;
        }
        .whiteContainer {
            border-left-width: 0;
            border-radius: 9px;
            border-right-width: 0;
            border-collapse: separate; 
            mso-table-lspace: 0pt; 
            mso-table-rspace: 0pt; 
            background: #ffffff;
            width: 100%;
        }
        .wrapper {
            padding: 20px;
        }
        .headerInfo {
            font-size: x-large;
            text-align: center;
        }
        
        p {
            margin-bottom: 15px;
        }
    </style>
</html>
        `
    }
    smtpTrans.sendMail(mailOpts, function(err, success) {
        if (err) {
            res.json({
                status: 'fail'
            })
        } else if (success) {
            res.json({
                status: 'success'
            })
        }
    });
};