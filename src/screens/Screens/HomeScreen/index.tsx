import React from 'react';
import { TextV1 } from "../../../components/Molecules";
import { Dimensions, View } from 'react-native';
import { styles } from './styles';
import { BarChart, LineChart, PieChart, ProgressChart } from 'react-native-chart-kit';
import { color } from '../../../themes/theme';

const HomeScreen = ({ navigation }) => {
    const { navigate } = navigation;
    return (
        <View style={styles.container}>
            <TextV1 type="title">Categorias mais vendidas</TextV1>

            {/* <BarChart
                data={{
                    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
                    datasets: [{
                        data: [20, 45, 28, 80, 99]
                    }]
                }}
                width={300}
                height={200}
                yAxisLabel="$"
                yAxisSuffix="k"
                chartConfig={{
                    backgroundColor: '#ffffff',
                    backgroundGradientFrom: '#ffffff',
                    backgroundGradientTo: '#ffffff',
                    decimalPlaces: 0,
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    style: {
                        borderRadius: 16
                    }
                }}
                style={{
                    marginVertical: 8,
                    borderRadius: 16
                }}
            /> */}

            {/* <PieChart
                data={[
                    {
                        name: 'Categ 1',
                        population: 50,
                        color: '#272D2F',
                        legendFontColor: '#272D2F',
                        legendFontSize: 15
                    },
                    {
                        name: 'Categ 2',
                        population: 30,
                        color: '#98C5F0',
                        legendFontColor: '#272D2F',
                        legendFontSize: 15
                    },
                    {
                        name: 'Categ 3',
                        population: 25,
                        color: '#1C85E8',
                        legendFontColor: '#272D2F',
                        legendFontSize: 15
                    },
                    {
                        name: 'Categ 4',
                        population: 40,
                        color: '#E9EBF3',
                        legendFontColor: '#272D2F',
                        legendFontSize: 15
                    }
                ]}
                width={300}
                height={200}
                chartConfig={{
                    backgroundColor: '#ffffff',
                    backgroundGradientFrom: '#ffffff',
                    backgroundGradientTo: '#ffffff',
                    decimalPlaces: 0,
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`
                }}
                accessor="population"
                backgroundColor="transparent"
                paddingLeft="15"
                absolute
            /> */}

            <ProgressChart
                data={{
                    labels: [
                        "Web servers",
                        "Operating systems",
                        "Programming languages",
                    ],
                    data: [0.2, 0.6, 0.8],
                    colors: [
                        "rgba(28, 133, 232, 1)",
                        "rgba(39, 45, 47, 1)",
                        "rgba(152, 197, 240, 1)",
                    ],
                }}
                width={Dimensions.get("window").width - 32}
                height={200}
                strokeWidth={7}
                hasLegend={true}
                withCustomBarColorFromData={true}
                radius={35}
                chartConfig={{
                    backgroundGradientFromOpacity: 0.5,
                    backgroundGradientToOpacity: 1,
                    backgroundColor: '#fff',
                    backgroundGradientFrom: '#fff',
                    backgroundGradientTo: '#fff',
                    propsForLabels: { fill: '#000' },
                    decimalPlaces: 2,
                    color: (opacity = 1, _index) => `rgba(0,0,0,${opacity})`,
                }}
                style={
                    {
                        marginVertical: 8,
                        borderRadius: 10,
                        alignSelf: 'flex-start',
                        justifyContent: 'flex-start'
                    }
                }
            />

            <TextV1 type="title">Faturamento</TextV1>
            <LineChart
                data={{
                    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
                    datasets: [
                        {
                            data: [20, 45, 28, 80, 99],
                        }
                    ]
                }}
                bezier
                width={300}
                height={200}
                yAxisLabel="$"
                yAxisSuffix="k"
                chartConfig={{
                    backgroundColor: '#ffffff',
                    backgroundGradientFrom: '#ffffff',
                    backgroundGradientTo: '#ffffff',
                    decimalPlaces: 0,
                    color: (opacity = 1) => `rgba(28, 133, 232, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(39, 45, 47, ${opacity})`,
                    fillShadowGradientFrom: '#1C85E8',
                    fillShadowGradientTo: '#fff'

                }}
                style={{
                    marginVertical: 8,
                    borderRadius: 16
                }}
            />
        </View>
    )
}

export default HomeScreen;