import React from "react";
import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard } from "../../components/TransactionCard";

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
import { getBottomSpace } from "react-native-iphone-x-helper";

export function Dashboard(){
    const data =[
        {
            title: "Title",
            amount: "R$ XX,XX",
            category: {
                name: 'vendas',
                icon: 'dollar-sign'
            },
            date: "dd/mm/yyyy"
        },
        {
            title: "Title1",
            amount: "R$ XX,XX",
            category: {
                name: 'vendas',
                icon: 'dollar-sign'
            },
            date: "dd/mm/yyyy"
        },
        {
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
                renderItem={({item})=> <TransactionCard data={item} />}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{paddingBottom:getBottomSpace()}}
                />

            </Transactions>

        </Container>
    )
}
