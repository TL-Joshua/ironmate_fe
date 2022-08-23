import "./Alert.css"

const Alert = ({alertText}) => {
    
    
    return (
        <div className="alert">
            <div className="icon">
                <span className="material-icons">error</span>
            </div>
            <div className="content">
                <p>{alertText}</p>
            </div>
        </div>
    );
}
 
export default Alert;