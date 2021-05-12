import React from "react";
import SocialContact from "../components/Contact/SocialContact";
import contact from "../data/Contact";
import social from "../data/Social";
import me from "../assets/images/me.jpg"
import {
	ContactWrapper,
	ContactHeader,
	ContactDetails,
	ContactBox,
} from "../styles/contactStyle.js";
import Layout from "../components/layout";

const Contact = () => (
	<Layout>
		<ContactWrapper>
			<ContactHeader>Get in touch</ContactHeader>
			<div style={{display:"flex",justifyContent:"center"}}>
			<img src={me} style={{height:300}}/>
			</div>
			<ContactDetails>
				<ContactBox>
					{contact.map((item) => (
						<SocialContact key={item.id} info={item} />
					))}
					{social.map((item) => (
						<SocialContact key={item.id} info={item} />
					))}
				</ContactBox>
			</ContactDetails>
		</ContactWrapper>
	</Layout>
);

export default Contact;
