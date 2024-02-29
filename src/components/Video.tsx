export interface VideoType {
  type?: string,
  url?: string,
  title?: string,
  views: number,
}

 export default function Video({url, views}: VideoType) {
  return (
      <div className="item item-video">
          <iframe src={url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          <p className="views">Просмотров: {views}</p>
      </div>
  )
};