import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import storiese from '../../../data/storiese';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';

function Stories() {
    return (
        <View style={styles.stories}>
            <ScrollView syle={styles.stories} horizontal={true} showsHorizontalScrollIndicator={false}>
                {storiese.map((story) => (
                    <View key={story.id} story={story}>
                        <LinearGradient colors={['#DE0046', '#F7A34B']} style={styles.cover} >
                            <Image style={styles.foto} source={{ uri: story.user.avatar }} />
                        </LinearGradient>
                        <Text style={{ fontSize: 12, marginHorizontal: 8 }}>{story.user.name} </Text>
                    </View>
                ))}
            </ScrollView>
        </View>

    )
}

const styles = StyleSheet.create({
    stories: {
        borderBottomWidth: 0.5,
        borderBottomColor: '#DADADA',
        paddingBottom: 8
    },
    story: {
        width: 67,
        marginHorizontal: 8,
        borderBottomWidth: 0.5,
    },
    cover: {
        marginHorizontal: 8,
        width: 67,
        height: 67,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5,
    },
    foto: {
        width: 60,
        height: 60,
        borderRadius: 35,
        borderWidth: 2,
        borderColor: '#fff',
    },

})

export default Stories;