import Video, {VideoType} from "./Video";
import { Article } from "./Article";

interface ListType {
  list: VideoType[],
}

export default function List({...props}: ListType) {
  return props.list.map(item => {
      switch (item.type) {
          case 'video':
              return (
                  <Video key={item.views} {...item}/>
              );

          case 'article':
              return (
                  <Article key={item.title} {...item} />
              );
      }
  });
};