//proyecto emigrado de tipo class(apps_old.js) a component tipo hooks 
import { useState } from "react";
import { Button, StyleSheet, Text, View} from "react-native";
import Clock from "./components/Clock";
import { StatusBar } from "expo-status-bar";


const App = () => {
const [on, setOn] = useState(false);
const toggleClock = () => {
    setOn(!on);
  };

  return (
   <View style={this.styles.container}>
        {on && <Clock />}
         <Button 
         title={`Turn clock ${this.state.on? 'Off' : 'On'}`}
         onPress={toggleClock}
         />
        <StatusBar style="dark" />
   </View>
   );
}

styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default App;