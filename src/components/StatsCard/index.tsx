import React from "react";
import { Text, View } from "react-native";
import Card from '../Card';
import { styles } from "./styles";

export default function StatsCard() {
    return (
        <Card variant="default">

            <View style={styles.header}>
                <Text style={styles.title}>Card Title</Text>
            </View>

            <View style={styles.statsContainer}>
                <View style={styles.statsContain}>
                    <Text>Stack 1</Text>
                    <Text>Stack 2</Text>
                </View>

                <View style={styles.statsContain}>
                    <Text>Stack 3</Text>
                    <Text>Stack 4</Text>
                </View>
            </View>
        </Card>
    )
}