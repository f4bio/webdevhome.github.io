import { mdiEye, mdiEyeOff } from '@mdi/js'
import React, {
  FC,
  memo,
  MouseEvent,
  useCallback,
  useContext,
  useMemo
} from 'react'
import { ReactSVG } from 'react-svg'
import { HiddenLinksContext } from '../contexts/hiddenLinksContext'
import { classes } from '../utils/jsx'
import { getIconUrl } from '../utils/misc'
import { DefaultIcon } from './DefaultIcon'
import { MdiIcon } from './MdiIcon'

interface Props {
  title: string
  url: string
  icon?: string
  color?: string
  searchable?: boolean
  customize?: boolean
  visible?: boolean
  focus?: boolean
}

export const Link: FC<Props> = memo(
  ({
    title,
    url,
    icon,
    color,
    searchable = false,
    customize = false,
    visible = true,
    focus = false,
  }) => {
    const hiddenLinksContext = useContext(HiddenLinksContext)
    const handleLinkClick = useCallback(
      (event: MouseEvent<HTMLAnchorElement>): void => {
        if (!customize) return
        if (hiddenLinksContext === null) return

        event.preventDefault()
        hiddenLinksContext.toggleHiddenLink(url)
      },
      [customize, hiddenLinksContext, url]
    )

    const linkClasses = useMemo(
      () => ({
        link: true,
        'link--is-visible': visible,
        'link--has-focus': focus,
      }),
      [focus, visible]
    )

    if (!customize && !visible) {
      return null
    }

    return (
      <a
        href={url}
        rel="noreferrer"
        className={classes(linkClasses)}
        onClick={handleLinkClick}
      >
        <div className="link__icon-container" style={{ color }}>
          {icon !== undefined ? (
            <ReactSVG src={getIconUrl(icon)} className="link__icon" />
          ) : (
            <DefaultIcon />
          )}
        </div>

        <div className="link__label">{title}</div>

        {searchable ? (
          <div className="link__info">
            <span className="link__info-text">
              <kbd>Tab</kbd>: Search on site
            </span>
          </div>
        ) : null}

        {customize ? (
          <div className="link__action">
            <MdiIcon path={visible ? mdiEye : mdiEyeOff} />
          </div>
        ) : null}
      </a>
    )
  }
)
