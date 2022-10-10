import { ScrollView, StyleSheet, View } from "react-native";
import Header from "./components/header";
import Stories from "./components/Stories";
import posts from "../../data/posts";
import Post from "../components/shared/Post";



function Home() {
    return(
        <ScrollView 
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}
        style={styles.container}>
            <Header />
            <Stories />
            {posts.map(post => <Post key={post.id} post={post} />)}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
    }
})

export default Home