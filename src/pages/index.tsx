import { Flex, Button, Stack } from '@chakra-ui/react';
import {SubmitHandler, useForm} from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { InputComponent } from '../components/Form/Input';

type SignInForm = {
  email: String,
  password: String,
};

const signInFormSchema = yup.object().shape({
  email: yup.string().required("Insira um email válido").email("Email inválido"),
  password: yup.string().required("Senha obrigatória").min(8, 'Mínimo de 8 caracteres'),  // ---- só aceitando exatamente 8 caracteres
});

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  });

  const { errors } = formState;

  const handleSingInHome: SubmitHandler<SignInForm> = async (value) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
  }

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center">

        <Flex
          as="form"
          w="100%"
          maxWidth={360}
          bg="gray.800"
          p="8"
          borderRadius={8}
          flexDir="column"
          onSubmit={handleSubmit(handleSingInHome)}
        >

          <Stack spacing="4">
            <InputComponent
              type="email"
              name="email"
              label="E-mail"
              errors={errors.email}
              {...register("email")} />

            <InputComponent
              type="password"
              name="password"
              label="Password"
              errors={errors.password}
              {...register("password")} 
            />
          </Stack>
          
          <Button
            type="submit"
            mt="6"
            colorScheme="pink"
            isLoading={formState.isSubmitting}
          >
            Entrar
          </Button>
        
        </Flex>
    </Flex>

  )
}
