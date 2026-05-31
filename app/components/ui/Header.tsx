"use client";

import {useEffect, useRef, useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {useLocale, useTranslations} from 'next-intl';
import {usePathname} from 'next/navigation';
import {Menu, X, Globe, Check, ChevronDown, ExternalLink, Bot, TrendingUp, Printer, LayoutDashboard} from 'lucide-react';
import {Button} from './Button';
import {Wrapper} from '../Wrapper';
import {toLocalePath, stripLocaleFromPath} from '@/lib/locale-path';

interface SubItem {
  label: string;
  href: string;
}

interface MegaMenuColumn {
  icon: React.ComponentType<{className?: string}>;
  title: string;
  description: string;
  items: SubItem[];
  badge?: 'partner';
}

interface MenuDropdown {
  items: SubItem[];
}

export function Header() {
  const t = useTranslations('nav');
  const tLang = useTranslations('language');
  const locale = useLocale();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const langMenuRef = useRef<HTMLDivElement | null>(null);
  const cleanPathname = stripLocaleFromPath(pathname || '/');

  const aboutDropdown: MenuDropdown = {
    items: [
      {label: t('aboutUs'), href: toLocalePath(locale, '/sobre-nosotros')},
    ],
  };

  const solutionsColumns: MegaMenuColumn[] = [
    {
      icon: Bot,
      title: t('aiAutomation'),
      description: t('aiAutomationDesc'),
      items: [
        {label: t('aiAutomationRpa'), href: toLocalePath(locale, '/#servicios')},
        {label: t('aiAutomationChatbots'), href: toLocalePath(locale, '/#servicios')},
        {label: t('aiAutomationCrm'), href: toLocalePath(locale, '/#servicios')},
      ],
    },
    {
      icon: Globe,
      title: t('webPresence'),
      description: t('webPresenceDesc'),
      items: [
        {label: t('webPresenceWebsites'), href: toLocalePath(locale, '/#servicios')},
        {label: t('webPresenceEcommerce'), href: toLocalePath(locale, '/#servicios')},
        {label: t('webPresencePhotography'), href: toLocalePath(locale, '/#servicios')},
        {label: t('webPresenceSocialMedia'), href: toLocalePath(locale, '/#servicios')},
      ],
    },
    {
      icon: TrendingUp,
      title: t('digitalMarketing'),
      description: t('digitalMarketingDesc'),
      items: [
        {label: t('digitalMarketingSeo'), href: toLocalePath(locale, '/#servicios')},
        {label: t('digitalMarketingSem'), href: toLocalePath(locale, '/#servicios')},
        {label: t('digitalMarketingAds'), href: toLocalePath(locale, '/#servicios')},
      ],
    },
    {
      icon: Printer,
      title: t('graphicSolutions'),
      description: t('graphicSolutionsDesc'),
      items: [
        {label: t('graphicSolutionsDesign'), href: toLocalePath(locale, '/#servicios')},
        {label: t('graphicSolutionsBusinessCards'), href: toLocalePath(locale, '/#servicios')},
        {label: t('graphicSolutionsGuestBooks'), href: toLocalePath(locale, '/#servicios')},
        {label: t('graphicSolutionsStationery'), href: toLocalePath(locale, '/#servicios')},
        {label: t('graphicSolutionsMerchandising'), href: toLocalePath(locale, '/#servicios')},
      ],
    },
    {
      icon: LayoutDashboard,
      title: t('managementSoftware'),
      description: t('managementSoftwareDesc'),
      badge: 'partner',
      items: [
        {label: t('managementSoftwareRetail'), href: toLocalePath(locale, '/#servicios')},
        {label: t('managementSoftwareHospitality'), href: toLocalePath(locale, '/#servicios')},
        {label: t('managementSoftwareFood'), href: toLocalePath(locale, '/#servicios')},
        {label: t('managementSoftwareBeauty'), href: toLocalePath(locale, '/#servicios')},
      ],
    },
  ];

  const languages = [
    {code: 'es', label: tLang('es'), short: 'ES'},
    {code: 'en', label: tLang('en'), short: 'EN'},
    {code: 'eu', label: tLang('eu'), short: 'EU'},
  ];

  const handlers: Record<string, {type: 'dropdown'; data: MenuDropdown} | {type: 'megamenu'; data: MegaMenuColumn[]}> = {
    aboutUs: {type: 'dropdown', data: aboutDropdown},
    solutions: {type: 'megamenu', data: solutionsColumns},
  };

  const switchLocale = (newLocale: string) => {
    setIsLangOpen(false);

    if (newLocale === locale) {
      return;
    }

    const targetPath = `${toLocalePath(newLocale, cleanPathname)}${window.location.search}${window.location.hash}`;
    document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=31536000`;
    window.location.href = targetPath;
  };

  const clearDropdownTimeout = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
  };

  const handleDropdownEnter = (id: string) => {
    clearDropdownTimeout();
    setActiveDropdown(id);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  useEffect(() => {
    if (!isLangOpen && !activeDropdown) {
      return;
    }

    const handleOutsideClick = (event: MouseEvent) => {
      if (!langMenuRef.current?.contains(event.target as Node) && !headerRef.current?.contains(event.target as Node)) {
        setIsLangOpen(false);
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [isLangOpen, activeDropdown]);

  useEffect(() => {
    if (!isOpen) {
      setActiveDropdown(null);
    }
  }, [isOpen]);

  const navItems = [
    {id: 'home', label: t('home'), href: toLocalePath(locale, '/'), hasDropdown: false},
    {id: 'aboutUs', label: t('aboutUs'), hasDropdown: true},
    {id: 'solutions', label: t('solutions'), hasDropdown: true},
    {id: 'herrikonekt', label: t('herrikonekt'), href: '#', hasDropdown: false, isExternal: true},
    {id: 'blog', label: t('blog'), href: toLocalePath(locale, '/blog'), hasDropdown: false},
  ];

  const closeAll = () => {
    setActiveDropdown(null);
    setIsLangOpen(false);
    setIsOpen(false);
  };

  return (
    <header ref={headerRef} className="relative z-20 border-b border-zinc-200 bg-white">
      <Wrapper className="flex flex-wrap items-center justify-between gap-4 py-5 px-4 sm:px-6 lg:px-10">
        <div className="flex items-center gap-6">
          <Link href={toLocalePath(locale, '/')} aria-label="Ir a inicio">
            <Image src="/logo/adimenai-logo.svg" alt="Adimenai logo" width={140} height={32} className="object-contain" />
          </Link>
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-1 text-[15px] text-gray-500">
              {navItems.map((item) => (
                <li key={item.id}>
                  {item.hasDropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => handleDropdownEnter(item.id)}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <button
                        type="button"
                        onClick={() => setActiveDropdown(activeDropdown === item.id ? null : item.id)}
                        aria-expanded={activeDropdown === item.id}
                        className="inline-flex items-center gap-1 rounded-lg px-3 py-2 transition-colors hover:text-black hover:bg-zinc-100"
                      >
                        {item.label}
                        <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${activeDropdown === item.id ? 'rotate-180' : ''}`} aria-hidden="true" />
                      </button>
                      {activeDropdown === item.id && handlers[item.id]?.type === 'megamenu' && (
                        <div
                          className="absolute left-1/2 -translate-x-1/2 mt-2 w-[560px] rounded-2xl border border-zinc-200 bg-white shadow-xl z-50"
                          onMouseEnter={() => handleDropdownEnter(item.id)}
                          onMouseLeave={handleDropdownLeave}
                        >
                          <div className="grid grid-cols-3 gap-px bg-zinc-100 rounded-2xl overflow-hidden">
                            {(handlers[item.id] as {type: 'megamenu'; data: MegaMenuColumn[]}).data.map((col) => {
                              const Icon = col.icon;
                              return (
                                <div key={col.title} className="bg-white p-3.5">
                                  <div className="flex items-center gap-2 mb-0.5">
                                    <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[#6C47FF]/10 text-[#6C47FF]">
                                      <Icon className="h-3.5 w-3.5" />
                                    </div>
                                    <h3 className="text-xs font-semibold text-black">{col.title}</h3>
                                    {col.badge === 'partner' && (
                                      <span className="inline-flex items-center rounded-full bg-[#6C47FF]/10 px-1.5 py-0.5 text-[7px] font-semibold text-[#6C47FF]">
                                        PARTNER
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-[10px] text-zinc-400 mb-2 ml-8">{col.description}</p>
                                  <ul className="space-y-0.5 ml-8 border-l-[3px] border-[#6C47FF]/20 pl-2">
                                    {col.items.map((sub) => (
                                      <li key={sub.label}>
                                        <Link
                                          href={sub.href}
                                          onClick={closeAll}
                                          className="block rounded-md px-2 py-1 text-xs text-zinc-600 hover:bg-zinc-50 hover:text-[#6C47FF] transition-colors"
                                        >
                                          {sub.label}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                      {activeDropdown === item.id && handlers[item.id]?.type === 'dropdown' && (
                        <div
                          className="absolute left-0 mt-2 w-56 rounded-xl border border-zinc-200 bg-white shadow-lg z-50"
                          onMouseEnter={() => handleDropdownEnter(item.id)}
                          onMouseLeave={handleDropdownLeave}
                        >
                          <div className="py-1">
                            {(handlers[item.id] as {type: 'dropdown'; data: MenuDropdown}).data.items.map((sub) => (
                              <Link
                                key={sub.label}
                                href={sub.href}
                                onClick={closeAll}
                                className="block px-4 py-3 hover:bg-zinc-100 transition-colors"
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href || '#'}
                      onClick={closeAll}
                      className="inline-flex items-center gap-1 rounded-lg px-3 py-2 transition-colors hover:text-black hover:bg-zinc-100"
                    >
                      {item.label}
                      {item.isExternal && <ExternalLink className="h-3 w-3" aria-hidden="true" />}
                    </Link>
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
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-label={isOpen ? t('closeMenu') : t('openMenu')}
            className="inline-flex h-11 w-11 items-center justify-center hover:text-black lg:hidden"
          >
            <span className="sr-only">{t('menu')}</span>
            {isOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </Wrapper>
      <div
        className={`border-t border-zinc-200 bg-white lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
        aria-hidden={!isOpen}
      >
        <Wrapper className="space-y-4 py-5 px-4 sm:px-6">
          <nav>
            <ul className="space-y-4 text-[18px] text-gray-600">
              {navItems.map((item, index) => (
                <li key={item.id}>
                  <Link
                    href={item.href || '#'}
                    onClick={() => {
                      closeAll();
                    }}
                    className={`block rounded-xl px-3 py-2 transition-all duration-500 ease-in-out hover:bg-zinc-100 hover:text-black ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                    style={{transitionDelay: isOpen ? `${index * 60}ms` : '0ms'}}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Button href={toLocalePath(locale, '/contacto')} className={isOpen ? 'opacity-100 transition-opacity duration-500 ease-in-out' : 'opacity-0 transition-opacity duration-500 ease-in-out'}>
            {t('contact')}
          </Button>
        </Wrapper>
      </div>
    </header>
  );
}
