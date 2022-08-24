const ButtonsYesNo = () => {


    const handleClick = (e) =>{
        console.log('kamehameha',e);

    }

    return (  
        <nav className="buttonsyesno">
            <button onClick={handleClick}>LETS TRAIN!</button>
            <button>NEXT ONE...</button>
        </nav>
    );
}
 
export default ButtonsYesNo;
