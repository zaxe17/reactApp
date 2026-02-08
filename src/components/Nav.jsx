import logo from "../assets/logo.png";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebookSquare } from "react-icons/fa";

const Nav = () => {
	return (
		<nav className="mb-20 flex items-center justify-between py-6">
			{/* LOGO */}
			<div className="flex shrink-0 items-center">
				<img className="mx-2 w-20" src={logo} alt="logo" />
			</div>
			{/* SOCIAL MEDIA */}
			<div className="m-8 flex items-center justify-center gap-4 text-2xl">
				<a href="https://www.linkedin.com/in/jan-marc-jacolbia-b86a00296/" className="transition-all duration-200 ease-in-out hover:text-purple-600">
					<FaLinkedin />
				</a>
				<a href="https://github.com/zaxe17" className="transition-all duration-200 ease-in-out hover:text-purple-600">
					<FaGithub />
				</a>
				<a href="https://www.facebook.com/janmarc.soberanojacolbia.9" className="transition-all duration-200 ease-in-out hover:text-purple-600">
					<FaFacebookSquare />
				</a>
				<a href="https://www.instagram.com/zaxe.jm/" className="transition-all duration-200 ease-in-out hover:text-purple-600">
					<FaInstagram />
				</a>
			</div>
		</nav>
	);
};

export default Nav;
