import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function Seccion9_3AporteMuni2015({ children }: Props) {
  return <div aria-label="Nóminas de Aporte Municipal 2015">{children}</div>;
}
