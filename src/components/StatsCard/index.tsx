import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';

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
                    <View style={styles.statItem}>
                        <Ionicons name="attach" size={24} color="black" />
                        <View>
                            <Text>0</Text>
                            <Text>Concluídos</Text>
                        </View>
                    </View>

                    <View style={styles.statItem}>
                        <Ionicons name="attach" size={24} color="black" />
                        <View>
                            <Text style={styles.statValue}>0</Text>
                            <Text style={styles.statLegend}>Atrasados</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.statsContain}>
                    <View style={styles.statItem}>
                        <Ionicons name="attach" size={24} color="black" />
                        <View>
                            <Text>0</Text>
                            <Text>Pendentes</Text>
                        </View>
                    </View>

                    <View style={styles.statItem}>
                        <Ionicons name="attach" size={24} color="black" />
                        <View>
                            <Text>0</Text>
                            <Text>Total</Text>
                        </View>
                    </View>
                </View>
            </View>
        </Card>
    )
}