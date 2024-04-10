import { StyleSheet, Text, View, ScrollView, Image, Pressable } from 'react-native'
import React from 'react'
import { Octicons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import LottieView from 'lottie-react-native';
const index = () => {
  return (
    <ScrollView style={{ backgroundColor: "f0f0f0" }}>
      <View style={{ padding: 12, height: 240, backgroundColor: "#DC7F9B" }}>
        <View style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          <View>
            <Image
              style={{ width: 200, height: 50, resizeMode: "cover", borderRadius: 30 }}
              source={{
                uri: "https://mir-s3-cdn-cf.behance.net/projects/404/0faab853092491.Y3JvcCw5NzMsNzYyLDE0LDEyMA.jpg",
              }}
            />

          </View>
          {/* <Text>Dhobi</Text> */}
          <Octicons name="three-bars" size={24} color="white" />

        </View>
        <View style={{
          marginTop: 20,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          <View>
            <Text style={{ fontSize: 13, fontFamily: "monospace", fontWeight: "bold" }}>Hi Jasmita !</Text>
            <Text style={{
              marginTop: 2,
              fontFamily: "monospace",
              color: "white",
              fontWeight: "bold"
            }}>Home  |  Pune  ~   411021</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
            <Ionicons
              name="information-circle-outline"
              size={24}
              color="black"
            />
            <Text
              style={{
                width: 60,
                fontSize: 12,
                color: "#0066b2",
                fontFamily: "monospace",
              }}
            >
              QUICK HELP
            </Text>
          </View>
        </View>
      </View>
      <View style={{
        padding: 10,
        backgroundColor: "white",
        width: 340,

        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: 10,
        position: "absolute",
        top: 150,
        left: "50%",
        transform: [{ translateX: -170 }],


      }}>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Ionicons name="notifications-outline" size={24} color="black" />
          <View>
            <Text style={{
              fontSize: 15,
              color: "#0066b2",
              fontFamily: "monospace",
            }}>QUICK ORDER</Text>
            <Text style={{ marginTop: 4, fontFamily: "monospace" }}>Book a pickup and delivery option</Text>
            <Text style={{ fontFamily: "monospace" }}>We will be at your doorstep on time</Text>

            <View style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 7,
            }}>
              <Pressable style={{
                backgroundColor: "#94BFA7",
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderRadius: 4,
              }}>
                <Text style={{ fontSize: 13, fontWeight: "400" }}>
                  BOOK NOW
                </Text>
              </Pressable>
              <MaterialCommunityIcons name="truck" size={28} color="#034694" />

            </View>
          </View>

        </View>
      </View>
      <View style={{
        marginTop: 80,
        marginHorizontal: 10,
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        marginLeft:0,
        width:50
        
      }} >
        <View style={{ backgroundColor: "white", padding: 12, borderRadius: 10,width:173 }}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <View>

              <Text style={{ color: "#2F2F2F", fontSize: 15, fontWeight: "bold" }}>Club <Text style={{ color: "#034694", fontSize: 15, fontWeight: "bold" }}>Ultimate</Text></Text>
              <Text style={{
                fontSize: 12,
                fontWeight: "300",
                width: 130,
                marginTop: 10,
              }}>Put your laundry on Crise Control</Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "300",
                  width: 130,
                  marginTop: 3,
                }}
              >
                Subscribe and get the benefits
              </Text>
            </View>
            <Entypo name="triangle-right" size={24} color="#034694" />

          </View>

        </View>
        <View style={{
          backgroundColor: "white",
          paddingHorizontal: 12,
          paddingVertical: 10,
          borderRadius: 10,
          marginRight: 20,
          marginLeft: 0
        }}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 ,width:180}}>
            <Ionicons name="basket-outline" size={24} color="#034694" />
            <View>
              <Text style={{ color: "#2f2f2f", fontSize: 15, fontWeight: "bold" }}>Place your{" "}<Text style={{ color: "#034694", fontSize: 15, fontWeight: "bold" }}>Order</Text></Text>
              <Text style={{
                fontSize: 12,
                fontWeight: "300",
                width: 130,
                marginTop: 10,
              }}>Select items from the catalogue below</Text>
              <Text style={{
                fontSize: 12,
                fontWeight: "300",
                width: 130,
                marginTop: 3,
              }}>and book you rorder. It's about time.</Text>
            </View>
          </View>
        </View>
      </View>

      <View   style={{
          marginHorizontal: 10,
          marginVertical: 10,
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          marginLeft:0
        }}>
        <View>
          <View  style={{
              backgroundColor: "white",
              flexDirection: "row",
              alignItems: "center",
              gap: 12,
              padding: 10,
              borderRadius: 10,
            }}>
            <View>
              <Text  style={{ fontSize: 13, fontWeight: "500", color: "#034694" }}>AFFORDABLE PRICES</Text>
              <Text style={{marginTop:4}}>Get our price list </Text>
            </View>
            <Entypo name="triangle-right" size={24} color="#034694" />

          </View>
        </View>
      </View>

      <View   style={{
          marginHorizontal: 10,
          marginVertical: 10,
          marginTop:1,
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          marginLeft:0
        }}>
        <View>
          <View  style={{
              backgroundColor: "white",
              flexDirection: "row",
              alignItems: "center",
              gap: 12,
              padding: 10,
              borderRadius: 10,
            }}>
            <View>
              <Text  style={{ fontSize: 13, fontWeight: "500", color: "#034694" }}>AFFORDABLE PRICES</Text>
              <Text style={{marginTop:4}}>Get our price list </Text>
            </View>
            <Entypo name="triangle-right" size={24} color="#034694" />

          </View>
        </View>
        <View
          style={{
            backgroundColor: "white",
            padding: 12,
            borderRadius: 10,
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            marginLeft:0,
            width:180,
            marginTop:-60
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 20,
                color: "#2f2f2f",
                width: 100,
                fontWeight: "bold",
              }}
            >
              WHAT'S THE PLAN
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: "#034694",
                width: 100,
                fontWeight: "bold",
              }}
            >
              FOR THE PLANET
            </Text>
          </View>
          <Entypo name="triangle-right" size={18} color="#034694" />
        </View>
      </View>
      <View  style={{
          backgroundColor: "white",
          padding: 10,
          marginRight: "auto",
          marginLeft: "auto",
          borderRadius: 7,
          marginTop:30,
          width:180
        }}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 5}}>
        <Ionicons name="notifications-outline" size={24} color="black" />
        <Text>Next Available</Text>
        </View>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "500",
            marginTop: 5,
            color: "#034694",
            width: 150,
            textAlign:"center"
          }}
        >
          Order Within 15 mins to catch this pickUp Slot
        </Text>
        <Pressable
          style={{
            borderColor: "#034694",
            paddingHorizontal: 10,
            paddingVertical: 4,
            justifyContent: "center",
            alignItems:"center",
            borderWidth:0.7,
            width:130,
            marginTop:8,
            borderRadius:5
          }}
        >
          <Text>ADD ITEMS</Text>
        </Pressable>
      </View>

          <LottieView source={require('../../../assets/laundry.json')} style={{width:400,height:200}} autoPlay loop />

    </ScrollView>
  )
}

export default index

const styles = StyleSheet.create({})