"use client";

import {useEffect, useRef, useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {useLocale, useTranslations} from 'next-intl';
import {usePathname} from 'next/navigation';
import {Menu, X, Globe, Check, ChevronDown} from 'lucide-react';
import {Button} from './Button';
import {Wrapper} from '../Wrapper';
import {toLocalePath, stripLocaleFromPath} from '@/lib/locale-path';

export function Header() {
  const t = useTranslations('nav');
  const tLang = useTranslations('language');
  const locale = useLocale();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const solutionsRef = useRef<HTMLDivElement | null>(null);
  const langMenuRef = useRef<HTMLDivElement | null>(null);
  const cleanPathname = stripLocaleFromPath(pathname || '/');

  const solutionsSubmenu = [
    {label: t('automations'), href: toLocalePath(locale, '/#servicios')},
    {label: t('aiChatbots'), href: toLocalePath(locale, '/#servicios')},
    {label: t('crmCms'), href: toLocalePath(locale, '/#servicios')},
    {label: t('ecommerce'), href: toLocalePath(locale, '/#servicios')},
  ];

  const menuItems = [
    {label: t('home'), href: toLocalePath(locale, '/')},
    {label: t('about'), href: toLocalePath(locale, '/sobre-nosotros')},
    {label: t('solutions'), href: toLocalePath(locale, '/#servicios')},
    {label: t('news'), href: toLocalePath(locale, '/blog')},
  ];

  const languages = [
    {code: 'es', label: tLang('es'), short: 'ES'},
    {code: 'en', label: tLang('en'), short: 'EN'},
    {code: 'eu', label: tLang('eu'), short: 'EU'},
  ];

  const switchLocale = (newLocale: string) => {
    setIsLangOpen(false);

    if (newLocale === locale) {
      return;
    }

    const targetPath = `${toLocalePath(newLocale, cleanPathname)}${window.location.search}${window.location.hash}`;
    document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=31536000`;
    window.location.href = targetPath;
  };

  useEffect(() => {
    if (!isLangOpen && !isSolutionsOpen) {
      return;
    }

    const handleOutsideClick = (event: MouseEvent) => {
      if (!langMenuRef.current?.contains(event.target as Node) && !solutionsRef.current?.contains(event.target as Node)) {
        setIsLangOpen(false);
        setIsSolutionsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [isLangOpen, isSolutionsOpen]);

  return (
    <header className="relative z-20 border-b border-zinc-200 bg-white">
      <Wrapper className="flex flex-wrap items-center justify-between gap-4 py-5 px-4 sm:px-6 lg:px-10">
        <div className="flex items-baseline gap-6">
          <Link href={toLocalePath(locale, '/')} aria-label="Ir a inicio">
            <Image src="/logo/adimenai-logo.svg" alt="Adimenai logo" width={140} height={32} className="object-contain" />
          </Link>
          <nav className="hidden lg:block">
            <ul className="flex flex-wrap items-center gap-6 text-[18px] text-gray-500">
              {menuItems.map((item) => (
                <li key={item.label}>
                  {item.label === t('solutions') ? (
                    <div className="relative" ref={solutionsRef}>
                      <button
                        type="button"
                        onClick={() => setIsSolutionsOpen((prev) => !prev)}
                        aria-expanded={isSolutionsOpen}
                        className="inline-flex items-center gap-1 transition-colors hover:text-black"
                      >
                        {item.label}
                        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isSolutionsOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                      </button>
                      {isSolutionsOpen && (
                        <div className="absolute left-0 mt-2 w-56 rounded-xl border border-zinc-200 bg-white shadow-lg z-50">
                          <div className="py-1">
                            {solutionsSubmenu.map((subitem) => (
                              <Link
                                key={subitem.label}
                                href={subitem.href}
                                onClick={() => setIsSolutionsOpen(false)}
                                className="block px-4 py-3 hover:bg-zinc-100 transition-colors"
                              >
                                {subitem.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link href={item.href} className="transition-colors hover:text-black">{item.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden lg:block">
            <Button href={toLocalePath(locale, '/contacto')}>{t('contact')}</Button>
          </div>
          <div className="relative" ref={langMenuRef}>
            <button
              type="button"
              onClick={() => setIsLangOpen((prev) => !prev)}
              aria-expanded={isLangOpen}
              aria-label={tLang('switch')}
              className="inline-flex h-11 items-center gap-2 rounded-full border border-zinc-300 px-3 text-sm font-medium hover:border-zinc-400 hover:text-black transition-colors"
            >
              <Globe className="h-4 w-4" aria-hidden="true" />
              <span>{locale.toUpperCase()}</span>
            </button>
            {isLangOpen && (
              <div className="absolute right-0 mt-2 w-52 rounded-xl border border-zinc-200 bg-white shadow-lg z-50">
                <div className="py-1">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => switchLocale(lang.code)}
                      className={`flex w-full items-center justify-between gap-3 px-4 py-3 text-left hover:bg-zinc-100 transition-colors ${locale === lang.code ? 'bg-zinc-50 font-medium' : ''}`}
                    >
                      <span className="flex items-center gap-3">
                        <span className="inline-flex h-6 w-8 items-center justify-center rounded border border-zinc-300 text-xs font-semibold">
                          {lang.short}
                        </span>
                        <span>{lang.label}</span>
                      </span>
                      {locale === lang.code ? <Check className="h-4 w-4" aria-hidden="true" /> : null}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          <button type="button" onClick={() => setIsOpen((prev) => !prev)} aria-expanded={isOpen} aria-label={isOpen ? t('closeMenu') : t('openMenu')} className="inline-flex h-11 w-11 items-center justify-center hover:text-black lg:hidden">
            <span className="sr-only">{t('menu')}</span>
            {isOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </Wrapper>
      <div className={`border-t border-zinc-200 bg-white lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`} aria-hidden={!isOpen}>
        <Wrapper className="space-y-4 py-5 px-4 sm:px-6">
          <nav>
            <ul className="space-y-4 text-[18px] text-gray-600">
              {menuItems.map((item, index) => (
                <li key={item.label}>
                  {item.label === t('solutions') ? (
                    <div>
                      <button
                        type="button"
                        onClick={() => setIsSolutionsOpen((prev) => !prev)}
                        className={`flex w-full items-center justify-between rounded-xl px-3 py-2 transition-all duration-500 ease-in-out hover:bg-zinc-100 hover:text-black ${isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
                        style={{transitionDelay: isOpen ? `${index * 60}ms` : "0ms"}}
                      >
                        <span>{item.label}</span>
                        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isSolutionsOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                      </button>
                      {isSolutionsOpen && (
                        <ul className="ml-4 mt-2 space-y-2 border-l-2 border-zinc-200 pl-4">
                          {solutionsSubmenu.map((subitem) => (
                            <li key={subitem.label}>
                              <Link
                                href={subitem.href}
                                onClick={() => {
                                  setIsSolutionsOpen(false);
                                  setIsOpen(false);
                                }}
                                className="block rounded-lg px-3 py-2 hover:bg-zinc-100 transition-colors"
                              >
                                {subitem.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link href={item.href} className={`block rounded-xl px-3 py-2 transition-all duration-500 ease-in-out hover:bg-zinc-100 hover:text-black ${isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`} style={{transitionDelay: isOpen ? `${index * 60}ms` : "0ms"}} onClick={() => setIsOpen(false)}>
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <Button href={toLocalePath(locale, '/contacto')} className={isOpen ? "opacity-100 transition-opacity duration-500 ease-in-out" : "opacity-0 transition-opacity duration-500 ease-in-out"}>
            {t('contact')}
          </Button>
        </Wrapper>
      </div>
    </header>
  );
}