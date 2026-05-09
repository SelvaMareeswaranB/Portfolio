import Link from "next/link";
import Image from "next/image";

export function NavbarLogo() {
    return (
        <div>
            <Link
                href="/"
                className="relative flex h-10 w-36 items-center focus:outline-none"
                aria-label="Home"
            >
                {/* Wrap the image in a div that we shift down visually using 'translate-y' */}
                <div className="relative h-full w-full translate-y-1.5">
                    {/* Light Mode Logo */}
                    <Image
                        src="https://res.cloudinary.com/dngwbnqjg/image/upload/v1778345079/Untitled_design_lngejg.png"

                        alt="Selva Mareeswaran Logo"
                        fill
                        priority
                        sizes="144px"
                        className="block object-contain object-left transition-all duration-300 dark:hidden"
                    />

                    {/* Dark Mode Logo */}
                    <Image
                        src="https://res.cloudinary.com/dngwbnqjg/image/upload/v1778345174/Untitled_design_1_fung61.png"

                        alt="Selva Mareeswaran Logo"
                        fill
                        priority
                        sizes="144px"
                        className="hidden object-contain object-left transition-all duration-300 dark:block"
                    />
                </div>
            </Link>
        </div>

    );
}