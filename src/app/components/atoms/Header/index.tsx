"use client"

import { Fragment } from "react";
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import classNames from "classnames";
import Button from "@/app/components/atoms/Button";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Loading from "@/app/components/atoms/Loading";

const MenuButtonclassName = "flex max-w-xs space-x-2 px-2 items-center rounded-lg bg-emerald-50/10 hover:bg-emerald-50/30 text-sm text-gray-200 border border-gray-300 shadow-sm focus:outline-none focus:ring-transparent";
const MenuItemsclassName = "absolute right-0 z-10 mt-2 w-48 rounded-lg bg-emerald-950 shadow-lg border border-gray-300 p-1 border-opacity-5 focus:outline-none";

const Header: React.FC = () => {
  const { status, data: session } = useSession();
  const router = useRouter();

  const userEmail = session?.user?.email;

  const userNavigation = [
    {
      name: "My Posts",
      onClick: () => {
        router.push("/my-posts");
      },
    },
    {
      name: "Sign out",
      onClick: () => signOut(),
    },
  ];

  const unAuthorizeNavigation = [
    {
      name: "Sign In",
      variant: "primary" as "primary" | "white",
      onClick: () => signIn(),
    },
    {
      name: "Sign Up",
      variant: "white" as "primary" | "white",
      onClick: () => router.push("/sign-up"),
    },
  ];

  return (
    <Disclosure as="header" className="border-b border-gray-600 bg-emerald-950">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <Link href="/" className="flex items-center">
                  <div className="text-2xl md:text-3xl font-semibold text-white">
                    My Blog
                  </div>
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-2">
                {status === "loading" && <Loading />}
                {status === "unauthenticated" &&
                  unAuthorizeNavigation.map((nav) => (
                    <Button
                      key={nav.name}
                      variant={nav.variant}
                      onClick={nav.onClick}
                    >
                      {nav.name}
                    </Button>
                  ))}
                {status === "authenticated" && (
                  <>
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <MenuButton className={MenuButtonclassName}>
                          <div className="text-lg">{userEmail}</div>
                          <ChevronDownIcon className="h-4 w-4" />
                        </MenuButton>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <MenuItems className={MenuItemsclassName}>
                          {userNavigation.map((item) => (
                            <MenuItem key={item.name}>
                              {({ focus }) => (
                                <button
                                  onClick={item.onClick}
                                  className={classNames(
                                    focus ? "bg-gray-100/10 hover:text-gray-200" : "",
                                    "w-full text-center block px-4 py-2 text-sm text-gray-400 rounded-lg"
                                  )}
                                >
                                  {item.name}
                                </button>
                              )}
                            </MenuItem>
                          ))}
                        </MenuItems>
                      </Transition>
                    </Menu>
                  </>
                )}
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                <DisclosureButton className="inline-flex items-center justify-center rounded-md bg-white/20 p-2 text-gray-400 hover:bg-emerald-400/20 hover:text-gray-500 focus:outline-none focus:ring-1 focus:ring-indigo-50">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="border-t border-gray-200 pb-3 pt-4">
              {status === "loading" && <Loading />}
              {status === "unauthenticated" && (
                <div className="space-y-1">
                  {unAuthorizeNavigation.map((nav) => (
                    <DisclosureButton
                      key={nav.name}
                      as="button"
                      onClick={nav.onClick}
                      className="w-full text-left block px-4 py-2 text-base font-medium text-gray-300 hover:bg-gray-100 hover:text-gray-800"
                    >
                      {nav.name}
                    </DisclosureButton>
                  ))}
                </div>
              )}
              {status === "authenticated" && (
                <>
                  <div className="px-4 text-lg text-white">{userEmail}</div>
                  <div className="mt-3 space-y-1">
                    {userNavigation.map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="button"
                        onClick={item.onClick}
                        className="w-full text-left block px-4 py-2 text-base font-medium text-gray-400 hover:bg-gray-100/20 hover:text-gray-100"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </div>
                </>
              )}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;