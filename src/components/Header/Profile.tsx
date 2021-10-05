import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps ) {
    return (
        <Flex align="center">
            { showProfileData && (
                <Box mr="4" textAlign="right">
                <Text>Matheus Leal Miranda</Text>
                <Text color="gray.300" fontSize="small">
                    lealmirandamts@gmail.com
                </Text>
            </Box>
            )}

            <Avatar size="md" name="Matheus Leal" bg="blue.500" src="https://github.com/DevMatth.png" />
        </Flex>
    )
}