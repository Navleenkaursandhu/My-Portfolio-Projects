import { FC, PropsWithChildren } from 'react'
import { buttonShadowEffect } from '../common/tailwind_constants'

interface Props {
  className?: string
  disabled?: boolean
  onClick?: () => void
}

export const Button: FC<PropsWithChildren<Props>> = (props) => {
  return (
    <>
      <button
        onClick={props.onClick}
        className={`${props.disabled
            ? 'bg-gradient-to-r from-slate-100  to-slate-300 shadow-[4px_4px_0px_0px_gray]'
            : `${buttonShadowEffect} ${props.className}`
          } sm:w-16 w-12 px-2 sm:py-0 py-0.5 flex justify-center items-center rounded-md `
        }
      >
        {props.children}
      </button>
    </>
  )
}
