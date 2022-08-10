const Home = () => {
    const todo1 = "Learn React until Sunday";
    const todo2 = "Plan features on Saturday";
    const todo3 = "Kick-Off the project on Monday";
      
    return (
        <div className="content">
            <h1>Work in progress</h1>
            <h3 >To-Dos:</h3>
            <ul>
                <li>{ todo1 }</li>
                <li>{ todo2 }</li>
                <li>{ todo3 }</li>
            </ul>
        </div>
    );
}
 
export default Home;