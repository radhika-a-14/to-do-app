import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { IconButton } from 'react-native-paper';
import Fallback from '../components/Fallback';

console.log(Date.now().toString());

const TodoScreen = () => {
    const[todo,setTodo] = useState("");
    const[todoList,setTodoList] = useState([]);

    const handleAddTodo =() => {
    
    if(todo.trim()!==""){
    setTodoList([...todoList,{id: Date.now().toString(), title:todo}]);
    setTodo("");
    }
    };
    const handleDeleteTodo=(id)=>
    {
        const updatedTodoList = todoList.filter((todo)=> todo.id!==id)
        setTodoList(updatedTodoList);
        
    };
    const renderTodos=({item,index})=>{
        return(
            <View style={{backgroundColor:'blue',
                borderRadius:6,paddingHorizontal:6,paddingVertical:12,
                marginBottom:12,
                flexDirection:'row',
                alignItems:'center',
                
            }}>
                
                <Text style={{color:'#fff',fontSize:20,fontWeight:'800',flex:1}}>{item.title}</Text>
                <IconButton icon="pencil" iconColor='#fff'/>
                <IconButton icon="trash-can" iconColor='#fff' onPress={()=>handleDeleteTodo(item.id)}/>
            </View>
        );
    };

  return (
    <View style={{marginHorizontal:16}}>
      <Text>To Do</Text>
      <TextInput style={{
        borderWidth:2,borderColor:'black',borderRadius:6,
        marginTop:5,
        paddingVertical:8,paddingHorizontal:16
      }} placeholder='Add task'
      
      value={todo}
      onChangeText={(userText)=>setTodo(userText)}/>

      <TouchableOpacity style={{backgroundColor:'#000',borderRadius:6,
        paddingVertical:12,
        marginVertical:34,
        alignItems:'center',
      }} 
      onPress={()=> handleAddTodo()}>
        <Text style={{color:'#fff',fontWeight:'bold',fontSize:20}}
        >Add</Text>
      </TouchableOpacity>
      <FlatList data ={todoList} renderItem={renderTodos}/>
      {todoList.length<=0 && <Fallback/>}
    </View>
  )
}

export default TodoScreen

const styles = StyleSheet.create({

})