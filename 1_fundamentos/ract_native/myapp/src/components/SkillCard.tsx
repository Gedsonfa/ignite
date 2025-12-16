import React from "react";
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    TouchableOpacityProps
} from 'react-native';

interface SkillCardProps extends TouchableOpacityProps{
    skill: String;
}

export function SkillCard({ skill, ...rest } : SkillCardProps){
    return (
        <TouchableOpacity style={styles.buttonSkill}{...rest}>
                        <Text style={styles.textSkill}>
                            {skill}
                            a
                        </Text>
                    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    buttonSkill: {
        backgroundColor: '#1F1E25',
        padding: 15,
        borderRadius: 20,
        alignItems: 'center',
        marginVertical: 10
    },

    textSkill: {
        color: '#FFF',
        fontSize: 22,
        fontWeight: 'bold',
    }

});