import { LinkedinIcon, TwitterIcon } from "lucide-react";
import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";

export const FooterSection = () => {
  // Navigation links data
  const navLinks = [
    { title: "About us", href: "#" },
    { title: "Services", href: "#" },
    { title: "Use Cases", href: "#" },
    { title: "Pricing", href: "#" },
    { title: "Blog", href: "#" },
  ];

  // Contact information data
  const contactInfo = [
    { label: "Email", value: "info@indieguru.com" },
    { label: "Phone", value: "555-567-8901" },
    { label: "Address", value: "Delhi 12345" },
  ];

  return (
    <footer className="w-full flex flex-col items-start gap-[50px] px-36 pt-[55px] pb-[50px] bg-[#5083be] rounded-[45px_45px_0px_0px]">
      <div className="flex flex-col items-start gap-[66px] w-full">
        {/* Top section with logo, navigation and social icons */}
        <div className="flex w-full items-center justify-between">
          {/* Logo */}
          <div className="w-32">
            <h2 className="[font-family:'Afacad',Helvetica] font-medium text-white text-[32px]">
              IndieGuru
            </h2>
          </div>

          {/* Navigation links */}
          <nav className="flex items-start gap-10">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="[font-family:'Space_Grotesk',Helvetica] font-normal text-white text-lg underline"
              >
                {link.title}
              </a>
            ))}
          </nav>

          {/* Social media icons */}
          <div className="flex items-start gap-5">
            <div className="w-[30px] h-[30px] bg-white rounded-[15px] flex items-center justify-center">
              <LinkedinIcon className="w-[15px] h-[15px]" />
            </div>

            <img
              className="w-[30px] h-[30px]"
              alt="Social icon"
              src="public/social-icon.svg"
            />

            <div className="w-[30px] h-[30px] bg-white rounded-[15px] flex items-center justify-center">
              <TwitterIcon className="w-[18px] h-3.5" />
            </div>
          </div>
        </div>

        {/* Middle section with contact info and subscription */}
        <div className="flex items-start justify-between w-full">
          {/* Contact information */}
          <div className="flex flex-col items-start gap-[27px]">
            <div className="flex flex-col items-start">
              <Badge className="px-[7px] py-0 bg-[#ffe75c] text-black rounded-[7px]">
                <span className="font-h-4 font-[number:var(--h-4-font-weight)] text-[length:var(--h-4-font-size)] tracking-[var(--h-4-letter-spacing)] leading-[var(--h-4-line-height)] [font-style:var(--h-4-font-style)]">
                  Contact us:
                </span>
              </Badge>
            </div>

            <div className="flex flex-col items-start gap-5">
              {contactInfo.map((item, index) => (
                <p
                  key={index}
                  className="font-p font-[number:var(--p-font-weight)] text-white text-[length:var(--p-font-size)] tracking-[var(--p-letter-spacing)] leading-[var(--p-line-height)] [font-style:var(--p-font-style)]"
                >
                  {item.label}: {item.value}
                </p>
              ))}
            </div>
          </div>

          {/* Subscription form */}
          <Card className="flex items-start gap-5 px-10 py-[58px] bg-[#292a32] rounded-[14px] border-none">
            <div className="flex items-center gap-2.5">
              <Input
                placeholder="Email"
                className="w-[285px] px-[35px] py-[22px] bg-transparent text-white border border-solid border-white rounded-[14px]"
              />
              <Button className="px-[35px] py-5 bg-[#ffe75c] text-black rounded-[14px] hover:bg-[#ffe75c]/90">
                <span className="font-normal text-center leading-7 [font-family:'Space_Grotesk',Helvetica] text-black text-xl tracking-[0]">
                  Subscribe to notifications
                </span>
              </Button>
            </div>
          </Card>
        </div>
      </div>

      {/* Bottom section with divider and copyright */}
      <div className="flex flex-col items-start gap-[50px] w-full">
        <Separator className="w-full h-px bg-white" />

        <div className="flex items-start gap-10">
          <p className="[font-family:'Space_Grotesk',Helvetica] font-normal text-white text-lg leading-7">
            © 2023 IndieGuru. All Rights Reserved.
          </p>

          <a
            href="#"
            className="[font-family:'Space_Grotesk',Helvetica] font-normal text-white text-lg leading-7 underline"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;