import VideoWithFrame from "./VideoWithFrame";
import ArticleWithFrame from "./ArticleWithFrame";
import { VideoType } from "./Video";

interface ListType {
  list: VideoType[],
}

export default function List({...props}: ListType) {
  return props.list.map(item => {
    switch (item.type) {
      case 'video':
        return (
          <VideoWithFrame key={item.views} {...item} />
        );

      case 'article':
        return (
          <ArticleWithFrame key={item.title} {...item} />      
        );
      }
  });
};