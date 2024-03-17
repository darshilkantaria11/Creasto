import Link from "next/link"

export default function navbar() {
    return (
        <>
            <header className="text-gray-600 body-font">
                <div className="mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        
                        <span className="ml-3 text-xl">Creasto</span>
                    </a>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link className="mr-5 hover:text-gray-900" href="/">Home</Link>
                        <Link className="mr-5 hover:text-gray-900" href="/">About us</Link>
                        <Link className="mr-5 hover:text-gray-900" href="/">Customized sneaker</Link>
                        
                    </nav>
                    <div className="flex items-center border  border-gray-900 xl:rounded-full ">
                <Link className="p-2 pl-4 pr-4" href="/login">Log in</Link>
              </div>
                </div>
            </header>
        </>
    )
}