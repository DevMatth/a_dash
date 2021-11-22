import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps, FormErrorMessage } from "@chakra-ui/react";
import { FieldError } from "react-hook-form"
import { forwardRef, ForwardRefRenderFunction } from 'react';

interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;
    errors?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> 
  = ({ name, label, errors= null, ...rest}, ref) => {
    return (
        <FormControl isInvalid={!!errors}>
              { !!label && <FormLabel htmlFor={name}>{label}</FormLabel> }
              <ChakraInput
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
                ref={ref}
                {...rest}
              />
              { !!errors && (
                <FormErrorMessage>
                  {errors.message}
                </FormErrorMessage>
              )}
              </FormControl>
    )
}

export const InputComponent = forwardRef(InputBase)