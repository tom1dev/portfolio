import "tailwindcss";
import SectionHeader from "./public/SectionHeader";
import { FiMail, FiLinkedin, FiGithub, FiMapPin } from "react-icons/fi";
import type { IconType } from "react-icons";
import BodyText from "./public/BodyText";

type Contact = {
    label: string;
    value: string;
    href?: string;
    Icon: IconType;
};

const contacts: Contact[] = [
    {
        label: "Email",
        value: "tom@devonshire.co.nz",
        href: "mailto:tom@devonshire.co.nz",
        Icon: FiMail,
    },
    {
        label: "LinkedIn",
        value: "linkedin.com/in/tom1dev",
        href: "https://www.linkedin.com/in/tom1dev/",
        Icon: FiLinkedin,
    },
    {
        label: "GitHub",
        value: "github.com/tom1dev",
        href: "https://github.com/tom1dev",
        Icon: FiGithub,
    },
    {
        label: "Location",
        value: "Auckland, New Zealand",
        Icon: FiMapPin,
    },
];

function ContactMe(){
    return(
    <div>
        {/* Header */}
        <SectionHeader headerText="Contact Me"/>

        {/* Body Text */}
        <BodyText
            bodyText={text}
        />

        {/* Line items */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
            {contacts.map((contact) => {
                const row = (
                    <>
                        <contact.Icon
                            className="h-5 w-5 shrink-0 text-gray-500 group-hover:text-black transition-colors duration-400"
                            aria-hidden="true"
                        />
                        <span className="flex flex-col min-w-0">
                            <span className="text-xs uppercase tracking-widest text-gray-500">
                                {contact.label}
                            </span>
                            <span className="truncate">{contact.value}</span>
                        </span>
                    </>
                );

                return (
                    <li key={contact.label}>
                        {contact.href ? (
                            <a
                                href={contact.href}
                                target={contact.href.startsWith("mailto:") ? undefined : "_blank"}
                                rel="noopener noreferrer"
                                className="group flex items-center gap-3 rounded-lg border border-gray-200 p-4 hover:border-gray-400 hover:bg-gray-50 transition-colors duration-400"
                            >
                                {row}
                            </a>
                        ) : (
                            <div className="group flex items-center gap-3 rounded-lg border border-gray-200 p-4">
                                {row}
                            </div>
                        )}
                    </li>
                );
            })}
        </ul>
    </div>
    );
}

const text = [
    "I'm currently open to graduate software engineering roles, so if you have an opportunity you think I'd be a good fit for, I'd love to hear about it.",
    "That said, you don't need a role in hand to get in touch. Whether you want to talk about a project, ask about something I've worked on, or just have a chat about software, feel free to reach out through any of the links below and I'll get back to you.",
]

export default ContactMe;
