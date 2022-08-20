import "./Alert.css"

const Alert = () => {
    
    
    return (
        <div className="alert">
            <div className="icon">
                <span className="material-icons">error</span>
            </div>
            <div className="content">
                <p>Your login info is not right.</p>
            </div>
        </div>
    );
}
 
export default Alert;