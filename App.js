import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";
import * as Network from "expo-network";
import { MaterialIcons } from "@expo/vector-icons";

export default function App() {
  const [wifiStatus, setWifiStatus] = useState(null);
  const [isInternetReachable, setIsInternetReachable] = useState(null);

  useEffect(() => {
    checkWifiStatus();

    const interval = setInterval(() => {
      checkWifiStatus();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const checkWifiStatus = async () => {
    const networkState = await Network.getNetworkStateAsync();
    setWifiStatus(networkState.type === Network.NetworkStateType.WIFI);
    setIsInternetReachable(networkState.isInternetReachable);
  };

  const getStatusUI = () => {
    if (wifiStatus === null || isInternetReachable === null) {
      return <ActivityIndicator size="large" color="#333" />;
    }

    if (!wifiStatus) {
      return (
        <View style={[styles.card, styles.red]}>
          <MaterialIcons name="wifi-off" size={50} color="#fff" />
          <Text style={styles.statusText}>Not connected to Wi-Fi</Text>
        </View>
      );
    }

    if (wifiStatus && !isInternetReachable) {
      return (
        <View style={[styles.card, styles.orange]}>
          <MaterialIcons name="wifi" size={50} color="#fff" />
          <Text style={styles.statusText}>
            Connected to Wi-Fi, but no Internet
          </Text>
        </View>
      );
    }

    return (
      <View style={[styles.card, styles.green]}>
        <MaterialIcons name="wifi" size={50} color="#fff" />
        <Text style={styles.statusText}>Connected to Wi-Fi with Internet</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>📡 Wi-Fi Detector</Text>
      {getStatusUI()}
      <Text style={styles.note}>Auto-refreshes every 5 seconds</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e5e5e5",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  header: {
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 30,
    color: "#333",
  },
  card: {
    width: "90%",
    borderRadius: 16,
    padding: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  statusText: {
    color: "#fff",
    fontSize: 18,
    marginTop: 15,
    textAlign: "center",
    fontWeight: "600",
  },
  red: {
    backgroundColor: "#d9534f",
  },
  orange: {
    backgroundColor: "#f0ad4e",
  },
  green: {
    backgroundColor: "#5cb85c",
  },
  note: {
    fontSize: 14,
    marginTop: 20,
    color: "#666",
  },
});
