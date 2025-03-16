import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import Header from "./components/header";

const SurahDetail = ({ route }) => {
  const { nomorSurah } = route.params;
  const [ayatList, setAyatList] = useState([]);
  const API_URL = `https://api.npoint.io/99c279bb173a6e28359c/surat/${nomorSurah}`;

  useEffect(() => {
    const fetchAyat = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log("API Response:", data); // Debugging: Lihat struktur API

        if (Array.isArray(data)) {
          setAyatList(data); // API sudah berupa array, langsung simpan
        } else {
          console.error("Data ayat tidak dalam format array!");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchAyat();
  }, [nomorSurah]);

  return (
    <View style={{ flex: 1, padding: 20 }}>
        <Header />
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}>Surah {nomorSurah}</Text>
      {ayatList.length === 0 ? (
        <Text style={{ textAlign: "center", marginTop: 20 }}>Loading ayat...</Text>
      ) : (
        <FlatList
          data={ayatList}
          keyExtractor={(item) => String(item.nomor)}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 10, padding: 10, backgroundColor: "#f0f0f0", borderRadius: 8 }}>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}> {item.ar} . {item.nomor}</Text>
              <Text style={{ fontSize: 14, color: "gray" }}>{item.tr.replace(/<[^>]*>/g, "")}</Text>
              <Text style={{ fontSize: 14, fontStyle: "italic" }}>{item.id}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default SurahDetail;
