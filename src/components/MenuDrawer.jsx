'use client'
import { authClient } from "@/lib/auth-client";
import { Bars, House, Person } from "@gravity-ui/icons";
import { Button, Drawer, useOverlayState } from "@heroui/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineUserPlus } from "react-icons/hi2";
import { IoAddCircleOutline, IoLogOutOutline } from "react-icons/io5";
import { LuTicketsPlane } from "react-icons/lu";
import { toast } from "react-toastify";

const MenuDrawer = ({isScrolled}) => {
    const pathName = usePathname();
    const isHome = pathName === '/';
    const router = useRouter();
    const { data: session, isPending } = authClient.useSession()
    const user = session?.user;

    // controls the drawer open/close state
    const state = useOverlayState({ defaultOpen: false });

    const handleLogout = async () => {
        const { data } = await authClient.signOut();

        if (data) {
            toast.success('LogOut successfull', {
                autoClose: 2000,
                position: 'top-center'
            })
        } else {
            toast.error(`Something went wrong!`)
        }
        state.close(); // close drawer on logout
        router.push('/')
    }

    const navItems = [
        { icon: House, label: "Home", href: "/" },
        { icon: HiOutlineLocationMarker, label: "Destinations", href: "/destinations" },
        { icon: LuTicketsPlane, label: "My Bookings", href: "/bookings" },
        { icon: IoAddCircleOutline, label: "Add Destinations", href: "/add-destination" },
        { icon: Person, label: "Profile", href: "/profile" },

        ...(user
            ? [
                {
                    icon: IoLogOutOutline,
                    label: "Logout",
                    onClick: handleLogout,
                },
            ]
            : [
                {
                    icon: HiOutlineUserPlus,
                    label: "Sign Up",
                    href: "/signUp",
                },
                {
                    icon: Person,
                    label: "Login",
                    href: "/login",
                },
            ]),
    ];

    return (
        <Drawer state={state}>
            <Button className={`bg-transparent `}>
                <Bars className={`${isHome ? `${isScrolled? 'text-black!' : 'text-white'}` : 'text-black'}`} />
            </Button>
            <Drawer.Backdrop>
                <Drawer.Content placement="left">
                    <Drawer.Dialog>
                        <Drawer.CloseTrigger />
                        <Drawer.Header>
                            <Drawer.Heading>Navigation</Drawer.Heading>
                        </Drawer.Header>
                        <Drawer.Body>
                            <nav className="flex flex-col gap-1">
                                {navItems.map((item) => {

                                    if (item.onClick) {
                                        return (
                                            <button
                                                key={item.label}
                                                onClick={item.onClick}
                                                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default cursor-pointer"
                                            >
                                                <item.icon className="size-5 text-muted"></item.icon>
                                                {item.label}
                                            </button>
                                        )
                                    }

                                    return <Link
                                        href={item.href}
                                        key={item.label}
                                        onClick={() => state.close()}
                                        className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
                                    >
                                        <item.icon className="size-5 text-muted" />
                                        {item.label}
                                    </Link>
                                })}
                            </nav>
                        </Drawer.Body>
                    </Drawer.Dialog>
                </Drawer.Content>
            </Drawer.Backdrop>
        </Drawer>
    );
}

export default MenuDrawer