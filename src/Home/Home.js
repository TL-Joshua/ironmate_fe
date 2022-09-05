import "./Home.css";
import { Link } from "react-router-dom";

function Home() {

    return (
        <div className="Home">
            <nav className="Navbar">
                <ul>
                    <div class="Logo">
                        <li>IronMate</li>
                    </div>
                </ul>
                <ul>
                    <div class="middle">
                        <button>Home</button>                        
                        <button>Membership</button>
                        <button>Courses</button>
                    </div>
                </ul>
                <ul>
                    <div class="Logging">
                        <Link to="/Login">
                        <button>Login</button>
                        </Link>
                        <Link to="/Signup">
                        <button>Sign up</button>
                        </Link>
                    </div>
                </ul>
            </nav>
            <div className="contenthome">
                <div className="fotohome">
                    <img src="https://www.heandshefitness.com/wp-content/uploads/2018/08/1-1.jpg"/>
                </div>
                <div className="text">
                    <h1>About us</h1>
                    <h2>Iron Mate is the opportunity for you to meet people with same interests and actively work with them towards your goals.
                        Through our unique matching system, we put you in touch with more than 100 other people interested in fitness.                            Our coaches and individual fitness programmes help you optimise your tracking plan by creating your tasks and tracking your working time.
                    </h2>
                </div>
            </div>
            <div className="contenthome.reverse">
                <div className="fotohome">
                    <img src="https://www.johnharris.at/wp-content/uploads/Beitragsbild.jpg"/>
                </div>  
                <div className="text">
                    <h1>Your benefits with Iron Mate</h1>
                        <h3>
                            <li>Disziplin</li>
                            <li>Kontakte knüpfen</li>
                            <li>Motivation</li>
                            <li>bessere Trainingspläne</li>
                            <li>Vorteile unserer Kooperationspartner</li>
                            <li>neue Freundschaften</li>
                            <li>Zugang zu Coaches</li>
                            <li>Spaß</li>
                        </h3>
                </div>
            </div>
            <div className="contenthome">
                <div className="fotohome">
                    <img src="https://ignitefitness.com/wp-content/uploads/2019/12/DSC_9166-scaled.jpg"/>
                </div>
                <div className="texthome">
                    <h1>Your benefits with Iron Mate</h1>
                    <h3>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    </h3>
                </div>
            </div>
            <div className="contenthome.reverse">
                <div className="fotohome">
                    <img src="https://th.bing.com/th/id/R.d91ee03969f65b112b83bf98986851fb?rik=gY%2fXL%2fQwtwgNHw&pid=ImgRaw&r=0" />
                </div>
                <div className="text">
                    <h1>IronMate is THE app</h1>
                    <h3>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. </h3>
                </div>
            </div>
            <footer>
                    <p>About us</p>
                        <ul>
                            <div class="Imprint">
                            <Link to="/imprints">
                                <li><a href="#">Privacy</a></li>
                            </Link>
                                <li><a href="#">Imprints</a></li>
                            </div>
                        </ul>
                    <p>Career</p>
                    <ul>
                        <div class="Career">
                            <li><a href="#">Jobs</a></li>
                        </div>
                    </ul>
                    <p>Languages</p>
                    <ul>
                        <div class="Aboutus">
                            <li><a href="#">German</a></li>
                            <li><a href="#">Spanish</a></li>
                            <li><a href="#">Italian</a></li>
                        </div>
                    </ul>
            </footer>
        </div>
    );
}

export default Home;