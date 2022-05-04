import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, StatusBar, ActivityIndicator } from 'react-native'
import Header from '../screens/Header'
import colors from '../util/colors';

const Details = ({ route, navigation }) => {

    const [loadingD, setLoadingD] = useState(false);
    const [dataD, setDataD] = useState("");
    const [attributes, setAttributes] = useState([]);
    const [idValue, setIdValue] = useState("123");
    const [imageUrl, setImage] = useState("");

    const makeRemoteRequest2 = () => {
        // setRefreshingD(true)
        const url = `https://gamma.io/api/v1/collections/SP2KAF9RF86PVX3NEE27DFV1CQX0T4WGR41X3S45C.byzantion-satoshi-knights/487`;
        // setLoadingD( true );
        fetch(url)
          .then(res => res.json())
          .then(res => {
              console.log(res.data.nft_token_attributes)
              let imageUrl = getIpfsUrl(res.data.token_metadata.image_url)
              setAttributes(res.data.nft_token_attributes)
              setDetails(''+res.data)
              setTimeout(()=>{
                setErrorD(false)
                setImage(imageUrl)
                setIdValue(res.data.token_id)
                setRefreshingD(false)
              },400)
          })
          .catch(error => {
            console.log(error)
            setErrorD(true) 
            setRefreshingD(false)
          });
    };

    const getIpfsUrl = (url) => {
      console.log(`url: ${url}`)
      const ipfsUrl = url.split('//');
      console.log(`ipfsUrl: ${ipfsUrl}`)
      const address = ipfsUrl[1].split('/');
      console.log(`https://ipfs.io/ipfs/${ipfsUrl[1]}`)
      return `https://ipfs.io/ipfs/${ipfsUrl[1]}`;
    }

    useEffect(()=>{
      console.log(loadingD)
      setDataD(route.params.asset_identifier);
      // setRefreshingD(true)

      function setAttributes_(attr) {
        console.log(`attr ${attr}`)
        setAttributes(attr);
      }
      function setDetails_(d) {
        console.log(`setDetails_ ${d}`)
        setDetails(d);
      }
      function setImage_(d) {
        console.log(`setImage_ ${d}`)
        setImage(d);
      }
      function setIdValue_(d) {
        console.log(`setIdValue_ ${d}`)
        setIdValue(d);
      }
      
      const url = `https://gamma.io/api/v1/collections/SP2KAF9RF86PVX3NEE27DFV1CQX0T4WGR41X3S45C.byzantion-satoshi-knights/487`;
      // setLoadingD( true );
      fetch(url)
        .then(res => res.json())
        .then(res => {
            console.log(res.data.nft_token_attributes)
            let imageUrl = getIpfsUrl(res.data.token_metadata.image_url)
            setAttributes_(res.data.nft_token_attributes)
            setImage_(imageUrl)

            setTimeout(()=>{
              setLoadingD(true)
            },1000)
            
            setIdValue_(res.data.token_id)
            
         
        })
        .catch(error => {
          console.log(error)
        });
    }, [route.params.asset_identifier])

   
    if(!loadingD){
      return (
      <View style={styles.fullContainer}>
           <Header scene="NFT Details" previous={"Lookup"} navigation={navigation} isBack={true} />
           {/* <Text style={styles.textSearch}>Loading...</Text> */}
           <ActivityIndicator size="large" color="#00ff00" />
      </View>
      )
    }
    else{
      return (

        <View style={styles.fullContainer}>
        <Header scene="NFT Details" previous={"Lookup"} navigation={navigation} isBack={true} />
        <SafeAreaView style={styles.containerS}>
          <ScrollView contentContainerStyle={{minHeight:'300%', maxWidth:'100%'}} nestedScrollEnabled={true}>
            <Image 
                style={{width: '100%', height: '20%', marginBottom:'4%'}}
                source={{uri: imageUrl}}
              />
            <View style={styles.containerBelow}>
             
                <Text style={styles.textSearch}>Item Details</Text>
                <View style={{ borderBottomColor: '#24252C', borderBottomWidth: 1 }} />
                <Text style={styles.textSearchSub}>Identifier</Text>
                <Text style={styles.textSearchSubW}>{dataD}</Text>

                <Text style={styles.textSearchSub}>ID Value</Text>
                <Text style={styles.textSearchSubWB}>{idValue}</Text>

                <Text style={styles.textSearchAttributes}>Attributes</Text>

                {
                  attributes !== [] && attributes.map(attr => (
                  <View style={styles.containerAttr}>
                    <Text style={styles.textSearchSub}>{attr.trait_type}</Text> 
                    <Text style={styles.textSearchSubWB}>{attr.value}</Text>
                  </View> ))
                }

            </View>
          </ScrollView>
        </SafeAreaView>
        </View>
    );
    }
    
}

export default Details

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  containerBelow: {
    padding: "5%",
    flex: 1,
    backgroundColor: colors.black,
  },
  containerAttr: {
    backgroundColor: colors.black,
  },
  fullContainer: {
    flex: 1, height: 100,
    backgroundColor: colors.black,
  },
  textSearch: {
    color: colors.white,
    fontSize: 16,
    alignSelf: "flex-start",
    fontFamily: "montserrat_semibold",
    marginBottom: "3%",
  },

  textSearchAttributes: {
    color: colors.white,
    fontSize: 16,
    alignSelf: "flex-start",
    fontFamily: "montserrat_semibold",
    marginBottom: "3%",
    marginTop: "5%",
  },

  textSearchSub: {
    color: colors.grey,
    fontSize: 16,
    alignSelf: "flex-start",
    fontFamily: "montserrat_regular",
    marginBottom: "3%",
    marginTop: "5%",
  },

  textSearchSubW: {
    color: colors.white,
    fontSize: 16,
    alignSelf: "flex-start",
    fontFamily: "montserrat_regular",
    marginBottom: "3%",
  },

  textSearchSubWB: {
    color: colors.white,
    fontSize: 16,
    width: "100%",
    alignSelf: "flex-start",
    fontFamily: "montserrat_regular",
    marginBottom: "3%",
    backgroundColor: "#24252C",
    padding: "2%",
    borderRadius: 5,
  },
  containerS: {
    maxWidth:'200%', maxHeight:'500%'
    // paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    // height:'100%',
    // paddingBottom : 100
    // marginHorizontal: 20,
  },
});
