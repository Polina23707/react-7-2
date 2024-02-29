export interface VideoType {
  type?: string,
  url?: string,
  title?: string,
  views?: number,
}

 export default function Video({...props}: VideoType) {
  return (
    <div className="item item-video">
      <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      <p className="views">Просмотров: {props.views}</p>
    </div>
  )
};

