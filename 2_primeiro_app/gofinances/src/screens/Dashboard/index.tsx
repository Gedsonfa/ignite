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
} from './styles';

export function Dashboard(){
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
                <TransactionCard/>
            </Transactions>

        </Container>
    )
}
