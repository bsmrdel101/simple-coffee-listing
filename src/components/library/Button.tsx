import { parseClasses, generateClasses } from "@/scripts/tools/utils";

interface Props extends ButtonHTML {
  children: any
  className?: string
  variant?: ('primary' | 'secondary')[]
  type?: 'submit' | 'reset' | 'button'
}


export default function Button({ children, className = '', variant, type, ...props }: Props) {
  const classes = generateClasses(className, variant, 'button');

  return (
    <button
      type={type}
      {...parseClasses(classes)}
      {...props}
    >
      { children }
    </button>
  );
}
