"use client"

import { useRouter } from "next/navigation";
import type { NextPage} from "next";


const Navbar: NextPage = () => {
    const router = useRouter();

    const homeHandler = (event: React.MouseEvent<HTMLButtonElement>):void => {
        router.push('../../../pages/landing');
    }
    const loginHandler = (event: React.MouseEvent<HTMLButtonElement>): void => {
        router.push('../../../pages/auth/login');
    }

    const regHandler = (event: React.MouseEvent<HTMLButtonElement>): void => {
        router.push('../../../pages/auth/register');
    }

    return (
        <>
        <nav className="w-full flex h-[4rem] bg-white   sticky">
           
        

           
          

        </nav>
        </>
    )
}

export default Navbar;