import Link from 'next/link';
import React from 'react';

interface CustomLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}

export default function CustomLink({ href, children, external, ...props }: CustomLinkProps) {
  return (
    <Link
      {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
      href={href}
      className={'transition hover:text-link'}
      {...props}
    >
      {children}
    </Link>
  );
}
