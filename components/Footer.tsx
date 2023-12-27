import Link from 'next/link';
import Image from 'next/image';
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants';

const Footer = () => {
    return (
        <footer className="flexCenter sm:mb-16 mb-8" id='footer'>
            <div className="padding-container max-container flex w-full flex-col sm:gap-14 gap-10">
                <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
                    <Link href="/" className="mb-10">
                        <Image src="logo.svg" alt="logo" width={74} height={29} />
                    </Link>

                    <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
                        {FOOTER_LINKS.map((columns, i) => (
                            <FooterColumn title={columns.title} key={i}>
                                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                                    {columns.links.map((link) => (
                                        <Link href="/#" key={link} className='transition hover:scale-105'>
                                            {link}
                                        </Link>
                                    ))}
                                </ul>
                            </FooterColumn>
                        ))}

                        <div className="flex flex-col gap-5">
                            <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                                {FOOTER_CONTACT_INFO.links.map((link) => (
                                    <span key={link.label} className="flex gap-4 md:flex-col lg:flex-row" >
                                        <p className="whitespace-nowrap">
                                            {link.label}:
                                        </p>
                                        <p className="medium-14 whitespace-nowrap text-blue-70">
                                            {link.value}
                                        </p>
                                    </span>
                                ))}
                            </FooterColumn>
                        </div>

                        <div className="flex flex-col gap-5">
                            <FooterColumn title={SOCIALS.title}>
                                <ul className="regular-14 flex gap-4 text-gray-30">
                                    {SOCIALS.links.map((link) => (
                                        <Link href="/#" key={link} className='transition hover:scale-110'>
                                            <Image src={link} alt="logo" width={24} height={24} />
                                        </Link>
                                    ))}
                                </ul>
                            </FooterColumn>
                        </div>
                    </div>
                </div>

                <div className="border bg-gray-20" />
                <p className="regular-14 w-full text-center text-gray-30">2023 HiLink | All rights reserved</p>
            </div>
        </footer>
    )
}

type FooterColumnProps = {
    title: string;
    children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
    return (
        <div className="flex flex-col gap-5">
            <h4 className="bold-18 whitespace-nowrap">{title}</h4>
            {children}
        </div>
    )
}

export default Footer;