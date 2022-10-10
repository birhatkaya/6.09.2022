import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "react-native-vector-icons";
import FitImage from "./FitImage";
import ReadMore from "@fawazahmed/react-native-read-more";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

function Post({ post }) {
  const [icon, setIcon] = useState("bookmark-outline");


  return (
    <View style={styles.post}>
      <View style={styles.header}>
        <View style={styles.username}>
          <Image
            style={styles.avatar}
            resizeMode="contain"
            source={{ uri: post.user.avatar }}
          />
          <Text style={styles.title}>{post.user.name}</Text>
        </View>
        <Ionicons name="ellipsis-horizontal" style={styles.dots} />
      </View>
      {post.media.map((media) => (
        <FitImage media={media} />
      ))}
      <View style={styles.content}>
        <View style={styles.actions}>
          <View style={styles.icons}>
            <TouchableOpacity>
              <Ionicons
                name="heart-outline"
                style={{ fontSize: 27, marginRight: 15 }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons
                name="chatbubble-outline"
                style={{ fontSize: 24, marginRight: 15 }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="send-outline" style={{ fontSize: 24 }} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Ionicons name='bookmark-outline' style={styles.bookmark}></Ionicons>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.likes}>{post.likes} likes</Text>
        </View>
        <ReadMore
          numberOfLines={2}
          seeMoreStyle={{ color: "#999" }}
          expandOnly={true}
          seeMoreText="more"
        >
          <Text style={styles.user}>{post.user.name}</Text>
          {`  `}
          {post.description}
        </ReadMore>
        <TouchableOpacity>
          <Text style={styles.comments}>View all {post.comment} comment </Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.date}>{dayjs(post.date).fromNow()}</Text>
          <TouchableOpacity>
            <Text style={styles.translation}>See Translation</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 49,
    paddingHorizontal: 15,
    paddingRight: 15,
  },
  username: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    height: 30,
    marginRight: 10,
    width: 30,
    borderRadius: 15,
  },
  dots: {
    fontSize: 16,
    color: "#262626",
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 40,
  },
  icons: {
    flexDirection: "row",
  },
  slider: {
    alignSelf: "center",
  },
  content: {
    paddingHorizontal: 15,
  },
  likes: {
    fontWeight: "bold",
  },
  user: {
    fontWeight: "600",
    marginRight: 10,
  },
  comments: {
    fontWeight: "500",
    paddingVertical: 7,
  },
  date: {
    fontsize: 13,
    opacity: 0.5,
  },
  translation: {
    fontsize: 13,
    fontWeight: "600",
    marginLeft: 8,
  },
  post: {
    marginBottom: 30,
  },
  bookmark: {
    fontSize: 24,
  },
});

export default Post;
