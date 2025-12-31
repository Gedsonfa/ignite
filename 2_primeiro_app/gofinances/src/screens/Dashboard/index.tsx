import React from "react";
import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard, TransactionCardProps } from "../../components/TransactionCard";

import {
     Container,
     Header,
     UserInfo,
     Photo,
     User,
     UserGreeting,
     UserName, 
     UserWrapper,
     Icon,
     HighlightCards,
     Transactions,
     Title,
     TransactionList
} from './styles';

export interface DataListProps extends TransactionCardProps{
    id: string; 
}

export function Dashboard(){
    const data: DataListProps[] = [
        {
            id: '1',
            type: 'positive',
            title: "Title",
            amount: "R$ XX,XX",
            category: {
                name: 'vendas',
                icon: 'dollar-sign'
            },
            date: "dd/mm/yyyy"
        },
        {
            id: '2',
            type: 'negative',
            title: "Title1",
            amount: "R$ XX,XX",
            category: {
                name: 'vendas',
                icon: 'dollar-sign'
            },
            date: "dd/mm/yyyy"
        },
        {
            id: '3',
            type: 'negative',
            title: "Title2",
            amount: "R$ XX,XX",
            category: {
                name: 'vendas',
                icon: 'dollar-sign'
            },
            date: "dd/mm/yyyy"
        },
    ];

    return(
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/106558706?v=4' }}/>
                        <User>
                            <UserGreeting>
                                Olá,
                            </UserGreeting>
                            <UserName>Gedson</UserName>
                        </User>
                    </UserInfo>
                    <Icon name="power" />
                </UserWrapper>
            </Header>
            <HighlightCards
            
            >
                <HighlightCard
                    type="up"
                    title="x"
                    amount="R$ xx,xx"
                    lastTransaction="dd/mm/yyyy"
                />
                <HighlightCard
                    type="down"
                    title="y"
                    amount="R$ xx,xx"
                    lastTransaction="dd/mm/yyyy"
                />
                <HighlightCard
                    type="total"
                    title="z"
                    amount="R$ xx,xx"
                    lastTransaction="dd/mm/yyyy"
                />
            </HighlightCards>

            <Transactions>
                <Title>Listagem</Title>

                <TransactionList
                
                data={data}     
                keyExtractor={(item : DataListProps) => item.id}       
                renderItem={({ item } : { item: DataListProps }) => <TransactionCard data={item} />}
                />

            </Transactions>

        </Container>
    )
}
