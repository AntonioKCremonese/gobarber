import React,{useRef} from 'react';
import {Image} from 'react-native';
import logo from '../../assets/logo.png';
import Background from '../../components/Background';

export default function Signup({navigation}){
    const emailRef = useRef();
    const passwordRef = userRef();

    function handleSubmit(){};

    return(
        <Background>
            <Container>
                <Image source={logo} />
                <Form>
                <FormInput
                        icon="person-outline"
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="Digite seu e-mail"
                        returnKeyType="next"
                        onSubmitEditing={() => emailRef.current.focus()}
                    />
                    <FormInput
                        icon="mail-outline"
                        keyboardType="email-address"
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="Digite seu e-mail"
                        ref={emailRef}
                        returnKeyType="next"
                        onSubmitEditing={() => passwordRef.current.focus()}
                    />
                    <FormInput
                        icon="lock-outline"
                        secureTextEntry
                        placeholder="Digite sua senha"
                        ref={passwordRef}
                        returnKeyType="send"
                        onSubmitEditing={handleSubmit}
                    />
                    <SubmitButton onPress={handleSubmit}>Criar</SubmitButton>
                </Form>
                <SignLink onPress={() => {navigation.navigate('SignIn') }}>
                    <SignLinkText>Já tenho login</SignLinkText>
                </SignLink>
            </Container>
        </Background>
    )
}