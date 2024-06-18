import React from "react"
import {Text, View, StyleSheet, TouchableWithoutFeedback} from "react-native"
import moment from "moment"
import {Icon} from "react-native-vector-icons/FontAwesome6"

export default props => {
    return(
        <View style={StyleSheet.container}>
        <TouchableWithoutFeedback>
        <View style={styles.checkContainer}>
            <View style={styles.done}>
                <Icon name="check" size={20}></Icon>
            </View>
        </View>
        </TouchableWithoutFeedback>
            <View>
                <Text style={styles.desc}>{props.description}</Text>
                <Text style={styles.date}>{props.estimate_at + ""}</Text>
                <Text style={styles.date}>{props.done_at + ""}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        borderColor: '#AAA',
        borderBottonWidth: 1,
        alingItens :'center',
        paddingVertical: 10
    },
    desc:{
        fontFamily: "Arial",
        fontSize: 20,
        color: "#333333"
    },
    date:{
        fontFamily: "Arial",
        color: "#555555"
    },
    checkContainer:{
        width:"20%",
        alignItems: "center",
        justifyContent: "center"
    },
    done:{
        height: 25,
        width: 25,
        borderRadius: 13,
        borderWidth: 1,
        backgroundColor: "#4D7031",
        alignItems: "center",
        justifyContent: "center"
    },
    pendin:{
        height: 25,
        width: 25,
        borderRadius: 13,
        borderWidth: 1,
        borderColor: "#555555"
    }
})