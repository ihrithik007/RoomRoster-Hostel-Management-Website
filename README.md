# 🏨 RoomRoster: Hostel Management Website

**RoomRoster** is a modern and comprehensive hostel management system designed to streamline student and administrative operations in hostels. From room booking and mess bills to facial recognition attendance and QR-based gate passes, RoomRoster simplifies it all under one responsive web application.

---

## ✨ Key Features

### 👤 Registration & Sign-In
- New users can register to create an account
- Secure login for existing students

### 🛏️ Room Booking
- View available rooms and book based on availability
- Live updates and real-time bookings

### 🍽️ Mess Bills
- View current and past mess bill details
- Track balance and monthly statements

### 🎫 QR-Based Gate Pass
- Submit leave forms to generate gate passes
- Security verifies the QR code at exit points

### 📸 Attendance System
- Face and location verification for attendance
- Automated checks for students on leave
- Easy scan-based attendance system

### 🛠️ Complaint Section
- Raise and track issues related to hostel facilities
- Transparent and updatable complaint status

### 💬 Feedback Module
- Students can share suggestions or reviews
- Direct feedback loop to administration

### 🛠️ Admin Dashboard
- Manage registrations, bookings, leaves, attendance, complaints, and feedback
- Centralized monitoring and control

---

## 🧰 Technologies Used

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js, MongoDB
- **Microservices**: Python (Face Recognition)
- **Authentication & Storage**: MongoDB, JWT
- **Others**: QR Code Generation, Geo-Location API, Facial Recognition

---

## 🚀 Installation & Setup

Follow the steps below to get the project running on your local machine:

---

### 🔁 1. Clone the Repository

```bash
git clone https:https://github.com/ihrithik007/RoomRoster-Hostel-Management-Website.git
cd RoomRoster-Hostel-Management-Website
2. Install the necessary dependencies:
```bash
cd RoomRoster-Hostel-Management-Website
npm install
```
3. Start the server
```bash
npm start
```
Access the application via http://localhost:3000.

Now Setup Backend

1. Install the necessary dependencies:
```bash
cd Backend
npm install
```
2. Start the server
```bash
node index.js
```
Access the application via http://localhost:5000.

Now setup python server for Face recognition.

1. Install the necessary dependencies:
```bash
cd ..
cd Python
pip install -r requirements.txt
```
2. Start the microservice
```bash
python python.py
```

# Configuration
You need to set your MongoDB URL in the `db.js` file located in the Backend folder.

```
const mongouri ="YOUR_MONGO_URL"
```
e.g. -> const mongouri ="mongodb://127.0.0.1:27017/app"
#

## Technologies Used
`NodeJS`,
`ExpressJS`,
`MongoDB`,
`ReactJS`,
`Python`,
`Tailwind`,

# Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

- Fork the repository.
- Create a new branch for your feature/bug fix.
- Make your changes and commit them with descriptive commit messages.
- Push your changes to your forked repository.
- Submit a pull request detailing your changes.

