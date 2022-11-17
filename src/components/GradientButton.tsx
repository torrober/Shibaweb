import { Square, Text } from "@chakra-ui/react";
import { render } from "react-dom";

export default function GradientButton(props: any) {
    const gradient =  `linear(to-b, ${props.startColor}, ${props.endColor})`
    return(
    <Square size='200px' borderRadius="md" boxShadow='lg' bgGradient={gradient}>
        <Text>{props.text}</Text>
    </Square>
    )
}