import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function Seccion9_3AporteMuni2010({ children }: Props) {
  return <div aria-label="Nóminas de Aporte Municipal 2010">{children}</div>;
}
