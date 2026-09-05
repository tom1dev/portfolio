import "tailwindcss";
import SectionHeader from "./public/SectionHeader";
import BodyText from "./public/BodyText";

// Inline so no icon dependency is needed; each path inherits the row's colour.
const icons = {
    email: "M3 6.5A1.5 1.5 0 0 1 4.5 5h11A1.5 1.5 0 0 1 17 6.5v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 3 13.5v-7Zm1.7-.1L10 10.2l5.3-3.8",
    linkedIn: "M4.5 7.5v7m0-9.4v.1M8.5 14.5v-7m0 2a2.5 2.5 0 0 1 5 0v5",
    gitHub: "M12.5 17v-2.4c0-.8-.2-1.3-.6-1.7 2-.2 4.1-1 4.1-4.5 0-1-.35-1.8-.9-2.4.1-.25.4-1.15-.1-2.4 0 0-.75-.25-2.5.9a8.4 8.4 0 0 0-4.5 0C6.25 3.4 5.5 3.65 5.5 3.65c-.5 1.25-.2 2.15-.1 2.4-.55.6-.9 1.4-.9 2.4 0 3.5 2.1 4.3 4.1 4.5-.26.24-.5.66-.58 1.28-.52.24-1.84.64-2.65-.76 0 0-.48-.87-1.39-.94 0 0-.88-.01-.06.55 0 0 .59.28 1 1.32 0 0 .53 1.75 3.05 1.2V17",
    location: "M10 17s5-4.4 5-8a5 5 0 1 0-10 0c0 3.6 5 8 5 8Zm0-6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
};

type Contact = {
    label: string;
    value: string;
    href?: string;
    icon: string;
};

const contacts: Contact[] = [
    {
        label: "Email",
        value: "tom@devonshire.co.nz",
        href: "mailto:tom@devonshire.co.nz",
        icon: icons.email,
    },
    {
        label: "LinkedIn",
        value: "linkedin.com/in/tom1dev",
        href: "https://www.linkedin.com/in/tom1dev/",
        icon: icons.linkedIn,
    },
    {
        label: "GitHub",
        value: "github.com/tom1dev",
        href: "https://github.com/tom1dev",
        icon: icons.gitHub,
    },
    {
        label: "Location",
        value: "Auckland, New Zealand",
        icon: icons.location,
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
                        <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5 shrink-0 text-gray-500 group-hover:text-black transition-colors duration-400"
                            aria-hidden="true"
                        >
                            <path d={contact.icon} />
                        </svg>
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
