import Image from "next/image";
import LocationIcon from "/public/icons/footer-location.svg";
import EmailIcon from "/public/icons/footer-mail.svg";
import CallIcon from "/public/icons/footer-call.svg";
import Link from "next/link";

export default function FooterLinks() {
  return (
    <div>
      <div className="flex flex-wrap gap-2 lg:gap-14 justify-between lg:justify-center mb-6 lg:mb-7">
        <Link href="/" rel="noreferrer">
          Home
        </Link>
        <Link
          href="https://indigo-tin-97a.notion.site/Fitted-Support-Center-191dcd17279041949527825deb2624e7"
          target="_blank"
          rel="noreferrer"
        >
          Support
        </Link>
        <Link
          href="https://store.fitted.ng/jobs/"
          target="_blank"
          rel="noreferrer"
        >
          Careers
        </Link>
      </div>

      <div className="flex flex-col gap-3 lg:flex-row lg:justify-center lg:gap-x-10 lg:gap-y-4 lg:flex-wrap">
        <Link
          href="https://goo.gl/maps/Lq9D4pmACKHXBnLb6"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3"
        >
          <Image src={LocationIcon} alt="location icon" loading="lazy" />
          <p>
            AT & D Court, General Ogomudia Street, Lekki Phase 1, Lagos, Nigeria
          </p>
        </Link>

        <Link href="mailto:hello@fitted.ng" className="flex items-center gap-3">
          <Image src={EmailIcon} alt="location icon" loading="lazy" />
          <p>hello@fitted.ng</p>
        </Link>

        <Link href="tel:+2349083680999" className="flex items-center gap-3">
          <Image src={CallIcon} alt="location icon" loading="lazy" />
          <p>+234 908 368 0999</p>
        </Link>
      </div>
    </div>
  );
}
