"use client";

import {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {useLocale, useTranslations} from 'next-intl';
import {usePathname, useRouter} from 'next/navigation';
import {Menu, X, Globe} from 'lucide-react';
import {Button} from './Button';
import {Wrapper} from '../Wrapper';

export function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const menuItems = [
    {label: t('services'), href: '/#servicios'},
    {label: t('useCases'), href: '/#comercios'},
    {label: 'Blog', href: '/blog'},
  ];

  const languages = [
    {code: 'es', label: 'Espanol', flag: 'ES'},
    {code: 'en', label: 'English', flag: 'EN'},
  ];

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.push(segments.join('/') || '/');
    setIsLangOpen(false);
  };

  return (
    <header className="relative z-20 border-b border-zinc-200 bg-white">
      <Wrapper className="flex flex-wrap items-center justify-between gap-4 py-5 px-4 sm:px-6 lg:px-10">
        <div className="flex items-baseline gap-6">
          <Link href="/" aria-label="Ir a inicio">
            <Image src="/logo/adimenai-logo.svg" alt="Adimenai logo" width={140} height={32} className="object-contain" />
          </Link>
          <nav className="hidden lg:block">
            <ul className="flex flex-wrap items-center gap-6 text-[18px] text-gray-500">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="transition-colors hover:text-black">{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden lg:block">
            <Button href="/#contacto">Contactar</Button>
          </div>
          <div className="relative">
            <button type="button" onClick={() => setIsLangOpen((prev) => !prev)} aria-expanded={isLangOpen} aria-label="Cambiar idioma" className="inline-flex h-11 w-11 items-center justify-center hover:text-black transition-colors">
              <Globe className="h-5 w-5" aria-hidden="true" />
            </button>
            {isLangOpen && (
              <div className="absolute right-0 mt-2 w-40 rounded-xl border border-zinc-200 bg-white shadow-lg z-50">
                <div className="py-1">
                  {languages.map((lang) => (
                    <button key={lang.code} onClick={() => switchLocale(lang.code)} className={`flex w-full items-center gap-3 px-4 py-3 text-left hover:bg-zinc-100 transition-colors ${locale === lang.code ? 'bg-zinc-50 font-medium' : ''}`}>
                      <span className="text-lg">{lang.flag}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          <button type="button" onClick={() => setIsOpen((prev) => !prev)} aria-expanded={isOpen} aria-label={isOpen ? "Cerrar menu" : "Abrir menu"} className="inline-flex h-11 w-11 items-center justify-center hover:text-black lg:hidden">
            <span className="sr-only">Menu</span>
            {isOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </Wrapper>
      <div className={`border-t border-zinc-200 bg-white lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-130 opacity-100" : "max-h-0 opacity-0"}`} aria-hidden={!isOpen}>
        <Wrapper className="space-y-4 py-5 px-4 sm:px-6">
          <nav>
            <ul className="space-y-4 text-[18px] text-gray-600">
              {menuItems.map((item, index) => (
                <li key={item.label}>
                  <Link href={item.href} className={`block rounded-xl px-3 py-2 transition-all duration-500 ease-in-out hover:bg-zinc-100 hover:text-black ${isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`} style={{transitionDelay: isOpen ? `${index * 60}ms` : "0ms"}} onClick={() => setIsOpen(false)}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Button href="/#contacto" className={isOpen ? "opacity-100 transition-opacity duration-500 ease-in-out" : "opacity-0 transition-opacity duration-500 ease-in-out"}>
            Contactar
          </Button>
        </Wrapper>
      </div>
    </header>
  );
}