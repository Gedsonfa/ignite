import React from 'react';

import { Container,
    Title,
    Amount,
    Footer,
    Category,
    Icon,
    CategoryName,
    Date
 } from './styles';


export function TransactionCard(){
    return(
        <Container>
             <Title>Title</Title>

             <Amount>R$ xx,xx</Amount>

             <Footer>
                <Category>
                    <Icon name="dollar-sign"/>
                    <CategoryName>Vendas</CategoryName>
                </Category>
                <Date>dd/mm/yyyy</Date>
             </Footer>
        </Container>
    )
}