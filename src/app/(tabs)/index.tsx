import { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, FlatList } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import ApodListItem from "../../components/ApodListItem";
import { Apod } from "../../types/types";
import { getApods } from "../../api/apods";
import FullScreenImage from "../../components/FullScreenImage";

export default function Home() {
  const [apods, setApods] = useState<Apod[]>([]);
  const [activePicture, setActivePicture] = useState<string>(null);

  useEffect(() => {
    getApods().then(setApods);
  }, []);

  if (!apods.length) {
    return <ActivityIndicator />;
  }

  return (
    <>
      <FlatList
        data={apods}
        renderItem={({ item }) => <ApodListItem apod={item} onImagePress={() => setActivePicture(item.url)} />}
      ></FlatList>
      <FullScreenImage url={activePicture} onClose={() => setActivePicture(null)} />
    </>
  );
}

const styles = StyleSheet.create({});
