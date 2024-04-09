import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'
import { Octicons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const index = () => {
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={{ padding: 12, height: 240, backgroundColor: "#DC7F9B" }}>
        <View  style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}>
          <View>
            <Image
              style={{ width: 200, height: 50, resizeMode: "cover" }}
              source={{
                uri: "https://laundrymate.in/assets/images/shared/branding/Logo.webp",
              }}
            />
            
          </View>
          {/* <Text>Dhobi</Text> */}
          <Octicons name="three-bars" size={24} color="white" />

        </View>
        <View  style={{
            marginTop: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}>
          <View>
            <Text style={{ fontSize: 13, fontFamily: "monospace" }}>Hi Jasmita !</Text>
            <Text style={{
                marginTop: 2,
                fontFamily: "monospace",
                color: "white",
              }}>Home  |  Pune  ~   411021</Text>
          </View>
          <View  style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
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
      <View   style={{
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
        <View  style={{ flexDirection: "row", gap: 10 }}>
        <Ionicons name="notifications-outline" size={24} color="black" />
<View>
  <Text style={{
                fontSize: 15,
                color: "#0066b2",
                fontFamily: "monospace",
              }}>QUICK ORDER</Text>
  <Text  style={{ marginTop: 4,fontFamily:"monospace" }}>Book a pickup and delivery option</Text>
  <Text style={{ fontFamily:"monospace" }}>We will be at your doorstep on time</Text>
</View>
        </View>
      </View>
    </ScrollView>
  )
}

export default index

const styles = StyleSheet.create({})