const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>🔥 IronMate</h1>
            <div className="links">
                <a href="/" className="clickableLink">Home</a>
                <a href="/find" className="clickableLink" style={{
                    color: "blue",
                    backgroundColor: "lightgray",
                    borderRadius: "10px"
                }}>Find Mates</a>
                <a href="/profile" className="clickableLink">Profile</a>
                <a href="/settings" className="clickableLink">Settings</a>
            </div>
        </nav>
    );
}
 
export default Navbar;