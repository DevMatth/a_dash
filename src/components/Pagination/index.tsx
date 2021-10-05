import { HStack, Stack, Box } from "@chakra-ui/react"
import { ButtonComponent } from "./Button"

export function Pagination() {
    return (
        <Stack
            direction={["column", "row"]}
            mt="8"
            justify="space-between"
            align="center"
            spacing="6"
        >
            <Box>
                <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
            </Box>

            <HStack spacing="2">
                <ButtonComponent number={1} isCurrent />
                <ButtonComponent number={2} />
                <ButtonComponent number={3} />
                <ButtonComponent number={4} />
                <ButtonComponent number={5} />
                <ButtonComponent number={6} />

            </HStack>
        </Stack>
    )
}