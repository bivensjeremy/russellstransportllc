export default function handler (req, res) {
    
    const HOST = process.env.NEXT_PUBLIC_HOST
    const PASS = process.env.NEXT_PUBLIC_PASS
    const USER = process.env.NEXT_PUBLIC_USER

    //console.log(upload.single('dispatchFile'))

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
        from:     USER,
        replyTo: req.body.email,
        to:       'info@russellstransportllc.com',
        subject: `Dispatch Request`,
        // attachments: [{
        //     filename: 'IMG_5950.jpg',
        //     path: 'public/images/transport/IMG_5950.jpg',
        // }],
        html:   `
<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${req.body.subject}</title>
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
                                        <th colspan="2" class="headerInfo">Customer Information</th>
                                    </tr>
                                    <tr>
                                        <th>First Name:</th>
                                        <td>${req.body.firstName}</td>
                                    </tr>
                                    <tr>
                                        <th>Last Name:</th>
                                        <td>${req.body.lastName}</td>
                                    </tr>
                                    <tr>
                                        <th>Company:</th>
                                        <td>${req.body.companyName}</td>
                                    </tr>
                                    <tr>
                                        <th>Email:</th>
                                        <td>${req.body.email}</td>
                                    </tr>
                                    <tr>
                                        <th>Phone:</th>
                                        <td>${req.body.phone}</td>
                                    </tr>
                                    <tr>
                                        <th colspan="2" class="headerInfo">Address Information</th>
                                    </tr>
                                    <tr>
                                        <th>Street:</th>
                                        <td>${req.body.streetAddress}</td>
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
                                        <th colspan="2" class="headerInfo">Dispatch Request Information</th>
                                    </tr>
                                    <tr>
                                        <th>Trailer Type:</th>
                                        <td>${req.body.trailerType}</td>
                                    </tr>
                                    <tr>
                                        <th>Freight Guard Reports?:</th>
                                        <td>${req.body.freightGuard}</td>
                                    </tr>
                                    <tr>
                                        <th>Region?:</th>
                                        <td>${req.body.region}</td>
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
</html>` 
        
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