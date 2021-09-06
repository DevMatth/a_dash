import { FormControl, FormLabel, Input, InputProps as ChakraInputProps } from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;
}

export function InputComponent({ name, label, ...rest}: InputProps) {
    return (
        <FormControl>
              { !!label && <FormLabel htmlFor={name}>{label}</FormLabel> }
              <Input
                id={name}
                name={name}
                type="email"
                focusBorderColor="pink.500"
                bgColor="gray.900"
                variant="filled"
                _hover={{
                  bgColor: 'gray.900'
                }}
                size="lg"
                {...rest}
              />
              </FormControl>

    )
}