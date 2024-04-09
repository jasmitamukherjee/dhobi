import { Tabs } from "expo-router"
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
export default function Layout() {
    return (
        <Tabs>
            <Tabs.Screen name="home"
                options=
                {{
                    tabBarLabelStyle: { color: "black" },
                    tabBarLabel: "Home",
                    headerShown: false,
                    tabBarIcon: ({ focussed }) => focussed ? (
                        <Feather name="home" size={27} color="#7cb9e8" />
                    ) : (
                        <Feather name="home" size={27} color="black" />
                    )
                }} />


            <Tabs.Screen name="basket"
                options=
                {{
                    tabBarLabelStyle: { color: "black" },
                    tabBarLabel: "Basket",
                    headerShown: false,
                    tabBarIcon: ({ focussed }) => focussed ? (
                        <Ionicons name="basket-outline" size={30} color="#7cb9e8" />) : (
                        <Ionicons name="basket-outline" size={30} color="black" />)
                }} />


            <Tabs.Screen name="orders"
                options=
                {{
                    tabBarLabelStyle: { color: "black" },
                    tabBarLabel: "Orders",
                    headerShown: false,
                    tabBarIcon: ({ focussed }) => focussed ? (
                        <MaterialCommunityIcons name="account-details-outline" size={30} color="#7cb9e8" />) : (
                        <MaterialCommunityIcons name="account-details-outline" size={30} color="black" />)
                }} />



        </Tabs>
    )
}