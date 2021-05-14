import React from "react";
import RashSelfIcon from "../assets/images/Shreya.svg";
import AboutBox from "../components/About/AboutBox";
import about from "../data/About";
import {
	UserWrapper,
	UserTitle,
	UserDescription,
	DownloadButton,
	UserTopic,
} from "../styles/indexStyle.js";
import Layout from "../components/layout";

const IndexPage = () => {
	return (
		<Layout>
			<UserWrapper>
				<UserTitle>
					Shreya <span>Sridhar</span>
				</UserTitle>
				<UserDescription>
					<div>
						<p>
						{
        id: 3,
        name: "Hindi"
    }
						</p>
						<DownloadButton
							href="https://shreyastorage.blob.core.windows.net/shreyasridhariitbresume/shreya_iitb_resume.pdf"
							download
							title="Resume"
						>
							Download Resume
						</DownloadButton>
					</div>
					<img src={RashSelfIcon} alt="Shreya self" />
				</UserDescription>
				<UserTopic>
					{about.map((item) => (
						<AboutBox key={item.id} info={item} />
					))}
				</UserTopic>
			</UserWrapper>
		</Layout>
	);
};

export default IndexPage;
