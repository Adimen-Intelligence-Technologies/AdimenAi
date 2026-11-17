"use client";

import {useEffect, useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {useLocale, useTranslations} from 'next-intl';
import {usePathname} from 'next/navigation';
import {Menu, X, Globe, Check, ChevronDown} from 'lucide-react';
import {Button} from './Button';
import {Wrapper} from '../Wrapper';
import {toLocalePath, stripLocaleFromPath} from '@/lib/locale-path';
import {buildNavLinks} from '@/lib/nav-links';

export function Header() {
  const t = useTranslations('nav');
  const tLang = useTranslations('language');
  const locale = useLocale();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const cleanPathname = stripLocaleFromPath(pathname || '/');

  useEffect(() => {
    if (isOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [isOpen]);

  const languages = [
    {code: 'es', label: tLang('es'), short: 'ES'},
    {code: 'eu', label: tLang('eu'), short: 'EU'},
  ];

  const switchLocale = (newLocale: string) => {
    setIsLangOpen(false);

    if (newLocale === locale) {
      return;
    }

    const targetPath = `${toLocalePath(newLocale, cleanPathname)}${window.location.search}${window.location.hash}`;
    document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=31536000`;
    window.scrollTo(0, 0);
    window.location.href = targetPath;
  };

  const closeAll = () => {
    setIsLangOpen(false);
    setIsOpen(false);
  };

  const navItems = buildNavLinks(locale, t, true);

  return (
    <>
      <header className="relative z-50 border-b border-zinc-200 bg-white">
        <Wrapper className="flex flex-wrap items-center justify-between gap-4 py-5 px-4 sm:px-6 lg:px-10">
          <div className="flex items-center gap-6">
            <Link href={toLocalePath(locale, '/')} aria-label="Ir a inicio">
              <Image src="/logo/adimenai-logo.png" alt="Adimenai logo" width={150} height={42} className="object-contain" />
            </Link>
            <nav className="hidden xl:block">
              <ul className="flex items-center gap-1 text-sm text-gray-600">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      onClick={closeAll}
                      className="inline-flex items-center whitespace-nowrap rounded-lg px-2 py-2 transition-colors hover:text-black hover:bg-zinc-100"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsLangOpen((prev) => !prev)}
                aria-expanded={isLangOpen}
                aria-label={tLang('switch')}
                className={`inline-flex h-10 items-center gap-2 rounded-full border px-3 text-sm font-medium transition-colors ${
                  isLangOpen
                    ? 'border-zinc-400 bg-zinc-50 text-black'
                    : 'border-zinc-300 hover:border-zinc-400 hover:text-black'
                }`}
              >
                <Globe className="h-4 w-4" aria-hidden="true" />
                <span>{locale.toUpperCase()}</span>
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ease-out ${isLangOpen ? 'rotate-180' : 'rotate-0'}`}
                  aria-hidden="true"
                />
              </button>
              <div
                className={`absolute right-0 mt-2 w-52 origin-top-right rounded-xl border border-zinc-200 bg-white shadow-lg z-50 transition-all duration-200 ease-out ${
                  isLangOpen
                    ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                }`}
              >
                <div className="py-1">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => switchLocale(lang.code)}
                      className={`flex w-full items-center justify-between gap-3 px-4 py-3 text-left transition-colors hover:bg-zinc-100 ${locale === lang.code ? 'bg-zinc-50 font-medium' : ''}`}
                    >
                      <span className="flex items-center gap-3">
                        <span className="inline-flex h-4 w-7 items-center justify-center rounded border border-zinc-300 text-[10px] font-semibold leading-none">
                          {lang.short}
                        </span>
                        <span>{lang.label}</span>
                      </span>
                      {locale === lang.code ? <Check className="h-4 w-4 text-[#6C47FF]" aria-hidden="true" /> : null}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <Button href={toLocalePath(locale, '/contacto')} color="white" className="text-sm px-4 py-1.5 lg:text-base lg:px-6 lg:py-1.5">{t('contact')}</Button>
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-expanded={isOpen}
              aria-label={isOpen ? t('closeMenu') : t('openMenu')}
              className="inline-flex h-10 w-10 items-center justify-center hover:text-black xl:hidden"
            >
              <span className="sr-only">{t('menu')}</span>
              {isOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            </button>
          </div>
        </Wrapper>
      </header>
      <div
        className={`fixed inset-x-0 top-0 z-40 h-screen bg-white overflow-y-auto transition-opacity duration-300 ease-in-out xl:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <Wrapper className="space-y-4 px-4 pt-24 pb-10 sm:px-6">
          <nav>
            <ul className="space-y-2 text-lg text-gray-700">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    onClick={closeAll}
                    className="block rounded-xl px-4 py-3.5 transition-colors hover:bg-zinc-100 hover:text-black"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Button href={toLocalePath(locale, '/contacto')} color="white" className="w-full text-center text-lg py-3.5">{t('contact')}</Button>
        </Wrapper>
      </div>
    </>
  );
}
