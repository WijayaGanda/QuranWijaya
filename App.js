import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import Header from "./components/header";

const API_URL = "https://api.npoint.io/99c279bb173a6e28359c/data";

const App = ({ navigation }) => {
  const [surahList, setSurahList] = useState([]);

  useEffect(() => {
    const fetchSurah = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setSurahList(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchSurah();
  }, []);

  return (
    <View style={{ flex: 1, padding: 12 }}>
      <Header />
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}> Daftar Surah</Text>
      <FlatList
        data={surahList}
        keyExtractor={(item) => String(item.nomor)}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              padding: 15,
              backgroundColor: "#f5f5f5",
              marginVertical: 5,
              borderRadius: 8
            }}
            onPress={() => navigation.navigate("SurahDetail", { nomorSurah: item.nomor })}
          >
            <Text style={{ fontSize: 18 }}>{item.nomor}. ({item.arti} {item.asma})</Text>
            <Text style={{ fontSize: 12 }}>Ayat : {item.ayat} Jenis Surat : {item.type} </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default App;
