import { useEffect, useRef } from "react";
import { StyleSheet, Text, View, Image, Animated } from "react-native";
export function GameCard({ game }) {
  return (
    <View key={game.slug} style={styles.card}>
      <Image source={{ uri: game.image }} style={styles.image} />
      <Text style={styles.title}> {game.Title}</Text>
      <Text style={styles.description}> {game.description}</Text>
      <Text style={styles.score}> {game.score}</Text>
    </View>
  );
}

//Para animar la opacidad a medida que se vean los elementos de la card
export function AnimatedGameCard({ game, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      delay: index * 250,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <GameCard game={game} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
  },
  card: {
    marginBottom: 10,
    borderRadius: 25,
    backgroundColor: "#173540",
    padding: 20,
    marginHorizontal: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#fff",
  },
  description: {
    fontSize: 16,
    color: "#fff",
  },
  score: {
    color: "green",
    fontSize: 20,
    marginTop: 10,
    fontWeight: "bold",
  },
});
