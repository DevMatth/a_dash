import { Box, Flex, Heading, Divider, VStack, HStack, SimpleGrid, Button, Icon } from "@chakra-ui/react";

import {SubmitHandler, useForm} from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'

import { InputComponent } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import Link from "next/link"

type CreateUserFormData = {
    name: string,
    email: String,
    password: String,
    password_confirmation: String,
  };
  
const createUserFormSchema = yup.object().shape({
    name: yup.string().required("Nome é obrigatório"),
    email: yup.string().required("Insira um email válido").email("Email inválido"),
    password: yup.string().required("Senha obrigatória").min(8, 'Mínimo de 8 caracteres'),
    password_confirmation: yup.string().oneOf([
        null, yup.ref("password")
    ], "as senhas precisam ser iguais")
    })


export default function CreateUser() {

    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(createUserFormSchema)
    })

    const { errors } = formState;

    const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
        await new Promise(resolve => setTimeout(resolve, 2000));

    }

    return (
        <Box>
            <Header />

            <Flex w="100%" maxWidth={1480} my="20" mx="auto" px="6" >
                <Sidebar />

                <Box as="form" flex="1" borderRadius={8} bg="gray.800" p={["6", "8"]} onSubmit={handleSubmit(handleCreateUser)}>
                    <Heading size="lg" fontWeight="normal">Criar Usuários</Heading>

                    <Divider my="6" borderColor="gray.700" />

                    <VStack spacing="8">
                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                            
                            <InputComponent
                                name="name"
                                label="Nome completo"
                                error={errors.name}
                                {...register('name')} 
                            />
                            
                            <InputComponent
                                name="email"
                                type="email"
                                label="E-mail"
                                error={errors.email}
                                {...register("email")} 
                            />
                        
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                            
                            <InputComponent
                                name="password"
                                type="password"
                                label="Senha"
                                error={errors.password}
                                {...register("password")} 
                            />
                            
                            <InputComponent
                                name="password_confirmation"
                                type="password"
                                label="Confirme a senha"
                                error={errors.password_confirmation}
                                {...register("password confirmation")} 
                            />
                        
                        </SimpleGrid>
                    </VStack>
                    <Flex mt="8" justifyContent="flex-end">
                        <HStack spacing="4">
                            <Link href="/users" passHref>
                                <Button as="a"colorScheme="whiteAlpha">Cancelar</Button>
                            </Link>
                            
                            <Button 
                                type="submit"
                                colorScheme="pink"
                                isLoading={formState.isSubmitting}
                            >
                                Salvar
                            </Button>

                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}