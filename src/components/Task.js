import React from "react"
import {Text, View, StyleSheet, TouchableWithoutFeedback} from "react-native"
import moment from "moment"
import Icon from "react-native-vector-icons/FontAwesome6"

export default props => {
    const done_or_not = props.date_at != null ? {textDecorationLine: "line-throug"} : {}
    const date = props.date_at != null ? props.done_at : props.estimate_at
    const format_date = moment(date).formar('ddd, D [de] MMM')
    return(
        <View style={StyleSheet.container}>
        <TouchableWithoutFeedback onPress={() => props.toggle_task(props.id)}>
        <View style={styles.checkContainer}>
            <View style={styles.done}>
            {get_Check_View(props.done_at)}
            </View>
        </View>
        </TouchableWithoutFeedback>
            <View>
                <Text style={[styles.desc, done_or_not]}>{props.description}</Text>
                <Text style={styles.date}>{format_date}</Text>
            </View>
        </View>
    )
}

function get_Check_View(done_at){
    if(done_at != null){
        <View style={styles.done}>
            <Icon name="check" size={20} color="#FFF"></Icon>
        </View>
    }else{
        return(
        <View style={styles.pending}>
        </View>
        )
    }
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