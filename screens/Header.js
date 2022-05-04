import React from 'react';
import { Appbar, Avatar } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text } from 'react-native';

const ContentTitle = ({ title, style, isBack }) => (
<Appbar.Content
        title={<Text style={style}> {title} </Text>}
        style={{ alignItems: 'center', marginLeft: isBack ? '-9%':'0%' }}
/>)

const Header = ({ scene, previous, navigation, isBack=false }) => {
    console.log('scene: '+scene)
  
    return (
      <Appbar.Header theme={{ colors: { primary: 'black' } }}  style={{ height: 'auto' }}>
        {isBack && 
            <Appbar.BackAction onPress={() => navigation.goBack(previous)} color='white' /> 
        }
        <ContentTitle titleStyle={{ textAlign: 'center' }} title={scene} style={{ color: 'white', fontFamily:'montserrat_regular' }} />
      </Appbar.Header>
    );
  };

  export default Header;