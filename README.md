# sls-mail-sender
It's simple gmail sender by Serverless framework
with Typescript, Node, AWS Lambda, nodemailer.

## Usage
### 1. Prefare AWS Account for Serverless Framework
https://github.com/rien1026/document/blob/master/ServerlessWithAWS.md
### 2. Config gmail for access
```
```
### 3. Install Serverless Framework
```
npm install -g serverless
```
### 4. Install Packages
```
npm i
```
### 5. Fill Environment Values
```
vi .env

# MAIL_CONFIG
MAIL_PORT = 587
MAIL_HOST = smtp.gmail.com
MAIL_USER = [USER_ID]@gmail.com
MAIL_PASSWORD = [USER_PW]
```
### 6. Deploy
```
sls deploy
```
### 7. Usage
```
METHOD : POST 
URL : https://[your-amazon-lambda-endpoint]/dev/mails
Body : 
 - to
 - subject
 - html
```
#### Postman Example
