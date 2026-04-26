import React from 'react';
import Image from 'next/image';
import Container from '../Container/Container';

export default function Footer() {
  const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com', icon: '/images/icons/facebook.png' },
    { name: 'Instagram', href: 'https://instagram.com', icon: '/images/icons/instagram.png' },
    { name: 'Twitter', href: 'https://twitter.com', icon: '/images/icons/twitter.png' },
    { name: 'Youtube', href: 'https://youtube.com', icon: '/images/icons/youtube.png' },
    { name: 'Telegram', href: 'https://telegram.com', icon: '/images/icons/telegram.png' },
  ];

  return (
    <footer className="w-full py-7">
      <Container className="flex items-center justify-between flex-wrap gap-4">
        <div className="text-sm">© 2026 Hexashop. All rights reserved.</div>

        <div className="flex items-center gap-4">
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
              className="hover:opacity-70 transition-opacity"
            >
              <Image src={item.icon} alt={item.name} width={22} height={22} />
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}