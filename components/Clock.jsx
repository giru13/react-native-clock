import { useEffect, useState } from "react";
import { View, Text } from "react-native";

export default function Clock(){
let [time, setTime] = useState('00:00');

// null: first time only
// []: on every render   (if sent only empty hooks)
// [a,b]: on changes, watch for changes (if sent in variables)
// return: on unmount

useEffect(() => {
    console.info('componentDidMount called');
    let tick = setInterval(() => {
        setTime(new Date().toLocaleTimeString());
        console.info('tick');
    }, 1000);
    return () => {
        clearInterval(tick);
    };
}, []);

// useEffect(() => {
//     console.log('rendering');
// });
//use this to avoid spaguettis on only one useeffect if this.. and this, use various useEffects

return (
    <View>
        <Text>
            {time}
        </Text>
    </View>
);

}
