import { Image, Pressable, StyleSheet, Text, View, GestureResponderEvent } from "react-native";
import { Link } from "expo-router";
import { Apod } from "../types/types";

type ApodListItemProps = {
  apod: Apod;
  onImagePress?: (event: GestureResponderEvent) => void;
};

const ApodListItem = ({ apod, onImagePress = () => {} }: ApodListItemProps) => {
  const { title, copyRight, date, url } = apod;

  return (
    <View style={styles.item}>
      <Pressable onPress={onImagePress}>
        <Image source={{ uri: url }} style={styles.image} />
      </Pressable>
      <Text style={styles.date}>{date}</Text>

      <Link href={`/apod/${date}`}>
        <Pressable style={styles.content}>
          <Text style={styles.title}>{title}</Text>

          {copyRight && <Text style={styles.copyRight}>© {copyRight?.trim()?.replaceAll("\n", "")}</Text>}
        </Pressable>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {},
  image: {},
  date: {},
  title: {},
  copyRight: {},
  content: {},
});
