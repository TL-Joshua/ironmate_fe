import "./Home.css"
import {Link} from "react-router-dom";

const Home = () => {

    return (
        
<><div>
            <nav>
                <ul>
                <div class = "Logo">
                    <li>IronMate</li>
                    </div>
                </ul>
                <ul>
                <div class = "Navbar">
                    <li><a href="#">Login</a></li>
                    <li><a href="#">Home</a></li>
                    </div>
                </ul>
            </nav>
        </div>
        <div>
        <img src="https://www.daily-motivation.net/wp-content/uploads/sites/7/2020/04/fitness-partner.jpg" width = "530" height= "300.5"/>
        <h1>About us</h1>
            <h2>Iron Mate is the opportunity for you to meet people with same interests and actively work with them towards your goals.
                Through our unique matching system, we put you in touch with more than 100 other people interested in fitness.
                Our coaches and individual fitness programmes help you optimise your tracking plan by creating your tasks and tracking your working time.
            </h2>
            <div class = "image">
            <img src="https://www.johnharris.at/wp-content/uploads/Beitragsbild.jpg" width = "530" height= "300.5"/>
            </div>
            <h1>Your benefits with Iron Mate</h1>
            <h3><li>Disziplin</li>
                <li>Kontakte knüpfen</li>
                <li>Motivation</li>
                <li>bessere Trainingspläne</li>
                <li>Vorteile unserer Kooperationspartner</li>
                <li>neue Freundschaften</li>
                <li>Zugang zu Coaches</li>
                <li>Spaß</li></h3>
            <p>Become an Iron club member
                TextText TextText TextText TextText TextText TextText TextText TextText
                TextText TextText TextText TextText TextText TextText TextText TextText
                TextText TextText TextText TextText TextText TextText
                TextText TextText TextText TextText
                TextText TextText TextText TextText TextText TextText</p>

        </div></>
    );
}
export default Home;