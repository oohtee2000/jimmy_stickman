import { HeroDesktop } from "./HeroDesktop";
import { HeroMobile } from "./HeroMobile";

export function HeroSection() {
    return (
        <>
            <div className="hidden md:block">
                <HeroDesktop />
            </div>

            <div className="md:hidden">
                <HeroMobile />
            </div>
        </>
    );
}