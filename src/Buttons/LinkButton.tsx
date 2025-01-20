export interface Link {
  title: string;
  url: string;
  icon: Icon;
}

interface Icon {
  riClass: string;
  mode: 'line' | 'fill';
}

export default function LinkButton(prop: Link & { extraClass?: string }) {
  const { title, url, icon, extraClass = '' } = prop;

  if (title === 'Discord') {
    return (
      <a
        className={`block ${extraClass}`}
        onClick={() => {
          navigator.clipboard.writeText('minhperry').then(() => {
            console.log('Copied to clipboard');
          });
        }}
      >
        <div className="flex items-center justify-between">
          <span className="font-medium">{title}</span>
          <i className={`ri-${icon.riClass}-${icon.mode} text-[24px]`}></i>
        </div>
      </a>
    );
  } else {
    return (
      <a href={url} className={`block ${extraClass}`} target="_blank">
        <div className="flex items-center justify-between">
          <span className="font-medium">{title}</span>
          <i className={`ri-${icon.riClass}-${icon.mode} text-[24px]`}></i>
        </div>
      </a>
    );
  }
}
