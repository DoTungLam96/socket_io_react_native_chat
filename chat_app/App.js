/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {Text, View, TextInput} from 'react-native';
import io from 'socket.io-client';
const App = () => {
  const [message, setMessage] = useState('');
  const [socket, setSocket] = useState();
  const [chatMessages, setChatMessage] = useState([]);
  useEffect(() => {
    setSocket(io('http://192.168.31.238:3000'));
  }, []);

  useEffect(() => {
    if (socket === undefined) {
      return;
    }
    socket.on('chat_message', msg => {
      console.log('socketqqqqq', chatMessages);
      setChatMessage([...chatMessages, chatMessages.push(msg)]);
    });
    // // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket]);

  const onSubmitText = text => {
    socket.emit('chat_message', message);
    setMessage('');
  };

  return (
    <View style={{padding: 16}}>
      <View
        style={{
          borderRadius: 8,
          height: 50,
          borderColor: '#cc8',
          justifyContent: 'center',
          borderWidth: 0.5,
          paddingLeft: 10,
        }}>
        <TextInput
          placeholder="...."
          value={message}
          onChangeText={text => setMessage(text)}
          onSubmitEditing={txt => onSubmitText(txt)}
          style={{color: '#000', fontSize: 14}}
        />
      </View>

      <View style={{marginTop: 10}}>
        {chatMessages.map((item, index) => (
          <Text
            key={index.toString()}
            style={{margin: 6, color: '#fcc', fontSize: 14}}>
            test_{item}
          </Text>
        ))}
      </View>
    </View>
  );
};
export default App;
