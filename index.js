const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const app = express()

app.use(express.static(path.join(__dirname, 'facebook-app-v1/build')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/PYMForm', (req, res) => {
  nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `
    <h3>These will be the details</h3>
    <ul>
    <li>Name: ${req.body.name}</li>
    <li>Email: ${req.body.email}</li>
    <li>Trim you want: ${req.body.trimWanted}</li>
    <li>Intrest in lease offer: ${req.body.leaseWanted}</li>
    <li>Intrest in finance offer: ${req.body.financeWanted}</li>
    <li>Intrest in cash offer: ${req.body.cashWanted}</li>
    <li>Intrest in military offer: ${req.body.militaryWanted}</li>
    <li>Intrest in college offer: ${req.body.collegeWanted}</li>
    <li>Want to test drive: ${req.body.testDriveWanted}</li>
    <li>You have a trade-in: ${req.body.tradeWanted}</li>
    <li>You need financing: ${req.body.financeNeeded}</li>
    </ul>`

    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      auth: {
        user: 'anoobus257@gmail.com',
        pass: 'tiger2579'
      }
    })

    let mailOptions = {
      from: 'test@testaccount.com',
      to: req.body.email,
      replyTo: 'teest@testaccount.com',
      subject: 'New Message',
      text: req.body.name,
      html: htmlEmail
    }
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return console.log(err)
      }
      console.log('Message sent: ', info.message)
      console.log('Message URL: ', nodemailer.getTestMessageURL(info))
    })
  })
})



app.post('/contact-form', (req, res) => {
  nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `
    <h3>Contact Details</h3>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
    </ul>`

    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      auth: {
        user: 'anoobus257@gmail.com',
        pass: 'tiger2579'
      }
    })
    let mailOptions = {
      from: 'test@testaccount.com',
      to: req.body.email,
      replyTo: 'test@testaccount.com',
      subject: 'New Message',
      text: req.body.name,
      html: htmlEmail
    }
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return console.log(err)
      }
      console.log('Message sent: ', info.message)
      console.log('Message URL: ', nodemailer.getTestMessageUrl(info))
    })
  })
})


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/facebook-app-v1/build/index.html'))
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
