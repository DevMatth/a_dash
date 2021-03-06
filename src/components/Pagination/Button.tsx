import { Button } from "@chakra-ui/react";

interface ButtonComponentProps {
    isCurrent?: boolean;
    number: number;
}

export function ButtonComponent({ isCurrent = false, number }: ButtonComponentProps) {
    if (isCurrent) {
        return (
            <Button
                size="sm"
                fontSize="xs"
                width="4"
                colorScheme="pink"
                disabled
                _disabled={{
                    bgColor: "pink.500",
                    cursor: "default"
                }}
            >
                {number}
            </Button>
        )
    }

    return (
        <Button
            size="sm"
            fontSize="xs"
            width="4"
            bg="gray.700"
            _hover={{
                bg: "gray.500"
            }}
        >
            {number}
        </Button>
    )
}