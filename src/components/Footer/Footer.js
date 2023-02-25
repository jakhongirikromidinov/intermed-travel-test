import StyledFooter, {
	Content,
	FooterInfo,
	FooterMain,
	FooterBottom,
} from "./Footer.styled";
import { Container } from "../Common/Common.styled";
import logo from "../../images/nav_logo.png";
import { useContext } from "react";
import data from "../../context/db";

const Footer = () => {
	const getValue = (value) => {
		return Object.values(value);
	};

	const {
		footer: {
			descr,
			linksColumnHeader_1,
			linksColumnHeader_2,
			linksColumn_1,
			linksColumn_2,
			paymentMethods,
			copyrightText,
			footerBottom,
		},
	} = useContext(data);
	return (
		<StyledFooter>
			<Container>
				<Content>
					<FooterInfo>
						<img src={logo} alt="logo" />

						<p>{getValue(descr)}</p>
					</FooterInfo>

					<FooterMain>
						<ul>
							<li className="listHeader">{getValue(linksColumnHeader_1)}</li>
							{linksColumn_1.map((link, index) => {
								return (
									<li key={index}>
										<a href={link.link}>{link.title}</a>
									</li>
								);
							})}
						</ul>

						<ul>
							<li className="listHeader">{getValue(linksColumnHeader_2)}</li>
							{linksColumn_2.map((link, index) => {
								return (
									<li key={index}>
										<a href={link.link}>{link.title}</a>
									</li>
								);
							})}
						</ul>

						<ul>
							<li className="listHeader">{getValue(linksColumnHeader_2)}</li>
							{linksColumn_2.map((link, index) => {
								return (
									<li key={index}>
										<a href={link.link}>{link.title}</a>
									</li>
								);
							})}
						</ul>
						<ul className="paymentMethods">
							{paymentMethods.map((link, index) => {
								return (
									<li key={index}>
										<a href={link.link}>
											<img src={link.image} alt="payment" />
										</a>
									</li>
								);
							})}
						</ul>
					</FooterMain>

					<FooterBottom>
						<ul>
							<li>{getValue(copyrightText)}</li>

							{footerBottom.map((link, index) => {
								return (
									<li key={index}>
										<a href={link.link}>{link.title}</a>
									</li>
								);
							})}
						</ul>
					</FooterBottom>
				</Content>
			</Container>
		</StyledFooter>
	);
};

export default Footer;
