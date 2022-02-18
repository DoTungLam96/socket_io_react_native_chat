/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import io from 'socket.io-client';
const App = () => {
  const [message, setMessage] = useState('');
  const [socket, setSocket] = useState();
  const [listMessage, setListMessage] = useState([]);
  useEffect(() => {
    setSocket(io('http://172.16.103.155:3000'));
  }, []);

  useEffect(() => {
    if (socket === undefined) {
      return;
    }
    socket.on('chat_message', txt => {
      const data = [txt].concat(listMessage);
      setListMessage(data);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket]);

  const onSubmitText = text => {
    socket.emit('chat_message', message);
    setMessage('');
  };

  return (
    <View style={{padding: 16, flex: 1}}>
      <View
        style={{
          borderRadius: 8,
          height: 50,
          borderColor: '#2b2b2b',
          justifyContent: 'center',
          borderWidth: 0.5,
          paddingLeft: 10,
        }}>
        <TextInput
          placeholder="input here"
          placeholderTextColor="#a3a3a3"
          value={message}
          onChangeText={text => setMessage(text)}
          style={{
            color: '#000',
            fontStyle: 'italic',
            fontSize: 14,
          }}
        />
      </View>

      <View style={{marginTop: 10}}>
        {listMessage.map((item, index) => (
          <Text
            key={index.toString()}
            style={{
              margin: 6,
              color: '#ff637d',
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            {index}: {item}
          </Text>
        ))}
      </View>

      <TouchableOpacity
        onPress={() => onSubmitText(message)}
        style={{
          backgroundColor: 'black',
          position: 'absolute',
          bottom: 0,
          height: 45,
          left: 0,
          right: 0,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 14, color: '#fff'}}>ADD TEXT</Text>
      </TouchableOpacity>
    </View>
  );
};
export default App;
