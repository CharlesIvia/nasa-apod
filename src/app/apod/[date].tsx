import { ActivityIndicator, StyleSheet, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { useLocalSearchParams } from "expo-router";
import ApodListItem from "../../components/ApodListItem";
import { Apod } from "../../types/types";
import { getApod } from "../../api/apods";

const ApodDetails = () => {
  const { date } = useLocalSearchParams();
  const [apod, setApod] = useState<Apod>(null);

  console.log(date);

  useEffect(() => {
    getApod(date).then(setApod);

    console.log(apod);
  }, [date]);

  if (!apod) {
    return <ActivityIndicator />;
  }

  return (
    <ScrollView  >
      <ApodListItem apod={apod} />
      <Text style={styles.text}>{apod.explanation}</Text>
    </ScrollView>
  );
};

export default ApodDetails;

const styles = StyleSheet.create({
  text: {
    padding: 15,
    backgroundColor: "white",
    lineHeight: 22,
    fontSize: 16,
    maxWidth: 500,
    width: "100%",
    alignSelf: "center",
  },
});
