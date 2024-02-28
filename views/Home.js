import { StyleSheet, Text, View, Button, TouchableOpacity, Pressable } from 'react-native';
import {
    useSafeAreaInsets,
} from 'react-native-safe-area-context';
import data from "../assets/tr.json"
import { useState, useEffect } from "react"

function Home() {
    const generateThreeDistinctNumbers = (excludedNumber) => {
        var numbers = [];

        while (numbers.length < 3) {
            var randomNumber = Math.floor(Math.random() * 1000) + 1;
            if (randomNumber !== excludedNumber && !numbers.includes(randomNumber)) {
                numbers.push(randomNumber);
            }
        }

        return numbers;
    }

    const words = data.words

    const getRandomQuest = () => {
        SetCheckedOption(null)
        const numb = Math.floor(Math.random() * 999)
        SetQuest({
            ...words[numb],
        })
        const arr = [...generateThreeDistinctNumbers(numb + 1), numb + 1]
        SetOptions(arr.sort(() => Math.random() - 0.5))
    }

    const handleAnswer = (e) => {
        SetCheckedOption(e)
    }

    const insets = useSafeAreaInsets();
    const [quest, SetQuest] = useState({})
    const [options, SetOptions] = useState([])
    const [checkedOption, SetCheckedOption] = useState(null)

    useEffect(() => {
        SetCheckedOption(null)
        getRandomQuest()
    }, [])

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
                <View style={{ flex: 1, backgroundColor: "#d3d3d3", justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ textAlign: "center", fontSize: 24 }}>{quest.englishWord}</Text>
                </View>
                <View style={{ gap: 15, marginVertical: 20 }}>
                    {
                        options.map(item => <TouchableOpacity key={item} onPress={() => handleAnswer(item)} style={[styles.btn, checkedOption ? checkedOption == item ? item == quest?.rank ? styles.successBtn : styles.dangerBtn : "" : ""]}><Text style={{ fontSize: 18, color: "white" }}>{words[item - 1].targetWord}</Text></TouchableOpacity>)
                    }
                </View>
            </View>
            <View style={{ alignItems: "end", width: "100%", padding: 10 }}>
                <TouchableOpacity onPress={getRandomQuest} style={{ width: 160, paddingVertical: 3, marginLeft: "auto", marginRigth: 10, borderWidth: 2, borderRadius: 6 }}><Text style={{ fontSize: 18, textAlign: "center" }}>Next Question</Text></TouchableOpacity>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        paddingVertical: 10,
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
        heigth: 240,
        paddingVertical: 5,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#48A8ED",
        borderRadius: 2,
    },
    dangerBtn: {
        backgroundColor: "red"
    },
    successBtn: {
        backgroundColor: "green"
    }
});

export default Home;