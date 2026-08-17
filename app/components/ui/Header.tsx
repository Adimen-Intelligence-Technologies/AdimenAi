"use client";

import {useEffect, useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {useLocale, useTranslations} from 'next-intl';
import {usePathname} from 'next/navigation';
import {Menu, X, Globe, Check, ChevronDown, ExternalLink, Bot, TrendingUp, Printer, LayoutDashboard, Smartphone} from 'lucide-react';
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
        {label: t('managementSoftwareHospitality'), href: toLocalePath(locale, '/hosteleria')},
        {label: t('managementSoftwareFood'), href: toLocalePath(locale, '/#servicios')},
        {label: t('managementSoftwareBeauty'), href: toLocalePath(locale, '/#servicios')},
      ],
    },
    {
      icon: Smartphone,
      title: t('herrikonektApps'),
      description: t('herrikonektAppsDesc'),
      items: [
        {label: t('herrikonektAppsAndroid'), href: toLocalePath(locale, '/#servicios')},
        {label: t('herrikonektAppsIos'), href: toLocalePath(locale, '/#servicios')},
      ],
    },
  ];

  const languages = [
    {code: 'es', label: tLang('es'), short: 'ES', flag: '/spanish.svg'},
    {code: 'en', label: tLang('en'), short: 'EN', flag: '/english.svg'},
    {code: 'eu', label: tLang('eu'), short: 'EU', flag: '/basque.svg'},
  ];

  const megaMenuColumns = solutionsColumns;

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

  type NavItem =
    | {id: string; label: string; href: string; hasDropdown: false; isExternal?: boolean}
    | {id: string; label: string; hasDropdown: true; handler: MegaMenuColumn[]; dropdownType: 'megamenu'}
    | {id: string; label: string; hasDropdown: true; handler: MenuDropdown; dropdownType: 'dropdown'};

  const navItems: NavItem[] = [
    {id: 'home', label: t('home'), href: toLocalePath(locale, '/'), hasDropdown: false},
    {id: 'solutions', label: t('solutions'), hasDropdown: true, handler: megaMenuColumns, dropdownType: 'megamenu'},
    {id: 'herrikonekt', label: t('herrikonekt'), href: 'https://www.herrikonekt.com', hasDropdown: false, isExternal: true},
    {id: 'blog', label: t('blog'), href: toLocalePath(locale, '/blog'), hasDropdown: false},
  ];

  return (
    <>
      <header className="relative z-50 border-b border-zinc-200 bg-white">
        <Wrapper className="flex flex-wrap items-center justify-between gap-4 py-5 px-4 sm:px-6 lg:px-10">
          <div className="flex items-center gap-6">
            <Link href={toLocalePath(locale, '/')} aria-label="Ir a inicio">
              <Image src="/logo/adimenai-logo.png" alt="Adimenai logo" width={150} height={42} className="object-contain" />
            </Link>
            <nav className="hidden lg:block">
              <ul className="flex items-center gap-1 text-base text-gray-600">
                {navItems.map((item) => (
                  <li key={item.id}>
                    {item.hasDropdown ? (
                      <div className="group relative">
                        <button
                          type="button"
                          className="inline-flex items-center gap-1  px-3 py-2 transition-colors hover:text-black hover:bg-zinc-100"
                        >
                          {item.label}
                          <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" aria-hidden="true" />
                        </button>
                        {item.dropdownType === 'megamenu' && (
                          <div className="absolute left-1/2 -translate-x-[calc(50%-5rem)] mt-2 w-230 border border-zinc-200 bg-white shadow-xl z-50 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">
                            <div className="grid grid-cols-3 gap-px bg-zinc-100 overflow-hidden">
                              {(item.handler as MegaMenuColumn[]).map((col) => {
                                const Icon = col.icon;
                                return (
                                  <div key={col.title} className="bg-white p-5">
                                    <div className="flex items-center gap-1">
                                      <div className="flex h-7 w-7 items-center justify-center bg-[#6C47FF]/10 text-[#6C47FF]">
                                        <Icon className="h-4 w-4" />
                                      </div>
                                      <h3 className="text-base font-semibold text-black">{col.title}</h3>
                                      {col.badge === 'partner' && (
                                        <span className="inline-flex items-center bg-[#6C47FF]/20 px-2 py-1 text-[6px] font-semibold text-[#6C47FF]">
                                          PARTNER
                                        </span>
                                      )}
                                    </div>
                                    <p className="text-xs text-zinc-400 mb-2 ml-8">{col.description}</p>
                                    <ul className="ml-8 border-l-2 border-[#6C47FF]">
                                      {col.items.map((sub) => (
                                        <li key={sub.label}>
                                          <Link
                                            href={sub.href}
                                            onClick={closeAll}
                                            className="block rounded-md px-1 py-0.5 text-sm text-zinc-600 hover:bg-zinc-50 hover:text-[#6C47FF] transition-colors"
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
                        {item.dropdownType === 'dropdown' && (
                          <div className="absolute left-0 mt-2 w-56  border border-zinc-200 bg-white shadow-lg z-50 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">
                            <div className="p-3">
                              <div className="py-1">
                                {(item.handler as MenuDropdown).items.map((sub) => (
                                  <Link
                                    key={sub.label}
                                    href={sub.href}
                                    onClick={closeAll}
                                    className="block px-4 py-2.5 text-sm hover:bg-zinc-100 rounded-lg transition-colors"
                                  >
                                    {sub.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href || '#'}
                        target={item.isExternal ? "_blank" : undefined}
                        rel={item.isExternal ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center gap-1 rounded-lg px-3 py-2 transition-colors hover:text-black hover:bg-zinc-100"
                      >
                        {item.label}
                        {item.isExternal && <ExternalLink className="h-3 w-3" aria-hidden="true" />}
                        {item.id === 'herrikonekt' && (
                          <span className="inline-flex items-center  bg-[#6C47FF]/10 px-1.5 py-0.5 text-[9px] font-semibold text-[#6C47FF] ml-0.5">
                            APP
                          </span>
                        )}
                      </Link>
                    )}
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
                {(() => {
                  const current = languages.find((l) => l.code === locale);
                  return current?.flag ? (
                    <Image src={current.flag} alt="" width={24} height={16} className="h-4 w-6 rounded-sm object-cover" />
                  ) : null;
                })()}
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
                        <span className="inline-flex h-4 w-6 items-center justify-center overflow-hidden rounded border border-zinc-300 text-xs font-semibold">
                          {lang.flag ? (
                            <Image src={lang.flag} alt="" width={24} height={16} className="h-full w-full object-cover" />
                          ) : (
                            lang.short
                          )}
                        </span>
                        <span>{lang.label}</span>
                      </span>
                      {locale === lang.code ? <Check className="h-4 w-4 text-[#6C47FF]" aria-hidden="true" /> : null}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <Button href={toLocalePath(locale, '/contacto')} color="white" className="text-sm px-4 py-2 lg:text-base lg:px-6 lg:py-2.5">{t('contact')}</Button>
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-expanded={isOpen}
              aria-label={isOpen ? t('closeMenu') : t('openMenu')}
              className="inline-flex h-10 w-10 items-center justify-center hover:text-black lg:hidden"
            >
              <span className="sr-only">{t('menu')}</span>
              {isOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            </button>
          </div>
        </Wrapper>
      </header>
      <div
        className={`fixed inset-x-0 top-0 z-40 h-screen bg-white overflow-y-auto transition-opacity duration-300 ease-in-out lg:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <Wrapper className="space-y-4 px-4 pt-24 pb-10 sm:px-6">
          <nav>
            <ul className="space-y-2 text-lg text-gray-700">
              <li>
                <Link href={toLocalePath(locale, '/')} onClick={closeAll} className="flex items-center rounded-xl px-4 py-3.5 hover:bg-zinc-100 hover:text-black transition-colors">
                  {t('home')}
                </Link>
              </li>
              <li>
                <MobileAccordion title={t('solutions')} items={megaMenuColumns} closeAll={closeAll} />
              </li>
              <li>
                <Link href="https://www.herrikonekt.com" target="_blank" rel="noopener noreferrer" onClick={closeAll} className="flex items-center gap-2 rounded-xl px-4 py-3.5 hover:bg-zinc-100 hover:text-black transition-colors">
                  {t('herrikonekt')}
                  <span className="inline-flex items-center rounded-full bg-[#6C47FF]/10 px-2 py-0.5 text-xs font-semibold text-[#6C47FF]">APP</span>
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </li>
              <li>
                <Link href={toLocalePath(locale, '/blog')} onClick={closeAll} className="flex items-center rounded-xl px-4 py-3.5 hover:bg-zinc-100 hover:text-black transition-colors">
                  {t('blog')}
                </Link>
              </li>
            </ul>
          </nav>
          <Button href={toLocalePath(locale, '/contacto')} color="white" className="w-full text-center text-lg py-3.5">{t('contact')}</Button>
        </Wrapper>
      </div>
    </>
  );
}

type AccordionItem = {
  icon: React.ComponentType<{className?: string}>;
  title: string;
  description: string;
  badge?: 'partner';
  items: {label: string; href: string}[];
};

function MobileAccordion({
  title,
  items,
  closeAll,
}: {
  title: string;
  items: AccordionItem[];
  closeAll: () => void;
}) {
  const [openSection, setOpenSection] = useState<string | null>(null);

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpenSection(openSection === title ? null : title)}
        aria-expanded={openSection === title}
        className="flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-left hover:bg-zinc-100 hover:text-black transition-colors"
      >
        <span>{title}</span>
        <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${openSection === title ? 'rotate-180' : ''}`} />
      </button>
      {openSection === title && (
        <div className="mt-2 space-y-4 rounded-xl bg-zinc-50 p-4">
          {items.map((section) => {
            const Icon = section.icon;
            return (
              <div key={section.title}>
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#6C47FF]/10 text-[#6C47FF]">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="text-base font-semibold text-black">{section.title}</span>
                  {section.badge === 'partner' && (
                    <span className="inline-flex items-center rounded-full bg-[#6C47FF]/10 px-2 py-0.5 text-[10px] font-semibold text-[#6C47FF]">
                      PARTNER
                    </span>
                  )}
                </div>
                {section.description && (
                  <p className="mt-1 ml-10 text-sm text-zinc-500">{section.description}</p>
                )}
                <ul className="mt-2 ml-10 space-y-1 border-l-2 border-[#6C47FF]/40 pl-3">
                  {section.items.map((sub) => (
                    <li key={sub.label}>
                      <Link
                        href={sub.href}
                        onClick={closeAll}
                        className="block rounded-md py-1.5 text-base text-zinc-700 hover:text-[#6C47FF] transition-colors"
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
      )}
    </div>
  );
}
