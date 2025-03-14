import { View, Text , StyleSheet ,ImageBackground } from 'react-native';

import icedCoffeeImg from "@/assets/images/IcedCoffe.jpg";

const app = () => {
  return (
    <View style = {styles.container}>
      <ImageBackground 
      source = {icedCoffeeImg}
      resizeMode="cover"
      style = {styles.Image}
      >
      <Text style = {styles.text}>Coffee Shop</Text>
      </ImageBackground>
    </View>
    
  )
}

export default app

const styles = StyleSheet.create({
  container : {
    flex: 1,
    flexDirection: 'column',
  },
  image: {  
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold', 
    textAlign: 'center',
    backgroundColor: 'rgba (0,0,0,0.5)',
  }
});