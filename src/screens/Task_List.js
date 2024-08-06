import React, { Component } from "react"
import { StyleSheet, View, Text, ImageBackground, FlatList} from "react-native"
import moment from "moment"
import "moment/locale/pt-br"

import today_Image from "../../assets/imgs/today.jpg"

export default class TaskList extends Component{

    state = {
        tasks: [
            {
                description : "Terminar TCC",
                estimate_at: new Date(),
                done_at: new Date()
            },
            {
                description : "Fazer TCC",
                estimate_at: new Date(),
                done_at: new Date()
            },
            {
                description : "Tarefa 3",
                estimate_at: new Date(),
                done_at: null
            },
        ]
    }

    toggle_taks = taks_id => {
        const tasks = [...this.state.tasks]
        tasks.forEach(task => {
            if(taks_id === taks_id){
                task.done_at = task.done_at ? null : new Date()
                //if(taks.done_at != null){
                //   task.done_at = null
                //}else{
                //   taks.done_at = new Date()
                //}
            }
        })
        this.setState({ tasks })
    }

    render(){
        const today = moment().locale(pt-br).format('ddd, D [de] MMMM')
        return(
            <View style = {styles.container}>
            <ImageBackground source={today_Image} style={styles.background}>
                <View style={styles.titleBar}>
                    <Text style={styles.title}>Hoje</Text>
                    <Text style={styles.subTitle}>{today}</Text>
                </View>
            </ImageBackground>
            <View style={styles.taskList}>
                <FlatList
                    data = {this.state.tasks} 
                    keyExtractor={item => '${item.id}'}
                    renderItem={({itme}) => <Task {...item} toggle_taks ={this.toggle_taks} />}
                />
                    {/*<Task
                        description="Terminar TCC"
                        estimate_at={moment(new Date()).add(30, "days")}
                        done_at={new Date()}
                    />
                    <Task 
                        description="Apresentar TCC"
                        estimate_at={moment(new Date()).add(63, "days")}
                        done_at={null}
                    />*/}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    background:{
        flex:3
    },
    taskList:{
        flex:7
    },
    titleBar:{
        flex:1,
        justifyContent: 'flex-end'
    },
    title:{
        fontFamily: 'Arial',
        fontSize: 50,
        color: '#FFF',
        marginLeft: 20,
        marginBottom: 20
    },
    subTitle:{
        fontFamily: 'Arial',
        fontSize: 50,
        color: '#FFF',
        marginLeft: 20,
        marginBottom: 30
    }

})