function PrimaryButton(props) {
    return ( 
        <button onClick={props.action}>{props.title}</button>
     );
}

export default PrimaryButton;