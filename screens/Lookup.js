import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList, TextInput, ActivityIndicator } from 'react-native'
import { List, ListItem, SearchBar } from "react-native-elements";
import Header from '../screens/Header'
import colors from "../util/colors";
import DataTable from "../components/DataTable";

const Lookup = ({ navigation }) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const [sval, setSVal] = useState("SP36DHK0QACYS0FNVZ0Q5HMA10CD29XZNE029QX1F");

    const makeRemoteRequest = () => {
        setRefreshing(true)
        const url = `https://stacks-node-api.mainnet.stacks.co/extended/v1/address/${sval}/nft_events`;
        console.log(`makeRemoteRequest url: ${url}`)
        setLoading( true );
        fetch(url)
          .then(res => res.json())
          .then(res => {
              setData(res.nft_events)
              setTimeout(()=>{
                setError(false)
                setRefreshing(false)
              },400)
             
            // this.setState({
            //   data: page === 1 ? res.results : [...this.state.data, ...res.results],
            //   error: res.error || null,
            //   loading: false,
            //   refreshing: false
            // });
          })
          .catch(error => {
            console.log(error)
            setError(true)
            setRefreshing(false)
          });
    };

    return (

        <View style={styles.fullContainer}>
            <Header scene="NFTs Lookup" previous={"Details"} navigation={navigation} />
            <View style={styles.container}>
                <Text style={styles.textSearch}>Stacks Address:</Text>
                <TextInput
                    textAlign={'center'}
                    style={styles.input}
                    placeholderTextColor={colors.darkGrey}
                    onChangeText={(value) => {
                        setSVal(value)
                      }}
                    defaultValue={sval}
                />
                <TouchableOpacity style={{width:'100%', alignItems: 'center',}} onPress={() => makeRemoteRequest()}>
                    <Text style={styles.btn}>Look up</Text>
                </TouchableOpacity>
                <Text style={styles.textResult}>Results</Text>
                <DataTable styleTableHead={{ paddingVertical: 10 }} data={data}  navigation={navigation} />
            </View>
        </View>
       
    );
}

export default Lookup

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000',
      alignItems: 'center',
      padding: 15
    },
    fullContainer: {
        height: '100%'
    },

    inputContainer: {
        borderWidth: 1,
        borderColor: colors.primary
    },
    input: {
        margin: 0,
        padding: 0,
        fontFamily: "montserrat_regular",
        alignSelf:'flex-start',
        marginBottom:'3%',
        width:'100%',
        color:colors.white,
        backgroundColor: '#24252C'
    },
    textSearch:{
        color: 'white', 
        fontFamily:'serif', 
        alignSelf:'flex-start',
        marginBottom:'2%'
    },
    textResult:{
        color: 'white', 
        fontFamily:'serif', 
        alignSelf:'flex-start',
        marginTop:'4%',
        marginBottom:'2%'
    },
    btn: {
        borderRadius: 12,
        backgroundColor:'#465AE9',
        padding: 20,
        marginTop:'1%',
        width:'100%',
        color: 'white',
        justifyContent: 'center', //Centered horizontally
        alignItems: 'center', //Centered vertically
        lineHeight:19,
        fontFamily:'montserrat_regular',
        textAlignVertical: 'center',
        textAlign: 'center',
        fontSize:14,
        fontWeight: "500"
    },
  });
