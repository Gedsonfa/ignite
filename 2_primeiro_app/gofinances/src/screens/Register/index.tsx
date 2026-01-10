import React, { useState } from "react";
import { Modal } from 'react-native';

import { Input } from "../../components/Form/Input";
import { Button } from "../../components/Form/Button";
import { TransactionTypeButton } from "../../components/Form/TransactionTypeButton";
import { CategorySelectButton } from "../../components/Form/CategorySelectButton";

import { CategorySelect } from "../CategorySelect";

import { Container,
    Header,
    Title,
    Form,
    Fields,
    TransactionTypes
 } from './styles';
import theme from "../../global/styles/theme";

export function Register(){
    const [transactionType, setTransactionType] = useState('');
    const [categoryModalOpen, setCategoryModalOpen] = useState(false);

    function handleTransactionsTypeSelect(type: 'up' | 'down') {
        setTransactionType(type);
    }
    return(
        <Container>
            <Header>
                <Title>Cadastro</Title>
            </Header>

            <Form>
                <Fields>
                    <Input 
                        placeholder="Nome"
                        placeholderTextColor={theme.colors.text}
                    />
                    <Input 
                        placeholder="Preço"
                        placeholderTextColor={theme.colors.text}
                    />
                <TransactionTypes>
                    <TransactionTypeButton
                    type="up"
                    title="Income"
                    onPress={()=>handleTransactionsTypeSelect('up')}
                    isActive={transactionType === 'up'}
                    />
                    <TransactionTypeButton
                        type="down"
                        title="Outcome"
                        onPress={()=>handleTransactionsTypeSelect('down')}
                        isActive={transactionType === 'down'}    

                    />
                </TransactionTypes>
                <CategorySelectButton title="Categoria"/>
                </Fields>
                <Button title="Enviar"/>
            </Form>

            <Modal visible={categoryModalOpen}>
                <CategorySelect/>
            </Modal>
        </Container>
    );
}