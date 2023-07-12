import { ReactNode } from 'react';

export default function ContactRow({
  label,
  content,
  icon,
}: {
  label: string;
  content: string;
  icon: ReactNode;
}) {
  return (
    <div className=' flex flex-row text-white text-lg'>
      <div className=' mr-4 '>
        {label} {icon}:
      </div>
      <div>{content}</div>
    </div>
  );
}
