import { Flex, SimpleGrid, Box, Text, theme } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Siderbar } from "../components/Sidebar";
import dynamic from "next/dynamic"

const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false,
})

const options = {
    chart: {
        toolbar: {
            show: false,
        },
        zoom: {
            enabled: false,
        },
        foreColor: theme.colors.gray[500],
    },
    grid: {
        show: false,
    },
    dataLabels: {
        enabled: false,
    },
    tooltip: {
        enabled: false,
    },
    xaxis: {
        type: "datetime",
        axisBorder: {
            color: theme.colors.gray[600]
        },
        axisTicks: {
            color: theme.colors.gray[600]
        },
        categories: [
            '2021-09-03T00:00:00.000Z',
            '2021-09-04T00:00:00.000Z',
            '2021-09-05T00:00:00.000Z',
            '2021-09-06T00:00:00.000Z',
            '2021-09-07T00:00:00.000Z',
            '2021-09-08T00:00:00.000Z',
            '2021-09-09T00:00:00.000Z',
        ],
    },
    fill: {
        opacity: 0.3,
        type: 'gradient',
        gradient: {
            shade: 'dark',
            opacityFrom: 0.7,
            opacityTo: 0.3,
        },
    },
};

const series = [
    { name: "series1", data: [30, 15, 45, 100, 120, 38, 20] }
]


export default function Dashboard() {
    return (
        <Flex direction="column" h="100vh">
            <Header />
            
            <Flex
                w="100%" 
                my="6" 
                maxWidth={1480}
                mx="auto" 
                px="6"
            >
                <Siderbar />

                <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
                    <Box
                        p="8"
                        bg="gray.800"
                        borderRadius={8}
                        pb="4"
                    >
                        <Text fontSize="lg" mb="4">Inscritos da semana</Text>
                        <Chart options={options} series={series} type="area" height={160} />
                    </Box>                
                    <Box
                        p="8"
                        bg="gray.800"
                        borderRadius={8}
                        pb="4"
                    >
                        <Text fontSize="lg" mb="4">Taxa de abertura</Text>
                        <Chart options={options} series={series} type="area" height={160} />
                    </Box>

                </SimpleGrid>
            </Flex>
        </Flex>
    )
}