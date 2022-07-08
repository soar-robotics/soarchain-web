import Link from 'next/link';

export function Btn({ href, text, dark = false, ...rest }) {
  return (
    <div {...rest}>
      <Link href={href}>
        <a type='button' className={`btn btn-${dark ? 'dark' : 'purple'} text-uppercase py-2 px-5`}>
          <small>{text}</small>
        </a>
      </Link>
    </div>
  );
}

export function BtnOutline({ href, text, dark = false, ...rest }) {
  return (
    <div {...rest}>
      <Link href={href}>
        <a
          type='button'
          className={`btn btn-outline-${dark ? 'dark' : 'light'} text-uppercase py-2 px-5`}
        >
          <small>{text}</small>
        </a>
      </Link>
    </div>
  );
}
