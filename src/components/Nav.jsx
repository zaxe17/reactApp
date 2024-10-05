import logo from "../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Nav = () => {
	return (
		<nav className="mb-20 flex items-center justify-between py-3">
			<div className="flex flex-shrink-0 items-center">
				<img className="mx-2 w-20" src={logo} alt="logo" />
			</div>

			<div className="m-8 flex items-center justify-center gap-4 text=2xl">
				<a href="https://www.linkedin.com/in/jan-marc-jacolbia-b86a00296/">
					<FaLinkedin />
				</a>
				<a href="https://github.com/zaxe17">
					<FaGithub />
				</a>
				<a href="https://www.facebook.com/janmarc.soberanojacolbia.9">
					<FaFacebookSquare />
				</a>
				<a href="https://www.instagram.com/zaxe.jm/">
					<FaInstagram />
				</a>
			</div>
		</nav>
	);
};

export default Nav;
