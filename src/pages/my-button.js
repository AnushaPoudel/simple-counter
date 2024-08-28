export default function MyButton(props){
    return(
        <button onClick={props.onClick}>{props.text}</button>
    );
}

export function HeyButton(props){
    return(
        <button onClick={props.onClick}>{props.text}</button>
    );
}
