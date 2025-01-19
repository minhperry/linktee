export interface Link {
  title: string,
  url: string,
  icon: Icon | LocalIcon
}

interface Icon {
  riClass: string,
  mode: 'line' | 'fill',
}

interface LocalIcon {
  svgSrc: string
}


export default function LinkButton(prop: Link & { extraClass?: string }) {
  const {title, url, icon, extraClass = ''} = prop
  return (
    <a href={url} className={`block ${extraClass}`}>
      <div className="flex items-center justify-between">
        <span className="font-medium">{title}</span>
        {'riClass' in icon ? (
          <i className={`ri-${icon.riClass}-${icon.mode}`}></i>
          ) : (
          <span className="w-6 h-6">
            <img src={icon.svgSrc} alt=''/>
          </span>
        )}
      </div>
    </a>
  )
}