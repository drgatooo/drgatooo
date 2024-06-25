import Image from 'next/image';
import { constructClassName } from '@drgato/util';

interface AvatarProps {
  src: string;
  name: string;
  size?: keyof typeof Sizes;
}

export default function Avatar({ src, name, size = 'md' }: AvatarProps) {
  return (
    <Image
      src={src}
      alt={name}
      className={constructClassName('avatar', Sizes[size])}
      width={256}
      height={256}
    />
  );
}

enum Sizes {
  sm = 'w-16 h-16',
  md = 'w-24 h-24',
  lg = 'w-32 h-32'
}
