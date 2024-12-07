import myimg from '/allen cake.jpg'
import './App.css'


const Hero = () => {
return(
    <>
    <nav className="navbar">
        <h1>Logo</h1>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Services</li>
        </ul>
    </nav>
    <br/>
    <div class="img1">
    <img src="cake.jpg" class="image"/>
    <img src="cake.jpg" class="image"/>
    <img src="cake.jpg" class="image"/>
    <img src={myimg} class="image"/>
    </div>
    </>
)
}
export default Hero