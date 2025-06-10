# 📶 Wi-Fi Detector App (React Native + Expo)

A simple and responsive Wi-Fi status detector app built using **React Native with Expo (JS template)**. It displays real-time network information and shows whether the device is:

- ✅ Connected to Wi-Fi with Internet
- ⚠️ Connected to Wi-Fi but **no Internet**
- ❌ Not connected to any Wi-Fi network

---

## 📱 Features

- 🔄 Auto-refresh every 5 seconds
- 🎨 Clean UI with color-coded status cards
- 📡 Uses Expo's `expo-network` to check:
  - Network type (Wi-Fi, cellular, none)
  - Internet availability
- 💡 Built 100% with Expo — no need to eject!

---

## 🛠️ Tech Stack

- **React Native (JS)**
- **Expo**
- **expo-network** – to fetch network and internet status
- **@expo/vector-icons** – for Wi-Fi icons

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/wifi-detector-app.git
cd wifi-detector-app

2. Install dependencies
npm install

3. Start the project
Edit
npx expo start
Scan the QR code with the Expo Go app on your device.

📦 Install Dependencies
Make sure these Expo packages are installed:
npx expo install expo-network @expo/vector-icons


📂 File Structure

wifi-detector-app/
├── App.js
├── assets/
├── package.json
├── ...


🙌 Author
Built with ❤️ by Nigam Subedi

🪄 Future Ideas
Manual refresh button

Dark mode toggle

Show list of nearby Wi-Fi networks (if permissions/API allow)

