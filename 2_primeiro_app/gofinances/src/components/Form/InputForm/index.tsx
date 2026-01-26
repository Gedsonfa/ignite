import React from "react";
import { TextInputProps } from "react-native";
import { Control, Controller, FieldValues, Path } from 'react-hook-form';

import { Input } from "../Input";

import { Container, Error } from "./styles";

interface Props<T extends FieldValues> extends TextInputProps{
    control: Control<T>;
    name: Path<T>;
    error: Path<T>;
}

export function InputForm<T extends FieldValues>({
    control,
    name,
    error,
    ...rest
}: Props<T>){
    return(
        <Container>
            <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                    <Input
                        onChangeText={onChange}
                        value={value}
                        {...rest}
                    />
                )}
                name={name}
            />
            {error && <Error>{ error }</Error>}
        </Container>
    );
}