import Link from "next/link";
import Image from "next/image";
import Logo from '../../../public/logos/logo.png'

const Brand = () => (
    <Link href="/">
        {/* <h1>Infincode</h1> */}
        <Image
            src={Logo}
            alt="Infincode"
            width={150}
            height={150}
        />
    </Link>
)
export default Brand