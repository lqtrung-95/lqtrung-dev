import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import type { AnchorHTMLAttributes, ComponentPropsWithoutRef } from 'react'
import { Pre } from '@/components/mdx/pre'

function MdxLink({ href = '', ...rest }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const isInternal = href.startsWith('/') || href.startsWith('#')
  if (isInternal) {
    return <Link href={href} {...rest} />
  }
  return <a href={href} target="_blank" rel="noopener noreferrer" {...rest} />
}

function MdxImage({ alt, ...rest }: ImageProps) {
  return <Image alt={alt} {...rest} className="rounded-(--radius-card)" />
}

// Maps MDX element/component names to their React implementation.
// `Image` is required by exactly one post
// (mastering-frontend-system-design-radio-framework.mdx) that renders a real
// <Image> JSX element outside a code fence.
export const mdxComponents = {
  a: MdxLink,
  img: (props: ComponentPropsWithoutRef<'img'>) => (
    // eslint-disable-next-line @next/next/no-img-element -- raw markdown ![]() images have no known dimensions
    <img {...props} alt={props.alt ?? ''} loading="lazy" />
  ),
  Image: MdxImage,
  pre: Pre,
}
