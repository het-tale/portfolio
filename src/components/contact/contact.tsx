import ContactDescription from "./contact-desciption";
import ContactForm from "./contact-form";

export default function Contact() {
	return (
		<section
			id="contact"
			className="flex flex-col md:flex-row md:justify-between p-6 w-full gap-8"
		>
			<ContactDescription />
			<ContactForm />
		</section>
	);
}
