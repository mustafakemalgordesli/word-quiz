import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import {
    useSafeAreaInsets,
} from 'react-native-safe-area-context';
import data from "../assets/tr.json"

function Home() {
    // console.log(data.words)
    const insets = useSafeAreaInsets();
    return (
        <View
            style={{
                flex: 1,
                alignItems: "center",
                marginVertical: 10,
                paddingTop: insets.top,
                paddingBottom: insets.bottom,
                paddingLeft: insets.left,
                paddingRight: insets.right,
            }}>
            <Text style={styles.text}>English-Turkish Word Quiz</Text>
            <View style={styles.quest}>
                <View>

                </View>
                <View style={{ gap: 10 }}>
                    <Button title="Learn More" style={styles.btn} />
                    <Button title="Learn More" style={styles.btn} />
                </View>
            </View>
            <View style={{ flez: 1, alignItems: "end", width: "100%" }}>
                <TouchableOpacity style={{ width: 160, paddingVertical: 6, marginLeft: "auto", marginRigth: 10, borderWidth: 2, borderRadius: 6 }}><Text style={{ fontSize: 18, textAlign: "center" }}>Next Question</Text></TouchableOpacity>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        fontWeight: '500',
    },
    quest: {
        flex: 1,
        justifyContent: "space-around",
        width: "100%",
        padding: 10,
        marginVertical: 20,
    },
    btn: {
        marginHorizontal: 20,
        padding: 30,
    }
});

export default Home;