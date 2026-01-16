import React, { useState } from "react";
import { Modal } from 'react-native';
import { useForm } from 'react-hook-form';
import { InputForm } from "../../components/Form/InputForm";
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

interface FormData {
    name: string;
    amount: string;
}

export function Register(){
    const [transactionType, setTransactionType] = useState('');
    const [categoryModalOpen, setCategoryModalOpen] = useState(false);

    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria',
        icon: 'any'
    });

    const {
        control,
        handleSubmit
    } = useForm();

    function handleTransactionsTypeSelect(type: 'up' | 'down') {
        setTransactionType(type);
    }

    function handleOpenSelectCategoryModal(){
        setCategoryModalOpen(true);
    }


    function handleCloseSelectCategoryModal(){
        setCategoryModalOpen(false);
    }

    function handleRegister(form: FormData){
        const data = {
            name: form.name,
            amount: form.amount,
            transactionType,
            category: category.key
        }
        console.log(data);
    }

    return(
        <Container>
            <Header>
                <Title>Cadastro</Title>
            </Header>

            <Form>
                <Fields>
                    <InputForm 
                        name="name"
                        placeholder="Nome"
                        control={control}
                        placeholderTextColor={theme.colors.text}
                    />
                    <InputForm
                        name="amount"
                        placeholder="Preço"
                        control={control}
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
                <CategorySelectButton title={category.name}
                onPress={handleOpenSelectCategoryModal}/>
                </Fields>
                <Button title="Enviar"
                onPress={handleSubmit(handleRegister)}/>
            </Form>

            <Modal visible={categoryModalOpen}>
                <CategorySelect
                category={category}
                setCategory={setCategory}
                closeSelectCategory={handleCloseSelectCategoryModal}/>
            </Modal>
        </Container>
    );
}